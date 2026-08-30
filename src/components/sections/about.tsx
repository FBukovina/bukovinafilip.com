import { about, site } from "@/content/site";

export function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="about-section__inner">
        <div className="about-section__label">
          <p className="chapter-index">about</p>
          <h2 id="about-heading">Still becoming.</h2>
        </div>

        <div className="about-section__copy">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul className="about-section__roles" aria-label="Roles">
          {site.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
