import type { ReactNode } from "react";

/**
 * Shared 12-column page grid. Header, sections and footer all sit on it
 * so columns line up the full height of the page.
 */
export const pageGrid = "page-grid";

/**
 * Section marker in columns 1–3, content in 4–12. On small screens the
 * marker stacks above the content so reading order matches visual order.
 */
type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
  aside?: ReactNode;
  divider?: boolean;
  className?: string;
};

export function Section({
  id,
  label,
  children,
  aside,
  divider = true,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={[
        "scroll-mt-20 py-14 md:py-16",
        divider ? "border-t border-rule" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={`page-frame ${pageGrid}`}>
        <header className="col-span-12 mb-6 md:col-span-3 md:mb-0">
          <h2 id={`${id}-heading`} className="eyebrow">
            {label}
          </h2>
          {aside ? <p className="mt-2 font-mono text-meta text-dust">{aside}</p> : null}
        </header>

        <div className="col-span-12 min-w-0 md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
