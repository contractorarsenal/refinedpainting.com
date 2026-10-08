import { Check } from "lucide-react";
import { Navigate, useParams } from "react-router-dom";
import cabinetsPhoto from "../assets/images/projects/cabinets-sage-green.webp";
import navyPhoto from "../assets/images/projects/exterior-finished-navy.webp";
import inProgressPhoto from "../assets/images/projects/exterior-in-progress.webp";
import afterWhite from "../assets/images/projects/exterior-after-white.jpg";
import interiorBright from "../assets/images/projects/interior-bright-finished.webp";
import porchPhoto from "../assets/images/projects/porch-yellow-door.webp";
import { PageHero } from "../components/hero/PageHero";
import { Accordion } from "../components/ui/Accordion";
import { FinalCTA } from "../components/sections/FinalCTA";
import { PNWDifference } from "../components/sections/PNWDifference";
import { useQuoteModal } from "../components/quote/QuoteModalContext";
import { Button, LinkButton } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { ProjectImage } from "../components/ui/ProjectImage";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import type { ServiceId } from "../lib/content";
import { getServiceIdFromSlug, processSteps, serviceDetails, services, warranty } from "../lib/content";

// Service-specific trust points for the "What to Expect" slot, pulled directly
// from each service's own approved `whatsIncluded` list instead of repeating
// one generic 3-point block across every service page. Exterior uses
// PNWDifference instead (see render below) since PNW weather prep is the more
// relevant trust story there.
const trustPoints: Partial<Record<ServiceId, string[]>> = {
  interior: [
    "Professional masking and protection of floors and belongings",
    "Premium Benjamin Moore and Sherwin-Williams paints",
    "Real-time updates throughout the project",
  ],
  cabinets: [
    "Deep cleaning and degreasing before any coating goes on",
    "Premium cabinet-grade coatings for a durable, factory finish",
    "Clean, controlled job sites",
  ],
  commercial: [
    "Flexible scheduling, including evenings and weekends",
    "Low-VOC coatings for occupied spaces",
    "Professional, respectful site conduct",
  ],
  "deck-fence": [
    "Moisture-level testing before staining",
    "Premium penetrating stains and sealants",
    "Protection for landscaping and patios during application",
  ],
  carpentry: [
    "Rot detection and structural assessment",
    "Custom material matching and milling",
    "Weather-resistant installation techniques",
  ],
};

const heroImages: Record<ServiceId, { src: string; alt: string }> = {
  interior: { src: interiorBright, alt: "Bright, finished interior room with hardwood floors" },
  exterior: { src: afterWhite, alt: "Home exterior finished in crisp white" },
  cabinets: { src: cabinetsPhoto, alt: "Kitchen cabinets refinished in sage green" },
  commercial: { src: navyPhoto, alt: "Professionally finished exterior in a deep navy tone" },
  "deck-fence": { src: porchPhoto, alt: "Covered porch with stained and painted wood trim" },
  carpentry: { src: inProgressPhoto, alt: "Exterior trim and siding mid-repair with protective covering" },
};

