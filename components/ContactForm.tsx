"use client";

import { useRef, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";
type Fields = "name" | "email" | "message";

export function ContactForm({ fallbackEmail }: { fallbackEmail: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const locked = useRef(false); // blocks double submits even before state re-renders

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (locked.current) return;
    locked.current = true;
    setStatus("sending");
    setErrors({});
    setMessage("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
      company: String(fd.get("company") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; errors?: Record<string, string> };
      if (res.ok && data.ok) {
        setStatus("success");
        setMessage("Thanks, your message was sent. I'll reply by email.");
        formRef.current?.reset();
      } else {
        setStatus("error");
        setErrors((data.errors ?? {}) as Partial<Record<Fields, string>>);
        setMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage(`Network error. Check your connection and try again, or email ${fallbackEmail}.`);
    } finally {
      locked.current = false;
    }
  }

  const field = "w-full border-b border-paper/40 bg-transparent py-3 text-[1.1rem] outline-offset-4 placeholder:text-mute/70 focus:border-accent";
  const err = (k: Fields) => (errors[k] ? `${k}-error` : undefined);

  return (
    <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-8" aria-describedby="form-status">
      <div>
        <label htmlFor="name" className="text-[0.95rem] text-mute">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required maxLength={100} className={field} aria-invalid={!!errors.name} aria-describedby={err("name")} />
        {errors.name ? <p id="name-error" className="mt-2 text-[0.95rem] text-paper">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="email" className="text-[0.95rem] text-mute">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} className={field} aria-invalid={!!errors.email} aria-describedby={err("email")} />
        {errors.email ? <p id="email-error" className="mt-2 text-[0.95rem] text-paper">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="message" className="text-[0.95rem] text-mute">Message</label>
        <textarea id="message" name="message" rows={5} required minLength={10} maxLength={4000} className={`${field} resize-y`} aria-invalid={!!errors.message} aria-describedby={err("message")} />
        {errors.message ? <p id="message-error" className="mt-2 text-[0.95rem] text-paper">{errors.message}</p> : null}
      </div>

      {/* Honeypot: hidden from people and assistive tech. */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          aria-disabled={status === "sending"}
          className="bg-paper px-8 py-4 font-bold text-canvas transition-colors hover:bg-accent disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        <p id="form-status" role="status" aria-live="polite" className={status === "error" ? "text-paper" : "text-accent"}>
          {message}
        </p>
      </div>
    </form>
  );
}
