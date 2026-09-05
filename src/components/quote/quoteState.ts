import type { ServiceId } from "../../lib/content";

export type ServiceSelection = ServiceId | "not-sure";
export type TimelineSelection = "asap" | "30-days" | "1-3-months" | "planning";

export interface QuoteFormData {
  zip: string;
  service: ServiceSelection | null;
  timeline: TimelineSelection | null;
  details: string;
  photoName: string | null;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export const initialQuoteData: QuoteFormData = {
  zip: "",
  service: null,
  timeline: null,
  details: "",
  photoName: null,
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

export const TOTAL_STEPS = 5;

export function validateStep(step: number, data: QuoteFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  if (step === 1) {
    if (!/^\d{5}$/.test(data.zip.trim())) {
      errors.zip = "Enter a valid 5-digit ZIP code.";
    }
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
    if (!data.firstName.trim()) errors.firstName = "First name is required.";
    if (!data.lastName.trim()) errors.lastName = "Last name is required.";
    if (!/^[\d\s()+-]{7,}$/.test(data.phone.trim())) errors.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = "Enter a valid email address.";
  }

  return errors;
}
