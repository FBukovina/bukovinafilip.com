import Image from "next/image";

import gradeyDevice from "@/assets/portfolio/gradey-device.png";
import type { Project } from "@/content/projects";

type ProjectChapterProps = {
  project: Project;
  index: number;
};

export function ProjectChapter({ project, index }: ProjectChapterProps) {
  if (project.visual === "gradey" && project.visualAlt) {
    return (
      <article id={project.slug} className="gradey-chapter" aria-labelledby="gradey-heading">
        <p className="gradey-chapter__word" aria-hidden="true">
          {project.title}
        </p>

        <div className="gradey-chapter__device">
          <Image
            src={gradeyDevice}
            alt={project.visualAlt}
            priority
            sizes="(max-width: 640px) 82vw, (max-width: 1024px) 52vw, 35vw"
            className="h-auto w-full"
          />
        </div>

        <header className="gradey-chapter__caption">
          <p className="chapter-index">0{index + 1} / selected work</p>
          <h2 id="gradey-heading">{project.title}</h2>
          <p>{project.summary}</p>
          <span>{project.description}</span>
        </header>

        <a className="gradey-chapter__next" href="#countie">
          <span className="chapter-index">next chapter</span>
          <strong>Countie</strong>
          <span>Countdowns with Live Activities and widgets.</span>
        </a>
      </article>
    );
  }

  return (
    <article id={project.slug} className="countie-chapter" aria-labelledby="countie-heading">
      <div className="countie-chapter__inner">
        <p className="chapter-index">0{index + 1} / selected work</p>
        <h2 id="countie-heading">{project.title}</h2>
        <p className="countie-chapter__summary">{project.summary}</p>
        <p className="countie-chapter__description">{project.description}</p>

        <ul className="countie-chapter__facts" aria-label="Countie technologies">
          <li>Live Activities</li>
          <li>WidgetKit</li>
          <li>SwiftUI</li>
        </ul>
      </div>
    </article>
  );
}
