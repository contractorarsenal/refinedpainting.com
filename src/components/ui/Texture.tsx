type Tone = "ink" | "warm-white";

const rgb: Record<Tone, string> = {
  ink: "20,33,44",
  "warm-white": "255,255,255",
};

/** Extremely faint architectural grid — never graph-paper-visible, just enough to break up a flat cream/navy field. */
export function GridTexture({ className = "", tone = "ink" }: { className?: string; tone?: Tone }) {
  const c = rgb[tone];
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(${c},0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(${c},0.035) 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }}
    />
  );
}

/** Faint horizontal rule system — for technical/process sections and the footer's top edge. */
export function LineTexture({ className = "", tone = "ink" }: { className?: string; tone?: Tone }) {
  const c = rgb[tone];
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(${c},0.05) 1px, transparent 1px)`,
        backgroundSize: "100% 40px",
      }}
    />
  );
}
