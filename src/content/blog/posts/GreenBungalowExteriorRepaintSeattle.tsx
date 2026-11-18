import { useQuoteModal } from "../../../components/quote/QuoteModalContext";
import { ArticleH2, ArticleImageGrid, ArticleInlineCTA, ArticleLink, ArticleP } from "../../../components/blog/ArticleContent";
import { projects } from "../../projects/projects";

// CASE STUDY. City (Seattle) and season (completed in summer, exact month and
// year not confirmed) are confirmed by the owner. Everything else below comes
// only from this project's own photo records: the crew is Refined Painting's
// in-house painting crew (confirmed), and the scope shown is exterior siding,
// a detached garage, and porch railings and steps, finished green with white
// trim. No neighborhood, prep steps, products, or additional scope are stated
// since none of those are confirmed for this specific job — do not add any
// without the owner's sign-off.
const project = projects.find((p) => p.id === "green-bungalow-trim")!;
const beforePhotos = project.photos.filter((p) => p.stage === "Before").map((p) => ({ src: p.lg, alt: p.alt }));
const inProgressPhotos = project.photos.filter((p) => p.stage === "In progress").map((p) => ({ src: p.lg, alt: p.alt }));
const finishedPhotos = project.photos.filter((p) => p.stage === "Finished").map((p) => ({ src: p.lg, alt: p.alt }));

export function GreenBungalowExteriorRepaintSeattle() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <ArticleP>
        This Seattle exterior repaint, completed in summer by Refined Painting's in-house painting crew, covered
        the main house siding, a detached garage, and the porch railings and steps. Everything is finished in
        green with white trim.
      </ArticleP>

      <ArticleH2 id="before">Before</ArticleH2>
      <ArticleImageGrid images={beforePhotos} />

      <ArticleH2 id="in-progress">In Progress</ArticleH2>
      <ArticleP>
        The porch railings were sanded and reinstalled as part of the job, shown here before the final coat went
        on.
      </ArticleP>
      <ArticleImageGrid images={inProgressPhotos} />

      <ArticleH2 id="finished">Finished</ArticleH2>
      <ArticleImageGrid images={finishedPhotos} />

      <ArticleInlineCTA onClick={() => openQuoteModal("exterior")}>
        Want a repaint like this one for your home?
      </ArticleInlineCTA>

      <ArticleH2 id="next-step">See More</ArticleH2>
      <ArticleP>
        See what's included on our <ArticleLink href="/services/exterior-painting">exterior painting page</ArticleLink>,
        or visit our <ArticleLink href="/service-areas/seattle-wa/">Seattle page</ArticleLink> to see the
        neighborhoods we serve and how to request an estimate.
      </ArticleP>
    </>
  );
}
