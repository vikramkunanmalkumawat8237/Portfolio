"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";

export function Certifications() {
  return (
    <section id="certifications" className="section-pad container-px border-t border-line">
      <Reveal>
        <p className="acct-label mb-4">ACCT / 005 — CERTIFICATIONS</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-16 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Credentials on Record
        </h2>
      </Reveal>

      <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
        {certifications.map((cert) => (
          <motion.div
            key={cert.name}
            variants={revealItem}
            whileHover={{ y: -4, borderColor: "#B76E79" }}
            transition={{ duration: 0.25 }}
            className="flex flex-col justify-between rounded-xl border border-line-strong bg-surface p-6"
          >
            <div>
              <Award className="h-5 w-5 text-emerald" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-base font-semibold leading-snug tracking-tight">
                {cert.name}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                {cert.issuer}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{cert.note}</p>
            </div>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}
