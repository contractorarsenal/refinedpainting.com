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
    <section className="border-b border-ink/10 bg-warm-white py-6" aria-label="Trust and certifications">
      <Container className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-8">
        <div className="flex items-center gap-2.5">
          <Stars />
          <p className="text-sm font-bold text-ink">
            {business.rating} Google Rating <span className="font-medium text-ink/50">• {business.reviewCount} Reviews</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {badges.map((badge) => (
            <img key={badge.alt} src={badge.src} alt={badge.alt} className="h-11 w-11 object-contain sm:h-12 sm:w-12" loading="lazy" />
          ))}
        </div>

        <p className="border-2 border-ink/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink/70">
          5-Year Workmanship Warranty
        </p>
      </Container>
    </section>
  );
}
