import heroImage from "../assets/images/projects/exterior-after-pink.jpg";
import { PageHero } from "../components/hero/PageHero";
import { BeforeAfter } from "../components/sections/BeforeAfter";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Gallery } from "../components/sections/Gallery";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

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
        description="A selection of recent interior, exterior and cabinet projects across Seattle and the Eastside."
        image={heroImage}
        imageAlt="Home exterior finished in a soft blush tone"
        height="tall"
      />
      <Gallery />
      <BeforeAfter />
      <FinalCTA />
    </>
  );
}
