import { useQuoteModal } from "../../../components/quote/QuoteModalContext";
import {
  ArticleCallout,
  ArticleH2,
  ArticleInlineCTA,
  ArticleLink,
  ArticleList,
  ArticleP,
} from "../../../components/blog/ArticleContent";

// REWRITE. This post restores the URL of an earlier WordPress article,
// /blog/how-often-should-you-repaint-your-homes-exterior-in-seattle/. That
// article's text could not be recovered (no export, and the web archive has no
// snapshot), so this is a new draft written from general exterior-painting
// knowledge and the site's existing guidance (the 7 to 12 year range and the
// May to September season already appear in the FAQ). It contains no pricing,
// credentials or project claims. Have the owner review it before relying on it.
export function HowOftenToRepaintExteriorSeattle() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <ArticleCallout type="answer">
        <p>
          Many Seattle homes need exterior repainting every 7 to 12 years, but the calendar is only a starting
          point. The right time depends on your siding, how much weather each wall takes, how well the last
          paint job was prepared, and what the paint looks like today. Repaint when you see real wear, not just
          because a number of years has passed.
        </p>
      </ArticleCallout>

      <ArticleH2 id="siding">Start With What Your Siding Is</ArticleH2>
      <ArticleP>
        Different materials hold paint differently, so your siding is the first thing to look at. Wood siding,
        shingles and trim take in and release moisture, which is why they are usually the first to show trouble
        once the paint film starts to fail. Fiber cement and other manufactured sidings often hold paint well,
        but the finish still wears down over time, and the cut edges and joints are where water tends to get in.
        Painted brick and stucco are different again, because the surface and the prep are different.
      </ArticleP>
      <ArticleP>
        Trim, fascia, window sills and anything that faces up or stays wet usually need attention before the
        flat walls do. It is common for the trim to be ready for paint a few years ahead of the siding.
      </ArticleP>

      <ArticleH2 id="weather">Weather Exposure Is Not the Same on Every Wall</ArticleH2>
      <ArticleP>
        Seattle's long wet season is hard on exterior paint, but it does not hit every side of a house the same
        way. A shaded wall that stays damp is more likely to grow moss or mildew. South and west faces take more
        sun, which fades color and dries out the finish. Walls that catch wind-driven rain, or sit under trees
        that drip, wear faster than sheltered ones.
      </ArticleP>
      <ArticleP>
        Walk around the whole house and look at each side on its own. It is common for one or two sides to be
        ready for paint well before the others, and that tells you more than the age of the last paint job.
      </ArticleP>

      <ArticleH2 id="wear">Visible Wear: What to Look For</ArticleH2>
      <ArticleP>These are the signs that the paint is no longer protecting what is underneath:</ArticleP>
      <ArticleList
        items={[
          "Peeling, flaking or bubbling paint, especially on trim and lower walls.",
          "Cracks or gaps in the caulk around windows, doors and corners.",
          "A chalky residue that rubs off on your hand.",
          "Fading or uneven color, usually strongest on the sunniest sides.",
          "Mildew or moss staining that comes back after cleaning.",
          "Bare wood showing through, or wood that feels soft when you press it.",
        ]}
      />
      <ArticleP>
        One note on soft spots: if wood feels soft or crumbles when you probe it, painting over it will not fix
        the problem. Repair or replacement has to come before paint, so the new finish goes on a sound surface.
      </ArticleP>

      <ArticleH2 id="prep">Why Prep Decides How Long a Repaint Lasts</ArticleH2>
      <ArticleP>
        A repaint over a failing surface will not last. Good results usually start with washing the house,
        scraping and sanding loose paint, repairing damaged areas, re-caulking gaps, and priming bare spots
        before any finish coat goes on. Skipping those steps is the most common reason a new paint job starts
        peeling early, so it is worth asking any painter you are considering how they prepare the surface.
      </ArticleP>

      <ArticleH2 id="timing">When in the Year to Repaint</ArticleH2>
      <ArticleP>
        Exterior paint needs dry weather to go on and cure properly. In the Seattle area, late spring through
        early fall, roughly May through September, offers the most consistent conditions. Those months also
        fill up fastest, so if your house is showing wear, it helps to plan ahead instead of waiting for the
        first dry week.
      </ArticleP>

      <ArticleInlineCTA onClick={() => openQuoteModal("exterior")}>
        Not sure if your house is ready to repaint?
      </ArticleInlineCTA>

      <ArticleH2 id="next-step">Getting Help Deciding</ArticleH2>
      <ArticleP>
        If you are not sure whether your house needs paint now or can wait another season, an in-person look is
        the fastest way to find out. You can read what is involved on our{" "}
        <ArticleLink href="/services/exterior-painting">exterior painting page</ArticleLink>, see how the
        estimate process works in{" "}
        <ArticleLink href="/blog/what-happens-during-painting-estimate">what to expect during a painting estimate</ArticleLink>
        , or visit our <ArticleLink href="/service-areas/seattle-wa/">Seattle page</ArticleLink> to see the
        neighborhoods we serve and how to request an estimate.
      </ArticleP>
    </>
  );
}
