import { Menu } from "lucide-react";
import { useState } from "react";
import logoSrc from "../../assets/images/refined-painting-logo.webp";
import { useScrolled } from "../../hooks/useScrolled";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { MobileMenu } from "./MobileMenu";
import { UtilityBar } from "./UtilityBar";

const navLeft = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
];

const navRight = [{ label: "Process", href: "#process" }];

export function Header() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  const linkClass = scrolled
    ? "text-warm-white/75 hover:text-warm-white"
    : "text-ink/70 hover:text-ink";

  return (
    <>
      <div className="sticky top-0 z-50">
        <UtilityBar collapsed={scrolled} />
        <header
          className={`transition-colors duration-300 ${scrolled ? "bg-ink shadow-lift" : "bg-off-white"}`}
        >
          <div
            className={`mx-auto flex w-full max-w-7xl items-center px-5 transition-[height] duration-300 sm:px-8 lg:px-10 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Mobile / tablet: logo + menu button only */}
            <div className="flex w-full items-center justify-between lg:hidden">
              <a href="#top" className="shrink-0">
                <img src={logoSrc} alt="Refined Painting" className="h-10 w-auto object-contain" />
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className={`flex size-11 items-center justify-center rounded border-2 transition-colors duration-300 ${
                  scrolled ? "border-warm-white/25 text-warm-white" : "border-ink/15 text-ink"
                }`}
              >
                <Menu className="size-5" aria-hidden />
              </button>
            </div>

            {/* Desktop: symmetrical, centered-logo layout */}
            <div className="hidden w-full grid-cols-[1fr_auto_1fr] items-center lg:grid">
              <nav className="flex items-center justify-end gap-8" aria-label="Primary">
                {navLeft.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${linkClass}`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <a href="#top" className="justify-self-center px-8">
                <img
                  src={logoSrc}
                  alt="Refined Painting"
                  className={`w-auto object-contain transition-[height] duration-300 ${
                    scrolled ? "h-11" : "h-14"
                  }`}
                />
              </a>

              <nav className="flex items-center justify-start gap-8" aria-label="Secondary">
                {navRight.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${linkClass}`}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${
                    scrolled ? "text-teal hover:text-warm-white" : "text-teal-dark hover:text-ink"
                  }`}
                >
                  Free Estimate
                </button>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
