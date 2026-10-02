import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { ProjectEntry } from "../sections/Gallery";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button } from "../ui/Button";

const categoryBlurb: Record<string, string> = {
  "Exterior Painting":
    "This project showcases the type of exterior preparation and finish work Refined Painting provides for homeowners throughout the Seattle area.",
  "Interior Painting":
    "This project showcases the type of interior preparation and finish work Refined Painting provides for homeowners throughout the Seattle area.",
  "Cabinet Refinishing":
    "This project showcases the type of cabinet preparation and finish work Refined Painting provides for homeowners throughout the Seattle area.",
};

interface ProjectLightboxProps {
  projects: ProjectEntry[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ProjectLightbox({ projects, index, onClose, onNavigate }: ProjectLightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const { openQuoteModal } = useQuoteModal();
  useLockBodyScroll(true);

  const project = projects[index];
  const goPrev = () => onNavigate((index - 1 + projects.length) % projects.length);
  const goNext = () => onNavigate((index + 1) % projects.length);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  if (!project) return null;

  const blurb =
    categoryBlurb[project.category] ??
    "This project showcases the type of work Refined Painting provides for homeowners throughout the Seattle area.";

  return (
    <div
      className="fixed inset-0 z-100 flex flex-col bg-ink/97 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — ${project.category}`}
      onClick={onClose}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (delta > 50) goPrev();
        else if (delta < -50) goNext();
        touchStartX.current = null;
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-warm-white/10 text-warm-white transition-colors hover:bg-warm-white/20 sm:right-6 sm:top-6"
      >
        <X className="size-5" aria-hidden />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Previous project"
        className="absolute left-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-warm-white/10 text-warm-white transition-colors hover:bg-warm-white/20 sm:left-6"
      >
        <ChevronLeft className="size-6" aria-hidden />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Next project"
        className="absolute right-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-warm-white/10 text-warm-white transition-colors hover:bg-warm-white/20 sm:right-6"
      >
        <ChevronRight className="size-6" aria-hidden />
      </button>

      <div className="flex flex-1 items-center justify-center px-14 pt-16 sm:px-20" onClick={(e) => e.stopPropagation()}>
        <img
          src={project.image}
          alt={project.alt}
          className="max-h-[62vh] w-auto max-w-full rounded object-contain shadow-lift sm:max-h-[68vh]"
        />
      </div>

      <div
        className="relative flex flex-col items-center gap-3 px-6 pb-8 pt-4 text-center sm:pb-10"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">{project.category}</span>
        <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide text-warm-white sm:text-3xl">
          {project.title}
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-warm-white/70 sm:text-base">{blurb}</p>
        <Button
          variant="invert"
          size="md"
          className="mt-2"
          onClick={() => {
            onClose();
            openQuoteModal();
          }}
        >
          Request an Estimate
        </Button>
        <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-warm-white/40">
          {index + 1} / {projects.length}
        </span>
      </div>
    </div>
  );
}
