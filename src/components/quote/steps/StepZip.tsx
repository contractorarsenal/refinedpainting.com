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
      <div>
        <h3 className="text-2xl font-semibold text-ink">Where's the project?</h3>
        <p className="mt-1 text-sm text-ink/60">This helps us confirm we serve your area.</p>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-ink/80">ZIP code</span>
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
            className="w-full rounded-2xl border border-ink/15 bg-warm-white py-4 pl-12 pr-4 text-lg font-medium tracking-wide text-ink outline-none transition-colors focus:border-teal-dark"
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
