import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Mascot } from "../components/ui/Mascot";
import { LinkButton } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { usePageSEO } from "../hooks/usePageSEO";
import { trackGenerateLead } from "../lib/analytics";
import { business, SITE_URL } from "../lib/content";

export function ThankYouPage() {
  const [searchParams] = useSearchParams();

  usePageSEO({
    title: "Thank You | Refined Painting",
    description: "Thanks for requesting a free estimate from Refined Painting. We'll be in touch soon.",
    canonical: `${SITE_URL}/thank-you`,
    noindex: true,
  });

  // /thank-you is only ever reached via Web3Forms' own server-side redirect
  // after it confirms a submission — there's no other link to this page
  // anywhere in the app (confirmed: only ContactForm.tsx and QuoteModal.tsx
  // reference it, both as the hidden `redirect` field). That makes landing
  // here itself the success signal; form_type/service/lead come from the
  // query string each form stamps onto its own redirect URL.
  useEffect(() => {
    const formType = searchParams.get("form_type");
    if (formType !== "contact" && formType !== "quote") return;
    trackGenerateLead({
      form_type: formType,
      service: searchParams.get("service") ?? undefined,
      nonce: searchParams.get("lead"),
    });
    // Only ever needs to run once per mount — re-running on searchParams
    // identity changes would risk re-firing for no reason.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
