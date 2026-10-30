"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = { role: "assistant" | "user"; content: string };

const initialMessage: Message = {
  role: "assistant",
  content: "Hi! I'm the CoastAI assistant. What would you like help automating in your business?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = input.trim();
    if (!message || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: message }];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          history: nextMessages.slice(-7, -1),
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Please try again.");
      setMessages((current) => [...current, { role: "assistant", content: data.reply }]);
    } catch {
      setError("I couldn't send that just now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="coast-chat">
      {open && (
        <section className="chat-panel" aria-label="CoastAI chat">
          <div className="chat-header">
            <div><strong>CoastAI Assistant</strong><span>Usually replies instantly</span></div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </div>
          <div className="chat-messages" aria-live="polite">
            {messages.map((item, index) => (
              <div className={`chat-row ${item.role}`} key={index}>
                <p>{item.content}</p>
              </div>
            ))}
            {loading && <div className="chat-row assistant"><p className="typing">Thinking…</p></div>}
            {error && <p className="chat-error">{error}</p>}
            <div ref={bottomRef} />
          </div>
          <form className="chat-form" onSubmit={submit}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Type your message…" aria-label="Your message" maxLength={2000} disabled={loading} />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Send message">➤</button>
          </form>
          <p className="chat-note">Please don't share passwords, PINs, or payment details.</p>
        </section>
      )}
      <button className="chat-launcher" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close chat" : "Open CoastAI chat"}>
        <span aria-hidden="true">{open ? "×" : "✦"}</span>{!open && <span>Chat with us</span>}
      </button>
    </div>
  );
}
