import { site } from "@/content/site";

/** Small mono caption. The accent lives only in the full stop. */
export function Motto({ className }: { className?: string }) {
  const stem = site.motto.replace(/\.$/, "");

  return (
    <span className={["font-mono text-meta text-ash", className ?? ""].filter(Boolean).join(" ")}>
      {stem}
      <span className="text-signal">.</span>
    </span>
  );
}
