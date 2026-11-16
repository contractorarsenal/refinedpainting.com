import { useState, type FormEvent } from "react";
import { useWeb3FormsSubmit } from "../../hooks/useWeb3FormsSubmit";
import { services } from "../../lib/content";
import {
  formatProjectAddress,
  isNonEmpty,
  isValidEmail,
  isValidName,
  isValidPhone,
  isValidState,
  isValidZip,
} from "../../lib/formValidation";
import { Button } from "../ui/Button";
import { FormField as Field, formInputClasses as inputClasses } from "../ui/FormField";
import { FormSubmitError } from "../ui/FormSubmitError";

// Contact-page-specific Web3Forms form, separate from the estimate
// wizard's key, so the two lead sources can be told apart in Make.
const WEB3FORMS_ACCESS_KEY = "805062ae-0e76-4770-87cd-891b61b5760f";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetAddress: string;
  addressUnit: string;
  city: string;
  state: string;
  zip: string;
  service: string;
  message: string;
}

const initialData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  streetAddress: "",
  addressUnit: "",
  city: "",
  state: "",
  zip: "",
  service: "",
  message: "",
};

function validate(data: ContactFormData): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!isValidName(data.firstName)) errors.firstName = "First name is required.";
  if (!isValidName(data.lastName)) errors.lastName = "Last name is required.";
  if (!isValidEmail(data.email)) errors.email = "Enter a valid email address.";
  if (!isValidPhone(data.phone)) errors.phone = "Enter a valid phone number.";
  if (!isNonEmpty(data.streetAddress)) errors.streetAddress = "Street address is required.";
  if (!isNonEmpty(data.city)) errors.city = "City is required.";
  if (!isValidState(data.state)) errors.state = "Enter a valid 2-letter state.";
  if (!isValidZip(data.zip)) errors.zip = "Enter a valid 5-digit ZIP code.";
  if (!data.message.trim()) errors.message = "Enter a short message.";
  return errors;
}

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { status, errorMessage, submit, isSubmitting } = useWeb3FormsSubmit({ formType: "contact" });

  const update = (patch: Partial<ContactFormData>) => setData((prev) => ({ ...prev, ...patch }));

  const fullName = `${data.firstName} ${data.lastName}`.trim();
  const projectAddress = formatProjectAddress(data);
  // Kept as a no-JS fallback only — action/method/redirect below let the
  // <form> still work as a plain native POST if JS never loads. Whenever JS
  // is running, this handler always calls preventDefault() and the actual
  // submission goes through useWeb3FormsSubmit instead, which is the only
  // path that can confirm a real Web3Forms success before anything is
  // treated as a completed lead.
  const redirectUrl = typeof window !== "undefined" ? `${window.location.origin}/thank-you` : "/thank-you";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fieldErrors = validate(data);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    submit({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "Refined Painting — Contact Form",
      from_name: "Refined Painting Website",
      name: fullName,
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      street_address: data.streetAddress,
      address_unit: data.addressUnit,
      city: data.city,
      state: data.state,
      zip: data.zip,
      project_address: projectAddress,
      service: data.service,
      message: data.message,
      // Identifies which form sent this lead (the quote pop-up sends "quote_popup").
      form_source: "contact_page",
      botcheck: false,
    });
  };

  return (
    <div className="relative border border-ink/10 border-t-4 border-t-crest bg-cream-light p-6 shadow-lift sm:p-8 lg:p-10">
      <span className="absolute inset-x-0 top-0 h-1 bg-crest" aria-hidden />
      <span className="text-xs font-bold uppercase tracking-[0.16em] text-crest">Project Inquiry</span>
      <h2 className="mt-2 font-display text-2xl font-extrabold uppercase leading-tight text-ink sm:text-3xl">
        Request Your Consultation
      </h2>
      <p className="mt-2 text-sm text-ink/60">
        Complete the form below and our team will review your project and follow up.
      </p>

      <form
        action={WEB3FORMS_ENDPOINT}
        method="POST"
        noValidate
        onSubmit={handleSubmit}
        className="mt-7 flex flex-col gap-5"
      >
          {/* Web3Forms delivery configuration — not shown to the visitor. */}
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input type="hidden" name="subject" value="Refined Painting — Contact Form" />
          <input type="hidden" name="from_name" value="Refined Painting Website" />
          <input type="hidden" name="form_source" value="contact_page" />
          <input type="hidden" name="redirect" value={redirectUrl} />
          <input type="hidden" name="name" value={fullName} />
          <input type="hidden" name="project_address" value={projectAddress} />
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
                placeholder="(555) 555-0100"
                value={data.phone}
                onChange={(e) => update({ phone: e.target.value })}
                className={inputClasses}
              />
            </Field>
          </div>

          <Field label="Street Address" error={errors.streetAddress}>
            <input
              type="text"
              name="street_address"
              autoComplete="address-line1"
              value={data.streetAddress}
              onChange={(e) => update({ streetAddress: e.target.value })}
              className={inputClasses}
            />
          </Field>

          <Field label="Apartment / Unit (Optional)">
            <input
              type="text"
              name="address_unit"
              autoComplete="address-line2"
              value={data.addressUnit}
              onChange={(e) => update({ addressUnit: e.target.value })}
              className={inputClasses}
            />
          </Field>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-[2fr_1fr_1fr]">
            <Field label="City" error={errors.city}>
              <input
                type="text"
                name="city"
                autoComplete="address-level2"
                value={data.city}
                onChange={(e) => update({ city: e.target.value })}
                className={inputClasses}
              />
            </Field>
            <Field label="State" error={errors.state}>
              <input
                type="text"
                name="state"
                autoComplete="address-level1"
                maxLength={2}
                placeholder="WA"
                value={data.state}
                onChange={(e) => update({ state: e.target.value.toUpperCase() })}
                className={inputClasses}
              />
            </Field>
            <Field label="ZIP Code" error={errors.zip}>
              <input
                type="text"
                name="zip"
                inputMode="numeric"
                autoComplete="postal-code"
                maxLength={5}
                placeholder="5-digit ZIP code"
                value={data.zip}
                onChange={(e) => update({ zip: e.target.value.replace(/\D/g, "") })}
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

          {status === "error" && errorMessage ? <FormSubmitError message={errorMessage} /> : null}

          <Button
            type="submit"
            size="lg"
            icon="none"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="justify-center disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending…" : status === "error" ? "Try Again" : "Send Message"}
          </Button>
        </form>
    </div>
  );
}
