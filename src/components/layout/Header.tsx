import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import wordmarkSrc from "../../assets/images/refined-painting-wordmark.webp";
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
  { label: "About", href: "#why-refined" },
];

export function Header() {
  const scrolled = useScrolled(12);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <div className="sticky top-0 z-50">
        <UtilityBar />
        <header
          className={`border-b transition-[background-color,border-color,box-shadow] duration-300 ${
            scrolled
              ? "border-ink/10 bg-warm-white/95 shadow-card backdrop-blur"
              : "border-transparent bg-warm-white"
          }`}
        >
          <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
            <a href="#top" className="shrink-0 py-3">
              <img
                src={wordmarkSrc}
                alt="Refined Painting"
                className={`w-auto transition-[height] duration-300 ${scrolled ? "h-9" : "h-11"}`}
              />
            </a>

            <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-semibold text-ink/80 transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={business.phoneHref}
                className="hidden items-center gap-2 text-[15px] font-bold text-ink md:flex"
              >
                <Phone className="size-4 text-teal-dark" aria-hidden />
                {business.phone}
              </a>
              <Button onClick={openQuoteModal} size="md" icon="none" className="hidden sm:inline-flex">
                {CTA.primary}
              </Button>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="flex size-11 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
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
