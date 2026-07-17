"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function Education() {
  return (
    <section id="education" className="section-pad container-px border-t border-line">
      <Reveal>
        <p className="acct-label mb-4">ACCT / 006 — EDUCATION</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-16 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Academic Record
        </h2>
      </Reveal>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-line-strong font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
              <th className="pb-4 pr-4 font-medium">Course</th>
              <th className="pb-4 pr-4 font-medium">Institution</th>
              <th className="pb-4 pr-4 font-medium">Year</th>
              <th className="pb-4 pr-4 font-medium">Result</th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu, i) => (
              <motion.tr
                key={edu.course}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-line align-top"
              >
                <td className="py-5 pr-4">
                  <p className="font-display text-base font-semibold tracking-tight">{edu.course}</p>
                  {edu.remark && <p className="mt-1 text-xs text-ink-muted">{edu.remark}</p>}
                </td>
                <td className="py-5 pr-4 text-sm text-ink-muted">{edu.institution}</td>
                <td className="py-5 pr-4 font-mono text-sm text-ink-muted">{edu.year}</td>
                <td className="py-5 pr-4 font-mono text-sm text-emerald">{edu.marks}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
