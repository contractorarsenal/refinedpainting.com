import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

function isLinkActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();
  const { pathname } = useLocation();

  // Home's video hero needs white nav text even unscrolled; every other page
  // has a light (cream/warm-white) header underneath and needs ink text for
  // real contrast instead of relying on a text-shadow hack. Once scrolled,
  // the header itself goes solid navy everywhere, so white text is correct
  // again regardless of page.
  const isHome = pathname === "/";
  const dark = scrolled || isHome;
  // Text-shadow only earns its keep where nav text sits directly over real
  // imagery (Home's unscrolled video hero) — a solid navy bg needs no shadow.
  const overMedia = isHome && !scrolled;

  const navLinkClass = (href: string) => {
    const active = isLinkActive(pathname, href);
    return [
      "border-b-2 pb-0.5 text-sm font-bold uppercase tracking-wide transition-colors duration-300",
      dark ? "text-warm-white hover:text-teal" : "text-ink hover:text-crest",
      overMedia ? "[text-shadow:0_1px_4px_rgba(0,0,0,0.55)]" : "",
      active ? (dark ? "border-teal" : "border-crest") : "border-transparent",
    ]
      .filter(Boolean)
      .join(" ");
  };

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
                className={`flex size-11 items-center justify-center rounded border-2 transition-colors duration-300 ${
                  dark ? "border-warm-white/30 text-warm-white" : "border-ink/25 text-ink"
                }`}
              >
                <Menu className="size-5" aria-hidden />
              </button>
            </div>

            {/* Desktop: symmetrical, centered-logo layout */}
            <div className="hidden w-full grid-cols-[1fr_auto_1fr] items-center lg:grid">
              <nav className="flex items-center justify-end gap-8" aria-label="Primary">
                {navLeft.map((link) => (
                  <Link key={link.href} to={link.href} className={navLinkClass(link.href)}>
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
                  <Link key={link.href} to={link.href} className={navLinkClass(link.href)}>
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
