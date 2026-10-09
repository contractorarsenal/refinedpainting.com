import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="overflow-x-auto">
      <ol className="flex flex-nowrap items-center gap-1.5 whitespace-nowrap text-xs font-bold uppercase tracking-wide text-ink/45">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link to={item.href} className="transition-colors hover:text-crest">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-ink/70" : ""}>
                  {item.label}
                </span>
              )}
              {!isLast ? <ChevronRight className="size-3 shrink-0 text-ink/25" aria-hidden /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
