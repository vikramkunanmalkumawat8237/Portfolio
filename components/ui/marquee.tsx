interface MarqueeProps {
  items: string[];
  className?: string;
}

/** Stock-ticker style infinite marquee — duplicated content for seamless loop. */
export function Marquee({ items, className }: MarqueeProps) {
  const content = [...items, ...items];
  return (
    <div className={`relative overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <div className="flex w-max animate-marquee items-center gap-8">
        {content.map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-mono text-xs tracking-[0.2em] text-ink-muted">
            {item}
            <span className="h-1 w-1 rounded-full bg-emerald/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
