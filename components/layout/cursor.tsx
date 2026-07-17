"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A spreadsheet-cell-selector cursor — a small crosshair with a coordinate
 * label, nodding to Vikram's world of Excel and financial modelling.
 * Disabled on touch devices and respects prefers-reduced-motion.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;

    let raf = 0;
    const move = (e: MouseEvent) => {
      setVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [role='button'], input, textarea"));
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (dotRef.current) {
          dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
      });
    };
    const hide = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden -translate-x-1/2 -translate-y-1/2 md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.2s ease" }}
    >
      <div
        className="relative flex items-center justify-center transition-transform duration-150 ease-out"
        style={{ transform: isPointer ? "scale(1.6)" : "scale(1)" }}
      >
        <div className="absolute h-4 w-px bg-emerald/80" />
        <div className="absolute h-px w-4 bg-emerald/80" />
        <div className="h-1.5 w-1.5 rounded-full bg-emerald" />
      </div>
    </div>
  );
}
