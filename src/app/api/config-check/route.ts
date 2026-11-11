import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const url = rawUrl.trim();
  const publishableKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ?? "";
  const legacyAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ?? "";
  const keyPresent = Boolean(publishableKey || legacyAnonKey);

  let urlHost: string | null = null;
  let urlValid = false;
  let urlParseError: string | null = null;

  try {
    const parsed = new URL(url);
    urlHost = parsed.host;
    urlValid = parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch (error) {
    urlHost = "INVALID_URL";
    urlParseError = error instanceof Error ? error.message : "URL parsing failed";
  }

  return NextResponse.json(
    {
      supabaseUrlPresent: Boolean(url),
      supabaseUrlValid: urlValid,
      supabaseUrlHost: urlHost,
      // Supabase project URLs are public identifiers, not API secrets.
      // These diagnostics help detect accidental quotes, labels, or pasted markup.
      supabaseUrlPreview: url.slice(0, 180),
      supabaseUrlLength: url.length,
      supabaseUrlHasLeadingOrTrailingWhitespace: rawUrl !== url,
      supabaseUrlHasInternalWhitespace: /\\s/.test(url),
      supabaseUrlParseError: urlParseError,
      supabaseKeyPresent: keyPresent,
      supabasePublishableKeyPresent: Boolean(publishableKey),
      supabaseLegacyAnonKeyPresent: Boolean(legacyAnonKey),
      environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? "unknown"
    },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}
