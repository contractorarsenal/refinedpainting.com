import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoSrc from "../../assets/images/refined-painting-logo.webp";
import { useScrolled } from "../../hooks/useScrolled";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { MobileMenu } from "./MobileMenu";
import { UtilityBar } from "./UtilityBar";

const navLeft = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

const navRight = [
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <UtilityBar collapsed={scrolled} />
        <header
          className={`transition-colors duration-300 ${scrolled ? "bg-ink shadow-lift" : "bg-transparent"}`}
        >
          <div
            className={`mx-auto flex w-full max-w-7xl items-center px-5 transition-[height] duration-300 sm:px-8 lg:px-10 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Mobile / tablet: logo + menu button only */}
            <div className="flex w-full items-center justify-between lg:hidden">
              <Link to="/" className="shrink-0">
                <img src={logoSrc} alt="Refined Painting" className="h-10 w-auto object-contain" />
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="flex size-11 items-center justify-center rounded border-2 border-warm-white/30 text-warm-white transition-colors duration-300"
              >
                <Menu className="size-5" aria-hidden />
              </button>
            </div>

            {/* Desktop: symmetrical, centered-logo layout */}
            <div className="hidden w-full grid-cols-[1fr_auto_1fr] items-center lg:grid">
              <nav className="flex items-center justify-end gap-8" aria-label="Primary">
                {navLeft.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-bold uppercase tracking-wide text-warm-white transition-colors duration-300 [text-shadow:0_1px_4px_rgba(0,0,0,0.55)] hover:text-teal"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <Link to="/" className="justify-self-center px-8">
                <img
                  src={logoSrc}
                  alt="Refined Painting"
                  className={`w-auto object-contain transition-[height] duration-300 ${
                    scrolled ? "h-11" : "h-14"
                  }`}
                />
              </Link>

              <nav className="flex items-center justify-start gap-8" aria-label="Secondary">
                {navRight.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-bold uppercase tracking-wide text-warm-white transition-colors duration-300 [text-shadow:0_1px_4px_rgba(0,0,0,0.55)] hover:text-teal"
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="rounded bg-crest px-4 py-2 text-sm font-bold uppercase tracking-wide text-warm-white shadow-sm transition-colors duration-300 hover:bg-ink"
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
