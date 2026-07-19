"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => Boolean(el)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] transition-all duration-300 ${
        scrolled ? "border-b border-line bg-void/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="font-display text-sm font-semibold tracking-tight">
          VK<span className="text-emerald">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative font-mono text-[11px] uppercase tracking-[0.15em] transition-colors hover:text-emerald ${
                  active === link.href ? "text-emerald" : "text-ink-muted"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-line-strong px-5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors hover:border-emerald hover:text-emerald"
          >
            Resume
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-void md:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-mono text-sm uppercase tracking-[0.1em] text-ink-muted hover:text-emerald"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-block rounded-full border border-line-strong px-5 py-2 font-mono text-[11px] uppercase tracking-[0.15em]"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
