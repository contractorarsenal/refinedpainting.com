import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
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

  const openQuoteModal = useCallback((service?: ServiceSelection) => {
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
      <QuoteModal isOpen={isOpen} presetService={presetService} onClose={closeQuoteModal} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  return ctx;
}
