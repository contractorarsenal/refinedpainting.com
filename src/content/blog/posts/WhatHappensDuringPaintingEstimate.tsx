import { useQuoteModal } from "../../../components/quote/QuoteModalContext";
import {
  ArticleCallout,
  ArticleH2,
  ArticleInlineCTA,
  ArticleLink,
  ArticleOrderedList,
  ArticleP,
} from "../../../components/blog/ArticleContent";

export function WhatHappensDuringPaintingEstimate() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <ArticleCallout type="answer">
        <p>
          A Refined Painting estimate starts with a conversation, not a sales pitch. After you submit the
          contact form, our team typically reaches out within one business day. From there, we visit your
          home, take measurements, discuss your project, and answer your questions, then follow up with a
          detailed written proposal within 24 to 48 hours. You're not committing to anything by requesting
          one.
        </p>
      </ArticleCallout>

      <ArticleH2>Why the Estimate Stage Matters</ArticleH2>
      <ArticleP>
        For a lot of homeowners, reaching out to a painting company is the part that feels uncertain. Will
        someone try to pressure you into a decision on the spot? Will the price make sense once the work
        actually starts? A clear, predictable estimate process removes most of that friction before the
        first coat of paint is ever discussed.
      </ArticleP>
      <ArticleP>
        Here's what actually happens, step by step, once you reach out to us.
      </ArticleP>

      <ArticleH2 id="what-happens">What Happens After You Contact Us</ArticleH2>
      <ArticleOrderedList
        items={[
          <>
            <strong className="text-ink">Submit the form.</strong> A few details about your project is all
            we need to get started, whether that's interior, exterior, cabinets, or something else.
          </>,
          <>
            <strong className="text-ink">We reach out.</strong> Our team typically contacts you within one
            business day to talk through what you're looking for.
          </>,
          <>
            <strong className="text-ink">We visit your home.</strong> We walk the space, take measurements,
            and answer any questions you have about scope, timeline, or process.
          </>,
          <>
            <strong className="text-ink">You receive a written proposal.</strong> A detailed estimate
            typically follows within 24 to 48 hours of the visit.
          </>,
          <>
            <strong className="text-ink">You decide when you're ready.</strong> There's no pressure and no
            obligation. Requesting an estimate is the start of a conversation, not a commitment.
          </>,
        ]}
      />

      <ArticleH2 id="whats-included">What a Detailed Estimate Should Include</ArticleH2>
      <ArticleP>
        A good estimate should be detailed and transparent enough that you know exactly what's included,
        what to expect, and how your timeline will work, not a vague number scribbled on a business card.
        That's the standard we hold our own proposals to: a written document built from an actual in-home
        visit, not a guess made over the phone.
      </ArticleP>

      <ArticleH2 id="color-consultation">The Visit Often Includes a Color Conversation</ArticleH2>
      <ArticleP>
        Many projects also include a complimentary color consultation, where we bring Benjamin Moore and
        Sherwin-Williams samples directly to your home so you can see how a color actually reads in your
        own light, rather than guessing from a paint chip under store lighting.
      </ArticleP>

      <ArticleCallout type="ask">
        <p>A few things worth asking any painting company during your estimate, including ours:</p>
        <ul className="flex flex-col gap-1.5">
          <li>Is your team licensed, insured, and EPA Lead-Safe Certified?</li>
          <li>Will I receive a written, itemized proposal, or just a verbal number?</li>
          <li>What does your warranty actually cover, and for how long?</li>
          <li>What's included in surface prep, and what's considered extra?</li>
        </ul>
      </ArticleCallout>

      <ArticleInlineCTA onClick={() => openQuoteModal()}>
        Ready to schedule your own estimate?
      </ArticleInlineCTA>

      <ArticleH2 id="after-approval">What Happens After You Approve the Proposal</ArticleH2>
      <ArticleP>
        Once you're ready to move forward, the estimate visit becomes the first step in a larger process:
        a color consultation if you haven't already picked finishes, meticulous surface prep, the actual
        painting, and a final walkthrough backed by a 5-year workmanship warranty. You can see the full
        breakdown on our <ArticleLink href="/services#process">process page</ArticleLink>.
      </ArticleP>
      <ArticleP>
        If you'd rather talk it through first, our <ArticleLink href="/about">About page</ArticleLink>{" "}
        covers how we approach every project, or you can{" "}
        <ArticleLink href="/contact">reach out directly</ArticleLink> and we'll take it from there.
      </ArticleP>
    </>
  );
}
