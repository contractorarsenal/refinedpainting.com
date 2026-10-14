import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import mariaPhoto from "../../assets/images/team/maria-project-coordinator.webp";
import { promoPopup } from "../../lib/content";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button } from "../ui/Button";

interface PromoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PromoPopup({ isOpen, onClose }: PromoPopupProps) {
  const { openQuoteModal } = useQuoteModal();
  const dialogRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(isOpen);
  useFocusTrap(dialogRef, isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-90 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={promoPopup.headline}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="animate-fade-up relative flex w-full max-w-220 flex-col overflow-hidden rounded border-2 border-teal-dark bg-cream shadow-lift sm:flex-row"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-cream/70 text-ink/60 backdrop-blur-sm transition-colors hover:bg-cream hover:text-ink"
        >
          <X className="size-5" aria-hidden />
        </button>

        {/* Fixed height on mobile (stacked above the copy) so a portrait
            photo can't blow out the dialog's height; on desktop (flex-row)
            it stretches to match the text column via the default flex
            align-items: stretch, no explicit height needed. */}
        <div className="relative h-56 shrink-0 overflow-hidden bg-cream-dark/40 sm:h-auto sm:w-[42%]">
          <img
            src={mariaPhoto}
            alt="Maria, Project Coordinator at Refined Painting"
            className="h-full w-full object-cover object-[center_22%]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/45 to-transparent px-5 pb-4 pt-12">
            <p className="font-display text-base font-extrabold uppercase tracking-wide text-warm-white">
              {promoPopup.person.name}
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-warm-white/80">
              {promoPopup.person.role}
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-4 px-7 py-8 sm:px-9 sm:py-10">
          <div className="h-1 w-14 bg-crest" aria-hidden />
          <h3 className="text-balance font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
            {promoPopup.headline}
          </h3>
          <p className="text-sm leading-relaxed text-ink/65 sm:text-base">{promoPopup.sub}</p>

          <Button
            onClick={() => {
              onClose();
              openQuoteModal();
            }}
            size="lg"
            icon="none"
            className="mt-2 justify-center"
          >
            {promoPopup.cta}
          </Button>

          <button
            type="button"
            onClick={onClose}
            className="mt-1 self-start text-sm font-bold uppercase tracking-wide text-ink/45 hover:text-ink/70"
          >
            {promoPopup.dismiss}
          </button>
        </div>
      </div>
    </div>
  );
}
