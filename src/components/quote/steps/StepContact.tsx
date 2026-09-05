import type { ReactNode } from "react";
import type { QuoteFormData } from "../quoteState";

interface StepContactProps {
  data: QuoteFormData;
  errors: Record<string, string>;
  onUpdate: (patch: Partial<QuoteFormData>) => void;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-ink/80">{label}</span>
      {children}
      {error ? <span className="text-sm font-medium text-crest">{error}</span> : null}
    </label>
  );
}

const inputClasses =
  "w-full rounded-2xl border border-ink/15 bg-warm-white px-4 py-3.5 text-[15px] text-ink outline-none transition-colors focus:border-teal-dark";

export function StepContact({ data, errors, onUpdate }: StepContactProps) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="text-2xl font-semibold text-ink">Where should we send your estimate information?</h3>
        <p className="mt-1 text-sm text-ink/60">No pressure. No spam. Just a clear next step.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="First name" error={errors.firstName}>
          <input
            autoFocus
            type="text"
            autoComplete="given-name"
            value={data.firstName}
            onChange={(e) => onUpdate({ firstName: e.target.value })}
            className={inputClasses}
          />
        </Field>
        <Field label="Last name" error={errors.lastName}>
          <input
            type="text"
            autoComplete="family-name"
            value={data.lastName}
            onChange={(e) => onUpdate({ lastName: e.target.value })}
            className={inputClasses}
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input
            type="tel"
            autoComplete="tel"
            value={data.phone}
            onChange={(e) => onUpdate({ phone: e.target.value })}
            placeholder="(206) 555-0100"
            className={inputClasses}
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            autoComplete="email"
            value={data.email}
            onChange={(e) => onUpdate({ email: e.target.value })}
            placeholder="you@email.com"
            className={inputClasses}
          />
        </Field>
      </div>
    </div>
  );
}
