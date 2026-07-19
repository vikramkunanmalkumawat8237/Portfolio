"use client";

import { profile } from "@/lib/data";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";
import { motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/section-divider";

export function About() {
  return (
    <section id="about" className="section-pad container-px relative">
      <SectionDivider />
      <Reveal>
        <p className="acct-label mb-4">ACCT / 002 — ABOUT</p>
      </Reveal>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
              Finance judgment, backed by technical fluency.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-muted">{profile.goal}</p>
          </Reveal>

          <RevealGroup className="mt-10 grid grid-cols-2 gap-6">
            {profile.values.map((v) => (
              <motion.div key={v.title} variants={revealItem} className="ledger-rule pt-4">
                <h3 className="font-mono text-xs uppercase tracking-[0.1em] text-emerald">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.description}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        <div className="space-y-6">
          {profile.aboutStory.map((para, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-base leading-relaxed text-ink-muted first:text-lg first:text-ink">{para}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
