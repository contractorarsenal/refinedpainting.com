import { Check } from "lucide-react";
import { timelineOptions } from "../../../lib/content";
import type { QuoteFormData, TimelineSelection } from "../quoteState";

interface StepTimelineProps {
  data: QuoteFormData;
  errors: Record<string, string>;
  onUpdate: (patch: Partial<QuoteFormData>) => void;
}

export function StepTimeline({ data, errors, onUpdate }: StepTimelineProps) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="text-2xl font-semibold text-ink">When are you hoping to start?</h3>
        <p className="mt-1 text-sm text-ink/60">There's no wrong answer here.</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2" role="radiogroup" aria-label="Project timeline">
        {timelineOptions.map((option) => {
          const selected = data.timeline === option.id;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onUpdate({ timeline: option.id as TimelineSelection })}
              className={`relative flex min-h-[64px] items-center justify-between rounded-2xl border px-5 py-4 text-left transition-colors ${
                selected
                  ? "border-teal-dark bg-teal/15 text-ink"
                  : "border-ink/15 bg-warm-white text-ink/80 hover:border-ink/30"
              }`}
            >
              <span className="text-sm font-semibold">{option.label}</span>
              {selected ? (
                <span className="flex size-5 items-center justify-center rounded-full bg-teal-dark text-warm-white">
                  <Check className="size-3.5" aria-hidden />
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
      {errors.timeline ? <span className="text-sm font-medium text-crest">{errors.timeline}</span> : null}
    </div>
  );
}
