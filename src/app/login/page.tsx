"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(""); const [busy,setBusy]=useState(false); const router=useRouter();
  async function submit(event:FormEvent){event.preventDefault();setBusy(true);setError("");try{const supabase=createClient();const {error}=await supabase.auth.signInWithPassword({email,password});if(error)throw error;router.push("/dashboard");router.refresh();}catch(e){setError(e instanceof Error?e.message:"Sign in failed.");}finally{setBusy(false);}}
  return <main className="auth-shell"><div className="auth-card"><Link href="/" className="auth-brand">Coast<span>AI</span></Link><p className="auth-eyebrow">WELCOME BACK</p><h1>Sign in</h1><p className="auth-subtitle">Access your business automation workspace.</p><form onSubmit={submit} className="auth-form"><label>Email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@business.co.ke"/></label><label>Password<input required type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Your password"/></label><button disabled={busy}>{busy?"Signing in…":"Sign in →"}</button></form>{error&&<p className="auth-message">{error}</p>}<p className="auth-foot">New to CoastAI? <Link href="/signup">Create an account</Link></p><p className="auth-foot"><Link href="/">← Back to CoastAI</Link></p></div></main>;
}
