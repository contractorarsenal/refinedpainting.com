import { Phone } from "lucide-react";
import { useSyncExternalStore } from "react";
import { business, CTA } from "../../lib/content";
import { useQuoteModal } from "../quote/QuoteModalContext";

// The bar stays out of the way in three cases:
// 1. The homepage hero action row is on screen (it marks itself with id="hero-actions").
// 2. A menu or modal holds the body scroll lock (useLockBodyScroll sets overflow: hidden).
// 3. A text field has focus, so the on-screen keyboard cannot cover fields or submit controls.
// Pages without a hero action row and with no open layer keep the bar visible.

function subscribeHeroActions(onChange: () => void) {
  const target = document.getElementById("hero-actions");
  if (!target || !("IntersectionObserver" in window)) return () => {};
  const observer = new IntersectionObserver(() => onChange(), { threshold: 0 });
  observer.observe(target);
  return () => observer.disconnect();
}

function heroActionsOnScreen() {
  const target = document.getElementById("hero-actions");
  if (!target) return false;
  const r = target.getBoundingClientRect();
  return r.bottom > 0 && r.top < window.innerHeight;
}

function subscribeScrollLock(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });
  return () => observer.disconnect();
}

function scrollLocked() {
  return document.body.style.overflow === "hidden";
}

function subscribeFocus(onChange: () => void) {
  document.addEventListener("focusin", onChange);
  document.addEventListener("focusout", onChange);
  return () => {
    document.removeEventListener("focusin", onChange);
    document.removeEventListener("focusout", onChange);
  };
}

const TEXT_ENTRY = new Set(["text", "email", "tel", "search", "url", "number", "password"]);

function textFieldFocused() {
  const el = document.activeElement as HTMLElement | null;
  if (!el) return false;
  if (el.tagName === "TEXTAREA" || el.tagName === "SELECT") return true;
  return el.tagName === "INPUT" && TEXT_ENTRY.has((el as HTMLInputElement).type);
}

export function MobileCTABar() {
  const { openQuoteModal } = useQuoteModal();
  const heroVisible = useSyncExternalStore(subscribeHeroActions, heroActionsOnScreen, () => false);
  const locked = useSyncExternalStore(subscribeScrollLock, scrollLocked, () => false);
  const typing = useSyncExternalStore(subscribeFocus, textFieldFocused, () => false);
  const hidden = heroVisible || locked || typing;

  return (
    <div
      inert={hidden ? true : undefined}
      aria-hidden={hidden ? true : undefined}
      className={`fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ink/10 bg-warm-white p-3 shadow-lift transition duration-300 sm:hidden ${
        hidden ? "pointer-events-none translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={business.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded border-2 border-ink/20 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-ink"
      >
        <Phone className="size-4" aria-hidden />
        Call Now
      </a>
      <button
        type="button"
        onClick={() => openQuoteModal()}
        className="flex flex-[1.4] items-center justify-center rounded bg-teal py-3 font-display text-sm font-extrabold uppercase tracking-wide text-ink"
      >
        {CTA.primaryAlt}
      </button>
    </div>
  );
}
