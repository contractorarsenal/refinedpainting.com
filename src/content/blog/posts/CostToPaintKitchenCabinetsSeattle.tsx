import { useQuoteModal } from "../../../components/quote/QuoteModalContext";
import {
  ArticleCallout,
  ArticleH2,
  ArticleInlineCTA,
  ArticleLink,
  ArticleList,
  ArticleP,
} from "../../../components/blog/ArticleContent";

export function CostToPaintKitchenCabinetsSeattle() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <ArticleCallout type="answer">
        <p>
          Cabinet refinishing pricing depends heavily on the number of doors and drawers, your cabinets'
          current condition, and the finish you choose. There's no honest flat rate we can quote without
          seeing your kitchen, which is why your actual price depends on a project-specific estimate
          rather than a number pulled from a general price list.
        </p>
      </ArticleCallout>

      <ArticleH2>Why Cabinet Pricing Varies So Much</ArticleH2>
      <ArticleP>
        Two kitchens with a similar number of cabinets can price very differently. A kitchen with
        well-maintained cabinets in good condition is a different project than one with years of grease
        buildup, chipped finish, or water damage near the sink. The layout matters too: an open kitchen
        with standard cabinet boxes is more straightforward than one with extensive trim, glass-front
        doors, or hard-to-access upper cabinets.
      </ArticleP>
      <ArticleP>
        Rather than guess at a number that won't apply to your kitchen, here's what actually drives the
        cost.
      </ArticleP>

      <ArticleH2 id="cost-factors">What Affects Cabinet Refinishing Cost</ArticleH2>
      <ArticleList
        items={[
          <>
            <strong className="text-ink">Number of doors and drawers.</strong> This is usually the biggest
            factor. More pieces means more surfaces to clean, sand, prime, and coat.
          </>,
          <>
            <strong className="text-ink">Current condition.</strong> Grease buildup, chipped finish, or
            water damage all require more prep work than cabinets in good shape.
          </>,
          <>
            <strong className="text-ink">Wood species and surface type.</strong> Different materials accept
            primer and coatings differently, which can affect the prep process.
          </>,
          <>
            <strong className="text-ink">Grain filling.</strong> Open-grain woods sometimes need grain
            filling for a smooth, factory-quality finish, which adds time.
          </>,
          <>
            <strong className="text-ink">Spraying vs. brushing.</strong> A sprayed finish typically delivers
            a smoother, more durable result than brushing, and the approach affects both setup time and
            job-site preparation.
          </>,
          <>
            <strong className="text-ink">Layout complexity.</strong> Islands, glass-front doors, open
            shelving, and hard-to-access upper cabinets all add time compared to a straightforward layout.
          </>,
        ]}
      />

      <ArticleH2 id="whats-involved">What's Actually Involved in Professional Cabinet Refinishing</ArticleH2>
      <ArticleP>
        Cabinets take more daily wear than almost any other painted surface in a home, so the process has
        to be more involved than standard wall painting. A proper cabinet refinishing project includes
        deep cleaning and degreasing, precision sanding, high-adhesion priming, and a premium cabinet-grade
        coating, along with coordinating doors, drawers, and hardware so everything goes back together
        correctly. Skipping any of those steps is one of the fastest ways to end up with peeling or
        chipping down the road.
      </ArticleP>

      <ArticleH2 id="refinish-vs-replace">Refinishing vs. Replacing</ArticleH2>
      <ArticleP>
        For many homeowners, cabinet refinishing offers the best balance of cost, convenience, and
        results compared to a full cabinet replacement. It lets you change your kitchen's entire color
        scheme, including a full color change, without the cost and disruption of a remodel. Most cabinet
        refinishing projects take several days to a week, and when done correctly, the resulting finish is
        extremely durable under daily kitchen use.
      </ArticleP>

      <ArticleCallout type="ask">
        <p>Questions worth asking when comparing cabinet refinishing quotes:</p>
        <ul className="flex flex-col gap-1.5">
          <li>Is the finish sprayed or brushed, and what coating is used?</li>
          <li>Does the quote include degreasing and sanding, or just a top coat?</li>
          <li>How is hardware handled, and is it included in the price?</li>
          <li>What does the warranty cover on a refinished finish?</li>
        </ul>
      </ArticleCallout>

      <ArticleInlineCTA onClick={() => openQuoteModal("cabinets")} label="Request a Cabinet Estimate">
        Want a price specific to your kitchen?
      </ArticleInlineCTA>

      <ArticleH2 id="next-step">Getting a Price for Your Specific Kitchen</ArticleH2>
      <ArticleP>
        The only way to get an accurate number is to have us walk your kitchen in person. We'll count
        doors and drawers, assess condition, and follow up with a detailed written proposal. You can see
        what's included on our <ArticleLink href="/services/cabinet-refinishing">cabinet refinishing page</ArticleLink>
        , browse a recent <ArticleLink href="/projects">cabinet refinishing project</ArticleLink>, or{" "}
        <ArticleLink href="/contact">request your estimate</ArticleLink> directly.
      </ArticleP>
    </>
  );
}
