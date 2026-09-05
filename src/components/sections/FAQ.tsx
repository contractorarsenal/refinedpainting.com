import { faqs } from "../../lib/content";
import { Accordion } from "../ui/Accordion";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function FAQ() {
  return (
    <section className="bg-warm-white py-20 sm:py-24">
      <Container className="mx-auto max-w-3xl">
        <SectionHeading align="center" eyebrow="Common Questions" title="Questions Before You Hire a Painter?" />
        <div className="mt-12">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
