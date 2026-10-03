import afterWhite from "../assets/images/projects/exterior-after-white.jpg";
import { FAQ } from "../components/sections/FAQ";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Process } from "../components/sections/Process";
import { PromoBanner } from "../components/sections/PromoBanner";
import { ServiceJumpNav } from "../components/sections/ServiceJumpNav";
import { ServiceSections } from "../components/sections/ServiceSections";
import { VideoAuthority } from "../components/sections/VideoAuthority";
import { WhyChooseRefined } from "../components/sections/WhyChooseRefined";
import { Button, LinkButton } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { ProjectImage } from "../components/ui/ProjectImage";
import { useQuoteModal } from "../components/quote/QuoteModalContext";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { business, cabinetProofStat, warranty } from "../lib/content";

const proofRow = [
  { value: cabinetProofStat.value, label: cabinetProofStat.label },
  { value: "5-Year", label: "Workmanship Warranty" },
  { value: "EPA", label: "Lead-Safe Certified" },
  { value: "Licensed", label: "& Insured" },
];

export function ServicesPage() {
  const { openQuoteModal } = useQuoteModal();

  useDocumentMeta(
    "Painting Services | Refined Painting",
    "Interior painting, exterior painting, cabinet refinishing, commercial painting, deck & fence staining and carpentry services from Refined Painting, serving Seattle and the Eastside.",
  );

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-28 sm:pt-32 lg:pt-20">
        <Container className="relative grid grid-cols-1 items-center gap-10 pb-16 sm:pb-20 lg:grid-cols-2 lg:gap-16 lg:pb-24">
          <div className="flex flex-col items-start gap-5">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Painting Services</span>
            <h1 className="text-balance font-display text-4xl font-black uppercase leading-[0.96] text-warm-white sm:text-5xl lg:text-6xl">
              Built Around Quality, Care &amp; Communication
            </h1>
            <p className="max-w-md text-balance text-base leading-relaxed text-warm-white/75 sm:text-lg">
              Refined Painting provides interior, exterior, cabinet and specialty painting services for
              homeowners and businesses throughout Seattle and the Eastside.
            </p>
            <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button onClick={() => openQuoteModal()} size="lg" className="w-full sm:w-auto">
                Get a Free Estimate
              </Button>
              <LinkButton href={business.phoneHref} variant="outline-light" size="lg" icon="phone" className="w-full sm:w-auto">
                Call Now
              </LinkButton>
            </div>
          </div>

          <div className="aspect-4/3 w-full overflow-hidden rounded-xl shadow-lift lg:aspect-4/5">
            <ProjectImage src={afterWhite} alt="Home exterior finished in crisp white" />
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-warm-white py-10 sm:py-12">
        <Container className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {proofRow.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <span className="font-display text-3xl font-black leading-none text-crest sm:text-4xl">
                {item.value}
              </span>
              <span className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/50 sm:text-xs">
                {item.label}
              </span>
            </div>
          ))}
        </Container>
      </section>

      <ServiceJumpNav />
      <ServiceSections />
      <VideoAuthority />
      <PromoBanner />
      <Process />
      <WhyChooseRefined />

      <section id="warranty" className="scroll-mt-24 border-t border-ink/10 bg-ink pb-12 pt-16 text-warm-white sm:pb-14 sm:pt-20 lg:pt-24">
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
