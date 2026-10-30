import { NextRequest, NextResponse } from "next/server";
import { generateCustomerReply } from "@/lib/ai";

export const runtime = "nodejs";

type ChatMessage = { role: "assistant" | "user"; content: string };

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const history = Array.isArray(body.history)
      ? body.history
          .filter((item: unknown): item is ChatMessage =>
            !!item &&
            typeof item === "object" &&
            "role" in item &&
            "content" in item &&
            ((item as ChatMessage).role === "assistant" || (item as ChatMessage).role === "user") &&
            typeof (item as ChatMessage).content === "string"
          )
          .slice(-6)
      : [];

    if (!message || message.length > 2000) {
      return NextResponse.json({ error: "Enter a message of up to 2,000 characters." }, { status: 400 });
    }

    const reply = await generateCustomerReply(message, history);
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Website chat error:", error);
    return NextResponse.json({ error: "The assistant is temporarily unavailable. Please try again." }, { status: 500 });
  }
}
