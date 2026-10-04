"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

// Signups are sent to a Google Apps Script web app that appends each email to
// a Google Sheet (setup steps in the chat). The URL comes from the
// NEXT_PUBLIC_SUBSCRIBE_URL environment variable.
const SUBSCRIBE_URL = process.env.NEXT_PUBLIC_SUBSCRIBE_URL;

export default function EmailSignup() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real people never fill this hidden field.
    if (data.get("company")) {
      setStatus("done");
      return;
    }

    if (!SUBSCRIBE_URL) {
      console.error("NEXT_PUBLIC_SUBSCRIBE_URL is not set.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      // no-cors: the browser can't read Google's reply, so "done" means the
      // request was sent. Check the sheet to confirm rows are arriving.
      await fetch(SUBSCRIBE_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          email: String(data.get("email") ?? ""),
          source: "homepage",
        }),
      });
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col justify-end gap-4">
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@example.com"
        className="font-inter border-b border-[#1F201D]/50 bg-transparent py-2 text-base outline-none placeholder:text-[#1F201D]/40 focus:border-[#1F201D]"
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
        disabled={status === "sending" || status === "done"}
        className="font-inter mt-2 self-start rounded-[3px] bg-[#1F201D] px-6 py-3 text-sm text-[#f2f7f0] transition-opacity hover:opacity-85 disabled:opacity-50"
      >
        {status === "sending" ? "Joining" : "Join the list"}
      </button>
      <p aria-live="polite" className="font-inter min-h-5 text-sm">
        {status === "done" && "You\u2019re on the list."}
        {status === "error" &&
          "That didn\u2019t go through. Check the address and try again."}
      </p>
    </form>
  );
}