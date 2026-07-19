"use client";

import { motion } from "framer-motion";

const PARTICLES = [
  { top: "15%", left: "8%", size: 3, duration: 14, delay: 0 },
  { top: "62%", left: "18%", size: 2, duration: 18, delay: 2 },
  { top: "28%", left: "32%", size: 2, duration: 16, delay: 4 },
  { top: "80%", left: "45%", size: 3, duration: 20, delay: 1 },
  { top: "10%", left: "58%", size: 2, duration: 15, delay: 3 },
  { top: "45%", left: "72%", size: 3, duration: 19, delay: 5 },
  { top: "70%", left: "85%", size: 2, duration: 17, delay: 2.5 },
  { top: "35%", left: "92%", size: 2, duration: 21, delay: 0.5 },
];

/**
 * Fixed, full-viewport ambient layer that persists behind all content:
 * a subtle ledger-grid texture, two slow-drifting glow orbs, and a
 * handful of faint rising data-point particles — independent of scroll.
 */
export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <motion.div
        className="grid-fine-bg absolute inset-0 opacity-40"
        animate={{ backgroundPosition: ["0px 0px", "56px 56px"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute h-[600px] w-[600px] rounded-full bg-emerald/6 blur-[160px]"
        animate={{
          x: ["-10%", "20%", "-10%"],
          y: ["0%", "30%", "0%"],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "-10%", left: "-10%" }}
      />
      <motion.div
        className="absolute h-[520px] w-[520px] rounded-full bg-emerald/5 blur-[160px]"
        animate={{
          x: ["10%", "-20%", "10%"],
          y: ["0%", "-20%", "0%"],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "-15%", right: "-10%" }}
      />

      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-emerald"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          animate={{
            y: [0, -28, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}