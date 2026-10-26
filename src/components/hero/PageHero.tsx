import { business } from "../../lib/content";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  onEstimateClick?: () => void;
}

/** Shared centred header for /services/:slug detail pages. Title, short
 * description and the two primary actions only; the page's photography sits
 * further down the page where it can be read in context. */
export function PageHero({ eyebrow, title, description, onEstimateClick }: PageHeroProps) {
  return (
    <section className="bg-cream pb-12 pt-36 sm:pb-20 sm:pt-60 lg:pb-24">
      <Container className="flex flex-col items-center gap-5 text-center">
        {eyebrow ? (
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">{eyebrow}</span>
        ) : null}
        <h1 className="max-w-3xl text-balance font-display text-3xl font-black uppercase leading-[0.98] text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-xl text-balance text-sm leading-relaxed text-ink/65 sm:text-base">{description}</p>
        ) : null}
        <div className="mt-2 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row">
          {onEstimateClick ? (
            <Button onClick={onEstimateClick} size="md" className="w-full sm:w-auto">
              Get a Free Estimate
            </Button>
          ) : null}
          <LinkButton href={business.phoneHref} variant="outline-dark" size="md" icon="phone" className="w-full sm:w-auto">
            Call Now
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
