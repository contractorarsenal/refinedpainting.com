import { X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { promoPopup } from "../../lib/content";
import { Button } from "../ui/Button";
import { Mascot } from "../ui/Mascot";

interface PromoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PromoPopup({ isOpen, onClose }: PromoPopupProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!submitted) return;
    const timer = window.setTimeout(onClose, 2200);
    return () => window.clearTimeout(timer);
  }, [submitted, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }
    // Demo capture only. Wire to a real list/CRM here later.
    console.info("Refined Painting: promo signup captured locally", email);
    setError("");
    setSubmitted(true);
  };

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
      <div className="animate-fade-up relative flex w-full max-w-220 flex-col overflow-hidden rounded border-2 border-teal-dark bg-cream shadow-lift sm:flex-row">
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
          {!submitted ? (
            <>
              <div className="h-1 w-14 bg-crest" aria-hidden />
              <h3 className="text-balance font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
                {promoPopup.headline}
              </h3>
              <p className="text-sm leading-relaxed text-ink/65 sm:text-base">{promoPopup.sub}</p>

              <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-3">
                <label className="flex flex-col gap-2">
                  <span className="sr-only">Email address</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="you@email.com"
                    aria-invalid={Boolean(error)}
                    className="w-full rounded border-2 border-ink/15 bg-warm-white px-4 py-3.5 text-[15px] text-ink outline-none transition-colors focus:border-teal-dark"
                  />
                  {error ? <span className="text-sm font-medium text-crest">{error}</span> : null}
                </label>
                <Button type="submit" size="lg" icon="none" className="justify-center">
                  {promoPopup.cta}
                </Button>
              </form>

              <button
                type="button"
                onClick={onClose}
                className="mt-1 self-start text-sm font-bold uppercase tracking-wide text-ink/45 hover:text-ink/70"
              >
                {promoPopup.dismiss}
              </button>
            </>
          ) : (
            <div className="flex flex-col items-start gap-2 py-4">
              <h3 className="font-display text-3xl font-extrabold uppercase text-ink">{promoPopup.successHeadline}</h3>
              <p className="text-sm leading-relaxed text-ink/65">{promoPopup.successSub}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
