import { Link } from "react-router-dom";
import { Accordion } from "../components/ui/Accordion";
import { Breadcrumbs } from "../components/blog/Breadcrumbs";
import { FinalCTA } from "../components/sections/FinalCTA";
import { LinkButton } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { useQuoteModal } from "../components/quote/QuoteModalContext";
import { usePageSEO } from "../hooks/usePageSEO";
import { business, faqs, serviceSlugs, SITE_URL } from "../lib/content";

const relatedServiceLinks = [
  { label: "Interior Painting", href: `/services/${serviceSlugs.interior}` },
  { label: "Exterior Painting", href: `/services/${serviceSlugs.exterior}` },
  { label: "Cabinet Refinishing", href: `/services/${serviceSlugs.cabinets}` },
];

export function FaqPage() {
  const { openQuoteModal } = useQuoteModal();
  const canonical = `${SITE_URL}/faq`;

  usePageSEO({
    title: "Frequently Asked Questions | Refined Painting",
    description:
      "Answers to common questions about estimates, pricing, timelines, warranty coverage, and what to expect from Refined Painting in Seattle and the Eastside.",
    canonical,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "FAQ", item: canonical },
        ],
      },
    ],
  });

  return (
    <>
      <section className="bg-cream pb-10 pt-28 sm:pt-32 lg:pb-12 lg:pt-36">
        <Container className="max-w-2xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          <Reveal className="mt-6">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Common Questions</span>
            <h1 className="mt-3 text-balance font-display text-4xl font-black uppercase leading-[0.96] text-ink sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-ink/70 sm:text-lg">
              Straight answers about estimates, pricing, timelines, and what to expect when you work with
              Refined Painting.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-cream-light py-12 sm:py-16 lg:py-20">
        <Container className="max-w-3xl">
          <div className="border border-ink/10 bg-cream px-5 sm:px-6">
            <Accordion items={faqs} />
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink/40">
                Related Services
              </span>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                {relatedServiceLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-semibold text-teal-dark underline decoration-teal-dark/30 underline-offset-2 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-ink/10 pt-8 sm:flex-row">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="inline-flex items-center justify-center gap-2 rounded bg-crest px-7 py-4 font-display text-base font-extrabold uppercase tracking-wide text-warm-white transition-colors hover:bg-ink"
            >
              Get a Free Estimate
            </button>
            <LinkButton href={business.phoneHref} variant="outline-dark" size="lg" icon="phone">
              Call Now
            </LinkButton>
          </div>
        </Container>
      </section>

      <FinalCTA tone="navy" />
    </>
  );
}
