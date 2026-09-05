import { Clock, MapPin, Phone } from "lucide-react";
import badgeEpa from "../../assets/images/badge-epa-lead-safe.webp";
import badgeGoogle from "../../assets/images/badge-google-verified.webp";
import badgeLicensed from "../../assets/images/badge-licensed-insured.webp";
import badgeNextdoor from "../../assets/images/badge-nextdoor.webp";
import wordmarkSrc from "../../assets/images/refined-painting-wordmark.webp";
import { business, CTA, serviceAreas } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { Mascot } from "../ui/Mascot";

const companyLinks = ["About", "Projects", "Process", "Warranty", "Blog", "Contact"];
const featuredAreas = serviceAreas.slice(0, 8);

export function Footer() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <footer className="bg-ink text-warm-white">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-8 lg:py-16">
        <div className="flex flex-col gap-5">
          <img src={wordmarkSrc} alt="Refined Painting" className="h-11 w-auto" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-warm-white/50">Contact Refined</h3>
          <LinkButton href={business.phoneHref} variant="secondary" size="lg" icon="phone" className="justify-center bg-warm-white/10 hover:bg-warm-white/20">
            {business.phone}
          </LinkButton>
          <Button onClick={openQuoteModal} size="md" className="justify-center">
            {CTA.primary}
          </Button>
        </div>

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

        <nav aria-label="Company">
          <h3 className="text-xs font-bold uppercase tracking-widest text-warm-white/50">About Us</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {companyLinks.map((link) => (
              <li key={link}>
                <a href="#top" className="text-sm font-medium text-warm-white/80 hover:text-warm-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-warm-white/50">Contact</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-warm-white/80">
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
          <Mascot variant="full" className="h-24 w-24 self-end opacity-90" />
        </div>
      </Container>

      <div className="border-t border-warm-white/10">
        <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-8">
          <img src={badgeGoogle} alt="Google Verified" className="h-12 w-12 object-contain" loading="lazy" />
          <img src={badgeEpa} alt="EPA Lead-Safe Certified Firm" className="h-12 w-12 object-contain" loading="lazy" />
          <img src={badgeLicensed} alt="Licensed and Insured" className="h-12 w-12 object-contain" loading="lazy" />
          <img src={badgeNextdoor} alt="Nextdoor Neighborhood Favorite" className="h-12 w-12 object-contain" loading="lazy" />
        </Container>
      </div>

      <div className="border-t border-warm-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-warm-white/50 sm:flex-row">
          <p>&copy; 2026 Refined Painting. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-warm-white/80">
              Privacy Policy
            </a>
            <a href="#top" className="hover:text-warm-white/80">
              Terms
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
