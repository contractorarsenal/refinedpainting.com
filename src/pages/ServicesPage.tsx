import heroImage from "../assets/images/projects/exterior-in-progress.webp";
import { PageHero } from "../components/hero/PageHero";
import { FAQ } from "../components/sections/FAQ";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Process } from "../components/sections/Process";
import { PromoBanner } from "../components/sections/PromoBanner";
import { ServiceSections } from "../components/sections/ServiceSections";
import { Services } from "../components/sections/Services";
import { VideoAuthority } from "../components/sections/VideoAuthority";
import { WhyChooseRefined } from "../components/sections/WhyChooseRefined";
import { Container } from "../components/ui/Container";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { cabinetProofStat, warranty } from "../lib/content";

export function ServicesPage() {
  useDocumentMeta(
    "Painting Services | Refined Painting",
    "Interior painting, exterior painting, cabinet refinishing, commercial painting, deck & fence staining and carpentry services from Refined Painting, serving Seattle and the Eastside.",
  );

  return (
    <>
      <PageHero
        eyebrow="Painting Services"
        title="Built Around Quality, Care & Communication"
        description="Refined Painting provides interior, exterior, cabinet and specialty painting services for homeowners and businesses throughout Seattle and the Eastside."
        image={heroImage}
        imageAlt="Exterior siding mid-repaint with protective covering"
      />

      <section className="bg-warm-white py-10 sm:py-12">
        <Container className="flex flex-col items-center text-center">
          <span className="font-display text-5xl font-black leading-none text-crest sm:text-6xl">
            {cabinetProofStat.value}
          </span>
          <span className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
            {cabinetProofStat.label}
          </span>
        </Container>
      </section>

      <Services />
      <ServiceSections />
      <VideoAuthority />
      <PromoBanner />
      <Process />
      <WhyChooseRefined />

      <section id="warranty" className="scroll-mt-24 bg-ink py-16 text-warm-white sm:py-20 lg:py-24">
        <Container className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Backed By</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.98] sm:text-4xl">
            {warranty.headline}
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 bg-crest" aria-hidden />
          <p className="mt-5 text-balance text-base leading-relaxed text-warm-white/75">{warranty.covered}</p>
          <p className="mt-4 text-sm text-warm-white/50">{warranty.note}</p>
        </Container>
      </section>

      <FAQ />
      <FinalCTA />
    </>
  );
}
