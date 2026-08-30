import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { now } from "@/content/now";
import { formatDate } from "@/lib/format";

export function Now() {
  return (
    <Section id="now" label="now" aside={formatDate(now.updated)}>
      <Reveal>
        <ul className="space-y-2">
          {now.items.map((item) => (
            <li key={item} className="text-bone">
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
