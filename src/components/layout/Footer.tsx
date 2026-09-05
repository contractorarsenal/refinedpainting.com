import { Clock, MapPin, Phone } from "lucide-react";
import badgeEpa from "../../assets/images/badge-epa-lead-safe.webp";
import badgeGoogle from "../../assets/images/badge-google-verified.webp";
import badgeLicensed from "../../assets/images/badge-licensed-insured.webp";
import badgeNextdoor from "../../assets/images/badge-nextdoor.webp";
import wordmarkSrc from "../../assets/images/refined-painting-wordmark.webp";
import { business, services } from "../../lib/content";
import { Container } from "../ui/Container";

const companyLinks = ["About", "Projects", "Process", "Warranty", "Blog", "Contact"];
const featuredAreas = ["Seattle", "Bellevue", "Kirkland", "Redmond", "Sammamish", "Bothell"];

export function Footer() {
  return (
    <footer className="bg-ink text-warm-white">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="flex flex-col gap-5">
          <img src={wordmarkSrc} alt="Refined Painting" className="h-11 w-auto" />
          <p className="max-w-xs text-sm leading-relaxed text-warm-white/70">
            High-end interior and exterior painting with clear communication and meticulous prep, serving
            homeowners across Seattle and the Eastside.
          </p>
          <div className="flex flex-col gap-2.5 text-sm text-warm-white/80">
            <a href={business.phoneHref} className="flex items-center gap-2.5 font-semibold text-warm-white">
              <Phone className="size-4 text-teal" aria-hidden />
              {business.phone}
            </a>
            <span className="flex items-center gap-2.5">
              <Clock className="size-4 shrink-0 text-teal" aria-hidden />
              {business.hours}
            </span>
            <span className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
              {business.address.street}, {business.address.city}, {business.address.state}{" "}
              {business.address.zip}
            </span>
          </div>
        </div>

        <nav aria-label="Services">
          <h3 className="text-sm font-bold uppercase tracking-widest text-warm-white/50">Services</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {services.map((service) => (
              <li key={service.id}>
                <a href="#services" className="text-sm text-warm-white/80 hover:text-warm-white">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Service areas">
          <h3 className="text-sm font-bold uppercase tracking-widest text-warm-white/50">Service Areas</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {featuredAreas.map((area) => (
              <li key={area}>
                <a href="#service-areas" className="text-sm text-warm-white/80 hover:text-warm-white">
                  {area}
                </a>
              </li>
            ))}
            <li>
              <a href="#service-areas" className="text-sm font-semibold text-teal hover:text-teal/80">
                View All
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Company">
          <h3 className="text-sm font-bold uppercase tracking-widest text-warm-white/50">Company</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {companyLinks.map((link) => (
              <li key={link}>
                <a href="#top" className="text-sm text-warm-white/80 hover:text-warm-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div className="border-t border-warm-white/10">
        <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-8">
          <img src={badgeGoogle} alt="Google Verified" className="h-14 w-14 object-contain" loading="lazy" />
          <img src={badgeEpa} alt="EPA Lead-Safe Certified Firm" className="h-14 w-14 object-contain" loading="lazy" />
          <img src={badgeLicensed} alt="Licensed and Insured" className="h-14 w-14 object-contain" loading="lazy" />
          <img src={badgeNextdoor} alt="Nextdoor Neighborhood Favorite" className="h-14 w-14 object-contain" loading="lazy" />
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
