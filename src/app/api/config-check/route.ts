import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ?? "";
  let urlHost: string | null = null;

  try {
    urlHost = url ? new URL(url).host : null;
  } catch {
    urlHost = "INVALID_URL";
  }

  return NextResponse.json(
    {
      supabaseUrlPresent: Boolean(url),
      supabaseUrlValid: Boolean(urlHost && urlHost !== "INVALID_URL"),
      supabaseUrlHost: urlHost,
      supabaseKeyPresent: Boolean(anonKey),
      environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? "unknown"
    },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}
