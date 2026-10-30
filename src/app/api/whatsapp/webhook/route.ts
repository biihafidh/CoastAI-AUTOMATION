import { createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { generateCustomerReply } from "@/lib/ai";
import { sendWhatsAppText } from "@/lib/whatsapp";

export const runtime = "nodejs";

function isValidMetaSignature(rawBody: string, signature: string | null) {
  const appSecret = process.env.META_APP_SECRET;
  if (!appSecret || !signature?.startsWith("sha256=")) return false;

  const expected = createHmac("sha256", appSecret).update(rawBody).digest();
  let received: Buffer;
  try {
    received = Buffer.from(signature.slice(7), "hex");
  } catch {
    return false;
  }
  return received.length === expected.length && timingSafeEqual(received, expected);
}

export async function GET(request: NextRequest) {
  const mode = request.nextUrl.searchParams.get("hub.mode");
  const token = request.nextUrl.searchParams.get("hub.verify_token");
  const challenge = request.nextUrl.searchParams.get("hub.challenge");
  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN;

  if (mode === "subscribe" && verifyToken && token === verifyToken && challenge) {
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json({ error: "Webhook verification failed" }, { status: 403 });
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text();

  if (!isValidMetaSignature(rawBody, request.headers.get("x-hub-signature-256"))) {
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 401 });
  }

  let payload: any;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (payload.object !== "whatsapp_business_account") {
    return NextResponse.json({ error: "Unsupported webhook object" }, { status: 404 });
  }

  // Acknowledge valid webhook events quickly. Process inbound text messages;
  // delivery/read status events and unsupported message types are ignored.
  const messages = (payload.entry ?? [])
    .flatMap((entry: any) => entry.changes ?? [])
    .flatMap((change: any) => change.value?.messages ?? []);

  const results = await Promise.allSettled(
    messages
      .filter((message: any) => message.type === "text" && message.text?.body && message.from)
      .map(async (message: any) => {
        const reply = await generateCustomerReply(String(message.text.body).slice(0, 4000));
        await sendWhatsAppText(String(message.from), reply);
      })
  );

  const failures = results.filter((result) => result.status === "rejected").length;
  if (failures) console.error(`CoastAI: ${failures} WhatsApp message(s) failed to process`);

  return NextResponse.json({ received: true, processed: results.length, failed: failures });
}
