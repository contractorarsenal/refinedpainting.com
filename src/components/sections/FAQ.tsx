import { faqs } from "../../lib/content";
import { Accordion } from "../ui/Accordion";
import { Container } from "../ui/Container";

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-cream py-16 sm:py-20 lg:py-28">
      <Container className="mx-auto max-w-3xl">
        <h2 className="text-balance text-center font-display text-4xl font-extrabold uppercase leading-[0.98] text-ink sm:text-5xl">
          Questions Before You Hire a Painter?
        </h2>
        <div className="mt-14">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
