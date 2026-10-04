import { ArrowRight } from "lucide-react";
import { serviceSlugs, services } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Container } from "../ui/Container";

export function ServiceJumpNav() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <nav aria-label="Jump to service" className="border-b border-ink/10 bg-warm-white">
      <Container className="flex items-center gap-4 py-3.5 sm:gap-6">
        <div className="relative min-w-0 flex-1">
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            <a
              href="#cabinet-refinishing"
              className="shrink-0 rounded-full bg-ink px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-warm-white"
            >
              All Services
            </a>
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${serviceSlugs[service.id]}`}
                className="shrink-0 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-ink/55 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {service.title}
              </a>
            ))}
          </div>
          {/* Fades the trailing pill instead of hard-clipping it when the row overflows. */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-warm-white to-transparent"
            aria-hidden
          />
        </div>
        <button
          type="button"
          onClick={() => openQuoteModal()}
          className="hidden shrink-0 items-center gap-1 whitespace-nowrap text-[11px] font-bold uppercase tracking-wide text-crest sm:flex"
        >
          Get a Free Estimate
          <ArrowRight className="size-3.5" aria-hidden />
        </button>
      </Container>
    </nav>
  );
}
