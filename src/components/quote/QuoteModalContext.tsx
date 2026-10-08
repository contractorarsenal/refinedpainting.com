import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import type { ServiceSelection } from "./quoteState";
import { QuoteModal } from "./QuoteModal";

interface QuoteModalContextValue {
  isOpen: boolean;
  presetService: ServiceSelection | null;
  openQuoteModal: (presetService?: ServiceSelection) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetService, setPresetService] = useState<ServiceSelection | null>(null);
  // Captured synchronously inside the click handler that opens the modal —
  // step 1's ZIP input has `autoFocus`, and effects fire child-first, so by
  // the time the modal's own effect could read document.activeElement, that
  // autoFocus has already stolen it. Capturing it here, before any of that
  // happens, is what lets focus correctly return to the real trigger on close.
  const triggerRef = useRef<HTMLElement | null>(null);

  const openQuoteModal = useCallback((service?: ServiceSelection) => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setPresetService(service ?? null);
    setIsOpen(true);
  }, []);
  const closeQuoteModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, presetService, openQuoteModal, closeQuoteModal }),
    [isOpen, presetService, openQuoteModal, closeQuoteModal],
  );

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
      <QuoteModal isOpen={isOpen} presetService={presetService} onClose={closeQuoteModal} triggerRef={triggerRef} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  return ctx;
}
