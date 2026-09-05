import badgeEpa from "../../assets/images/badge-epa-lead-safe.webp";
import badgeGoogle from "../../assets/images/badge-google-verified.webp";
import badgeLicensed from "../../assets/images/badge-licensed-insured.webp";
import badgeNextdoor from "../../assets/images/badge-nextdoor.webp";
import { Container } from "../ui/Container";

const badges = [
  { src: badgeGoogle, alt: "Google Verified" },
  { src: badgeEpa, alt: "EPA Lead-Safe Certified Firm" },
  { src: badgeLicensed, alt: "Licensed and Insured" },
  { src: badgeNextdoor, alt: "Nextdoor Neighborhood Favorite" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-ink/10 bg-warm-white py-8 sm:py-10" aria-label="Trust and certifications">
      <Container className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
        <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
          {badges.map((badge, index) => (
            <img
              key={badge.alt}
              src={badge.src}
              alt={badge.alt}
              loading="lazy"
              style={{ animationDelay: `${index * 90}ms` }}
              className="animate-fade-in h-11 w-11 object-contain sm:h-12 sm:w-12"
            />
          ))}
        </div>

        <p className="border-2 border-ink/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink/70">
          5-Year Workmanship Warranty
        </p>
      </Container>
    </section>
  );
}
