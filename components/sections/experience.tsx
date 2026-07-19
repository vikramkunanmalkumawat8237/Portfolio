"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionDivider } from "@/components/ui/section-divider";

export function Experience() {
  return (
    <section id="experience" className="section-pad container-px relative">
      <SectionDivider />
      <Reveal>
        <p className="acct-label mb-4">ACCT / 003 — EXPERIENCE</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-16 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Ledger of Engagements
        </h2>
      </Reveal>

      <div className="space-y-0">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.1}>
            <article className="grid grid-cols-1 gap-8 border-t border-line py-10 md:grid-cols-[220px_1fr] md:gap-12 md:py-14">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-emerald">{job.duration}</p>
                <p className="mt-2 font-mono text-xs text-ink-faint">{job.location}</p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">{job.role}</h3>
                <p className="mt-1 text-sm text-ink-muted">{job.company}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">{job.blurb}</p>

                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
                      Scope of Work
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {job.responsibilities.map((r) => (
                        <li key={r} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-strong" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.15em] text-emerald">
                      Measured Impact
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {job.achievements.map((a) => (
                        <li key={a} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <motion.span
                      key={t}
                      whileHover={{ y: -2, borderColor: "#13B27F" }}
                      className="rounded-full border border-line-strong px-3 py-1 font-mono text-[11px] text-ink-muted transition-colors"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
