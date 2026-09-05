import { ChevronLeft, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import wordmarkSrc from "../../assets/images/refined-painting-wordmark.webp";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { Button } from "../ui/Button";
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

  const stepLabels = ["Location", "Project", "Timeline", "Details", "Contact"];

  return (
    <div
      className="fixed inset-0 z-100 flex items-end justify-center bg-ink/60 backdrop-blur-sm sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Get your free painting estimate"
        className="animate-fade-up flex h-[92svh] w-full flex-col overflow-hidden rounded-t-3xl bg-warm-white shadow-lift sm:h-auto sm:max-h-[88vh] sm:max-w-[560px] sm:rounded-3xl"
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4 sm:px-8 sm:py-5">
          <img src={wordmarkSrc} alt="Refined Painting" className="h-8 w-auto sm:h-9" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close estimate form"
            className="flex size-9 items-center justify-center rounded-full text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        {!submitted ? (
          <>
            <div className="px-5 pt-5 sm:px-8">
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em] text-ink/50">
                <span>Get Your Free Painting Estimate</span>
                <span>
                  Step {step} of {TOTAL_STEPS}
                </span>
              </div>
              <div className="mt-3 flex gap-1.5" aria-hidden>
                {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                  <div
                    key={stepLabels[i]}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      i < step ? "bg-teal-dark" : "bg-ink/10"
                    }`}
                  />
                ))}
              </div>
            </div>

            <form
              className="flex flex-1 flex-col overflow-y-auto px-5 py-6 sm:px-8"
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

              <div className="mt-8 flex items-center gap-3">
                {step > 1 ? (
                  <Button type="button" variant="ghost" icon="none" onClick={goBack} className="shrink-0">
                    <ChevronLeft className="size-4" aria-hidden />
                    Back
                  </Button>
                ) : null}
                <Button type="submit" variant="primary" icon={step === TOTAL_STEPS ? "none" : "arrow"} className="flex-1 justify-center">
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
