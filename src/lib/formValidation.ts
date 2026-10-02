// Shared field-level validators used by both the multi-step estimate wizard
// and the simple contact form, so the two never drift out of sync.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ZIP_RE = /^\d{5}$/;
const HAS_LETTER_RE = /\p{L}/u;

export function isValidZip(zip: string): boolean {
  return ZIP_RE.test(zip.trim());
}

export function isValidName(name: string): boolean {
  return HAS_LETTER_RE.test(name.trim());
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
