import colorConsultationPhoto from "../../assets/images/color-consultation-woman-horse.webp";
import { promoBanner } from "../../lib/content";
import { useInView } from "../../hooks/useInView";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

// Decorative only. These swatches echo the site palette and are not paint recommendations or choices.
const swatchColors = ["bg-teal", "bg-teal-dark", "bg-cream", "bg-cream-dark", "bg-stone"];

export function PromoBanner() {
  const { openQuoteModal } = useQuoteModal();
  const { ref: ruleRef, inView: ruleInView } = useInView<HTMLDivElement>(0.6);

  return (
    <section className="relative bg-warm-white py-12 sm:py-16 lg:py-20">
      {/* A short rule draws across the top edge as the section enters view, instead of a flat static border. */}
      <div
        ref={ruleRef}
        className={`absolute inset-x-0 top-0 h-0.5 origin-left bg-crest/30 transition-transform duration-700 ease-out ${
          ruleInView ? "scale-x-100" : "scale-x-0"
        }`}
        aria-hidden
      />
      <Container>
        <Reveal className="mx-auto grid max-w-[1000px] grid-cols-1 items-center gap-8 rounded-[20px] bg-ink p-6 text-warm-white shadow-card sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-12 lg:p-14">
          <div className="flex flex-col items-start gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">{promoBanner.eyebrow}</span>
            <div className="flex h-2.5 w-full max-w-[220px] overflow-hidden rounded-full" aria-hidden>
              {swatchColors.map((color) => (
                <span key={color} className={`flex-1 ${color}`} />
              ))}
            </div>
            <h2 className="text-balance font-display text-3xl font-extrabold uppercase leading-[0.98] text-warm-white sm:text-4xl">
              {promoBanner.headline}
            </h2>
            <p className="max-w-md text-balance text-base leading-relaxed text-warm-white/80">{promoBanner.sub}</p>
            <p className="text-sm font-semibold text-warm-white/70">{promoBanner.support}</p>
            <Button onClick={() => openQuoteModal()} size="lg" className="mt-2">
              {promoBanner.cta}
            </Button>
          </div>

          <figure className="mx-auto flex w-[280px] flex-col items-center gap-3 lg:mx-0 lg:w-[300px]">
            <img
              src={colorConsultationPhoto}
              alt="Victoria standing beside a horse."
              width={900}
              height={1356}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full rounded-xl shadow-lift"
            />
            <figcaption className="text-xs font-bold uppercase tracking-[0.16em] text-warm-white/80">
              {promoBanner.photoCaption}
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
