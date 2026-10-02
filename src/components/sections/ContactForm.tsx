import { useState, type FormEvent } from "react";
import { services } from "../../lib/content";
import { isValidEmail, isValidName, isValidPhone } from "../../lib/formValidation";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { FormField as Field, formInputClasses as inputClasses } from "../ui/FormField";
import { SectionHeading } from "../ui/SectionHeading";

// Same existing Refined Painting Web3Forms form used by the estimate
// wizard — do not swap this key or create a second form.
const WEB3FORMS_ACCESS_KEY = "5325d12a-69cf-4914-9eed-810c0410edf5";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function validate(data: ContactFormData): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!isValidName(data.firstName)) errors.firstName = "First name is required.";
  if (!isValidName(data.lastName)) errors.lastName = "Last name is required.";
  if (!isValidEmail(data.email)) errors.email = "Enter a valid email address.";
  if (!isValidPhone(data.phone)) errors.phone = "Enter a valid phone number.";
  if (!data.message.trim()) errors.message = "Enter a short message.";
  return errors;
}

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (patch: Partial<ContactFormData>) => setData((prev) => ({ ...prev, ...patch }));

  // Same pattern as the estimate wizard's final step: validate, and only if
  // valid let the native <form> submission through to Web3Forms (no
  // preventDefault, no fetch). Web3Forms then redirects to /thank-you.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const fieldErrors = validate(data);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) {
      e.preventDefault();
      return;
    }
    setIsSubmitting(true);
  };

  const fullName = `${data.firstName} ${data.lastName}`.trim();
  const redirectUrl = typeof window !== "undefined" ? `${window.location.origin}/thank-you` : "/thank-you";

  return (
    <section className="bg-warm-white py-16 sm:py-20 lg:py-24">
      <Container className="mx-auto max-w-2xl">
        <SectionHeading
          align="center"
          eyebrow="Get In Touch"
          title="Send Us a Message"
          description="Questions about your project? Send us a message and we'll get back to you."
          className="mx-auto"
        />

        <form
          action={WEB3FORMS_ENDPOINT}
          method="POST"
          noValidate
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-5"
        >
          {/* Web3Forms delivery configuration — not shown to the visitor. */}
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input type="hidden" name="subject" value="Refined Painting — Contact Form" />
          <input type="hidden" name="from_name" value="Refined Painting Website" />
          <input type="hidden" name="redirect" value={redirectUrl} />
          <input type="hidden" name="name" value={fullName} />
          {/* Web3Forms' own honeypot convention, checked server-side by Web3Forms itself. */}
          <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} aria-hidden="true" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="First Name" error={errors.firstName}>
              <input
                type="text"
                name="first_name"
                autoComplete="given-name"
                value={data.firstName}
                onChange={(e) => update({ firstName: e.target.value })}
                className={inputClasses}
              />
            </Field>
            <Field label="Last Name" error={errors.lastName}>
              <input
                type="text"
                name="last_name"
                autoComplete="family-name"
                value={data.lastName}
                onChange={(e) => update({ lastName: e.target.value })}
                className={inputClasses}
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@email.com"
                value={data.email}
                onChange={(e) => update({ email: e.target.value })}
                className={inputClasses}
              />
            </Field>
            <Field label="Phone" error={errors.phone}>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="(206) 555-0100"
                value={data.phone}
                onChange={(e) => update({ phone: e.target.value })}
                className={inputClasses}
              />
            </Field>
          </div>

          <Field label="Service (Optional)">
            <select
              name="service"
              value={data.service}
              onChange={(e) => update({ service: e.target.value })}
              className={inputClasses}
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Message" error={errors.message}>
            <textarea
              name="message"
              rows={5}
              value={data.message}
              onChange={(e) => update({ message: e.target.value })}
              placeholder="Tell us a bit about what you need."
              className={`${inputClasses} resize-none`}
            />
          </Field>

          <Button
            type="submit"
            size="lg"
            icon="none"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="justify-center disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending…" : "Send Message"}
          </Button>
        </form>
      </Container>
    </section>
  );
}
