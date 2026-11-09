"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(""); const [busy,setBusy]=useState(false); const router=useRouter();
  async function submit(event:FormEvent){event.preventDefault();setBusy(true);setError("");try{const supabase=createClient();const {error}=await supabase.auth.signInWithPassword({email,password});if(error)throw error;router.push("/dashboard");router.refresh();}catch(e){setError(e instanceof Error?e.message:"Sign in failed.");}finally{setBusy(false);}}
  return <main className="auth-shell"><div className="auth-card"><Link href="/" className="auth-brand">Coast<span>AI</span></Link><p className="auth-eyebrow">ADMIN ACCESS</p><h1>Admin sign in</h1><p className="auth-subtitle">Sign in to manage your CoastAI workspace.</p><form onSubmit={submit} className="auth-form"><label>Email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Admin email"/></label><label>Password<input required type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Your password"/></label><button disabled={busy}>{busy?"Signing in…":"Sign in →"}</button></form>{error&&<p className="auth-message">{error}</p>}<p className="auth-foot"><Link href="/">← Back to CoastAI</Link></p></div></main>;
}
