import type { ElementType, ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

interface RevealProps {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
}

/** Fades/translates children in once they scroll into view. No-ops visually under prefers-reduced-motion (global CSS collapses the transition duration). */
export function Reveal({ as: Tag = "div", delay = 0, className = "", children }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      data-reveal
      data-inview={inView}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={className}
    >
      {children}
    </Tag>
  );
}
