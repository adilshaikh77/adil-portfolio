"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
];

export function Nav() {
  const [active, setActive] = useState("work");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Sections" className="hidden lg:block">
      <ul className="space-y-3">
        {links.map(({ id, label }) => {
          const on = active === id;
          return (
            <li key={id}>
              <a href={`#${id}`} aria-current={on ? "true" : undefined} className="group flex items-center gap-4 py-1 text-sm">
                <span
                  className={`h-px transition-all duration-300 ${on ? "w-16 bg-fg" : "w-8 bg-muted group-hover:w-16 group-hover:bg-fg"}`}
                />
                <span className={`transition-colors ${on ? "text-fg" : "text-muted group-hover:text-fg"}`}>{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
