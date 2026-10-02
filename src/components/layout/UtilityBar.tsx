interface UtilityBarProps {
  collapsed?: boolean;
}

export function UtilityBar({ collapsed = false }: UtilityBarProps) {
  return (
    <div
      className={`hidden overflow-hidden bg-ink transition-[max-height,opacity] duration-300 ease-out sm:block ${
        collapsed ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
      }`}
    >
      <p className="py-1.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-warm-white/85">
        Licensed &amp; Insured <span className="mx-2 text-teal">•</span> EPA Lead-Safe
        <span className="mx-2 text-teal">•</span> 5-Year Workmanship Warranty
      </p>
    </div>
  );
}
