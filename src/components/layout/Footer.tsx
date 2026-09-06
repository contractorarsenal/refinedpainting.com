import { Clock, MapPin, Phone } from "lucide-react";
import badgeEpa from "../../assets/images/badge-epa-lead-safe.webp";
import badgeGoogle from "../../assets/images/badge-google-verified.webp";
import badgeLicensed from "../../assets/images/badge-licensed-insured.webp";
import badgeNextdoor from "../../assets/images/badge-nextdoor.webp";
import logoSrc from "../../assets/images/refined-painting-logo.webp";
import { business, CTA, serviceAreas } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { DotGrid } from "../ui/DotGrid";
import { Mascot } from "../ui/Mascot";

const companyLinks = [
  { label: "About", href: "#local-partner" },
  { label: "Our Work", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Warranty", href: "#faq" },
  { label: "Contact", href: "#quote-cta" },
];
const featuredAreas = serviceAreas.slice(0, 8);

export function Footer() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <footer className="relative overflow-hidden bg-ink-2 text-warm-white">
      <div className="relative h-1 w-full bg-teal-dark" aria-hidden>
        <span className="absolute left-0 top-0 h-full w-22.5 bg-crest" />
      </div>

      <DotGrid className="text-warm-white" />
      <Mascot
        variant="watermark"
        className="pointer-events-none absolute -bottom-8 right-[6%] hidden h-56 w-56 opacity-[0.15] lg:block"
      />

      <Container className="relative grid grid-cols-1 gap-10 pb-12 pt-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-10 lg:pt-20">
        <div className="flex flex-col gap-5">
          <img src={logoSrc} alt="Refined Painting" className="h-14 w-auto self-start object-contain" />
          <p className="max-w-56 text-sm text-warm-white/65">
            Professional painting for Seattle and the Eastside.
          </p>
          <LinkButton
            href={business.phoneHref}
            variant="secondary"
            size="lg"
            icon="phone"
            className="justify-center bg-warm-white/10 hover:bg-warm-white/20"
          >
            {business.phone}
          </LinkButton>
          <Button onClick={() => openQuoteModal()} size="md" className="justify-center">
            {CTA.primary}
          </Button>
        </div>

        <nav aria-label="Services">
          <h3 className="text-xs font-bold uppercase tracking-widest text-warm-white/50">Services</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {["Interior Painting", "Exterior Painting", "Cabinet Refinishing", "Commercial Painting", "Deck & Fence Staining", "Carpentry"].map(
              (label) => (
                <li key={label}>
                  <a href="#services" className="text-sm font-medium text-warm-white/80 hover:text-warm-white">
                    {label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <nav aria-label="Service areas">
          <h3 className="text-xs font-bold uppercase tracking-widest text-warm-white/50">Service Areas</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {featuredAreas.map((area) => (
              <li key={area}>
                <a href="#service-areas" className="text-sm font-medium text-warm-white/80 hover:text-warm-white">
                  {area}
                </a>
              </li>
            ))}
            <li>
              <a href="#service-areas" className="text-sm font-bold text-teal hover:text-teal/80">
                View All
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-8">
          <nav aria-label="Company">
            <h3 className="text-xs font-bold uppercase tracking-widest text-warm-white/50">Company</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-medium text-warm-white/80 hover:text-warm-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-2.5 text-sm text-warm-white/80">
            <span className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
              {business.address.street}, {business.address.city}, {business.address.state}{" "}
              {business.address.zip}
            </span>
            <span className="flex items-center gap-2.5">
              <Clock className="size-4 shrink-0 text-teal" aria-hidden />
              {business.hours}
            </span>
            <span className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-teal" aria-hidden />
              {business.phone}
            </span>
          </div>
        </div>
      </Container>

      <Container className="relative flex flex-col items-center gap-5 border-t border-warm-white/10 py-8">
        <span className="text-xs font-bold uppercase tracking-widest text-warm-white/45">
          Trusted &amp; Certified
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <img src={badgeGoogle} alt="Google Verified" className="h-14 w-14 object-contain" loading="lazy" />
          <img src={badgeEpa} alt="EPA Lead-Safe Certified Firm" className="h-14 w-14 object-contain" loading="lazy" />
          <img src={badgeLicensed} alt="Licensed and Insured" className="h-14 w-14 object-contain" loading="lazy" />
          <img src={badgeNextdoor} alt="Nextdoor Neighborhood Favorite" className="h-14 w-14 object-contain" loading="lazy" />
        </div>
      </Container>

      <Container className="relative flex flex-col items-center justify-between gap-3 border-t border-warm-white/10 py-6 text-xs text-warm-white/50 sm:flex-row">
        <p>&copy; 2026 Refined Painting. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms</span>
        </div>
      </Container>
    </footer>
  );
}
