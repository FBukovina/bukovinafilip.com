import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string | null;
  children: ReactNode;
  className?: string;
  arrow?: boolean;
};

const baseStyles =
  "inline-flex items-baseline gap-1 font-mono text-meta transition-colors duration-200";

/**
 * Outbound link that degrades honestly: when the destination is not known yet
 * it renders as inert text instead of a link to nowhere.
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
      className={`${classes} text-ash hover:text-signal focus-visible:text-signal`}
    >
      <span>{children}</span>
      {arrow ? (
        <span aria-hidden="true" className="text-dust">
          &#8599;
        </span>
      ) : null}
    </a>
  );
}
