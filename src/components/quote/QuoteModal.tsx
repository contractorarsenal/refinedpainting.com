import { ChevronLeft, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Mascot } from "../ui/Mascot";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { Button } from "../ui/Button";
import { StepProgress } from "./StepProgress";
import { StepContact } from "./steps/StepContact";
import { StepDetails } from "./steps/StepDetails";
import { StepService } from "./steps/StepService";
import { StepSuccess } from "./steps/StepSuccess";
import { StepTimeline } from "./steps/StepTimeline";
import { StepZip } from "./steps/StepZip";
import { initialQuoteData, TOTAL_STEPS, validateStep, type QuoteFormData } from "./quoteState";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuoteFormData>(initialQuoteData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const timer = window.setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>("input, button, textarea")?.focus();
    }, 50);
    return () => window.clearTimeout(timer);
  }, [isOpen, step]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  // Reset the form a beat after the close animation finishes.
  useEffect(() => {
    if (isOpen) return;
    const timer = window.setTimeout(() => {
      setStep(1);
      setData(initialQuoteData);
      setErrors({});
      setSubmitted(false);
    }, 300);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const update = (patch: Partial<QuoteFormData>) => setData((prev) => ({ ...prev, ...patch }));

  const goNext = () => {
    const stepErrors = validateStep(step, data);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;

    if (step === TOTAL_STEPS) {
      // Demo submission: persisted locally only. Wire to a real API/CRM here later.
      console.info("Refined Painting — quote request captured locally:", data);
      setSubmitted(true);
      return;
    }
    setStep((s) => s + 1);
  };

  const goBack = () => {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-end justify-center bg-ink/70 backdrop-blur-sm sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Book your free estimate"
        className="animate-fade-up flex h-[94svh] w-full flex-col overflow-hidden rounded-t-lg bg-warm-white shadow-lift sm:h-auto sm:max-h-[88vh] sm:max-w-155 sm:rounded-lg"
      >
        <div className="flex shrink-0 items-center justify-between bg-ink px-5 py-4 sm:px-7">
          <div className="flex items-center gap-3">
            <Mascot variant="full" className="h-10 w-10 shrink-0" />
            <div className="leading-tight">
              <p className="font-display text-lg font-extrabold uppercase tracking-wide text-warm-white">
                Refined Painting
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-teal">
                Book Your Free Estimate
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close estimate form"
            className="flex size-9 shrink-0 items-center justify-center rounded text-warm-white/70 transition-colors hover:bg-warm-white/10 hover:text-warm-white"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        {!submitted ? (
          <>
            <div className="shrink-0 border-b border-ink/10 px-5 py-4 sm:px-7">
              <StepProgress current={step} />
            </div>

            <form
              className="flex flex-1 flex-col overflow-y-auto px-5 py-6 sm:px-7"
              onSubmit={(e) => {
                e.preventDefault();
                goNext();
              }}
            >
              <div className="flex-1">
                {step === 1 && <StepZip data={data} errors={errors} onUpdate={update} />}
                {step === 2 && <StepService data={data} errors={errors} onUpdate={update} />}
                {step === 3 && <StepTimeline data={data} errors={errors} onUpdate={update} />}
                {step === 4 && <StepDetails data={data} onUpdate={update} />}
                {step === 5 && <StepContact data={data} errors={errors} onUpdate={update} />}
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-ink/10 pt-5">
                {step > 1 ? (
                  <Button type="button" variant="outline-dark" icon="none" onClick={goBack} className="shrink-0">
                    <ChevronLeft className="size-4" aria-hidden />
                    Back
                  </Button>
                ) : null}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={step === TOTAL_STEPS ? "none" : "arrow"}
                  className="ml-auto justify-center"
                >
                  {step === TOTAL_STEPS ? "Request My Free Estimate" : "Continue"}
                </Button>
              </div>
              {step === TOTAL_STEPS ? (
                <p className="mt-4 text-center text-xs text-ink/50">No pressure. No spam. Just a clear next step for your project.</p>
              ) : null}
            </form>
          </>
        ) : (
          <div className="flex flex-1 flex-col justify-center overflow-y-auto px-5 py-8 sm:px-8">
            <StepSuccess firstName={data.firstName} onClose={onClose} />
          </div>
        )}
      </div>
    </div>
  );
}
