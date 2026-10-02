import { Container } from "../components/ui/Container";
import { LinkButton } from "../components/ui/Button";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function NotFoundPage() {
  useDocumentMeta("Page Not Found | Refined Painting", "The page you're looking for doesn't exist.");

  return (
    <section className="flex min-h-[60vh] items-center bg-ink pt-32">
      <Container className="flex flex-col items-start gap-5 py-16 text-left">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">404</span>
        <h1 className="font-display text-4xl font-black uppercase leading-[0.95] text-warm-white sm:text-5xl">
          Page Not Found
        </h1>
        <p className="max-w-md text-base leading-relaxed text-warm-white/70">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <LinkButton href="/" variant="primary">
          Back to Home
        </LinkButton>
      </Container>
    </section>
  );
}
