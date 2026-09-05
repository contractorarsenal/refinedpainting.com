import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useQuoteModal } from "../quote/QuoteModalContext";
import { PromoPopup } from "./PromoPopup";

const DISMISSED_KEY = "refinedPainting.promoPopupDismissed";

function readDismissed() {
  try {
    return sessionStorage.getItem(DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

function writeDismissed() {
  try {
    sessionStorage.setItem(DISMISSED_KEY, "1");
  } catch {
    // sessionStorage unavailable (private mode etc.) — popup just won't persist dismissal.
  }
}

interface PromoPopupContextValue {
  closePromoPopup: () => void;
}

const PromoPopupContext = createContext<PromoPopupContextValue | null>(null);

export function PromoPopupProvider({ children }: { children: ReactNode }) {
  const { isOpen: quoteOpen } = useQuoteModal();
  const [dismissed, setDismissed] = useState(readDismissed);
  const [wantsToShow, setWantsToShow] = useState(false);

  // isOpen is fully derived: show once triggered, unless the quote modal is
  // open or the popup has already been dismissed this session.
  const isOpen = wantsToShow && !quoteOpen && !dismissed;

  // Trigger after a 12-18s dwell OR 40-50% scroll depth, whichever comes first.
  useEffect(() => {
    if (dismissed) return;
    const delay = 12000 + Math.random() * 6000;
    const timer = window.setTimeout(() => setWantsToShow(true), delay);

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const fraction = window.scrollY / scrollable;
      if (fraction >= 0.45) setWantsToShow(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [dismissed]);

  // If the user opens the booking flow, they're already converting — retire the promo for this session.
  useEffect(() => {
    if (quoteOpen) {
      setDismissed(true);
      writeDismissed();
    }
  }, [quoteOpen]);

  const closePromoPopup = () => {
    setDismissed(true);
    writeDismissed();
  };

  const value = useMemo(() => ({ closePromoPopup }), []);

  return (
    <PromoPopupContext.Provider value={value}>
      {children}
      <PromoPopup isOpen={isOpen} onClose={closePromoPopup} />
    </PromoPopupContext.Provider>
  );
}

export function usePromoPopup() {
  const ctx = useContext(PromoPopupContext);
  if (!ctx) throw new Error("usePromoPopup must be used within a PromoPopupProvider");
  return ctx;
}
