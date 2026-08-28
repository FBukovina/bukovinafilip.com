import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { about } from "@/content/site";

export function About() {
  const [opening, ...rest] = about;

  return (
    <Section id="about" label="about" divider={false}>
      <Reveal>
        <div className="max-w-prose space-y-6">
          <p className="text-lede text-bone">{opening}</p>
          {rest.map((paragraph) => (
            <p key={paragraph} className="text-ash">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
