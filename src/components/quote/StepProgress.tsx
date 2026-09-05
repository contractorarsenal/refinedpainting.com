import { Calendar, Check, FileText, MapPin, PaintRoller, User } from "lucide-react";

const steps = [
  { label: "Location", icon: MapPin },
  { label: "Project", icon: PaintRoller },
  { label: "Timeline", icon: Calendar },
  { label: "Details", icon: FileText },
  { label: "Contact", icon: User },
];

export function StepProgress({ current }: { current: number }) {
  return (
    <div className="flex items-start" aria-hidden>
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isDone = stepNumber < current;
        const isActive = stepNumber === current;
        const Icon = step.icon;
        return (
          <div key={step.label} className="flex flex-1 flex-col items-center last:flex-none">
            <div className="flex w-full items-center">
              <div
                className={`flex size-9 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-colors sm:size-10 ${
                  isDone
                    ? "border-teal-dark bg-teal-dark text-warm-white"
                    : isActive
                      ? "border-teal-dark bg-warm-white text-teal-dark"
                      : "border-ink/15 bg-warm-white text-ink/30"
                }`}
              >
                {isDone ? <Check className="size-4.5" /> : <Icon className="size-4.5" />}
              </div>
              {stepNumber < steps.length ? (
                <div className={`h-0.5 flex-1 ${isDone ? "bg-teal-dark" : "bg-ink/10"}`} />
              ) : null}
            </div>
            <span
              className={`mt-1.5 hidden text-[10px] font-bold uppercase tracking-wide sm:block ${
                isActive || isDone ? "text-ink" : "text-ink/35"
              }`}
            >
              {step.label}
            </span>
            {isActive ? <span className="mt-1 hidden h-0.5 w-5 bg-crest sm:block" /> : null}
          </div>
        );
      })}
    </div>
  );
}
