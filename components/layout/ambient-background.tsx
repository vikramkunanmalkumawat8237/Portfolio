"use client";

import { motion } from "framer-motion";

/**
 * Fixed, full-viewport ambient glow layer that drifts continuously,
 * independent of scroll position. Sits behind all page content.
 */
export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
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
    </div>
  );
}
