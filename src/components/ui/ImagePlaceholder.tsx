import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  aspectClassName?: string;
  className?: string;
}

/**
 * Intentional stand-in for header imagery that hasn't been shot yet. Used on
 * inner-page headers only — never in the Projects gallery, which shows real
 * project photography.
 */
export function ImagePlaceholder({ label, aspectClassName = "aspect-4/3", className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`flex ${aspectClassName} w-full flex-col items-center justify-center gap-2 rounded-xl border border-ink/12 bg-ink/5 ${className}`}
    >
      <ImageIcon className="size-7 text-ink/25" aria-hidden />
      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink/35">{label}</span>
    </div>
  );
}
