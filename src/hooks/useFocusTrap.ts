import { useEffect, type RefObject } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusable(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (el) => el.offsetParent !== null,
  );
}

/**
 * Traps Tab/Shift+Tab inside `containerRef` while `isOpen`, focuses into it on
 * open, and returns focus to whatever triggered it on close — so keyboard
 * users never land on a background control while a dialog/menu is open.
 *
 * `explicitTrigger` lets a caller supply the triggering element itself
 * (captured synchronously in the click handler that opened the dialog).
 * That's required whenever the dialog's own content can steal focus via a
 * native `autoFocus` before this hook's effect runs — effects fire child-
 * first, so a descendant's `autoFocus` always wins the race against
 * `document.activeElement` read here. Without it, `document.activeElement`
 * at effect-time is used, which is correct as long as nothing inside the
 * dialog auto-focuses on mount.
 */
export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  isOpen: boolean,
  explicitTrigger?: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    if (!isOpen) return;

    const triggerElement = explicitTrigger?.current ?? (document.activeElement as HTMLElement | null);
    const container = containerRef.current;

    const focusTimer = window.setTimeout(() => {
      if (!container) return;
      if (container.contains(document.activeElement)) return;
      const [first] = getFocusable(container);
      (first ?? container).focus();
    }, 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const node = containerRef.current;
      if (!node) return;

      const focusable = getFocusable(node);
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (e.shiftKey) {
        if (active === first || !node.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last || !node.contains(active)) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown, true);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown, true);
      if (triggerElement && document.contains(triggerElement)) {
        triggerElement.focus();
      }
    };
  }, [isOpen, containerRef, explicitTrigger]);
}
