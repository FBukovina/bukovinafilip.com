import { ProjectChapter } from "@/components/project-chapter";
import { projects } from "@/content/projects";

export function SelectedWork() {
  return (
    <section id="work" aria-label="Selected work">
      {projects.map((project, index) => (
        <ProjectChapter key={project.slug} project={project} index={index} />
      ))}
    </section>
  );
}
