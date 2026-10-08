import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import badgeEpa from "../../assets/images/badge-epa-lead-safe.webp";
import badgeGoogle from "../../assets/images/badge-google-verified.webp";
import badgeLicensed from "../../assets/images/badge-licensed-insured.webp";
import badgeNextdoor from "../../assets/images/badge-nextdoor.webp";
import { business, googleReviewsUrl, testimonials } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";
import { SectionHeading } from "../ui/SectionHeading";
import { Stars } from "../ui/Stars";

const badges = [
  { src: badgeGoogle, alt: "Google Verified" },
  { src: badgeEpa, alt: "EPA Lead-Safe Certified Firm" },
  { src: badgeLicensed, alt: "Licensed and Insured" },
  { src: badgeNextdoor, alt: "Nextdoor Neighborhood Favorite" },
];

const AUTO_ADVANCE_MS = 7000;

export function Reviews() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { openQuoteModal } = useQuoteModal();
  const current = testimonials[active];

  const go = (delta: number) => {
    setActive((i) => (i + delta + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (testimonials.length <= 1) return;
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="bg-light-blue py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow="What Your Neighbors Are Saying" title="Refined Painting Reviews" />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div
            className="flex flex-col justify-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <span className="h-1 w-12 bg-crest" aria-hidden />
            <div key={active} className="animate-fade-in mt-6">
              <Stars />
              <blockquote className="mt-5 text-balance font-display text-3xl font-semibold leading-snug text-ink sm:text-4xl">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <p className="mt-5 text-sm font-bold uppercase tracking-wide text-ink/50">
                {current.source} &middot; Verified Google Review
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-ink/10 pt-6">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous review"
                className="flex size-10 items-center justify-center rounded-full border-2 border-ink/15 text-ink transition-colors hover:border-crest hover:text-crest"
              >
                <ChevronLeft className="size-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next review"
                className="flex size-10 items-center justify-center rounded-full border-2 border-ink/15 text-ink transition-colors hover:border-crest hover:text-crest"
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
                    className={`h-2 w-6 transition-colors ${i === active ? "bg-crest" : "bg-ink/15"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex flex-col gap-6 border-t-2 border-crest pt-6 lg:border-l-2 lg:border-t-0 lg:pl-10 lg:pt-0">
            <Mascot
              variant="watermark"
              className="pointer-events-none absolute -right-2 top-2 z-0 h-44 w-44 scale-x-[-1] sm:h-52 sm:w-52"
            />
            <div className="relative z-10 flex flex-col gap-6">
              <div>
                <Stars />
                <p className="mt-2 font-display text-4xl font-extrabold text-ink">
                  {business.rating} <span className="text-lg font-bold text-ink/45">/ 5.0</span>
                </p>
                <p className="text-sm font-semibold text-ink/60">{business.reviewCount} Google Reviews</p>
              </div>

              <div className="flex flex-wrap gap-4 border-y border-ink/10 py-6">
                {badges.map((badge) => (
                  <img key={badge.alt} src={badge.src} alt={badge.alt} className="h-10 w-10 object-contain" loading="lazy" />
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button onClick={() => openQuoteModal()} variant="secondary" icon="none" className="justify-center">
                  Get a Free Estimate
                </Button>
                <LinkButton href={googleReviewsUrl} external variant="outline-dark" icon="arrow" className="justify-center">
                  Read More Reviews
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
