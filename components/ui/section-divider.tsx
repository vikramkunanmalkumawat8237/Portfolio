"use client";

import { motion } from "framer-motion";

/**
 * A thin horizontal rule that draws itself in (left to right) whenever
 * it scrolls into view — used at the top of each section instead of a
 * static border, so moving between sections feels like a new ledger
 * entry being drawn rather than a hard cut.
 */
export function SectionDivider() {
  return (
    <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
      <motion.div
        className="h-full w-full origin-left bg-line-strong"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false, margin: "-40px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
