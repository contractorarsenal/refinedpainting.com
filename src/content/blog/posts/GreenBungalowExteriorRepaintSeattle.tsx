import { useQuoteModal } from "../../../components/quote/QuoteModalContext";
import { ArticleH2, ArticleImageGrid, ArticleInlineCTA, ArticleLink, ArticleP } from "../../../components/blog/ArticleContent";
import { projects } from "../../projects/projects";

// CASE STUDY. City (Seattle) and season (completed in summer, exact month and
// year not confirmed) are confirmed by the owner. The crew is Refined
// Painting's in-house painting crew (confirmed). Scope is deliberately
// narrow: the project's own title ("Green Bungalow Trim and Railings") and
// its "In progress" photos only document work on the porch railings and
// steps (sanding, reinstalling). The siding and the garage are described
// as green in both the "Before" and "Finished" photos — i.e. unchanged —
// so this is written as a trim project, not a full exterior repaint. Do
// not restore the "covered the siding and garage" framing without an
// in-progress photo (or the owner's word) actually showing that work.
// No neighborhood, prep steps, or products beyond what's stated here are
// confirmed for this job.
const project = projects.find((p) => p.id === "green-bungalow-trim")!;
const beforePhotos = project.photos.filter((p) => p.stage === "Before").map((p) => ({ src: p.lg, alt: p.alt }));
const inProgressPhotos = project.photos.filter((p) => p.stage === "In progress").map((p) => ({ src: p.lg, alt: p.alt }));
const finishedPhotos = project.photos.filter((p) => p.stage === "Finished").map((p) => ({ src: p.lg, alt: p.alt }));

export function GreenBungalowExteriorRepaintSeattle() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <ArticleP>
        This Seattle bungalow trim project, completed in summer by Refined Painting's in-house painting crew,
        refreshed the porch railings and steps. Before-and-after photos of the house and the detached garage are
        included below for context.
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
        Want trim or exterior work like this for your home?
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
