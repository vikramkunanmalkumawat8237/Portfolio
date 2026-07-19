"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";
import { SectionDivider } from "@/components/ui/section-divider";

const DESCRIPTIONS: Record<string, string> = {
  "Finance & Capital Markets": "Valuation, modelling, and deal structuring across financial instruments.",
  "Accounting & Compliance": "Statutory and internal audit grounded in Ind AS and risk-based controls.",
  "Programming & Analytics": "Data automation and reporting across audit and analytics workflows.",
  "Tools": "Core software for financial modelling, reporting, and documentation.",
  "Soft Skills": "Cross-functional execution across client and engagement teams.",
};

export function Skills() {
  return (
    <section id="skills" className="section-pad container-px relative">
      <SectionDivider />
      <Reveal>
        <p className="acct-label mb-4">ACCT / 004 — SKILLS</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-16 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Where finance discipline meets technical tooling.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 0.06}>
            <div className="border-t border-line-strong pt-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-emerald">{String(gi + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                  {group.category}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {DESCRIPTIONS[group.category]}
              </p>
              <RevealGroup className="mt-5 space-y-2.5" stagger={0.03}>
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={revealItem}
                    className="flex list-none items-center gap-2.5 text-sm text-ink-muted transition-colors hover:text-emerald"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-emerald/60" />
                    {item}
                  </motion.li>
                ))}
              </RevealGroup>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}