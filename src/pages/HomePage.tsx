import { HomeHero } from "../components/hero/HomeHero";
import { AboutPreview } from "../components/sections/AboutPreview";
import { FinalCTA } from "../components/sections/FinalCTA";
import { ProjectsPreview } from "../components/sections/ProjectsPreview";
import { Reviews } from "../components/sections/Reviews";
import { ServicesPreview } from "../components/sections/ServicesPreview";
import { TrustStrip } from "../components/sections/TrustStrip";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function HomePage() {
  useDocumentMeta(
    "Seattle Painting Company | Interior & Exterior Painters | Refined Painting",
    "Refined Painting provides professional interior, exterior, cabinet and commercial painting across Seattle and the Eastside. Licensed, insured, EPA Lead-Safe and backed by a 5-year workmanship warranty.",
  );

  return (
    <>
      <HomeHero />
      <TrustStrip />
      <ServicesPreview />
      <AboutPreview />
      <ProjectsPreview />
      <Reviews />
      <FinalCTA />
    </>
  );
}