// Only the services with real project photos on /projects get a proof frame —
// no project photos exist yet for commercial, deck-fence, or carpentry.
const hasProjectProof: Partial<Record<ServiceId, boolean>> = {
  interior: true,
  exterior: true,
  cabinets: true,
};

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const serviceId = slug ? getServiceIdFromSlug(slug) : undefined;
  const { openQuoteModal } = useQuoteModal();
  const service = serviceId ? services.find((s) => s.id === serviceId) : undefined;
  const detail = serviceId ? serviceDetails[serviceId] : undefined;
  const hero = serviceId ? heroImages[serviceId] : undefined;

  useDocumentMeta(
    service ? `${service.title} | Refined Painting` : "Painting Services | Refined Painting",
    detail ? `${detail.overview} Serving Seattle and the Eastside.` : "Refined Painting services.",
  );

  if (!serviceId || !service || !detail || !hero) return <Navigate to="/services" replace />;

  return (
    <>
      <PageHero
        eyebrow={detail.eyebrow}
        title={service.title}
        description={detail.overview}
        placeholderLabel={`${service.title} Image`}
        image={hasProjectProof[serviceId] ? hero : undefined}
        onEstimateClick={() => openQuoteModal(serviceId)}
      />

      <section className="bg-cream-light py-16 sm:py-20 lg:py-24">
        <Container className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">The Problem</span>
              <p className="mt-3 text-balance font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
                {detail.commonProblem}
              </p>
            </div>

            <div className="flex flex-col gap-3 border-t border-ink/10 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Our Approach</span>
              <p className="text-base leading-relaxed text-ink/70">{detail.approach}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-cream py-16 sm:py-20 lg:py-24">
        <Container className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide text-ink sm:text-3xl">
            What&rsquo;s Included
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {detail.whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-ink/80 sm:text-base">
                <Check className="mt-0.5 size-4 shrink-0 text-crest" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 h-px w-16 bg-crest" aria-hidden />
          <Button onClick={() => openQuoteModal(serviceId)} size="lg" className="mt-8">
            Get a Free Estimate
          </Button>
        </Container>
      </section>

      {hasProjectProof[serviceId] ? (
        <section className="border-t border-ink/10 bg-cream-light py-16 sm:py-20 lg:py-24">
          <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="aspect-4/3 w-full overflow-hidden rounded-lg border border-ink/10 shadow-card">
              <ProjectImage src={hero.src} alt={hero.alt} />
            </div>
            <div className="flex flex-col items-start gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">See the Work</span>
              <h2 className="font-display text-2xl font-extrabold uppercase leading-[0.98] text-ink sm:text-3xl">
                Real {service.title} Projects
              </h2>
              <p className="text-sm leading-relaxed text-ink/65">
                Browse recent {service.title.toLowerCase()} work completed by Refined Painting across Seattle
                and the Eastside.
              </p>
              <LinkButton href="/projects" variant="ghost">
                View All Projects
              </LinkButton>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-ink/10 bg-cream py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionProcessHeading />
          <ol className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step) => (
              <li key={step.number} className="flex flex-col items-start gap-1.5 border-t-2 border-crest pt-4">
                <span className="font-display text-3xl font-black leading-none text-crest">{step.number}</span>
                <h3 className="mt-1 font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                  {step.title}
                </h3>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="faq" className="scroll-mt-20 border-t border-ink/10 bg-cream-light py-16 sm:py-20 lg:py-24">
        <Container className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Common Questions</span>
            <span className="mt-3 h-1 w-12 bg-crest" aria-hidden />
            <h2 className="mt-5 text-balance font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
              {service.title} FAQ
            </h2>
          </div>
          <div className="mt-10">
            <Accordion items={detail.faqs} />
          </div>
        </Container>
      </section>

      {serviceId === "exterior" ? (
        <>
          <section className="border-t border-ink/10 bg-ink py-16 text-warm-white sm:py-20 lg:py-24">
            <Container className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Backed By</span>
              <h2 className="font-display text-2xl font-extrabold uppercase leading-[0.98] text-warm-white sm:text-3xl">
                {warranty.headline}
              </h2>
              <p className="text-sm leading-relaxed text-warm-white/65">{warranty.covered}</p>
              <p className="text-xs text-warm-white/40">{warranty.note}</p>
            </Container>
          </section>
          <PNWDifference />
        </>
      ) : serviceId === "deck-fence" ? (
        // Stain work and horizontal wood surfaces are explicitly excluded from the
        // standard workmanship warranty (see `warranty.excluded`), and this service
        // is almost entirely stained, horizontal surfaces. Showing the blanket
        // 5-year warranty claim here would misrepresent coverage, so this section
        // states the real, surface-dependent coverage instead.
        <section className="border-t border-ink/10 bg-ink py-16 text-warm-white sm:py-20 lg:py-24">
          <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Warranty Coverage</span>
              <h2 className="font-display text-2xl font-extrabold uppercase leading-[0.98] text-warm-white sm:text-3xl">
                Coverage Varies by Surface
              </h2>
              <p className="text-sm leading-relaxed text-warm-white/65">
                Our workmanship warranty covers peeling caused by inadequate surface preparation or improper
                application on painted surfaces. Deck and fence staining falls outside that standard coverage:
              </p>
              <ul className="flex flex-col gap-1.5 text-sm leading-relaxed text-warm-white/65">
                {warranty.excluded
                  .filter((item) => /stained|horizontal/i.test(item))
                  .map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-warm-white/40" aria-hidden />
                      {item}
                    </li>
                  ))}
              </ul>
              <LinkButton href="/services#warranty" variant="ghost" className="mt-1 self-start">
                View Full Warranty Terms
              </LinkButton>
            </div>

            <div className="flex flex-col gap-5 border-t border-warm-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">What to Expect</span>
              <ul className="flex flex-col gap-4">
                {(trustPoints[serviceId] ?? []).map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
                    <span className="text-sm leading-relaxed text-warm-white/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ) : (
        <section className="border-t border-ink/10 bg-ink py-16 text-warm-white sm:py-20 lg:py-24">
          <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Backed By</span>
              <h2 className="font-display text-2xl font-extrabold uppercase leading-[0.98] text-warm-white sm:text-3xl">
                {warranty.headline}
              </h2>
              <p className="text-sm leading-relaxed text-warm-white/65">{warranty.covered}</p>
              <p className="text-xs text-warm-white/40">{warranty.note}</p>
            </div>

            <div className="flex flex-col gap-5 border-t border-warm-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">What to Expect</span>
              <ul className="flex flex-col gap-4">
                {(trustPoints[serviceId] ?? []).map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
                    <span className="text-sm leading-relaxed text-warm-white/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      )}

      <FinalCTA />
    </>
  );
}

function SectionProcessHeading() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">How It Works</span>
      <h2 className="mt-2 font-display text-2xl font-extrabold uppercase leading-[0.98] text-ink sm:text-3xl">
        A Clear Process, Start to Finish
      </h2>
    </div>
  );
}
