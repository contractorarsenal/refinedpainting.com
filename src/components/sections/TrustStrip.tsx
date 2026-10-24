import badgeEpa from "../../assets/images/badge-epa-lead-safe.webp";
import badgeGoogle from "../../assets/images/badge-google-verified.webp";
import badgeLicensed from "../../assets/images/badge-licensed-insured.webp";
import badgeNextdoor from "../../assets/images/badge-nextdoor.webp";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

// Captions reuse claims already published on the site (see content.ts certifications).
const badges = [
  { src: badgeGoogle, alt: "Google Verified badge", label: "Google Verified" },
  { src: badgeEpa, alt: "EPA Lead-Safe Certified Firm badge", label: "EPA Lead-Safe Certified" },
  { src: badgeLicensed, alt: "Licensed and Insured badge", label: "Licensed & Insured" },
  { src: badgeNextdoor, alt: "Nextdoor Neighborhood Favorite badge", label: "Nextdoor Neighborhood Favorite" },
];

export function TrustStrip({ eyebrow }: { eyebrow?: string }) {
  return (
    <section className="border-b border-ink/10 bg-warm-white py-8 sm:py-10" aria-label="Trust and certifications">
      <Container className="flex flex-col items-center gap-6">
        {eyebrow ? (
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-crest" aria-hidden />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-ink/50">{eyebrow}</span>
            <span className="h-px w-8 bg-crest" aria-hidden />
          </div>
        ) : null}
        <Reveal className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
          <ul className="grid w-full max-w-3xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-8">
            {badges.map((badge) => (
              <li key={badge.label} className="flex flex-col items-center gap-3 text-center">
                <img
                  src={badge.src}
                  alt={badge.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                />
                <span className="text-xs font-bold uppercase tracking-wide text-ink/75">{badge.label}</span>
              </li>
            ))}
          </ul>

          <p className="border-2 border-ink/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink/70">
            5-Year Workmanship Warranty
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
