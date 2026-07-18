"use client";

import { useRef, useState, type ReactNode, type ElementType } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
  as?: ElementType;
  target?: string;
  rel?: string;
  download?: boolean | string;
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "solid",
  as,
  target,
  rel,
  download,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors duration-300 focus-visible:outline-none";
  const variants = {
    solid: "bg-emerald text-void hover:bg-emerald-bright",
    outline: "border border-line-strong text-ink hover:border-emerald hover:text-emerald",
    ghost: "text-ink-muted hover:text-ink",
  };

  const Comp = as ?? (href ? "a" : "button");

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      className="inline-block"
    >
      <Comp
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        download={download}
        aria-label={ariaLabel}
        className={cn(base, variants[variant], className)}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
