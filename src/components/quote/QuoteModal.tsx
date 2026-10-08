import { ChevronLeft, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type RefObject } from "react";
import { business, services, timelineOptions } from "../../lib/content";
import { Mascot } from "../ui/Mascot";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { Button } from "../ui/Button";
import { StepProgress } from "./StepProgress";
import { StepContact } from "./steps/StepContact";
import { StepDetails } from "./steps/StepDetails";
import { StepService } from "./steps/StepService";
import { StepTimeline } from "./steps/StepTimeline";
import { StepZip } from "./steps/StepZip";
import { initialQuoteData, TOTAL_STEPS, validateStep, type QuoteFormData, type ServiceSelection } from "./quoteState";

interface QuoteModalProps {
  isOpen: boolean;
  presetService?: ServiceSelection | null;
  onClose: () => void;
  triggerRef: RefObject<HTMLElement | null>;
}

// Web3Forms access keys are explicitly public/safe for client-side use by
// design (unlike a real API secret) — see https://docs.web3forms.com.
// This is Refined Painting's existing, already-configured form; do not swap
// it for a different key or create a second form.
const WEB3FORMS_ACCESS_KEY = "5325d12a-69cf-4914-9eed-810c0410edf5";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function QuoteModal({ isOpen, presetService, onClose, triggerRef }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuoteFormData>(initialQuoteData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(isOpen);
  useFocusTrap(dialogRef, isOpen, triggerRef);

  // A service card's "Learn More" can preselect its service so the visitor
  // doesn't have to pick it again on step 2.
  useEffect(() => {
    if (isOpen && presetService) {
      setData((prev) => ({ ...prev, service: presetService }));
    }
  }, [isOpen, presetService]);

  // Re-focus into the new step's content as the wizard advances — the trap
  // above only handles focus on open/close, not step transitions.
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
      setIsSubmitting(false);
    }, 300);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const update = (patch: Partial<QuoteFormData>) => setData((prev) => ({ ...prev, ...patch }));

  // The single <form> below spans all 5 steps. For steps 1-4, "Continue" is
  // intercepted purely to validate and advance the wizard. On the final
  // step, once validation passes, this handler does NOT call
  // preventDefault() — the browser submits the real <form action method>
  // natively straight to Web3Forms, no fetch/XHR involved. Web3Forms then
  // redirects the browser to /thank-you itself (see the hidden "redirect"
  // field), so success is never faked client-side.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const stepErrors = validateStep(step, data);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) {
      e.preventDefault();
      return;
    }

    if (step < TOTAL_STEPS) {
      e.preventDefault();
      setStep((s) => s + 1);
      return;
    }

    // Final step, valid: let it submit for real. Just reflect a submitting
    // state briefly for the click before the browser navigates away.
    setIsSubmitting(true);
  };

  const goBack = () => {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  };

  const fullName = `${data.firstName} ${data.lastName}`.trim();
  const serviceLabel =
    services.find((s) => s.id === data.service)?.title ?? (data.service === "not-sure" ? "Not Sure Yet" : "");
  const timelineLabel = timelineOptions.find((o) => o.id === data.timeline)?.label ?? "";
  const redirectUrl =
    typeof window !== "undefined" ? `${window.location.origin}/thank-you` : "/thank-you";

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
        className="animate-fade-up flex h-[94svh] w-full flex-col overflow-hidden rounded-t-lg bg-cream shadow-lift sm:h-auto sm:max-h-[88vh] sm:max-w-155 sm:rounded-lg"
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

        <div className="shrink-0 border-b border-ink/10 px-5 py-4 sm:px-7">
          <StepProgress current={step} />
        </div>

        <form
          action={WEB3FORMS_ENDPOINT}
          method="POST"
          noValidate
          className="flex flex-1 flex-col overflow-y-auto px-5 py-6 sm:px-7"
          onSubmit={handleSubmit}
        >
          {/* Web3Forms delivery configuration — not shown to the visitor. */}
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input type="hidden" name="subject" value="Refined Painting — New Estimate Request" />
          <input type="hidden" name="from_name" value="Refined Painting Website" />
          <input type="hidden" name="redirect" value={redirectUrl} />
          {/* Web3Forms' own honeypot convention: left unfilled by real visitors, often auto-filled by bots. Web3Forms checks this server-side. */}
          <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} aria-hidden="true" />

          {/* The accumulated wizard state, submitted as the real payload once the final step validates. */}
          <input type="hidden" name="first_name" value={data.firstName} />
          <input type="hidden" name="last_name" value={data.lastName} />
          <input type="hidden" name="name" value={fullName} />
          <input type="hidden" name="email" value={data.email} />
          <input type="hidden" name="phone" value={data.phone} />
          <input type="hidden" name="zip" value={data.zip} />
          <input type="hidden" name="service" value={serviceLabel} />
          <input type="hidden" name="timeline" value={timelineLabel} />
          <input type="hidden" name="details" value={data.details || "(none provided)"} />

          <div className="flex-1">
            {step === 1 && <StepZip data={data} errors={errors} onUpdate={update} />}
            {step === 2 && <StepService data={data} errors={errors} onUpdate={update} />}
            {step === 3 && <StepTimeline data={data} errors={errors} onUpdate={update} />}
            {step === 4 && <StepDetails data={data} onUpdate={update} />}
            {step === 5 && <StepContact data={data} errors={errors} onUpdate={update} />}
          </div>

          <div className="mt-8 flex items-center gap-3 border-t border-ink/10 pt-5">
            {step > 1 ? (
              <Button
                type="button"
                variant="outline-dark"
                icon="none"
                onClick={goBack}
                disabled={isSubmitting}
                className="shrink-0"
              >
                <ChevronLeft className="size-4" aria-hidden />
                Back
              </Button>
            ) : null}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={step === TOTAL_STEPS ? "none" : "arrow"}
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="ml-auto justify-center disabled:cursor-not-allowed disabled:opacity-60"
            >
              {step === TOTAL_STEPS ? (isSubmitting ? "Sending…" : "Request My Free Estimate") : "Continue"}
            </Button>
          </div>
          {step === TOTAL_STEPS ? (
            <p className="mt-4 text-center text-xs text-ink/50">
              No pressure. No spam. Just a clear next step for your project. Can't submit?{" "}
              <a href={business.phoneHref} className="font-bold text-ink underline">
                Call Now
              </a>
              .
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
