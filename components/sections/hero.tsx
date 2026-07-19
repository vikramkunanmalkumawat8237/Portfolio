"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Marquee } from "@/components/ui/marquee";

const TICKER_ITEMS = [
  "STATUTORY AUDIT",
  "IND AS 115",
  "FINANCIAL MODELLING",
  "PYTHON AUTOMATION",
  "POWER BI",
  "DCF VALUATION",
  "CA FINAL",
  "PWC INDIA",
];

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="top" className="hero-viewport relative flex flex-col overflow-hidden pt-16 md:pt-20">
      {/* Animated glow orbs (grid texture now handled by the global ambient background) */}
      <motion.div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-emerald/10 blur-[140px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[420px] w-[420px] rounded-full bg-emerald/5 blur-[140px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="container-px relative z-10 flex flex-1 flex-col justify-center">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
          {/* Text column */}
          <motion.div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="acct-label mb-6 flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 animate-ticker-blink rounded-full bg-emerald" />
              ACCT / 001 — AVAILABLE FOR OPPORTUNITIES
            </motion.p>

            <h1 className="font-display text-[13vw] font-semibold leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-[4.4rem] lg:text-[5rem]">
              {"Vikram Kumawat".split(" ").map((word, i) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-muted md:text-lg"
            >
              {profile.heroIntro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#contact" variant="solid">
                Get in Touch <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="/resume.pdf" download variant="outline">
                Download Resume
              </MagneticButton>
              <button
                onClick={copyEmail}
                className="group flex items-center gap-2 font-mono text-xs text-ink-muted transition-colors hover:text-emerald"
                aria-label="Copy email address"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy Email"}
              </button>
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-sm md:max-w-none"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line-strong bg-surface md:max-h-[480px]">
              <Image
                src="/profile.png"
                alt="Portrait of Vikram Kumawat"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover grayscale-[15%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-line-strong/60 bg-void/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted backdrop-blur">
                <span>Pune, IN</span>
                <span className="flex items-center gap-1.5 text-emerald">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Live
                </span>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-2xl border border-line md:block -z-10" />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 border-t border-line py-4">
        <Marquee items={TICKER_ITEMS} className="mask-fade-right" />
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="h-3.5 w-3.5" />
      </motion.a>
    </section>
  );
}