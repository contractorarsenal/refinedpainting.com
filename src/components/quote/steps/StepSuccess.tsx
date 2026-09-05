import { Mascot } from "../../ui/Mascot";
import { Button, LinkButton } from "../../ui/Button";
import { business } from "../../../lib/content";

interface StepSuccessProps {
  firstName: string;
  onClose: () => void;
}

export function StepSuccess({ firstName, onClose }: StepSuccessProps) {
  return (
    <div className="flex flex-col items-center gap-5 py-4 text-center">
      <Mascot variant="full" className="h-32 w-32" />
      <div>
        <h3 className="font-display text-3xl font-extrabold uppercase tracking-wide text-ink">
          You're All Set{firstName ? `, ${firstName}` : ""}.
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-ink/70">
          Thanks for reaching out to Refined Painting. Our team will review your project and contact you
          about the next step.
        </p>
      </div>
      <div className="flex w-full flex-col gap-3 pt-2 sm:flex-row sm:justify-center">
        <LinkButton href={business.phoneHref} variant="secondary" icon="phone" className="w-full sm:w-auto">
          Call Us Now
        </LinkButton>
        <Button onClick={onClose} variant="outline-dark" icon="none" className="w-full sm:w-auto">
          Close
        </Button>
      </div>
    </div>
  );
}
