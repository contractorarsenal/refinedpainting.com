import type { ReactNode } from "react";

export const formInputClasses =
  "w-full rounded border-2 border-ink/15 bg-warm-white px-4 py-3.5 text-base text-ink outline-none transition-colors focus:border-teal-dark sm:text-[15px]";

interface FormFieldProps {
  label: string;
  error?: string;
  children: ReactNode;
}

export function FormField({ label, error, children }: FormFieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-bold uppercase tracking-wide text-ink/70">{label}</span>
      {children}
      {error ? <span className="text-sm font-medium text-crest">{error}</span> : null}
    </label>
  );
}
