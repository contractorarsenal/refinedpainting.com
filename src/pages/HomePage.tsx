import { HomeHero } from "../components/hero/HomeHero";
import { AboutPreview } from "../components/sections/AboutPreview";
import { FinalCTA } from "../components/sections/FinalCTA";
import { ProcessCondensed } from "../components/sections/ProcessCondensed";
import { ProjectsPreview } from "../components/sections/ProjectsPreview";
import { Reviews } from "../components/sections/Reviews";
import { ServiceAreaSummary } from "../components/sections/ServiceAreaSummary";
import { ServicesPreview } from "../components/sections/ServicesPreview";
import { TrustStrip } from "../components/sections/TrustStrip";
import { WhyChooseRefined } from "../components/sections/WhyChooseRefined";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function HomePage() {
  useDocumentMeta(
    "Seattle Painting Company | Interior & Exterior Painters | Refined Painting",
    "Refined Painting provides professional interior, exterior, cabinet and commercial painting across Seattle and the Eastside. Licensed, insured, EPA Lead-Safe and backed by a 5-year workmanship warranty.",
  );

  return (
    <>
      <HomeHero />
      <TrustStrip eyebrow="Proven. Local. Professional." />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseRefined />
      <ProjectsPreview />
      <ProcessCondensed />
      <Reviews />
      <ServiceAreaSummary />
      <FinalCTA />
    </>
  );
}
