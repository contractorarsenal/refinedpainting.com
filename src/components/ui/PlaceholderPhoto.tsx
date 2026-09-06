/**
 * PLACEHOLDER. Refined Painting did not supply project photography for this slot.
 * Rendered as a desaturated duotone with a house silhouette so it reads as a
 * missing photo, not a design element. Replace every usage with a real project
 * photo (before/after, in-progress, or finished) when available.
 */
type Tone = "navy" | "slate" | "teal" | "warm";

interface PlaceholderPhotoProps {
  label: string;
  tone?: Tone;
  className?: string;
}

const toneStops: Record<Tone, [string, string]> = {
  navy: ["#3a4a58", "#14212c"],
  slate: ["#8a9096", "#4d5257"],
  teal: ["#4a8891", "#1f3c41"],
  warm: ["#8f7a5f", "#4a3d2c"],
};

export function PlaceholderPhoto({ label, tone = "slate", className = "" }: PlaceholderPhotoProps) {
  const [from, to] = toneStops[tone];

  return (
    <div
      className={`relative isolate flex h-full w-full items-end overflow-hidden ${className}`}
      style={{ background: `linear-gradient(160deg, ${from}, ${to})` }}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-25"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden
      >
        <path
          d="M0 220 L70 220 L70 160 L120 120 L170 160 L170 220 L235 220 L235 140 L300 90 L365 140 L365 220 L400 220 L400 300 L0 300 Z"
          fill="white"
          fillOpacity="0.14"
        />
        <path
          d="M0 220 L70 220 L70 160 L120 120 L170 160 L170 220 L235 220 L235 140 L300 90 L365 140 L365 220 L400 220"
          stroke="white"
          strokeOpacity="0.35"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      <span className="relative z-10 m-3 bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-warm-white/90">
        {label} · sample
      </span>
    </div>
  );
}
