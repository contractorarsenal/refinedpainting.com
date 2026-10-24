import type { LucideIcon } from "lucide-react";

interface ServiceIconPanelProps {
  icon: LucideIcon;
  /** Accessible name for the panel, usually the service title. */
  label: string;
  className?: string;
}

/**
 * Branded stand-in for a service that has no approved photo yet. It keeps the
 * same frame as the photo cards so visual weight matches, and it does not
 * imply any project work.
 */
export function ServiceIconPanel({ icon: Icon, label, className = "" }: ServiceIconPanelProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-ink ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(79,176,187,0.28),transparent_60%)]"
      />
      <Icon className="relative size-20 text-teal sm:size-24" strokeWidth={1.5} aria-hidden />
    </div>
  );
}
