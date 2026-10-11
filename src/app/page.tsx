import Image from "next/image";
import { ArrowUpRight, DownloadSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/ssr";
import { about, experience, profile, projects, stack, work } from "@/content";
import { Nav } from "@/components/Nav";
import { RulesDemo } from "@/components/RulesDemo";
import { CopyEmail } from "@/components/CopyEmail";

function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`relative w-44 shrink-0 snap-center sm:w-auto overflow-hidden rounded-[2rem] border-[5px] border-[#1d1f1e] bg-[#1d1f1e] shadow-[0_24px_48px_-20px_rgb(23_24_26/0.35)] ${className}`}
    >
      <Image src={src} alt={alt} width={1220} height={2712} sizes="200px" className="block h-auto w-full rounded-[1.6rem]" />
      <span aria-hidden className="absolute left-1/2 top-2 size-2.5 -translate-x-1/2 rounded-full bg-[#1d1f1e]" />
    </div>
  );
}

function Browser({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-bg shadow-[0_24px_48px_-24px_rgb(23_24_26/0.3)]">
      <div className="flex items-center gap-3 border-b border-line px-3 py-2">
        <div aria-hidden className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-2.5 rounded-full bg-line" />
          ))}
        </div>
        <span className="mx-auto rounded-md bg-surface px-3 py-0.5 font-mono text-[11px] text-muted">{url}</span>
        <span aria-hidden className="w-[42px]" />
      </div>
      <Image src={src} alt={alt} width={1537} height={993} sizes="(min-width: 1024px) 600px, 100vw" className="block h-auto w-full" />
    </div>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-8 text-2xl font-medium tracking-tight">{children}</h2>;
}

export default function Home() {
  const { wordforit, others } = projects;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      <header className="pt-20 pb-12 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="rise text-4xl font-semibold tracking-tighter sm:text-5xl">{profile.name}</h1>
          <p className="rise mt-3 text-lg" style={{ "--i": 1 } as React.CSSProperties}>
            {profile.role}
          </p>
          <p className="rise mt-4 max-w-xs leading-relaxed text-muted" style={{ "--i": 2 } as React.CSSProperties}>
            {profile.intro}
          </p>
          <div className="rise mt-6 flex items-center gap-2" style={{ "--i": 3 } as React.CSSProperties}>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm text-bg transition hover:bg-accent active:scale-[0.98]"
            >
              View resume
              <ArrowUpRight size={14} />
            </a>
            <a
              href={profile.resume}
              download
              aria-label="Download resume as PDF"
              className="inline-flex size-9 items-center justify-center rounded-full border border-line text-muted transition hover:border-fg hover:text-fg active:scale-[0.98]"
            >
              <DownloadSimple size={16} />
            </a>
          </div>
          <div className="rise mt-14" style={{ "--i": 4 } as React.CSSProperties}>
            <Nav />
          </div>
        </div>
        <ul className="rise mt-8 flex items-center gap-5 text-muted" style={{ "--i": 5 } as React.CSSProperties}>
          <li>
            <a href={profile.github} aria-label="GitHub" className="transition-colors hover:text-fg">
              <GithubLogo size={24} />
            </a>
          </li>
          <li>
            <a href={profile.linkedin} aria-label="LinkedIn" className="transition-colors hover:text-fg">
              <LinkedinLogo size={24} />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} className="text-sm transition-colors hover:text-fg">
              Email
            </a>
          </li>
        </ul>
      </header>

      <main className="pb-24 lg:py-24">
        <section id="work" className="reveal mb-28">
          <Heading>{work.title}</Heading>
          <p className="max-w-[60ch] leading-relaxed text-muted">{work.summary}</p>
          <ul className="mt-6 max-w-[60ch] space-y-4 leading-relaxed">
            {work.points.map((p) => (
              <li key={p} className="border-l-2 border-accent pl-4">
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <RulesDemo />
          </div>
          <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {work.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-4xl font-semibold tracking-tighter text-accent">{s.value}</dt>
                <dd className="mt-1 text-sm leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="experience" className="reveal mb-28">
          <Heading>Experience</Heading>
          <p className="mb-8 max-w-[60ch] leading-relaxed text-muted">
            All at Bayer in Warsaw. Intern to senior engineer in under four years.
          </p>
          <ol className="relative space-y-8 border-l border-line pl-6">
            {experience.map((e) => (
              <li key={e.role} className="relative">
                <span aria-hidden className="absolute -left-[29px] top-2 size-2 rounded-full bg-accent" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-medium">{e.role}</h3>
                  <span className="font-mono text-xs text-muted">{e.when}</span>
                </div>
                <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted">{e.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="reveal mb-28">
          <Heading>Projects</Heading>

          <article className="rounded-xl border border-line bg-surface p-5 sm:p-8">
            <h3 className="text-xl font-medium">
              <a href={wordforit.url} target="_blank" rel="noopener" className="group inline-flex items-center gap-1 hover:text-accent">
                {wordforit.name}
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </h3>
            <p className="mt-3 max-w-[60ch] leading-relaxed text-muted">{wordforit.text}</p>
            <Tags items={wordforit.stack} />
            <div className="mt-8">
              <Browser {...wordforit.web} url="wordforit.app" />
            </div>
            <div className="relative -mx-5 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:-mt-24 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-10 sm:pb-8">
              {wordforit.shots.map((s, i) => (
                <Phone key={s.src} {...s} className={i === 1 ? "sm:translate-y-8" : ""} />
              ))}
            </div>
          </article>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {others.map((p) => (
              <article key={p.name}>
                <h3 className="font-medium">
                  <a href={p.url} target="_blank" rel="noopener" className="group inline-flex items-center gap-1 hover:text-accent">
                    {p.name}
                    <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                <Tags items={p.stack} />
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="reveal mb-28">
          <Heading>About</Heading>
          <p className="max-w-[60ch] leading-relaxed">{about}</p>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
            {stack.map((g) => (
              <div key={g.group}>
                <h3 className="text-sm font-medium">{g.group}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{g.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="reveal border-t border-line pt-10">
          <p className="text-2xl font-medium tracking-tight">Want to talk?</p>
          <p className="mt-2 text-muted">The fastest way to reach me is email.</p>
          <div className="mt-6">
            <CopyEmail email={profile.email} />
          </div>
        </footer>
      </main>
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">
          {t}
        </li>
      ))}
    </ul>
  );
}
