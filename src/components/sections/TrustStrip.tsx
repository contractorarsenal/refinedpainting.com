import badgeEpa from "../../assets/images/badge-epa-lead-safe.webp";
import badgeGoogle from "../../assets/images/badge-google-verified.webp";
import badgeLicensed from "../../assets/images/badge-licensed-insured.webp";
import badgeNextdoor from "../../assets/images/badge-nextdoor.webp";
import { business } from "../../lib/content";
import { Container } from "../ui/Container";
import { Stars } from "../ui/Stars";

const badges = [
  { src: badgeGoogle, alt: "Google Verified" },
  { src: badgeEpa, alt: "EPA Lead-Safe Certified Firm" },
  { src: badgeLicensed, alt: "Licensed and Insured" },
  { src: badgeNextdoor, alt: "Nextdoor Neighborhood Favorite" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-ink/8 bg-off-white py-8 sm:py-10" aria-label="Trust and certifications">
      <Container className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-10">
        <div className="flex flex-col items-center gap-1.5 lg:items-start">
          <Stars />
          <p className="text-sm font-bold text-ink">
            {business.rating} Google Rating <span className="font-medium text-ink/50">• {business.reviewCount} Reviews</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10">
          {badges.map((badge) => (
            <img key={badge.alt} src={badge.src} alt={badge.alt} className="h-12 w-12 object-contain sm:h-14 sm:w-14" loading="lazy" />
          ))}
        </div>

        <p className="rounded-full border border-ink/10 bg-warm-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-ink/70">
          5-Year Workmanship Warranty
        </p>
      </Container>
    </section>
  );
}
