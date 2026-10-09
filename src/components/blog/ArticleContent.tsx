import { ArrowRight, CircleHelp, ClipboardList, Lightbulb, MoveRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export function ArticleH2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-display text-2xl font-extrabold uppercase leading-[1.02] tracking-wide text-ink sm:text-3xl"
    >
      {children}
    </h2>
  );
}

export function ArticleH3({ children }: { children: ReactNode }) {
  return <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-ink">{children}</h3>;
}

export function ArticleP({ children }: { children: ReactNode }) {
  return <p className="text-[17px] leading-relaxed text-ink/75 sm:text-lg">{children}</p>;
}

export function ArticleList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[17px] leading-relaxed text-ink/75 sm:text-lg">
          <span className="mt-3 size-1.5 shrink-0 rounded-full bg-crest" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ArticleOrderedList({ items }: { items: ReactNode[] }) {
  return (
    <ol className="flex flex-col gap-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3.5 text-[17px] leading-relaxed text-ink/75 sm:text-lg">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-warm-white">
            {i + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

const calloutIcons = {
  answer: Lightbulb,
  factors: ClipboardList,
  ask: CircleHelp,
  next: MoveRight,
};

const calloutLabels = {
  answer: "Quick Answer",
  factors: "What Affects Cost",
  ask: "What to Ask",
  next: "Next Step",
};

interface ArticleCalloutProps {
  type: "answer" | "factors" | "ask" | "next";
  children: ReactNode;
}

/** A bordered callout block for the handful of moments an article benefits
 * from one — not meant to wrap every paragraph. */
export function ArticleCallout({ type, children }: ArticleCalloutProps) {
  const Icon = calloutIcons[type];
  return (
    <div className="border-l-4 border-teal-dark bg-cream-light p-5 sm:p-6">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-teal-dark">
        <Icon className="size-4" aria-hidden />
        {calloutLabels[type]}
      </div>
      <div className="mt-2.5 flex flex-col gap-2.5 text-[15px] leading-relaxed text-ink/75 sm:text-base">
        {children}
      </div>
    </div>
  );
}

export function ArticleLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link to={href} className="font-semibold text-teal-dark underline decoration-teal-dark/30 underline-offset-2 hover:text-ink">
      {children}
    </Link>
  );
}

/** Inline mid-article CTA — a single row, not a full promo block, so it
 * doesn't compete visually with the bottom FinalCTA. Opens the same quote
 * modal used site-wide (optionally pre-set to a service) rather than linking
 * out, matching how ServiceDetailPage's CTAs behave. */
export function ArticleInlineCTA({
  onClick,
  label = "Get a Free Estimate",
  children,
}: {
  onClick: () => void;
  label?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-3 border-y border-ink/10 bg-cream-light px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p className="font-display text-base font-extrabold uppercase tracking-wide text-ink sm:text-lg">
        {children}
      </p>
      <button
        type="button"
        onClick={onClick}
        className="group inline-flex shrink-0 items-center gap-2 rounded bg-crest px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-warm-white transition-colors hover:bg-ink"
      >
        {label}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </button>
    </div>
  );
}
