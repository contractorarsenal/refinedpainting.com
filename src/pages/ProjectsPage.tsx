import { CheckCircle2, Layers, ShieldCheck } from "lucide-react";
import { BeforeAfter } from "../components/sections/BeforeAfter";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Gallery } from "../components/sections/Gallery";
import { Container } from "../components/ui/Container";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const qualityPoints = [
  {
    icon: Layers,
    title: "Meticulous Prep",
    description: "Every finish starts with careful surface prep, not shortcuts.",
  },
  {
    icon: CheckCircle2,
    title: "Premium Materials",
    description: "Benjamin Moore and Sherwin-Williams paints and coatings, chosen for durability.",
  },
  {
    icon: ShieldCheck,
    title: "5-Year Warranty",
    description: "Every project is backed by our workmanship warranty, reviewed at your walkthrough.",
  },
];

export function ProjectsPage() {
  useDocumentMeta(
    "Our Work | Refined Painting Projects",
    "Browse recent interior, exterior and cabinet painting projects from Refined Painting, plus real before-and-after comparisons.",
  );

  return (
    <>
      <section className="bg-warm-white pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-28">
        <Container className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Our Work</span>
            <h1 className="mt-3 text-balance font-display text-4xl font-black uppercase leading-[0.96] text-ink sm:text-5xl">
              Real Homes, Real Work
            </h1>
            <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-ink/65 sm:text-lg">
              Explore recent interior, exterior, cabinet and specialty painting projects completed by Refined
              Painting. Click any photo for a closer look.
            </p>
          </div>

          <div className="border-2 border-ink/10 bg-cream p-5 sm:p-6">
            <span className="text-xs font-bold uppercase tracking-widest text-ink/50">Backed By</span>
            <ul className="mt-3 flex flex-col gap-2">
              <li className="text-sm font-bold text-ink">5-Year Workmanship Warranty</li>
              <li className="text-sm font-bold text-ink">Licensed &amp; Insured</li>
              <li className="text-sm font-bold text-ink">EPA Lead-Safe Certified</li>
            </ul>
          </div>
        </Container>
      </section>

      <Gallery />
      <BeforeAfter />

      <section className="border-t border-ink/10 bg-cream py-14 sm:py-16 lg:py-20">
        <Container>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">Craftsmanship Standard</span>
          <h2 className="mt-2 font-display text-2xl font-extrabold uppercase leading-[0.98] text-ink sm:text-3xl">
            The Same Process, Every Project
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {qualityPoints.map((point) => (
              <div key={point.title} className="border-2 border-ink/10 bg-warm-white p-5">
                <point.icon className="size-5 text-crest" aria-hidden />
                <h3 className="mt-3 font-display text-base font-extrabold uppercase tracking-wide text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{point.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
