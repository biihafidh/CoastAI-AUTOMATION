import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoastAI | AI-powered growth",
  description: "AI automation for hotels, tour operators, and service businesses in Kenya."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
