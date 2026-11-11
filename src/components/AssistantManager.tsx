"use client";

import { FormEvent, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Assistant = {
  id: string;
  name: string;
  instructions: string;
  welcome_message: string;
  is_active: boolean;
  created_at: string;
};

type KnowledgeDocument = {
  id: string;
  assistant_id: string | null;
  title: string;
  content: string;
  created_at: string;
};

type AssistantDraft = {
  name: string;
  instructions: string;
  welcome_message: string;
};

const emptyDraft: AssistantDraft = {
  name: "",
  instructions: "You are a helpful customer support assistant. Be accurate, friendly, and concise. Use the business information provided. If you do not know an answer, say so instead of guessing.",
  welcome_message: "Hello! How can I help you today?"
};

export default function AssistantManager({
  workspaceId,
  initialAssistants,
  initialDocuments
}: {
  workspaceId: string;
  initialAssistants: Assistant[];
  initialDocuments: KnowledgeDocument[];
}) {
  const [assistants, setAssistants] = useState(initialAssistants);
  const [documents, setDocuments] = useState(initialDocuments);
  const [selectedId, setSelectedId] = useState<string | null>(initialAssistants[0]?.id ?? null);
  const [draft, setDraft] = useState<AssistantDraft>(
    initialAssistants[0]
      ? {
          name: initialAssistants[0].name,
          instructions: initialAssistants[0].instructions,
          welcome_message: initialAssistants[0].welcome_message
        }
      : emptyDraft
  );
  const [docTitle, setDocTitle] = useState("");
  const [docContent, setDocContent] = useState("");
  const [docAssistantId, setDocAssistantId] = useState(initialAssistants[0]?.id ?? "");
  const [busy, setBusy] = useState(false);
  const [docBusy, setDocBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const selectedAssistant = useMemo(
    () => assistants.find((assistant) => assistant.id === selectedId) ?? null,
    [assistants, selectedId]
  );

  function chooseAssistant(assistant: Assistant) {
    setSelectedId(assistant.id);
    setDraft({
      name: assistant.name,
      instructions: assistant.instructions,
      welcome_message: assistant.welcome_message
    });
    setDocAssistantId(assistant.id);
    setError("");
    setNotice("");
  }

  async function saveAssistant(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setNotice("");

    try {
      const supabase = createClient();
      if (selectedId) {
        const { data, error: saveError } = await supabase
          .from("assistants")
          .update({
            name: draft.name.trim(),
            instructions: draft.instructions.trim(),
            welcome_message: draft.welcome_message.trim()
          })
          .eq("id", selectedId)
          .eq("workspace_id", workspaceId)
          .select("id,name,instructions,welcome_message,is_active,created_at")
          .single();

        if (saveError) throw saveError;
        setAssistants((current) => current.map((item) => item.id === data.id ? data : item));
        setNotice("Assistant settings saved.");
      } else {
        const { data, error: createError } = await supabase
          .from("assistants")
          .insert({
            workspace_id: workspaceId,
            name: draft.name.trim(),
            instructions: draft.instructions.trim(),
            welcome_message: draft.welcome_message.trim(),
            is_active: true
          })
          .select("id,name,instructions,welcome_message,is_active,created_at")
          .single();

        if (createError) throw createError;
        setAssistants((current) => [data, ...current]);
        setSelectedId(data.id);
        setDocAssistantId(data.id);
        setNotice("Assistant created.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save assistant.");
    } finally {
      setBusy(false);
    }
  }

  function startNewAssistant() {
    setSelectedId(null);
    setDraft(emptyDraft);
    setError("");
    setNotice("");
  }

  async function toggleAssistant(assistant: Assistant) {
    setError("");
    setNotice("");
    const nextActive = !assistant.is_active;

    const { error: updateError } = await createClient()
      .from("assistants")
      .update({ is_active: nextActive })
      .eq("id", assistant.id)
      .eq("workspace_id", workspaceId);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setAssistants((current) =>
      current.map((item) => item.id === assistant.id ? { ...item, is_active: nextActive } : item)
    );
    setNotice(nextActive ? "Assistant activated." : "Assistant paused.");
  }

  async function addKnowledge(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDocBusy(true);
    setError("");
    setNotice("");

    try {
      const supabase = createClient();
      const { data, error: insertError } = await supabase
        .from("knowledge_documents")
        .insert({
          workspace_id: workspaceId,
          assistant_id: docAssistantId || null,
          title: docTitle.trim(),
          content: docContent.trim()
        })
        .select("id,assistant_id,title,content,created_at")
        .single();

      if (insertError) throw insertError;
      setDocuments((current) => [data, ...current]);
      setDocTitle("");
      setDocContent("");
      setNotice("Business information saved to your knowledge library.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save business information.");
    } finally {
      setDocBusy(false);
    }
  }

  async function deleteKnowledge(documentId: string) {
    setError("");
    setNotice("");
    const { error: deleteError } = await createClient()
      .from("knowledge_documents")
      .delete()
      .eq("id", documentId)
      .eq("workspace_id", workspaceId);

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    setDocuments((current) => current.filter((document) => document.id !== documentId));
    setNotice("Knowledge entry deleted.");
  }

  const visibleDocuments = documents.filter(
    (document) => !document.assistant_id || document.assistant_id === selectedId
  );

  return (
    <div className="assistant-manager">
      <section className="assistant-list-panel">
        <div className="assistant-section-head">
          <div>
            <p className="auth-eyebrow">YOUR WORKSPACE</p>
            <h2>Assistants</h2>
          </div>
          <button type="button" className="assistant-secondary-button" onClick={startNewAssistant}>+ New</button>
        </div>
        {assistants.length ? (
          <div className="assistant-list">
            {assistants.map((assistant) => (
              <button
                type="button"
                className={`assistant-list-item ${selectedId === assistant.id ? "selected" : ""}`}
                key={assistant.id}
                onClick={() => chooseAssistant(assistant)}
              >
                <span className="assistant-avatar">✦</span>
                <span className="assistant-list-copy">
                  <strong>{assistant.name}</strong>
                  <small>{assistant.is_active ? "Active" : "Paused"}</small>
                </span>
                <span className={`assistant-state-dot ${assistant.is_active ? "online" : ""}`} />
              </button>
            ))}
          </div>
        ) : (
          <div className="assistant-empty">No assistants created yet. Create one to get started.</div>
        )}
      </section>

      <div className="assistant-workspace">
        <section className="dash-panel assistant-editor">
          <div className="assistant-section-head">
            <div>
              <p className="auth-eyebrow">ASSISTANT SETTINGS</p>
              <h2>{selectedId ? "Configure assistant" : "Create assistant"}</h2>
            </div>
            {selectedAssistant && (
              <button
                type="button"
                className={`assistant-status-button ${selectedAssistant.is_active ? "is-active" : ""}`}
                onClick={() => toggleAssistant(selectedAssistant)}
              >
                {selectedAssistant.is_active ? "Pause assistant" : "Activate assistant"}
              </button>
            )}
          </div>

          <form className="assistant-form" onSubmit={saveAssistant}>
            <label>
              Assistant name
              <input
                required
                maxLength={80}
                value={draft.name}
                onChange={(event) => setDraft((current) => ({ ...current, name: event.target.value }))}
                placeholder="e.g. Hotel booking assistant"
              />
            </label>
            <label>
              Instructions
              <textarea
                required
                rows={7}
                maxLength={12000}
                value={draft.instructions}
                onChange={(event) => setDraft((current) => ({ ...current, instructions: event.target.value }))}
                placeholder="Describe the assistant's role, tone, boundaries, and how it should help customers."
              />
              <small>Tell the assistant how to behave. Be specific about what it can and cannot promise.</small>
            </label>
            <label>
              Welcome message
              <textarea
                required
                rows={3}
                maxLength={1000}
                value={draft.welcome_message}
                onChange={(event) => setDraft((current) => ({ ...current, welcome_message: event.target.value }))}
                placeholder="The first message customers will see."
              />
            </label>
            <button className="assistant-primary-button" disabled={busy}>
              {busy ? "Saving…" : selectedId ? "Save changes" : "Create assistant"}
            </button>
          </form>
        </section>

        <section className="dash-panel assistant-knowledge">
          <div className="assistant-section-head">
            <div>
              <p className="auth-eyebrow">BUSINESS KNOWLEDGE</p>
              <h2>FAQs & information</h2>
            </div>
            <span className="dash-tag">{visibleDocuments.length} entries</span>
          </div>
          <p className="assistant-help">Add your services, prices, opening hours, policies, FAQs, and other approved business facts. You can paste text here; file uploads and live AI retrieval will be connected in a later integration.</p>

          <form className="assistant-form" onSubmit={addKnowledge}>
            <label>
              Save information for
              <select value={docAssistantId} onChange={(event) => setDocAssistantId(event.target.value)}>
                <option value="">All assistants in this workspace</option>
                {assistants.map((assistant) => (
                  <option value={assistant.id} key={assistant.id}>{assistant.name}</option>
                ))}
              </select>
            </label>
            <label>
              Entry title
              <input
                required
                maxLength={120}
                value={docTitle}
                onChange={(event) => setDocTitle(event.target.value)}
                placeholder="e.g. Check-in and check-out times"
              />
            </label>
            <label>
              Business information
              <textarea
                required
                rows={5}
                maxLength={20000}
                value={docContent}
                onChange={(event) => setDocContent(event.target.value)}
                placeholder="Paste an FAQ, service description, policy, or other approved information."
              />
            </label>
            <button className="assistant-primary-button" disabled={docBusy || !assistants.length}>
              {docBusy ? "Saving…" : "Add to knowledge library"}
            </button>
          </form>

          <div className="assistant-documents">
            {visibleDocuments.length ? visibleDocuments.map((document) => (
              <article className="assistant-document" key={document.id}>
                <div>
                  <strong>{document.title}</strong>
                  <p>{document.content}</p>
                  <small>{document.assistant_id ? assistants.find((item) => item.id === document.assistant_id)?.name ?? "Linked assistant" : "Shared with all assistants"}</small>
                </div>
                <button type="button" className="assistant-delete-button" onClick={() => deleteKnowledge(document.id)}>Delete</button>
              </article>
            )) : (
              <div className="assistant-empty">No knowledge entries yet. Add your first FAQ or business fact above.</div>
            )}
          </div>
        </section>
      </div>

      {error && <p className="auth-message assistant-feedback">{error}</p>}
      {notice && <p className="assistant-notice">{notice}</p>}
    </div>
  );
}
