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
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClasses} ${className}`}>
      <span className={`text-xs font-bold uppercase tracking-[0.18em] ${eyebrowColor}`}>
        {eyebrow}
      </span>
      <h2 className={`text-balance text-3xl font-semibold leading-[1.08] sm:text-4xl lg:text-[2.75rem] ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-balance font-body text-base leading-relaxed sm:text-lg ${descColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
