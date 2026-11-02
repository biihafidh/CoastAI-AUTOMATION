"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const [business, setBusiness] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  async function submit(event: FormEvent) {
    event.preventDefault(); setBusy(true); setError("");
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signUp({
        email, password,
        options: { data: { business_name: business, full_name: name }, emailRedirectTo: `${window.location.origin}/auth/callback?next=/dashboard` }
      });
      if (error) throw error;
      setError("Account created. Check your email to confirm your address, then sign in.");
    } catch (e) { setError(e instanceof Error ? e.message : "Could not create your account."); }
    finally { setBusy(false); }
  }

  return <main className="auth-shell"><div className="auth-card"><Link href="/" className="auth-brand">Coast<span>AI</span></Link><p className="auth-eyebrow">START YOUR WORKSPACE</p><h1>Create your account</h1><p className="auth-subtitle">Set up your business workspace and start automating customer conversations.</p><form onSubmit={submit} className="auth-form">
    <label>Business name<input required value={business} onChange={e=>setBusiness(e.target.value)} placeholder="e.g. Swahili Sands Hotel"/></label>
    <label>Your name<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Full name"/></label>
    <label>Work email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@business.co.ke"/></label>
    <label>Password<input required minLength={8} type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="At least 8 characters"/></label>
    <button disabled={busy}>{busy ? "Creating account…" : "Create workspace →"}</button>
  </form>{error && <p className="auth-message">{error}</p>}<p className="auth-foot">Already have an account? <Link href="/login">Sign in</Link></p><p className="auth-foot"><Link href="/">← Back to CoastAI</Link></p></div></main>;
}
