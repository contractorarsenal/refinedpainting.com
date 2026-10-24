import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import gloriaPhoto from "../../assets/images/team/gloria-customer-service.webp";
import { promoPopup, teamMembers } from "../../lib/content";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button } from "../ui/Button";
import { TeamCard } from "../ui/TeamCard";

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
        className="animate-fade-up relative flex w-full max-w-md flex-col gap-5 rounded border-2 border-teal-dark bg-cream px-6 pb-7 pt-8 shadow-lift sm:px-8 sm:pb-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-cream/70 text-ink/60 backdrop-blur-sm transition-colors hover:bg-cream hover:text-ink"
        >
          <X className="size-5" aria-hidden />
        </button>

        <TeamCard
          name={teamMembers.gloria.name}
          role={teamMembers.gloria.role}
          blurb={teamMembers.gloria.blurb}
          photo={gloriaPhoto}
          objectPosition="42% 50%"
          className="border-b border-ink/10 pb-5"
        />

        <div className="flex flex-col gap-4">
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
