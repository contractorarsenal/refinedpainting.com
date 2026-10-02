import { FileText } from "lucide-react";
import type { QuoteFormData } from "../quoteState";

interface StepDetailsProps {
  data: QuoteFormData;
  onUpdate: (patch: Partial<QuoteFormData>) => void;
}

export function StepDetails({ data, onUpdate }: StepDetailsProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-dark">
          <FileText className="size-7" aria-hidden />
        </div>
        <div>
          <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-ink">
            Tell Us About the Project
          </h3>
          <p className="mt-0.5 text-sm text-ink/60">Optional, but it helps us prepare for your estimate.</p>
        </div>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-bold uppercase tracking-wide text-ink/70">Project Details</span>
        <textarea
          value={data.details}
          onChange={(e) => onUpdate({ details: e.target.value })}
          rows={4}
          placeholder="e.g. Repaint the exterior siding and trim on a two-story craftsman."
          className="w-full resize-none rounded border-2 border-ink/15 bg-warm-white p-4 text-[15px] text-ink outline-none transition-colors focus:border-teal-dark"
        />
      </label>
    </div>
  );
}
