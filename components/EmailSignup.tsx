"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

// Posts to /api/subscribe, which still needs to be built once an email
// provider is chosen. Until then the form will show the error message.
export default function EmailSignup() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "done" : "error");
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