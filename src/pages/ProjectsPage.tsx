import { BeforeAfter } from "../components/sections/BeforeAfter";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Gallery } from "../components/sections/Gallery";
import { Container } from "../components/ui/Container";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const qualityPoints = [
  { title: "Meticulous Prep", description: "Every finish starts with careful surface prep, not shortcuts." },
  { title: "Premium Materials", description: "Benjamin Moore and Sherwin-Williams paints and coatings, chosen for durability." },
  { title: "5-Year Warranty", description: "Every project is backed by our workmanship warranty, reviewed at your walkthrough." },
];

export function ProjectsPage() {
  useDocumentMeta(
    "Our Work | Refined Painting Projects",
    "Browse recent interior, exterior and cabinet painting projects from Refined Painting, plus real before-and-after comparisons.",
  );

  return (
    <>
      <section className="bg-warm-white pb-10 pt-32 sm:pb-12 sm:pt-40">
        <Container className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Our Work</span>
          <h1 className="mt-3 text-balance font-display text-4xl font-black uppercase leading-[0.96] text-ink sm:text-5xl">
            Real Homes, Real Work
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-balance text-base leading-relaxed text-ink/65 sm:text-lg">
            Explore recent interior, exterior, cabinet and specialty painting projects completed by Refined
            Painting. Click any photo for a closer look.
          </p>
        </Container>
      </section>

      <Gallery />
      <BeforeAfter />

      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {qualityPoints.map((point, index) => (
              <div key={point.title} className="border-t-2 border-crest pt-5 text-center sm:text-left">
                <span className="font-display text-sm font-black text-crest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg font-extrabold uppercase tracking-wide text-ink">
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
