"use client";

import { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition hover:border-fg active:scale-[0.98]"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      <span aria-live="polite">{copied ? "Copied" : email}</span>
    </button>
  );
}
