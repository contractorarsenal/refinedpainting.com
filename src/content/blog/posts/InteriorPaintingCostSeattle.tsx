import { useQuoteModal } from "../../../components/quote/QuoteModalContext";
import {
  ArticleCallout,
  ArticleH2,
  ArticleInlineCTA,
  ArticleLink,
  ArticleList,
  ArticleP,
} from "../../../components/blog/ArticleContent";

export function InteriorPaintingCostSeattle() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <ArticleCallout type="answer">
        <p>
          Most residential interior painting projects we quote in the Seattle area run between $2,500 and
          $12,000. That's a wide range on purpose: a single accent wall and a whole-home repaint are both
          "interior painting," but they're very different projects. Your actual price depends on the scope
          of your specific home.
        </p>
      </ArticleCallout>

      <ArticleH2>Why Interior Painting Doesn't Have a Flat Rate</ArticleH2>
      <ArticleP>
        It's tempting to want a single number you can compare across companies, but an honest interior
        painting quote has to account for your home specifically. Two three-bedroom houses can price very
        differently depending on ceiling height, how many coats the existing walls need, and how much
        prep work is required before any paint goes on.
      </ArticleP>
      <ArticleP>
        Instead of a generic price list, here's what actually moves the number up or down.
      </ArticleP>

      <ArticleH2 id="cost-factors">What Affects Your Interior Painting Price</ArticleH2>
      <ArticleList
        items={[
          <>
            <strong className="text-ink">Project size.</strong> Square footage and the number of rooms are
            the biggest factor. A single room is a very different project from a whole-home repaint.
          </>,
          <>
            <strong className="text-ink">Wall and ceiling condition.</strong> Cracks, drywall damage, or
            uneven texture all require repair before painting begins, which adds time.
          </>,
          <>
            <strong className="text-ink">Ceiling height and trim.</strong> Vaulted ceilings, detailed trim
            work, and multiple accent walls take longer than flat walls and simple baseboards.
          </>,
          <>
            <strong className="text-ink">Amount of prep required.</strong> Patching, sanding, and priming
            take real time, and that time is part of what determines the final price.
          </>,
          <>
            <strong className="text-ink">Occupied vs. empty home.</strong> Working around furniture and
            belongings takes more care and time than painting an empty space.
          </>,
          <>
            <strong className="text-ink">Number of colors.</strong> Multiple colors in a single room, or
            different colors room to room, add masking and coordination time.
          </>,
          <>
            <strong className="text-ink">Accessibility.</strong> Stairwells, tall entryways, and
            hard-to-reach ceilings require extra equipment and time to paint safely.
          </>,
        ]}
      />

      <ArticleH2 id="typical-range">Typical Price Range for Seattle Homes</ArticleH2>
      <ArticleP>
        Most of the residential interior projects we quote in the Seattle area fall between $2,500 and
        $12,000. Smaller, single-room projects tend to sit at the lower end of that range and can often be
        completed in a day or two. Larger, multi-room projects with more prep work typically take 3 to 7
        days and land further up the range. Your actual price depends on the factors above, which is why
        we quote from an in-home visit rather than a phone estimate.
      </ArticleP>

      <ArticleH2 id="prep-work">Why Prep Work Changes the Price</ArticleH2>
      <ArticleP>
        The paint itself is rarely what separates a good result from a mediocre one. Thorough surface
        preparation, careful masking of floors and belongings, and attention to trim and texture matching
        are what make a finish look clean and hold up over time. A lower quote that skips proper prep
        isn't actually a better deal.
      </ArticleP>

      <ArticleH2 id="occupied-homes">Painting an Occupied Home</ArticleH2>
      <ArticleP>
        You don't need to move everything out of a room before we start, but clearing smaller items and
        decor helps the work go smoothly. We handle larger furniture by moving it away from the walls and
        protecting it, along with your floors, with drop cloths and plastic sheeting.
      </ArticleP>

      <ArticleCallout type="ask">
        <p>Questions worth asking when comparing interior painting quotes:</p>
        <ul className="flex flex-col gap-1.5">
          <li>Does the quote include surface prep and repair, or is that billed separately?</li>
          <li>What brand and grade of paint is included?</li>
          <li>How many coats are included in the price?</li>
          <li>Is the estimate written and itemized, or a verbal number?</li>
        </ul>
      </ArticleCallout>

      <ArticleInlineCTA onClick={() => openQuoteModal("interior")} label="Request a Free Estimate">
        Want a price specific to your home?
      </ArticleInlineCTA>

      <ArticleH2 id="next-step">Getting a Price for Your Specific Home</ArticleH2>
      <ArticleP>
        The only way to get an accurate number is a project-specific estimate. We'll visit your home, walk
        the space with you, and follow up with a detailed written proposal, typically within 24 to 48
        hours. You can learn more about what's included on our{" "}
        <ArticleLink href="/services/interior-painting">interior painting page</ArticleLink>, browse recent{" "}
        <ArticleLink href="/projects">interior projects</ArticleLink>, or{" "}
        <ArticleLink href="/contact">request your estimate</ArticleLink> directly.
      </ArticleP>
    </>
  );
}
