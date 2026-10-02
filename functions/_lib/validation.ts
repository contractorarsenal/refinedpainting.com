import { serviceOptions, timelineOptions } from "../../src/lib/content";

export interface EstimateInput {
  zip: string;
  service: string;
  timeline: string;
  details: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface NormalizedEstimate {
  zip: string;
  service: string;
  serviceLabel: string;
  timeline: string;
  timelineLabel: string;
  details: string;
  firstName: string;
  lastName: string;
  phone: string;
  phoneDigits: string;
  email: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ZIP_RE = /^\d{5}$/;
const HAS_LETTER_RE = /\p{L}/u;

function normalizePhoneDigits(raw: string): string {
  return raw.replace(/\D/g, "");
}

function isPlausiblePhone(digits: string): boolean {
  if (digits.length < 10 || digits.length > 15) return false;
  // Reject obviously fake input like "0000000000" or "1111111111".
  if (/^(\d)\1+$/.test(digits)) return false;
  return true;
}

function isPlausibleName(value: string): boolean {
  const trimmed = value.trim();
  return trimmed.length > 0 && trimmed.length <= 80 && HAS_LETTER_RE.test(trimmed);
}

/**
 * Validates and normalizes a raw estimate submission. Never trusts the
 * client: every field the frontend also checks is re-checked here against
 * the same source-of-truth option lists from src/lib/content.ts.
 */
export function validateEstimate(
  body: unknown,
): { ok: true; data: NormalizedEstimate } | { ok: false; fieldErrors: Record<string, string> } {
  const fieldErrors: Record<string, string> = {};

  if (typeof body !== "object" || body === null) {
    return { ok: false, fieldErrors: { form: "Malformed submission." } };
  }
  const b = body as Record<string, unknown>;

  const zip = typeof b.zip === "string" ? b.zip.trim() : "";
  const service = typeof b.service === "string" ? b.service.trim() : "";
  const timeline = typeof b.timeline === "string" ? b.timeline.trim() : "";
  const details = typeof b.details === "string" ? b.details.trim() : "";
  const firstName = typeof b.firstName === "string" ? b.firstName.trim() : "";
  const lastName = typeof b.lastName === "string" ? b.lastName.trim() : "";
  const phoneRaw = typeof b.phone === "string" ? b.phone.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";

  if (!ZIP_RE.test(zip)) {
    fieldErrors.zip = "Enter a valid 5-digit ZIP code.";
  }

  const serviceOption = serviceOptions.find((o) => o.id === service);
  if (!serviceOption) {
    fieldErrors.service = "Select a valid project type.";
  }

  const timelineOption = timelineOptions.find((o) => o.id === timeline);
  if (!timelineOption) {
    fieldErrors.timeline = "Select a valid timeline.";
  }

  if (details.length > 3000) {
    fieldErrors.details = "Project details must be 3000 characters or fewer.";
  }

  if (!isPlausibleName(firstName)) {
    fieldErrors.firstName = "Enter a valid first name.";
  }
  if (!isPlausibleName(lastName)) {
    fieldErrors.lastName = "Enter a valid last name.";
  }

  const phoneDigits = normalizePhoneDigits(phoneRaw);
  if (!isPlausiblePhone(phoneDigits)) {
    fieldErrors.phone = "Enter a valid phone number.";
  }

  if (email.length === 0 || email.length > 254 || !EMAIL_RE.test(email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors };
  }

  return {
    ok: true,
    data: {
      zip,
      service,
      serviceLabel: serviceOption!.label,
      timeline,
      timelineLabel: timelineOption!.label,
      details,
      firstName,
      lastName,
      phone: phoneRaw,
      phoneDigits,
      email,
    },
  };
}
