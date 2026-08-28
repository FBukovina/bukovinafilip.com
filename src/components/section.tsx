import type { ReactNode } from "react";

/**
 * Shared so the footer lines up with the sections above it. A fixed marker
 * column behaves predictably at every width, which a 12-column grid with wide
 * gutters does not.
 */
export const editorialGrid =
  "grid gap-y-10 lg:grid-cols-[8.5rem_minmax(0,1fr)] lg:gap-x-16 xl:gap-x-24";

/**
 * The site's one layout pattern: a small-caps section marker in a narrow left
 * column, content in a wide right column, separated from the previous section
 * by a hairline. On small screens the marker sits above the content so the
 * reading order and the visual order stay identical.
 */
type SectionProps = {
  id: string;
  /** The section's name. Rendered as the h2. */
  label: string;
  children: ReactNode;
  /** Quiet metadata aligned with the marker, e.g. a timestamp or count. */
  aside?: ReactNode;
  /** Hairline above the section. Off for the first section after the hero. */
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
        "scroll-mt-24 py-20 md:py-28 lg:py-36",
        divider ? "border-t border-rule" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={`page-frame ${editorialGrid}`}>
        <header>
          <h2 id={`${id}-heading`} className="eyebrow">
            {label}
          </h2>
          {aside ? <p className="mt-3 text-meta text-dust">{aside}</p> : null}
        </header>

        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
