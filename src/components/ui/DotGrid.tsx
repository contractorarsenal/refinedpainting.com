/**
 * Nearly-invisible dotted texture for otherwise flat section backgrounds.
 *
 * `id` must be unique per instance on a page and is passed in by the caller.
 * It is deliberately not generated with useId(): useId values come from tree
 * position, and the prerendered document shell is not part of the client
 * hydration root, so generated ids would differ between server HTML and the client.
 */
export function DotGrid({ id, className = "" }: { id: string; className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-[0.18] ${className}`}
      aria-hidden
    >
      <defs>
        <pattern id={id} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
