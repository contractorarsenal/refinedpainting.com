import { Phone, X } from "lucide-react";
import { useEffect } from "react";
import { business, CTA } from "../../lib/content";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { Button } from "../ui/Button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "About", href: "#local-partner" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { openQuoteModal } = useQuoteModal();
  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-90 bg-ink/60 backdrop-blur-sm lg:hidden" onClick={onClose}>
      <div
        className="ml-auto flex h-full w-[86%] max-w-sm animate-fade-up flex-col bg-warm-white shadow-lift"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-ink/10 bg-ink px-5 py-4">
          <span className="font-display text-lg font-extrabold uppercase tracking-wide text-warm-white">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex size-9 items-center justify-center rounded text-warm-white/70 hover:bg-warm-white/10 hover:text-warm-white"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto px-3 py-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="border-b border-ink/8 px-3 py-4 font-display text-xl font-extrabold uppercase tracking-wide text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 border-t border-ink/10 p-5">
          <a
            href={business.phoneHref}
            className="flex items-center justify-center gap-2 rounded border-2 border-ink/15 px-5 py-3.5 text-base font-bold text-ink"
          >
            <Phone className="size-4" aria-hidden />
            {business.phone}
          </a>
          <Button
            onClick={() => {
              onClose();
              openQuoteModal();
            }}
            size="lg"
            className="w-full justify-center"
          >
            {CTA.primary}
          </Button>
        </div>
      </div>
    </div>
  );
}
