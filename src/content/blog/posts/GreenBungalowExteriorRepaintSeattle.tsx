import { useQuoteModal } from "../../../components/quote/QuoteModalContext";
import { ArticleH2, ArticleImageGrid, ArticleInlineCTA, ArticleLink, ArticleP } from "../../../components/blog/ArticleContent";
import { projectPhoto } from "../../projects/projects";

// CASE STUDY. City (Seattle) and season (completed in summer, exact month and
// year not confirmed) are confirmed by the owner. The crew is Refined
// Painting's in-house painting crew (confirmed). No neighborhood, year,
// products, or installation scope beyond what's below is confirmed.
//
// Scope is deliberately narrow and photo-led: only the porch railings and
// steps have documentation of actual work (a photo of sanding, a photo of
// masking/drop cloths). The siding and garage are shown as the same green
// in both "Before" and "Finished" photos — i.e. unchanged — so this article
// shows only porch photos, not the house or garage.
//
// A photo captioned "Newly installed porch railing" shows the railing's
// state, not who installed it — the copy below never claims Refined
// Painting installed or reinstalled it, only what's directly documented:
// sanding, and masking/protecting the area before painting. Do not add an
// installation claim, a "final coat" claim, or restore the house/garage
// photos without new evidence.
const beforePorch = projectPhoto("green-bungalow-trim", 6); // "Porch railing and steps before the project"
const finishedPorch = projectPhoto("green-bungalow-trim", 3); // "Green bungalow front with white porch railings and steps"
const sandingPhoto = projectPhoto("green-bungalow-trim", 9); // "Worker sanding porch railings during trim work"
const maskingPhoto = projectPhoto("green-bungalow-trim", 10); // "Drop cloth and tape on a porch deck during trim work"
const railingShownPhoto = projectPhoto("green-bungalow-trim", 11); // "Newly installed porch railing with wood steps during trim work"

export function GreenBungalowExteriorRepaintSeattle() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <ArticleP>
        This Seattle bungalow trim project, completed in summer by Refined Painting's in-house painting crew,
        is documented here from before to finished. The focus is the porch railings and steps.
      </ArticleP>

      <ArticleH2 id="before-and-after">Before and After</ArticleH2>
      <ArticleImageGrid
        images={[
          { src: beforePorch.lg, alt: beforePorch.alt, label: "Before", caption: "The porch railings and steps before the project." },
          {
            src: finishedPorch.lg,
            alt: finishedPorch.alt,
            label: "Finished",
            caption: "The same porch railings and steps, finished. This photo isn't from the exact same angle as the before photo.",
          },
        ]}
      />

      <ArticleH2 id="documented-work">Documented Work</ArticleH2>
      <ArticleP>
        These photos show the porch railings being sanded, and the area being masked off, ahead of painting.
      </ArticleP>
      <ArticleImageGrid
        images={[
          { src: sandingPhoto.lg, alt: sandingPhoto.alt, caption: "Sanding the porch railings." },
          { src: maskingPhoto.lg, alt: maskingPhoto.alt, caption: "The porch deck masked off before painting." },
          { src: railingShownPhoto.lg, alt: railingShownPhoto.alt, caption: "The railing and steps, shown ahead of painting." },
        ]}
      />

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
