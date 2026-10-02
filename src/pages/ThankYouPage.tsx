import { Mascot } from "../components/ui/Mascot";
import { LinkButton } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { business } from "../lib/content";

export function ThankYouPage() {
  useDocumentMeta(
    "Thank You | Refined Painting",
    "Thanks for requesting a free estimate from Refined Painting. We'll be in touch soon.",
  );

  return (
    <section className="flex min-h-[70vh] items-center bg-cream pt-32">
      <Container className="mx-auto flex max-w-lg flex-col items-center gap-5 py-16 text-center">
        <Mascot variant="full" className="h-32 w-32" />
        <div>
          <h1 className="font-display text-4xl font-black uppercase leading-[0.95] text-ink sm:text-5xl">
            You're All Set.
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-ink/70">
            Thanks for reaching out to Refined Painting. Our team will review your project and contact
            you about the next step.
          </p>
        </div>
        <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <LinkButton href={business.phoneHref} variant="secondary" icon="phone" className="w-full sm:w-auto">
            Call Us Now
          </LinkButton>
          <LinkButton href="/" variant="outline-dark" icon="none" className="w-full sm:w-auto">
            Back to Home
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
