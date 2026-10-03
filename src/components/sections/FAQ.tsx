import { faqs } from "../../lib/content";
import { Accordion } from "../ui/Accordion";
import { Container } from "../ui/Container";

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-ink/10 bg-warm-white py-16 sm:py-20 lg:py-28">
      <Container className="mx-auto max-w-3xl">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Common Questions</span>
          <span className="mt-3 h-1 w-12 bg-crest" aria-hidden />
          <h2 className="mt-5 text-balance font-display text-4xl font-extrabold uppercase leading-[0.98] text-ink sm:text-5xl">
            Questions Before You Hire a Painter?
          </h2>
        </div>
        <div className="mt-14">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
