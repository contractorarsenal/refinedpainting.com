import { MapPin } from "lucide-react";
import { FormField as Field, formInputClasses as inputClasses } from "../../ui/FormField";
import type { QuoteFormData } from "../quoteState";

interface StepAddressProps {
  data: QuoteFormData;
  errors: Record<string, string>;
  onUpdate: (patch: Partial<QuoteFormData>) => void;
}

export function StepAddress({ data, errors, onUpdate }: StepAddressProps) {
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
          <p className="mt-0.5 text-sm text-ink/60">Enter the project address so we know where the work is.</p>
        </div>
      </div>

      <Field label="Street Address" error={errors.streetAddress}>
        <input
          autoFocus
          type="text"
          autoComplete="address-line1"
          value={data.streetAddress}
          onChange={(e) => onUpdate({ streetAddress: e.target.value })}
          className={inputClasses}
        />
      </Field>

      <Field label="Apartment / Unit (Optional)">
        <input
          type="text"
          autoComplete="address-line2"
          value={data.addressUnit}
          onChange={(e) => onUpdate({ addressUnit: e.target.value })}
          className={inputClasses}
        />
      </Field>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[2fr_1fr_1fr]">
        <Field label="City" error={errors.city}>
          <input
            type="text"
            autoComplete="address-level2"
            value={data.city}
            onChange={(e) => onUpdate({ city: e.target.value })}
            className={inputClasses}
          />
        </Field>
        <Field label="State" error={errors.state}>
          <input
            type="text"
            autoComplete="address-level1"
            maxLength={2}
            value={data.state}
            onChange={(e) => onUpdate({ state: e.target.value.toUpperCase() })}
            placeholder="WA"
            className={inputClasses}
          />
        </Field>
        <Field label="ZIP Code" error={errors.zip}>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={5}
            value={data.zip}
            onChange={(e) => onUpdate({ zip: e.target.value.replace(/\D/g, "") })}
            placeholder="5-digit ZIP code"
            className={inputClasses}
          />
        </Field>
      </div>
    </div>
  );
}
