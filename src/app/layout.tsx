import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coast-ai-automation.vercel.app"),
  title: { default: "CoastAI | AI Automation for Businesses in Kenya", template: "%s | CoastAI" },
  description: "CoastAI helps businesses of all sizes automate customer support, capture leads, streamline operations, and grow with AI chatbots, WhatsApp automation, and intelligent workflows.",
  applicationName: "CoastAI",
  alternates: { canonical: "/" },
  verification: {
    google: "Ss64nFnXcZ_1lkCkvYSLNy3Ab9POXlD2lMcnZ4ff2ao"
  },
  openGraph: {
    type: "website",
    url: "https://coast-ai-automation.vercel.app",
    siteName: "CoastAI",
    title: "CoastAI | AI Automation for Businesses in Kenya",
    description: "AI chatbots, WhatsApp automation, lead generation, and business workflows for organizations across industries."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
