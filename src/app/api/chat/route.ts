import { NextRequest, NextResponse } from "next/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { generateCustomerReply } from "@/lib/ai";

export const runtime = "nodejs";

type ChatMessage = { role: "assistant" | "user"; content: string };

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const assistantId = typeof body.assistantId === "string" ? body.assistantId.trim() : "";
    const history = Array.isArray(body.history)
      ? body.history
          .filter((item: unknown): item is ChatMessage =>
            !!item &&
            typeof item === "object" &&
            "role" in item &&
            "content" in item &&
            ((item as ChatMessage).role === "assistant" || (item as ChatMessage).role === "user") &&
            typeof (item as ChatMessage).content === "string" &&
            (item as ChatMessage).content.length <= 2000
          )
          .slice(-6)
      : [];

    if (!message || message.length > 2000) {
      return NextResponse.json({ error: "Enter a message of up to 2,000 characters." }, { status: 400 });
    }

    let assistantContext:
      | { name: string; instructions: string; knowledge: { title: string; content: string }[] }
      | undefined;

    if (assistantId) {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
      const key =
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

      if (!url || !key) {
        return NextResponse.json({ error: "Assistant service is not configured." }, { status: 503 });
      }

      // Use the public key and public RLS policies. Never use a service-role key here.
      const supabase = createSupabaseClient(url, key, {
        auth: { persistSession: false, autoRefreshToken: false }
      });

      const { data: assistant, error: assistantError } = await supabase
        .from("assistants")
        .select("id,name,instructions")
        .eq("id", assistantId)
        .eq("is_public", true)
        .eq("is_active", true)
        .maybeSingle();

      if (assistantError || !assistant) {
        return NextResponse.json({ error: "This assistant is not available." }, { status: 404 });
      }

      const { data: knowledge, error: knowledgeError } = await supabase
        .from("knowledge_documents")
        .select("title,content")
        .or(`assistant_id.is.null,assistant_id.eq.${assistant.id}`)
        .limit(30);

      if (knowledgeError) {
        console.error("Assistant knowledge lookup failed:", knowledgeError.message);
      }

      assistantContext = {
        name: assistant.name,
        instructions: assistant.instructions,
        knowledge: (knowledge ?? []).map((item) => ({
          title: String(item.title).slice(0, 120),
          content: String(item.content).slice(0, 5000)
        }))
      };
    }

    const reply = await generateCustomerReply(message, history, assistantContext);
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Website chat error:", error);
    return NextResponse.json({ error: "The assistant is temporarily unavailable. Please try again." }, { status: 500 });
  }
}
