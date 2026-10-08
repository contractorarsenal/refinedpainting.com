import { ShieldCheck, Sparkles } from "lucide-react";
import { business, CTA, trustBullets } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Container } from "../ui/Container";

interface FramedCTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

/** The inset conversion module used to close Services instead of the flat red FinalCTA band — a designed panel rather than another full-bleed strip. */
export function FramedCTA({
  eyebrow = "Consult With Our Team",
  title = "Ready to Start Your Project?",
  description = "Tell us what you're planning and we'll help you figure out the right next step.",
}: FramedCTAProps) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="border-t border-ink/10 bg-sand py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative border border-ink/10 bg-cream-light p-8 sm:p-12 lg:p-14">
          <span className="absolute left-0 top-0 h-1 w-14 bg-crest" aria-hidden />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
            <div className="flex flex-col items-start gap-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-crest">{eyebrow}</span>
              <h2 className="text-balance font-display text-3xl font-black uppercase leading-[0.96] text-ink sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="max-w-md text-balance text-sm leading-relaxed text-ink/65 sm:text-base">{description}</p>
              <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink/10 pt-4">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink/55">
                  <ShieldCheck className="size-4 text-teal-dark" aria-hidden />
                  {trustBullets[0]}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink/55">
                  <Sparkles className="size-4 text-teal-dark" aria-hidden />
                  {trustBullets[3]}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="inline-flex items-center justify-center gap-2 rounded bg-ink px-6 py-4 font-display text-base font-extrabold uppercase tracking-wide text-warm-white transition-colors hover:bg-ink-2"
              >
                {CTA.start}
              </button>
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded border-2 border-ink/20 bg-sand px-6 py-4 font-display text-base font-extrabold uppercase tracking-wide text-ink transition-colors hover:border-ink/40"
              >
                Call {business.phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
