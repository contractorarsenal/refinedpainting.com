import { MessageCircle, Phone, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { business } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";

export function FloatingContactButton() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="fixed bottom-5 right-5 z-30 hidden sm:block">
      {open ? (
        <div className="absolute bottom-14 right-0 flex w-52 flex-col overflow-hidden rounded border-2 border-ink/10 bg-warm-white shadow-lift">
          <a
            href={business.phoneHref}
            className="flex items-center gap-3 border-b border-ink/8 px-4 py-3.5 text-sm font-bold text-ink hover:bg-off-white"
          >
            <Phone className="size-4 text-teal-dark" aria-hidden />
            Call Us
          </a>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openQuoteModal();
            }}
            className="flex items-center gap-3 px-4 py-3.5 text-left text-sm font-bold text-ink hover:bg-off-white"
          >
            <Send className="size-4 text-teal-dark" aria-hidden />
            Get a Quote
          </button>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        className="flex size-12 items-center justify-center rounded-full bg-teal-dark text-warm-white shadow-card transition-colors hover:bg-ink"
      >
        {open ? <X className="size-5" aria-hidden /> : <MessageCircle className="size-5" aria-hidden />}
      </button>
    </div>
  );
}
