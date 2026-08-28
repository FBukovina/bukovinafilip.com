import { ProjectRow } from "@/components/project-row";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { projects } from "@/content/projects";

export function SelectedWork() {
  return (
    <Section id="work" label="selected work">
      <Reveal>
        <ol>
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
