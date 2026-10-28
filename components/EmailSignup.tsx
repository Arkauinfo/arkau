"use client";

import { useState } from "react";
import { mono } from "@/app/mono";

type Status = "idle" | "sending" | "done" | "invalid" | "error";

// Google Apps Script web app (/exec URL). It replies "ok" once the email is
// saved, or "invalid". Success is shown ONLY after that "ok" is read.
// Note: this URL is public by design; spam protection is the hidden field
// below plus the duplicate check in the script.
const SUBSCRIBE_URL = process.env.NEXT_PUBLIC_SUBSCRIBE_URL;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MESSAGES: Partial<Record<Status, string>> = {
  done: "You\u2019re on the list.",
  invalid: "Please enter a valid email address.",
  error:
    "We couldn\u2019t confirm your signup. Please try again in a moment. You won\u2019t be added twice.",
};

export default function EmailSignup() {
  const [status, setStatus] = useState<Status>("idle");
  const busy = status === "sending" || status === "done";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;

    const data = new FormData(e.currentTarget);
    if (data.get("company")) return; // honeypot: bots fill the hidden field

    const email = String(data.get("email") ?? "").trim();
    if (!EMAIL_RE.test(email)) {
      setStatus("invalid");
      return;
    }
    if (!SUBSCRIBE_URL) {
      console.error("NEXT_PUBLIC_SUBSCRIBE_URL is not set.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    try {
      const res = await fetch(SUBSCRIBE_URL, {
        method: "POST",
        body: new URLSearchParams({ email, source: "homepage" }),
        signal: controller.signal,
      });
      const reply = (await res.text()).trim();
      if (res.ok && reply === "ok") setStatus("done");
      else setStatus(reply === "invalid" ? "invalid" : "error");
    } catch {
      // Network failure, timeout, or the browser couldn't read the reply.
      setStatus("error");
    } finally {
      clearTimeout(timeout);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8" aria-busy={status === "sending"}>
      <label
        htmlFor="email"
        className={`${mono.className} block text-xs uppercase tracking-[0.04em]`}
      >
        Your email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@yourworld.com"
        aria-invalid={status === "invalid"}
        aria-describedby="signup-status"
        readOnly={status === "sending"}
        className="font-inter mt-2 h-14 w-full border border-[#26332b] bg-[#f8f2e3]/70 px-4 text-lg placeholder:text-[#26332b]/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23743f]"
      />
      <input
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      <button
        type="submit"
        disabled={busy}
        className="font-inter mt-3 h-14 w-full bg-[#23743f] text-base font-semibold text-white transition-colors hover:bg-[#1d6137] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23743f] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Joining\u2026" : status === "done" ? "You\u2019re in" : "Get early access"}
      </button>
      <p
        id="signup-status"
        role="status"
        aria-live="polite"
        className={`font-inter mt-4 min-h-6 text-sm font-medium ${
          status === "error" || status === "invalid" ? "text-[#9a2f1f]" : "text-[#23743f]"
        }`}
      >
        {MESSAGES[status] ?? ""}
      </p>
      <p className="font-inter mt-2 text-sm leading-snug">
        I hate spam, too. Only new drops and important news. Leave the list
        whenever you like.
      </p>
    </form>
  );
}
