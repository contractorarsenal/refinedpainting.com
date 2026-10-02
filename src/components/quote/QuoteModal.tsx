import { ChevronLeft, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { business } from "../../lib/content";
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
import { initialQuoteData, TOTAL_STEPS, validateStep, type QuoteFormData, type ServiceSelection } from "./quoteState";

interface QuoteModalProps {
  isOpen: boolean;
  presetService?: ServiceSelection | null;
  onClose: () => void;
}

type SubmitState = "idle" | "submitting" | "error";

const REQUEST_TIMEOUT_MS = 15_000;

export function QuoteModal({ isOpen, presetService, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuoteFormData>(initialQuoteData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const openedAtRef = useRef<number>(0);
  const honeypotRef = useRef<HTMLInputElement>(null);
  // React state updates are batched/async, so two clicks fired in the same
  // tick (e.g. a rapid double-click) can both read submitState as "idle"
  // before either re-render lands. This ref is set synchronously, so the
  // second call always sees the first one already in flight.
  const isSubmittingRef = useRef(false);

  useLockBodyScroll(isOpen);

  // A service card's "Learn More" can preselect its service so the visitor
  // doesn't have to pick it again on step 2.
  useEffect(() => {
    if (isOpen && presetService) {
      setData((prev) => ({ ...prev, service: presetService }));
    }
  }, [isOpen, presetService]);

  useEffect(() => {
    if (isOpen) openedAtRef.current = Date.now();
  }, [isOpen]);

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

  useEffect(() => {
    if (submitState === "error") {
      errorRef.current?.focus();
    }
  }, [submitState]);

  useEffect(() => {
    if (submitted) {
      successHeadingRef.current?.focus();
    }
  }, [submitted]);

  // Reset the form a beat after the close animation finishes.
  useEffect(() => {
    if (isOpen) return;
    const timer = window.setTimeout(() => {
      setStep(1);
      setData(initialQuoteData);
      setErrors({});
      setSubmitted(false);
      setSubmitState("idle");
      setSubmitError(null);
      isSubmittingRef.current = false;
    }, 300);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const update = (patch: Partial<QuoteFormData>) => setData((prev) => ({ ...prev, ...patch }));

  const submitEstimate = async () => {
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;
    setSubmitState("submitting");
    setSubmitError(null);

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          ...data,
          formOpenedAt: openedAtRef.current,
          website: honeypotRef.current?.value ?? "",
        }),
      });

      const resBody = await res.json().catch(() => null);

      if (res.ok && resBody && (resBody as { ok?: boolean }).ok) {
        setSubmitState("idle");
        setSubmitted(true);
        return;
      }

      if (res.status === 400 && resBody && (resBody as { error?: string }).error === "validation") {
        const fieldErrors = (resBody as { fieldErrors?: Record<string, string> }).fieldErrors ?? {};
        setErrors(fieldErrors);
        setStep(TOTAL_STEPS);
        setSubmitState("error");
        setSubmitError("Please check the highlighted fields and try again.");
        return;
      }

      const message = (resBody as { message?: string } | null)?.message;
      setSubmitState("error");
      setSubmitError(message || "Something went wrong while sending your request. Please try again.");
    } catch (err) {
      setSubmitState("error");
      if (err instanceof DOMException && err.name === "AbortError") {
        setSubmitError("That took longer than expected. Please check your connection and try again.");
      } else {
        setSubmitError("We couldn't reach our server. Please check your connection and try again.");
      }
    } finally {
      window.clearTimeout(timeout);
      isSubmittingRef.current = false;
    }
  };

  const goNext = () => {
    const stepErrors = validateStep(step, data);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;

    if (step === TOTAL_STEPS) {
      void submitEstimate();
      return;
    }
    setStep((s) => s + 1);
  };

  const goBack = () => {
    setErrors({});
    setSubmitState("idle");
    setSubmitError(null);
    setStep((s) => Math.max(1, s - 1));
  };

  const isSubmitting = submitState === "submitting";

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

        <div aria-live="polite" className="sr-only">
          {isSubmitting ? "Submitting your request…" : null}
          {submitted ? "Your estimate request was sent." : null}
          {submitState === "error" ? submitError : null}
        </div>

        {!submitted ? (
          <>
            <div className="shrink-0 border-b border-ink/10 px-5 py-4 sm:px-7">
              <StepProgress current={step} />
            </div>

            <form
              noValidate
              className="flex flex-1 flex-col overflow-y-auto px-5 py-6 sm:px-7"
              onSubmit={(e) => {
                e.preventDefault();
                goNext();
              }}
            >
              {/* Honeypot: invisible to real visitors, often auto-filled by bots. Not sent as a controlled field so it never interferes with normal typing. */}
              <input
                ref={honeypotRef}
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
              />

              <div className="flex-1">
                {step === 1 && <StepZip data={data} errors={errors} onUpdate={update} />}
                {step === 2 && <StepService data={data} errors={errors} onUpdate={update} />}
                {step === 3 && <StepTimeline data={data} errors={errors} onUpdate={update} />}
                {step === 4 && <StepDetails data={data} onUpdate={update} />}
                {step === 5 && <StepContact data={data} errors={errors} onUpdate={update} />}
              </div>

              {submitState === "error" ? (
                <div
                  ref={errorRef}
                  tabIndex={-1}
                  role="alert"
                  className="mt-5 flex flex-col gap-1.5 rounded border-2 border-crest/40 bg-crest/5 px-4 py-3 outline-none"
                >
                  <p className="text-sm font-semibold text-crest">{submitError}</p>
                  <p className="text-xs text-ink/60">
                    You can also reach us directly at{" "}
                    <a href={business.phoneHref} className="font-bold text-ink underline">
                      {business.phone}
                    </a>
                    .
                  </p>
                </div>
              ) : null}

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
                <p className="mt-4 text-center text-xs text-ink/50">No pressure. No spam. Just a clear next step for your project.</p>
              ) : null}
            </form>
          </>
        ) : (
          <div className="flex flex-1 flex-col justify-center overflow-y-auto px-5 py-8 sm:px-8">
            <StepSuccess firstName={data.firstName} onClose={onClose} headingRef={successHeadingRef} />
          </div>
        )}
      </div>
    </div>
  );
}
