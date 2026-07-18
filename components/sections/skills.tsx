"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";

export function Skills() {
  return (
    <section id="skills" className="section-pad container-px border-t border-line">
      <Reveal>
        <p className="acct-label mb-4">ACCT / 004 — SKILLS</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-16 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Where finance discipline meets technical tooling.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
        {skills.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 0.08}>
            <div className="ledger-rule pt-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
                {group.category}
              </h3>
              <RevealGroup className="mt-5 flex flex-wrap gap-2.5" stagger={0.04}>
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={revealItem}
                    whileHover={{ scale: 1.06, backgroundColor: "rgba(183,110,121,0.1)", borderColor: "#B76E79", color: "#E8A3AD" }}
                    className="cursor-default rounded-full border border-line-strong bg-surface px-4 py-2 text-sm text-ink transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </RevealGroup>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
