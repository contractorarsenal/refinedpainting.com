import { ChevronDown } from "lucide-react";
import { useState } from "react";

export interface AccordionItemData {
  question: string;
  answer: string;
}

/**
 * `id` is a unique, fixed prefix per Accordion on a page, passed in by the caller.
 * Not generated with useId() for the same reason as DotGrid: generated ids differ
 * between the prerendered HTML and client hydration.
 */
export function Accordion({ id, items }: { id: string; items: AccordionItemData[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = id;

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex min-h-17 w-full items-center justify-between gap-4 px-1 py-5 text-left"
              >
                <span className="font-display text-lg font-bold uppercase tracking-wide text-ink sm:text-xl">
                  {item.question}
                </span>
                <ChevronDown
                  className={`size-5 shrink-0 text-teal-dark transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-1 pb-6 pr-9 text-[15px] leading-relaxed text-ink/70">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
