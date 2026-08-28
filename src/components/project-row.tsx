import { ExternalLink } from "@/components/external-link";
import { linkLabels, type Project } from "@/content/projects";

type ProjectRowProps = {
  project: Project;
  index: number;
};

/**
 * A row in an editorial index, not a card. Hierarchy comes from the numeral,
 * the serif title and the hairline — no border box, no shadow, no tags.
 */
export function ProjectRow({ project, index }: ProjectRowProps) {
  const { title, kind, summary, note, stack, year, links } = project;
  const meta = [kind, ...stack, year].filter(Boolean) as string[];

  return (
    <li className="group border-t border-rule last:border-b">
      <article className="grid gap-x-8 gap-y-5 py-9 md:grid-cols-[2.5rem_minmax(0,1fr)_7rem] md:py-11">
        <p
          aria-hidden="true"
          className="eyebrow display-face pt-1 text-dust transition-colors duration-500 ease-editorial group-hover:text-clay"
        >
          {String(index + 1).padStart(2, "0")}
        </p>

        <div className="min-w-0">
          <h3 className="text-title display-face text-bone transition-transform duration-500 ease-editorial md:group-hover:translate-x-1">
            {title}
          </h3>

          <p className="mt-3 max-w-prose text-ash">{note ?? summary}</p>

          {meta.length > 0 ? (
            <p className="mt-4 text-meta text-dust">{meta.join(" · ")}</p>
          ) : null}
        </div>

        <ul className="flex flex-wrap items-start gap-x-6 gap-y-1 md:flex-col md:items-end md:gap-y-2">
          {links.map((link) => (
            <li key={link.kind} className="py-2 md:py-1">
              <ExternalLink href={link.href}>{linkLabels[link.kind]}</ExternalLink>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}
