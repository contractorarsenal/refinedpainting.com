import heroImage from "../assets/images/projects/porch-yellow-door.webp";
import { PageHero } from "../components/hero/PageHero";
import { FinalCTA } from "../components/sections/FinalCTA";
import { LocalTrustedPartner } from "../components/sections/LocalTrustedPartner";
import { PNWDifference } from "../components/sections/PNWDifference";
import { Process } from "../components/sections/Process";
import { TrustStrip } from "../components/sections/TrustStrip";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function AboutPage() {
  useDocumentMeta(
    "About Refined Painting | Seattle & Eastside Painting Company",
    "Refined Painting is a licensed, insured and EPA Lead-Safe painting company serving Seattle and the Eastside, built around clear communication and careful prep.",
  );

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Refined Painting"
        description="Licensed, insured and EPA Lead-Safe, serving Seattle and the Eastside with clear communication and careful prep on every project."
        image={heroImage}
        imageAlt="Covered porch with a bold yellow front door"
      />
      <LocalTrustedPartner />
      <PNWDifference />
      <Process />
      <TrustStrip />
      <FinalCTA />
    </>
  );
}
