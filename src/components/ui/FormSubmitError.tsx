import { AlertCircle } from "lucide-react";

/** Shown when a Web3Forms submission comes back as a confirmed failure
 * (bad response, network error, timeout) — never for client-side field
 * validation, which still uses FormField's own inline error prop. */
export function FormSubmitError({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="flex items-start gap-2.5 border-2 border-crest bg-crest/5 px-4 py-3 text-sm text-ink"
    >
      <AlertCircle className="mt-0.5 size-4 shrink-0 text-crest" aria-hidden />
      <span>{message}</span>
    </div>
  );
}
