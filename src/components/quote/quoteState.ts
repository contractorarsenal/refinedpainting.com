import type { ServiceId } from "../../lib/content";
import { isNonEmpty, isValidEmail, isValidName, isValidPhone, isValidState, isValidZip } from "../../lib/formValidation";

export type ServiceSelection = ServiceId | "not-sure";
export type TimelineSelection = "asap" | "30-days" | "1-3-months" | "planning";

export interface QuoteFormData {
  streetAddress: string;
  addressUnit: string;
  city: string;
  state: string;
  zip: string;
  service: ServiceSelection | null;
  timeline: TimelineSelection | null;
  details: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export const initialQuoteData: QuoteFormData = {
  streetAddress: "",
  addressUnit: "",
  city: "",
  state: "",
  zip: "",
  service: null,
  timeline: null,
  details: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

export const TOTAL_STEPS = 5;

export function validateStep(step: number, data: QuoteFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  if (step === 1) {
    if (!isNonEmpty(data.streetAddress)) errors.streetAddress = "Street address is required.";
    if (!isNonEmpty(data.city)) errors.city = "City is required.";
    if (!isValidState(data.state)) errors.state = "Enter a valid 2-letter state.";
    if (!isValidZip(data.zip)) errors.zip = "Enter a valid 5-digit ZIP code.";
  }

  if (step === 2) {
    if (!data.service) {
      errors.service = "Select the type of project.";
    }
  }

  if (step === 3) {
    if (!data.timeline) {
      errors.timeline = "Let us know your timeline.";
    }
  }

  if (step === 5) {
    if (!isValidName(data.firstName)) errors.firstName = "First name is required.";
    if (!isValidName(data.lastName)) errors.lastName = "Last name is required.";
    if (!isValidPhone(data.phone)) errors.phone = "Enter a valid phone number.";
    if (!isValidEmail(data.email)) errors.email = "Enter a valid email address.";
  }

  return errors;
}
