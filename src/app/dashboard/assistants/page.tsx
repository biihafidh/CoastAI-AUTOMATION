import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AssistantManager from "@/components/AssistantManager";

export const dynamic = "force-dynamic";

export default async function AssistantsPage() {
  let supabase;
  try {
    supabase = await createClient();
  } catch {
    return <main className="dash-shell"><div className="dash-config"><h1>Connect Supabase</h1><p>Add your Supabase project settings to Vercel.</p><Link href="/dashboard">Back to dashboard</Link></div></main>;
  }

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: workspace, error: workspaceError } = await supabase
    .from("workspaces")
    .select("id,name")
    .eq("owner_id", user.id)
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle();

  if (workspaceError || !workspace) {
    return <main className="dash-shell"><div className="dash-config"><h1>Workspace not found</h1><p>Your account does not have an accessible CoastAI workspace yet. Sign out and sign in again, or contact the workspace owner.</p><Link href="/dashboard">Back to dashboard</Link></div></main>;
  }

  const [{ data: assistants }, { data: documents }] = await Promise.all([
    supabase.from("assistants")
      .select("id,name,instructions,welcome_message,is_active,created_at")
      .eq("workspace_id", workspace.id)
      .order("created_at", { ascending: false }),
    supabase.from("knowledge_documents")
      .select("id,assistant_id,title,content,created_at")
      .eq("workspace_id", workspace.id)
      .order("created_at", { ascending: false })
  ]);

  return (
    <main className="dash-shell">
      <aside className="dash-sidebar">
        <Link href="/" className="auth-brand">Coast<span>AI</span></Link>
        <p className="dash-label">WORKSPACE</p>
        <Link className="dash-nav" href="/dashboard">▦ Overview</Link>
        <Link className="dash-nav active" href="/dashboard/assistants">✦ AI assistants</Link>
        <Link className="dash-nav" href="/dashboard/leads">♧ Leads & CRM</Link>
        <Link className="dash-nav" href="/dashboard#inbox">▤ Conversations</Link>
        <div className="dash-profile">
          <span>{user.email}</span>
          <form action="/auth/signout" method="post"><button>Sign out</button></form>
        </div>
      </aside>
      <section className="dash-main">
        <header className="dash-top">
          <div>
            <p className="auth-eyebrow">CUSTOMER AUTOMATION</p>
            <h1>AI assistants</h1>
            <p className="dash-muted">{workspace.name} · Build and manage your business assistants.</p>
          </div>
          <Link className="dash-plan" href="/dashboard">← Dashboard</Link>
        </header>
        <AssistantManager
          workspaceId={workspace.id}
          initialAssistants={assistants ?? []}
          initialDocuments={documents ?? []}
        />
        <footer className="dash-footer">CoastAI · Private workspace</footer>
      </section>
    </main>
  );
}
