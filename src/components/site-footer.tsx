import { ExternalLink } from "@/components/external-link";
import { Motto } from "@/components/motto";
import { editorialGrid } from "@/components/section";
import { site, socials } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-rule">
      <div className="page-frame py-20 md:py-28">
        <p className="max-w-prose">
          <Motto className="text-heading text-ash" />
        </p>

        <nav
          aria-labelledby="elsewhere-heading"
          className={`mt-16 border-t border-rule pt-10 md:mt-20 ${editorialGrid}`}
        >
          <h2 id="elsewhere-heading" className="eyebrow">
            elsewhere
          </h2>

          <ul className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4 lg:max-w-prose">
            {socials.map((social) => (
              <li key={social.label} className="py-2 md:py-1">
                <ExternalLink href={social.href}>{social.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-20 flex flex-col gap-2 border-t border-rule pt-8 text-meta text-dust sm:flex-row sm:items-baseline sm:justify-between">
          <p>
            &copy; {year} {site.name}
          </p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
