import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { promoPopup } from "../../lib/content";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button } from "../ui/Button";
import { Mascot } from "../ui/Mascot";

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
          className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink"
        >
          <X className="size-5" aria-hidden />
        </button>

        <div className="flex shrink-0 items-center justify-center bg-cream-dark/40 px-8 py-8 sm:w-[42%] sm:py-10">
          <Mascot variant="full" className="h-32 w-32 sm:h-44 sm:w-44" />
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
