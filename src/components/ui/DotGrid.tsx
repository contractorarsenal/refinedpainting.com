import { useId } from "react";

/** Nearly-invisible dotted texture for otherwise flat section backgrounds. */
export function DotGrid({ className = "" }: { className?: string }) {
  const patternId = useId();

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-[0.18] ${className}`}
      aria-hidden
    >
      <defs>
        <pattern id={patternId} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
