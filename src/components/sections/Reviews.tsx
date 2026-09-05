import { Quote } from "lucide-react";
import { business, testimonials } from "../../lib/content";
import { Container } from "../ui/Container";
import { LinkButton } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import { Stars } from "../ui/Stars";

export function Reviews() {
  return (
    <section className="bg-warm-white py-20 sm:py-24">
      <Container className="flex flex-col items-center gap-4 text-center">
        <SectionHeading
          align="center"
          eyebrow="What Your Neighbors Are Saying"
          title={`${business.reviewCount} Reviews. One Reputation We Protect.`}
        />
        <div className="flex items-center gap-2.5">
          <Stars />
          <span className="text-base font-bold text-ink">{business.rating} Google Rating</span>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.quote}
              className="flex flex-col gap-4 rounded-3xl border border-ink/8 bg-off-white p-7 shadow-card"
            >
              <Quote className="size-7 text-teal-dark" aria-hidden />
              <blockquote className="flex-1 text-[15px] leading-relaxed text-ink/80">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="flex items-center justify-between">
                <Stars />
                <span className="text-xs font-semibold uppercase tracking-wide text-ink/45">
                  {testimonial.source}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <LinkButton href="#top" variant="ghost" icon="arrow" className="mt-4">
          Read More Reviews
        </LinkButton>
      </Container>
    </section>
  );
}
