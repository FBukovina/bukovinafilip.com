import { ExternalLink } from "@/components/external-link";
import { site, socials } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__heading">
          <p className="chapter-index">contact</p>
          <h2 id="elsewhere-heading">Let&apos;s make something worth keeping.</h2>
        </div>

        <nav aria-labelledby="elsewhere-heading" className="site-footer__links">
          <ul>
            {socials.map((social) => (
              <li key={social.label}>
                <ExternalLink href={social.href} arrow={false}>
                  {social.label}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__meta">
          <p>&copy; {year} {site.name}</p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
