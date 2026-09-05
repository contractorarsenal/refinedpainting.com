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
  { label: "About", href: "#why-refined" },
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
    <div className="fixed inset-0 z-[90] bg-ink/50 backdrop-blur-sm lg:hidden" onClick={onClose}>
      <div
        className="ml-auto flex h-full w-[86%] max-w-sm animate-fade-up flex-col bg-warm-white shadow-lift"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <span className="text-sm font-bold uppercase tracking-[0.14em] text-ink/60">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex size-9 items-center justify-center rounded-full text-ink/60 hover:bg-ink/5"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-xl px-3 py-3.5 text-lg font-semibold text-ink hover:bg-ink/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 border-t border-ink/10 p-5">
          <a
            href={business.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-3.5 text-base font-semibold text-ink"
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
