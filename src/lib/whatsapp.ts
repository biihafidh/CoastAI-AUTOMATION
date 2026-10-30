export async function sendWhatsAppText(to: string, body: string) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const apiVersion = process.env.WHATSAPP_API_VERSION;

  if (!token || !phoneNumberId || !apiVersion) {
    throw new Error("WhatsApp credentials are not fully configured");
  }

  const response = await fetch(
    `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to,
        type: "text",
        text: { preview_url: false, body },
      }),
    }
  );

  if (!response.ok) {
    const details = await response.text();
    console.error("WhatsApp send error:", response.status, details.slice(0, 1000));
    throw new Error("WhatsApp message could not be sent");
  }

  return response.json();
}
