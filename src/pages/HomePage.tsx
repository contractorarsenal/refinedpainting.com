import { HomeHero } from "../components/hero/HomeHero";
import { FinalCTA } from "../components/sections/FinalCTA";
import { HomeownerProblem } from "../components/sections/HomeownerProblem";
import { ProcessCondensed } from "../components/sections/ProcessCondensed";
import { ProjectsPreview } from "../components/sections/ProjectsPreview";
import { Reviews } from "../components/sections/Reviews";
import { ServiceAreaSummary } from "../components/sections/ServiceAreaSummary";
import { ServicesPreview } from "../components/sections/ServicesPreview";
import { TrustStrip } from "../components/sections/TrustStrip";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function HomePage() {
  useDocumentMeta(
    "Seattle Painting Company | Interior & Exterior Painters | Refined Painting",
    "Refined Painting provides professional interior, exterior and cabinet painting across Seattle and the Eastside. Licensed, insured, EPA Lead-Safe and backed by a 5-year workmanship warranty.",
  );

  return (
    <>
      {/* F1 — What does Refined Painting do? */}
      <HomeHero />
      {/* F2 — Are these people legitimate? */}
      <TrustStrip eyebrow="Proven. Local. Professional." />
      {/* F3 — Why would I need a better contractor? */}
      <HomeownerProblem />
      {/* F4 — Can they do what I need? */}
      <ServicesPreview />
      {/* F5 — Can they actually deliver? */}
      <ProjectsPreview />
      {/* F6 — What happens if I contact them? */}
      <ProcessCondensed />
      {/* F7 — Do other homeowners agree? */}
      <Reviews />
      {/* F9 — Do they serve me, and what do I do next? */}
      <ServiceAreaSummary />
      <FinalCTA />
    </>
  );
}
