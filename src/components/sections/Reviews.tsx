import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import badgeEpa from "../../assets/images/badge-epa-lead-safe.webp";
import badgeGoogle from "../../assets/images/badge-google-verified.webp";
import badgeLicensed from "../../assets/images/badge-licensed-insured.webp";
import badgeNextdoor from "../../assets/images/badge-nextdoor.webp";
import { business, testimonials } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Stars } from "../ui/Stars";

const badges = [
  { src: badgeGoogle, alt: "Google Verified" },
  { src: badgeEpa, alt: "EPA Lead-Safe Certified Firm" },
  { src: badgeLicensed, alt: "Licensed and Insured" },
  { src: badgeNextdoor, alt: "Nextdoor Neighborhood Favorite" },
];

export function Reviews() {
  const [active, setActive] = useState(0);
  const { openQuoteModal } = useQuoteModal();
  const current = testimonials[active];

  const go = (delta: number) => {
    setActive((i) => (i + delta + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-off-white py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="What Your Neighbors Are Saying" title="Refined Painting Reviews" />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
          <div className="flex flex-col justify-between border-2 border-ink/10 bg-warm-white p-8 sm:p-10">
            <div>
              <Quote className="size-10 text-teal-dark/40" aria-hidden />
              <Stars className="mt-4" />
              <blockquote className="mt-4 text-balance font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                "{current.quote}"
              </blockquote>
              <p className="mt-4 text-sm font-bold uppercase tracking-wide text-ink/50">{current.source}</p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous review"
                className="flex size-10 items-center justify-center rounded border-2 border-ink/15 text-ink transition-colors hover:border-ink"
              >
                <ChevronLeft className="size-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next review"
                className="flex size-10 items-center justify-center rounded border-2 border-ink/15 text-ink transition-colors hover:border-ink"
              >
                <ChevronRight className="size-5" aria-hidden />
              </button>
              <div className="ml-2 flex gap-1.5" role="tablist" aria-label="Select review">
                {testimonials.map((t, i) => (
                  <button
                    key={t.quote}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Review ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`h-2 w-6 transition-colors ${i === active ? "bg-teal-dark" : "bg-ink/15"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 border-2 border-ink/10 bg-ink p-8 text-warm-white sm:p-10">
            <div>
              <Stars />
              <p className="mt-2 font-display text-3xl font-extrabold text-warm-white">
                {business.rating} <span className="text-lg font-bold text-warm-white/60">/ 5.0</span>
              </p>
              <p className="text-sm font-semibold text-warm-white/70">{business.reviewCount} Google Reviews</p>
            </div>

            <div className="flex flex-wrap gap-4 border-y border-warm-white/15 py-6">
              {badges.map((badge) => (
                <img key={badge.alt} src={badge.src} alt={badge.alt} className="h-10 w-10 object-contain" loading="lazy" />
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <Button onClick={openQuoteModal} icon="none" className="justify-center">
                Get a Free Estimate
              </Button>
              <LinkButton href="#top" variant="outline-light" icon="arrow" className="justify-center">
                Read More Reviews
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
