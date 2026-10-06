import { business } from "../../lib/content";
import { Button, LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  placeholderLabel?: string;
  onEstimateClick?: () => void;
}

/** Shared split header for /services/:slug detail pages only. Image area is an
 * intentional placeholder until real per-service photography is shot. */
export function PageHero({
  eyebrow,
  title,
  description,
  placeholderLabel = "Service Image",
  onEstimateClick,
}: PageHeroProps) {
  return (
    <section className="bg-cream pb-16 pt-36 sm:pb-20 sm:pt-60 lg:pb-24">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div className="flex flex-col items-start gap-4">
          {eyebrow ? (
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">{eyebrow}</span>
          ) : null}
          <h1 className="text-balance font-display text-3xl font-black uppercase leading-[0.98] text-ink sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="max-w-md text-balance text-sm leading-relaxed text-ink/65 sm:text-base">
              {description}
            </p>
          ) : null}
          <div className="mt-1 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            {onEstimateClick ? (
              <Button onClick={onEstimateClick} size="md" className="w-full sm:w-auto">
                Get a Free Estimate
              </Button>
            ) : null}
            <LinkButton href={business.phoneHref} variant="outline-dark" size="md" icon="phone" className="w-full sm:w-auto">
              Call Now
            </LinkButton>
          </div>
        </div>

        <ImagePlaceholder label={placeholderLabel} aspectClassName="aspect-4/3" className="max-w-md lg:justify-self-end" />
      </Container>
    </section>
  );
}
