// Shared field-level validators used by both the multi-step estimate wizard
// and the simple contact form, so the two never drift out of sync.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ZIP_RE = /^\d{5}$/;
const HAS_LETTER_RE = /\p{L}/u;
const STATE_RE = /^[A-Za-z]{2}$/;

export function isValidZip(zip: string): boolean {
  return ZIP_RE.test(zip.trim());
}

export function isValidName(name: string): boolean {
  return HAS_LETTER_RE.test(name.trim());
}

export function isNonEmpty(value: string): boolean {
  return value.trim().length > 0;
}

export function isValidState(state: string): boolean {
  return STATE_RE.test(state.trim());
}

export interface ProjectAddress {
  streetAddress: string;
  addressUnit: string;
  city: string;
  state: string;
  zip: string;
}

// Shared one-line formatting so the quote wizard and Contact form send the
// exact same project_address string shape to Make.
export function formatProjectAddress(address: ProjectAddress): string {
  const street = address.addressUnit.trim()
    ? `${address.streetAddress.trim()}, ${address.addressUnit.trim()}`
    : address.streetAddress.trim();
  const cityStateZip = `${address.city.trim()}, ${address.state.trim()} ${address.zip.trim()}`;
  return [street, cityStateZip].filter((part) => part.trim().length > 0).join(", ");
}

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim());
}

export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) return false;
  // Reject obviously fake input like "0000000000" or "1111111111".
  if (/^(\d)\1+$/.test(digits)) return false;
  return true;
}
