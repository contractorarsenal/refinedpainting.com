import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { ProjectEntry } from "../sections/Gallery";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button } from "../ui/Button";

// Honest, category-level description — real, approved copy. These are
// distinct real projects grouped by category, not multiple photos of one
// project, so the copy and the "More {category} Work" label below never
// imply otherwise.
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
  const dialogRef = useRef<HTMLDivElement>(null);
  const { openQuoteModal } = useQuoteModal();
  useLockBodyScroll(true);
  useFocusTrap(dialogRef, true);

  const project = projects[index];
  const hasOthers = projects.length > 1;
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
      className="fixed inset-0 z-100 flex items-stretch justify-center bg-ink/80 backdrop-blur-sm sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
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
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title}: ${project.category}`}
        className="animate-modal-in relative flex w-full max-w-6xl flex-col overflow-hidden bg-cream shadow-lift sm:h-[90vh] sm:max-h-[840px] sm:rounded-sm"
      >
        {/* Header row — always visible, never scrolls away */}
        <div className="flex shrink-0 items-center justify-between border-b border-ink/10 bg-ink px-5 py-3.5 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">{project.category}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex size-9 shrink-0 items-center justify-center rounded text-warm-white/70 transition-colors hover:bg-warm-white/10 hover:text-warm-white"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        {/* Everything below the header scrolls as ONE unit on mobile (image,
            details, thumbnails together) so nothing can end up clipped inside
            a separately-scrolling inner region. On desktop this wrapper is
            not itself scrollable — the image+details row takes the fixed
            dialog height and the thumbnail strip sits below it as a footer. */}
        <div className="flex flex-1 flex-col overflow-y-auto lg:overflow-hidden">
          <div className="flex flex-col lg:min-h-0 lg:flex-1 lg:flex-row">
            <div key={project.id} className="animate-fade-in relative shrink-0 bg-ink lg:h-full lg:w-[65%]">
              <img
                src={project.image}
                alt={project.alt}
                className="h-full max-h-[38vh] w-full object-cover sm:max-h-[46vh] lg:max-h-none"
              />
            </div>

            <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7 lg:w-[35%] lg:overflow-y-auto lg:p-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">{project.category}</span>
              <h2 className="mt-2 font-display text-2xl font-extrabold uppercase leading-[0.98] text-ink sm:text-3xl">
                {project.title}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-ink/65">{blurb}</p>

            <Button
              className="w-full justify-center sm:w-auto"
              onClick={() => {
                onClose();
                openQuoteModal();
              }}
            >
              Request a Free Estimate
            </Button>

            {hasOthers ? (
              <div className="mt-auto flex items-center justify-between border-t border-ink/10 pt-4">
                <button
                  type="button"
                  onClick={goPrev}
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink/60 transition-colors hover:text-crest"
                >
                  <ChevronLeft className="size-4" aria-hidden />
                  Prev
                </button>
                <span className="text-xs font-semibold uppercase tracking-widest text-ink/35">
                  {index + 1} / {projects.length}
                </span>
                <button
                  type="button"
                  onClick={goNext}
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink/60 transition-colors hover:text-crest"
                >
                  Next
                  <ChevronRight className="size-4" aria-hidden />
                </button>
              </div>
            ) : null}
          </div>
        </div>

        {/* Thumbnail strip — other real, distinct projects in this same category, labeled honestly as separate work, not sub-photos of this one project. Inside the same scroll wrapper as the image/details on mobile, so it's reached by the same single scroll gesture. */}
        {hasOthers ? (
          <div className="shrink-0 border-t border-ink/10 bg-cream-light px-5 py-4 sm:px-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/40">
              More {project.category} Work
            </span>
            <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onNavigate(i)}
                  aria-label={`View ${p.title}`}
                  aria-current={i === index}
                  className={`relative size-14 shrink-0 overflow-hidden border-2 transition-opacity sm:size-16 ${
                    i === index ? "border-crest" : "border-transparent opacity-55 hover:opacity-100"
                  }`}
                >
                  <img src={p.image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        ) : null}
        </div>
      </div>
    </div>
  );
}
