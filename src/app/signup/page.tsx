"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setMessage("");

    try {
      const supabase = createClient();
      const emailRedirectTo = new URL(
        "/auth/callback?next=/dashboard",
        window.location.origin
      ).toString();

      const { data, error: signupError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { business_name: businessName },
          emailRedirectTo
        }
      });

      if (signupError) throw signupError;

      if (data.session) {
        router.push("/dashboard");
        router.refresh();
      } else {
        setMessage("Your account was created. Check your email for a confirmation link before signing in.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign up failed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="auth-shell">
      <div className="auth-card">
        <Link href="/" className="auth-brand">Coast<span>AI</span></Link>
        <p className="auth-eyebrow">CREATE YOUR WORKSPACE</p>
        <h1>Create your account</h1>
        <p className="auth-subtitle">Start managing your business with CoastAI.</p>
        <form onSubmit={submit} className="auth-form">
          <label>Business name
            <input required value={businessName} onChange={event => setBusinessName(event.target.value)} placeholder="Your business name" />
          </label>
          <label>Email
            <input required type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="you@example.com" />
          </label>
          <label>Password
            <input required type="password" minLength={8} value={password} onChange={event => setPassword(event.target.value)} placeholder="At least 8 characters" />
          </label>
          <button disabled={busy}>{busy ? "Creating account…" : "Create account →"}</button>
        </form>
        {error && <p className="auth-message">{error}</p>}
        {message && <p className="auth-message">{message}</p>}
        <p className="auth-foot">Already have an account? <Link href="/login">Sign in</Link></p>
        <p className="auth-foot"><Link href="/">← Back to CoastAI</Link></p>
      </div>
    </main>
  );
}
