import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coast-ai-automation.vercel.app"),
  title: { default: "CoastAI | AI Automation for Kenyan Businesses", template: "%s | CoastAI" },
  description: "Automate customer conversations, capture leads, and grow your business with CoastAI. AI automation for hotels, tour operators, and service businesses in Kenya.",
  applicationName: "CoastAI",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://coast-ai-automation.vercel.app",
    siteName: "CoastAI",
    title: "CoastAI | AI Automation for Kenyan Businesses",
    description: "AI assistants, WhatsApp automation, and lead management for growing Kenyan businesses."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
