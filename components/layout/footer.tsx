import { socials, profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-px flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight">
            {profile.name}
            <span className="text-emerald">.</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-ink-muted">{profile.headline}</p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-emerald"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container-px flex flex-col gap-2 border-t border-line py-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono">© {year} {profile.name}. All rights reserved.</p>
        <p className="font-mono">Built with Next.js, TypeScript &amp; Framer Motion</p>
      </div>
    </footer>
  );
}
