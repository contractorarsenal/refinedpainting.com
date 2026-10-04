import afterWhite from "../assets/images/projects/exterior-after-white.jpg";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Process } from "../components/sections/Process";
import { PromoBanner } from "../components/sections/PromoBanner";
import { ServiceJumpNav } from "../components/sections/ServiceJumpNav";
import { ServiceSections } from "../components/sections/ServiceSections";
import { VideoAuthority } from "../components/sections/VideoAuthority";
import { Button, LinkButton } from "../components/ui/Button";
import { Accordion } from "../components/ui/Accordion";
import { Container } from "../components/ui/Container";
import { ProjectImage } from "../components/ui/ProjectImage";
import { useQuoteModal } from "../components/quote/QuoteModalContext";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { business, cabinetProofStat, faqs, warranty } from "../lib/content";

const proofRow = [
  { value: cabinetProofStat.value, label: cabinetProofStat.label },
  { value: "5-Year", label: "Workmanship Warranty" },
  { value: "EPA", label: "Lead-Safe Certified" },
  { value: "Licensed", label: "& Insured" },
];

const primaryFaqs = faqs.slice(0, 5);
const moreFaqs = faqs.slice(5);

export function ServicesPage() {
  const { openQuoteModal } = useQuoteModal();

  useDocumentMeta(
    "Painting Services | Refined Painting",
    "Interior painting, exterior painting, cabinet refinishing, commercial painting, deck & fence staining and carpentry services from Refined Painting, serving Seattle and the Eastside.",
  );

  return (
    <>
      <section className="bg-cream pt-28 sm:pt-32 lg:pt-24">
        <Container className="grid grid-cols-1 items-center gap-10 pb-10 sm:pb-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pb-14">
          <div className="flex flex-col items-start gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Painting Services</span>
            <h1 className="text-balance font-display text-3xl font-black uppercase leading-[0.98] text-ink sm:text-4xl lg:text-5xl">
              Built Around <span className="text-teal-dark">Quality</span>, Care &amp; Communication.
            </h1>
            <p className="max-w-md text-balance text-sm leading-relaxed text-ink/65 sm:text-base">
              Refined Painting provides interior, exterior, cabinet and specialty painting services for
              homeowners and businesses throughout Seattle and the Eastside.
            </p>
            <div className="mt-1 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button onClick={() => openQuoteModal()} size="md" className="w-full sm:w-auto">
                Request Free Estimate
              </Button>
              <LinkButton href={business.phoneHref} variant="outline-dark" size="md" icon="phone" className="w-full sm:w-auto">
                Call Now
              </LinkButton>
            </div>
            <span className="mt-1 text-[11px] font-bold uppercase tracking-widest text-ink/40">
              Benjamin Moore &amp; Sherwin-Williams Certified
            </span>
          </div>

          <div className="aspect-4/3 w-full max-w-md overflow-hidden rounded-xl shadow-card lg:justify-self-end">
            <ProjectImage src={afterWhite} alt="Home exterior finished in crisp white" />
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-warm-white py-6">
        <Container className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {proofRow.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center sm:flex-row sm:gap-2.5">
              <span className="font-display text-2xl font-black leading-none text-crest">{item.value}</span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-ink/50 sm:mt-0 sm:text-[11px]">
                {item.label}
              </span>
            </div>
          ))}
        </Container>
      </section>

      <ServiceJumpNav />
      <ServiceSections afterFeatured={<VideoAuthority />} />
      <PromoBanner />
      <Process />

      <section id="warranty" className="scroll-mt-24 border-t border-ink/10 bg-warm-white py-14 sm:py-16 lg:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="border-2 border-ink/10 p-6 sm:p-8 lg:sticky lg:top-28 lg:self-start">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Structural Integrity</span>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase leading-[0.98] text-ink sm:text-3xl">
              {warranty.headline}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">{warranty.covered}</p>
            <p className="mt-3 text-xs text-ink/45">{warranty.note}</p>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Clarifications</span>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase leading-[0.98] text-ink sm:text-3xl">
              Frequently Asked Service Questions
            </h2>
            <div className="mt-6">
              <Accordion items={primaryFaqs} />
            </div>
            {moreFaqs.length ? (
              <details className="mt-2 group/more">
                <summary className="cursor-pointer list-none py-3 text-xs font-bold uppercase tracking-wide text-crest">
                  Show More Questions
                </summary>
                <Accordion items={moreFaqs} />
              </details>
            ) : null}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
