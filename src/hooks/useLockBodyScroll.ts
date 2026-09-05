import { useLayoutEffect } from "react";

export function useLockBodyScroll(locked: boolean) {
  useLayoutEffect(() => {
    if (!locked) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [locked]);
}
