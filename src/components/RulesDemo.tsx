"use client";

import { useState } from "react";
import { orgs, rules } from "@/content";

export function RulesDemo() {
  const [index, setIndex] = useState(0);
  const org = orgs[index];

  return (
    <figure className="rounded-xl border border-line bg-surface p-5 sm:p-6">
      <div role="tablist" aria-label="Organisation" className="flex flex-wrap gap-2">
        {orgs.map((o, i) => (
          <button
            key={o.name}
            role="tab"
            aria-selected={i === index}
            onClick={() => setIndex(i)}
            className={`rounded-full border px-4 py-1.5 text-sm transition active:scale-[0.98] ${
              i === index ? "border-accent bg-accent text-bg" : "border-line text-muted hover:border-fg hover:text-fg"
            }`}
          >
            {o.name}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted">{org.note}</p>

      <dl className="mt-5 grid gap-2">
        {rules.map((rule) => {
          const value = org.rules[rule];
          return (
            <div
              key={rule}
              className={`flex items-baseline justify-between gap-4 rounded-lg px-3 py-2 transition-colors duration-300 ${
                value ? "bg-bg" : "text-muted"
              }`}
            >
              <dt className={value ? "" : "line-through"}>{rule}</dt>
              <dd key={`${org.name}${rule}`} className="rise font-mono text-sm text-muted">
                {value ?? "not applied"}
              </dd>
            </div>
          );
        })}
      </dl>

      <figcaption className="mt-5 text-xs text-muted">
        One engine, different rules per organisation. Values here are made up; the real ones are internal.
      </figcaption>
    </figure>
  );
}
