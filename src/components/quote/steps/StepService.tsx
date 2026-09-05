import { Building2, Check, Hammer, HelpCircle, Home, PaintRoller, TreeDeciduous } from "lucide-react";
import { serviceOptions } from "../../../lib/content";
import type { QuoteFormData, ServiceSelection } from "../quoteState";

const optionIcons: Record<string, typeof Home> = {
  interior: Home,
  exterior: PaintRoller,
  cabinets: Building2,
  "deck-fence": TreeDeciduous,
  commercial: Building2,
  carpentry: Hammer,
  "not-sure": HelpCircle,
};

interface StepServiceProps {
  data: QuoteFormData;
  errors: Record<string, string>;
  onUpdate: (patch: Partial<QuoteFormData>) => void;
}

export function StepService({ data, errors, onUpdate }: StepServiceProps) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-ink">
          What Are We Painting?
        </h3>
        <p className="mt-0.5 text-sm text-ink/60">Choose the option that fits best.</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3" role="radiogroup" aria-label="Project type">
        {serviceOptions.map((option) => {
          const selected = data.service === option.id;
          const Icon = optionIcons[option.id];
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onUpdate({ service: option.id as ServiceSelection })}
              className={`relative flex min-h-24 flex-col items-start justify-between gap-3 rounded border-2 p-4 text-left transition-colors ${
                selected ? "border-teal-dark bg-teal/10 text-ink" : "border-ink/12 bg-warm-white text-ink/80 hover:border-ink/30"
              }`}
            >
              <Icon className={`size-6 ${selected ? "text-teal-dark" : "text-ink/50"}`} aria-hidden />
              <span className="text-sm font-bold">{option.label}</span>
              {selected ? (
                <span className="absolute right-3 top-3 flex size-5 items-center justify-center rounded-full bg-teal-dark text-warm-white">
                  <Check className="size-3.5" aria-hidden />
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
      {errors.service ? <span className="text-sm font-medium text-crest">{errors.service}</span> : null}
    </div>
  );
}
