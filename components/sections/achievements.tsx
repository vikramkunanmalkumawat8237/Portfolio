"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionDivider } from "@/components/ui/section-divider";

function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  // Extract the numeric portion so we can count up while preserving prefix/suffix (₹, %, +, Cr, /)
  const match = value.match(/([^\d]*)(\d+(?:,\d+)?)(.*)/);

  useEffect(() => {
    if (!inView) return;
    if (!match) {
      setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr.replace(/,/g, ""), 10);
    let frame = 0;
    const totalFrames = 40;
    const timer = setInterval(() => {
      frame++;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      const current = Math.round(target * progress);
      setDisplay(`${prefix}${current.toLocaleString("en-IN")}${suffix}`);
      if (frame >= totalFrames) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
      {display}
    </span>
  );
}

export function Achievements() {
  return (
    <section className="section-pad container-px relative">
      <SectionDivider />
      <Reveal>
        <p className="acct-label mb-4">ACCT / 007 — TRACK RECORD</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-16 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Numbers From the Field
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="ledger-rule pt-6"
          >
            <StatValue value={stat.value} />
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-emerald">{stat.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{stat.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
