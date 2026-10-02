import { Container } from "../ui/Container";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  /** "tall" for pages that want a bit more presence (e.g. Projects); "compact" for lighter pages (e.g. Contact). */
  height?: "tall" | "compact";
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  height = "tall",
}: PageHeroProps) {
  const minHeight =
    height === "tall"
      ? "min-h-[380px] sm:min-h-[440px] lg:min-h-[520px]"
      : "min-h-[320px] sm:min-h-[360px] lg:min-h-[420px]";

  return (
    <section className={`relative flex items-end overflow-hidden bg-ink ${minHeight}`}>
      <div className="absolute inset-0">
        <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
      </div>

      <Container className="relative flex w-full flex-col items-start gap-3 pb-10 pt-32 sm:pb-12 sm:pt-36">
        {eyebrow ? (
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">{eyebrow}</span>
        ) : null}
        <h1 className="text-balance max-w-2xl font-display text-4xl font-black uppercase leading-[0.95] text-warm-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-xl text-balance text-base leading-relaxed text-warm-white/80 sm:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
