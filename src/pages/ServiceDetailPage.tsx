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
import { useQuoteModal } from "../components/quote/QuoteModalContext";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import type { ServiceId } from "../lib/content";
import { getServiceIdFromSlug, serviceDetails, services } from "../lib/content";

const heroImages: Record<ServiceId, { src: string; alt: string }> = {
  interior: { src: interiorBright, alt: "Bright, finished interior room with hardwood floors" },
  exterior: { src: afterWhite, alt: "Home exterior finished in crisp white" },
  cabinets: { src: cabinetsPhoto, alt: "Kitchen cabinets refinished in sage green" },
  commercial: { src: navyPhoto, alt: "Professionally finished exterior in a deep navy tone" },
  "deck-fence": { src: porchPhoto, alt: "Covered porch with stained and painted wood trim" },
  carpentry: { src: inProgressPhoto, alt: "Exterior trim and siding mid-repair with protective covering" },
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
        image={hero.src}
        imageAlt={hero.alt}
        height="compact"
      />

      <section className="bg-warm-white py-16 sm:py-20 lg:py-24">
        <Container className="mx-auto max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">The Problem</span>
          <p className="mt-3 text-balance font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
            {detail.commonProblem}
          </p>

          <span className="mt-10 block text-xs font-bold uppercase tracking-[0.16em] text-crest">
            Our Approach
          </span>
          <p className="mt-3 text-base leading-relaxed text-ink/70">{detail.approach}</p>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20 lg:py-24">
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

      <section id="faq" className="scroll-mt-20 bg-warm-white py-16 sm:py-20 lg:py-24">
        <Container className="mx-auto max-w-3xl">
          <h2 className="text-balance text-center font-display text-3xl font-extrabold uppercase leading-[0.98] text-ink sm:text-4xl">
            {service.title} FAQ
          </h2>
          <div className="mt-10">
            <Accordion items={detail.faqs} />
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
