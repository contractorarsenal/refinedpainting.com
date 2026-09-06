import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import logoSrc from "../../assets/images/refined-painting-logo.webp";
import { useScrolled } from "../../hooks/useScrolled";
import { business, CTA } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";
import { UtilityBar } from "./UtilityBar";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "About", href: "#local-partner" },
];

export function Header() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <div className="sticky top-0 z-50">
        <UtilityBar />
        <header
          className={`border-b transition-colors duration-300 ${
            scrolled ? "border-warm-white/10 bg-ink shadow-lift" : "border-ink/10 bg-warm-white"
          }`}
        >
          <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
            <a href="#top" className="shrink-0">
              <img
                src={logoSrc}
                alt="Refined Painting"
                className="h-11 w-auto object-contain sm:h-12"
              />
            </a>

            <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${
                    scrolled ? "text-warm-white/80 hover:text-warm-white" : "text-ink/75 hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={business.phoneHref}
                className={`hidden items-center gap-2 rounded border-2 px-3 py-2 text-sm font-bold transition-colors duration-300 md:flex ${
                  scrolled ? "border-warm-white/25 text-warm-white" : "border-ink/15 text-ink"
                }`}
              >
                <Phone className={`size-4 ${scrolled ? "text-teal" : "text-teal-dark"}`} aria-hidden />
                {business.phone}
              </a>
              <Button onClick={() => openQuoteModal()} size="md" icon="none" className="hidden sm:inline-flex">
                {CTA.primary}
              </Button>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className={`flex size-11 items-center justify-center rounded border-2 transition-colors duration-300 lg:hidden ${
                  scrolled ? "border-warm-white/25 text-warm-white" : "border-ink/15 text-ink"
                }`}
              >
                <Menu className="size-5" aria-hidden />
              </button>
            </div>
          </div>
        </header>
      </div>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
