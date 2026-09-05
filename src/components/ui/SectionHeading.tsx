import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const eyebrowColor = tone === "dark" ? "text-teal-dark" : "text-teal";
  const titleColor = tone === "dark" ? "text-ink" : "text-warm-white";
  const descColor = tone === "dark" ? "text-ink/70" : "text-warm-white/75";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClasses} ${className}`}>
      <span className={`text-xs font-bold uppercase tracking-[0.14em] ${eyebrowColor}`}>{eyebrow}</span>
      <h2 className={`text-balance font-display text-4xl font-extrabold uppercase leading-[0.98] sm:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-balance font-body text-base leading-relaxed sm:text-lg ${descColor}`}>{description}</p>
      ) : null}
    </div>
  );
}
