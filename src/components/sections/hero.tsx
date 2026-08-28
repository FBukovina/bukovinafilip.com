import { Motto } from "@/components/motto";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="page-frame flex min-h-[84svh] flex-col justify-center pt-14 pb-24 md:min-h-[90svh] md:pt-20 md:pb-32"
    >
      <RevealGroup onMount delay={0.1} step={0.1}>
        <RevealItem>
          <h1 id="hero-heading" className="display-face">
            <span className="block text-display text-bone">{site.displayName}</span>
            <Motto className="mt-4 block text-motto text-ash md:mt-5" />
          </h1>
        </RevealItem>

        <RevealItem>
          {/* Stacked on phones, a single dotted line from md up. */}
          <ul className="mt-12 flex flex-col gap-1 text-meta text-dust md:mt-16 md:flex-row md:flex-wrap md:gap-x-2">
            {site.roles.map((role) => (
              <li
                key={role}
                className="md:not-first:before:mr-2 md:not-first:before:content-['·']"
              >
                {role}
              </li>
            ))}
          </ul>
        </RevealItem>

        <RevealItem>
          <a
            href="#work"
            className="group mt-10 -mb-2 inline-flex items-center gap-4 py-2 text-meta text-dust transition-colors duration-300 hover:text-bone md:mt-14"
          >
            <span
              aria-hidden="true"
              className="h-px w-8 bg-rule transition-all duration-500 ease-editorial group-hover:w-14 group-hover:bg-clay"
            />
            selected work
          </a>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
