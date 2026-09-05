import { MapPin } from "lucide-react";
import type { QuoteFormData } from "../quoteState";

interface StepZipProps {
  data: QuoteFormData;
  errors: Record<string, string>;
  onUpdate: (patch: Partial<QuoteFormData>) => void;
}

export function StepZip({ data, errors, onUpdate }: StepZipProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-dark">
          <MapPin className="size-7" aria-hidden />
        </div>
        <div>
          <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-ink">
            Where Is the Project?
          </h3>
          <p className="mt-0.5 text-sm text-ink/60">Enter your ZIP code so we can confirm your service area.</p>
        </div>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-bold uppercase tracking-wide text-ink/70">ZIP Code*</span>
        <div className="relative">
          <MapPin className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink/40" aria-hidden />
          <input
            autoFocus
            type="text"
            inputMode="numeric"
            maxLength={5}
            value={data.zip}
            onChange={(e) => onUpdate({ zip: e.target.value.replace(/\D/g, "") })}
            placeholder="98103"
            aria-invalid={Boolean(errors.zip)}
            aria-describedby={errors.zip ? "zip-error" : undefined}
            className="w-full rounded border-2 border-ink/15 bg-warm-white py-4 pl-12 pr-4 text-lg font-semibold tracking-wide text-ink outline-none transition-colors focus:border-teal-dark"
          />
        </div>
        {errors.zip ? (
          <span id="zip-error" className="text-sm font-medium text-crest">
            {errors.zip}
          </span>
        ) : null}
      </label>
    </div>
  );
}
