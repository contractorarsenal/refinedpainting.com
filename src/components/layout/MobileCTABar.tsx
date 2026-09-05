import { Phone } from "lucide-react";
import { business, CTA } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";

export function MobileCTABar() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ink/10 bg-warm-white/95 p-3 backdrop-blur sm:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={business.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/20 py-3 text-sm font-bold text-ink"
      >
        <Phone className="size-4" aria-hidden />
        Call Now
      </a>
      <button
        type="button"
        onClick={openQuoteModal}
        className="flex flex-[1.4] items-center justify-center rounded-full bg-teal py-3 text-sm font-bold text-ink shadow-card"
      >
        {CTA.primaryAlt}
      </button>
    </div>
  );
}
