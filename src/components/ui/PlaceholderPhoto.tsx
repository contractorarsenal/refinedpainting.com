/**
 * PLACEHOLDER — Refined Painting did not supply project photography for this slot.
 * Swap the <img> usage for real before/after or in-progress photos when available;
 * every usage of this component is a spot that needs a real photo.
 */
type Tone = "stone" | "teal" | "ink" | "gold";

interface PlaceholderPhotoProps {
  label: string;
  tone?: Tone;
  className?: string;
}

const toneStops: Record<Tone, [string, string]> = {
  stone: ["#efe9db", "#cfc7b3"],
  teal: ["#dcedef", "#4fb0bb"],
  ink: ["#2a3a47", "#152029"],
  gold: ["#f2ddb6", "#e3a13a"],
};

const toneText: Record<Tone, string> = {
  stone: "text-ink/50",
  teal: "text-ink-2/70",
  ink: "text-warm-white/60",
  gold: "text-ink/55",
};

export function PlaceholderPhoto({ label, tone = "stone", className = "" }: PlaceholderPhotoProps) {
  const [from, to] = toneStops[tone];
  const gradientId = `ph-grad-${tone}`;

  return (
    <div
      className={`relative isolate flex h-full w-full items-end overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="white" stopOpacity="0.35" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M-20 220 C 80 180, 140 260, 220 190 S 380 140, 440 200 L 440 320 L -20 320 Z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="M-20 60 C 60 20, 120 90, 210 50 S 360 -10, 430 60"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span
        className={`relative z-10 m-3 rounded-full bg-warm-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur-sm ${toneText[tone]}`}
      >
        {label} · sample
      </span>
    </div>
  );
}
