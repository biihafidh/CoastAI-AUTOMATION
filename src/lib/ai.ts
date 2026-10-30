const DEFAULT_MODEL = "gpt-4.1-mini";

export async function generateCustomerReply(message: string, history: { role: "assistant" | "user"; content: string }[] = []) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY is not configured");

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || DEFAULT_MODEL,
      instructions: [
        "You are CoastAI's friendly WhatsApp customer assistant for a business serving hotels, tour operators, and service businesses in coastal Kenya.",
        "Be warm, concise, professional, and helpful. Use simple language and ask one question at a time.",
        "Understand the customer's request, collect only information needed to route the enquiry, and offer to have a human team member follow up when appropriate.",
        "Never invent prices, availability, policies, locations, or business facts. If you do not know, say so and offer a human follow-up.",
        "Never claim a booking, payment, order, refund, or appointment is confirmed. Only say it is confirmed when an authorized business system explicitly confirms it; no such system is connected yet.",
        "Do not request passwords, card numbers, PINs, or one-time passcodes.",
        "Keep replies short enough for WhatsApp, ideally under 100 words.",
      ].join(" "),
      input: [...history.slice(-6), { role: "user", content: message }],
      max_output_tokens: 220,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("OpenAI response error:", response.status, details.slice(0, 1000));
    throw new Error("AI response request failed");
  }

  const data = await response.json();
  const reply = typeof data.output_text === "string" ? data.output_text.trim() : "";
  if (!reply) throw new Error("AI returned an empty response");
  return reply;
}
