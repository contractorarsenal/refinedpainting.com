import heroImage from "../assets/images/projects/exterior-in-progress.webp";
import { PageHero } from "../components/hero/PageHero";
import { FAQ } from "../components/sections/FAQ";
import { FinalCTA } from "../components/sections/FinalCTA";
import { PromoBanner } from "../components/sections/PromoBanner";
import { Services } from "../components/sections/Services";
import { VideoAuthority } from "../components/sections/VideoAuthority";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function ServicesPage() {
  useDocumentMeta(
    "Painting Services | Refined Painting",
    "Interior painting, exterior painting, cabinet refinishing, commercial painting, deck & fence staining and carpentry services from Refined Painting, serving Seattle and the Eastside.",
  );

  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Painting Services"
        description="Professional painting, refinishing and repair services for homes and businesses across Seattle and the Eastside."
        image={heroImage}
        imageAlt="Exterior siding mid-repaint with protective covering"
      />
      <Services />
      <VideoAuthority />
      <FAQ />
      <PromoBanner />
      <FinalCTA />
    </>
  );
}
