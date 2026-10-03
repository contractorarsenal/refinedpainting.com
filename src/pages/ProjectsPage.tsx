import heroImage from "../assets/images/projects/exterior-after-pink.jpg";
import { PageHero } from "../components/hero/PageHero";
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
      <PageHero
        eyebrow="Real Homes, Real Work"
        title="Our Work"
        description="A selection of recent interior, exterior and cabinet projects across Seattle and the Eastside. Click any photo for a closer look."
        image={heroImage}
        imageAlt="Home exterior finished in a soft blush tone"
        height="tall"
      />

      <section className="bg-off-white pt-14 sm:pt-16 lg:pt-20">
        <Container className="mx-auto max-w-2xl text-center">
          <p className="text-balance text-base leading-relaxed text-ink/65 sm:text-lg">
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
