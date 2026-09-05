import { Calendar, Check } from "lucide-react";
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
      <div className="flex items-center gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-dark">
          <Calendar className="size-7" aria-hidden />
        </div>
        <div>
          <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-ink">
            When Would You Like to Start?
          </h3>
          <p className="mt-0.5 text-sm text-ink/60">There's no wrong answer here.</p>
        </div>
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
              className={`relative flex min-h-16 items-center justify-between rounded border-2 px-5 py-4 text-left transition-colors ${
                selected ? "border-teal-dark bg-teal/10 text-ink" : "border-ink/12 bg-warm-white text-ink/80 hover:border-ink/30"
              }`}
            >
              <span className="text-sm font-bold">{option.label}</span>
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
