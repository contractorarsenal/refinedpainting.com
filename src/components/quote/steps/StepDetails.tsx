import { FileText, Paperclip, X } from "lucide-react";
import { useId } from "react";
import type { QuoteFormData } from "../quoteState";

interface StepDetailsProps {
  data: QuoteFormData;
  onUpdate: (patch: Partial<QuoteFormData>) => void;
}

export function StepDetails({ data, onUpdate }: StepDetailsProps) {
  const fileInputId = useId();

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

      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold uppercase tracking-wide text-ink/70">Photo (Optional)</span>
        {data.photoName ? (
          <div className="flex items-center justify-between rounded border-2 border-ink/15 bg-warm-white px-4 py-3">
            <span className="flex items-center gap-2 text-sm text-ink/80">
              <Paperclip className="size-4 text-teal-dark" aria-hidden />
              {data.photoName}
            </span>
            <button
              type="button"
              onClick={() => onUpdate({ photoName: null })}
              aria-label="Remove attached photo"
              className="text-ink/50 hover:text-ink"
            >
              <X className="size-4" aria-hidden />
            </button>
          </div>
        ) : (
          <label
            htmlFor={fileInputId}
            className="flex cursor-pointer items-center justify-center gap-2 rounded border-2 border-dashed border-ink/25 bg-off-white px-4 py-6 text-sm font-bold text-ink/60 transition-colors hover:border-teal-dark hover:text-ink"
          >
            <Paperclip className="size-4" aria-hidden />
            Attach a Photo of the Space
            <input
              id={fileInputId}
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onUpdate({ photoName: file.name });
              }}
            />
          </label>
        )}
      </div>
    </div>
  );
}
