import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { now } from "@/content/now";
import { formatDate } from "@/lib/format";

export function Now() {
  return (
    <Section id="now" label="now" aside={`Updated ${formatDate(now.updated)}`}>
      <Reveal>
        <ul className="max-w-prose space-y-4">
          {now.items.map((item) => (
            <li key={item} className="flex gap-4 text-lede text-bone">
              <span aria-hidden="true" className="text-dust">
                &mdash;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
