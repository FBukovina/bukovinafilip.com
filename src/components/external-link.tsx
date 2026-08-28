import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string | null;
  children: ReactNode;
  className?: string;
  /** Show the outbound arrow affordance. */
  arrow?: boolean;
};

const baseStyles =
  "inline-flex items-baseline gap-1.5 text-meta transition-colors duration-300 ease-editorial";

/**
 * Outbound link that degrades honestly: when the destination is not known yet
 * it renders as inert text instead of a link to nowhere. `data-placeholder`
 * makes the remaining gaps easy to find in the DOM.
 */
export function ExternalLink({ href, children, className, arrow = true }: ExternalLinkProps) {
  const classes = [baseStyles, className ?? ""].filter(Boolean).join(" ");

  if (!href) {
    return (
      <span
        data-placeholder="true"
        title="Destination not published yet"
        className={`${classes} text-dust decoration-dotted underline decoration-from-font underline-offset-4`}
      >
        {children}
      </span>
    );
  }

  const isMail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      {...(isMail ? {} : { target: "_blank", rel: "noreferrer noopener" })}
      className={`${classes} group/link text-ash hover:text-bone focus-visible:text-bone`}
    >
      <span className="underline decoration-rule decoration-from-font underline-offset-4 transition-colors duration-300 group-hover/link:decoration-clay">
        {children}
      </span>
      {arrow ? (
        <span
          aria-hidden="true"
          className="translate-y-px text-[0.75em] text-dust transition-transform duration-300 ease-editorial group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-clay"
        >
          &#8599;
        </span>
      ) : null}
    </a>
  );
}
