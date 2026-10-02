import { User } from "lucide-react";
import { FormField as Field, formInputClasses as inputClasses } from "../../ui/FormField";
import type { QuoteFormData } from "../quoteState";

interface StepContactProps {
  data: QuoteFormData;
  errors: Record<string, string>;
  onUpdate: (patch: Partial<QuoteFormData>) => void;
}

export function StepContact({ data, errors, onUpdate }: StepContactProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-dark">
          <User className="size-7" aria-hidden />
        </div>
        <div>
          <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-ink">
            How Should We Reach You?
          </h3>
          <p className="mt-0.5 text-sm text-ink/60">No pressure. No spam. Just a clear next step.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="First Name" error={errors.firstName}>
          <input
            autoFocus
            type="text"
            autoComplete="given-name"
            value={data.firstName}
            onChange={(e) => onUpdate({ firstName: e.target.value })}
            className={inputClasses}
          />
        </Field>
        <Field label="Last Name" error={errors.lastName}>
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
