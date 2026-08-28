import { site } from "@/content/site";

/**
 * "still becoming." — set in Fraunces italic with the full stop in the accent
 * colour. This is the only place the accent is used at scale, which is what
 * keeps it meaningful everywhere else.
 */
export function Motto({ className }: { className?: string }) {
  const stem = site.motto.replace(/\.$/, "");

  return (
    <span className={["display-face italic", className ?? ""].filter(Boolean).join(" ")}>
      {stem}
      <span className="text-clay not-italic">.</span>
    </span>
  );
}
