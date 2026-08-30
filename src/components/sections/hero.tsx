import { Motto } from "@/components/motto";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="border-b border-rule">
      <div className="page-frame page-grid pt-16 pb-16 md:pt-20 md:pb-20">
        <RevealGroup onMount className="col-span-12 md:col-span-8" delay={0.04} step={0.05}>
          <RevealItem>
            <h1 id="hero-heading" className="text-display font-medium text-bone">
              {site.displayName}
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="mt-3">
              <Motto />
            </p>
          </RevealItem>

          <RevealItem>
            <ul className="mt-10 space-y-1 font-mono text-meta text-dust">
              {site.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
