/**
 * Selected work.
 *
 * Only facts that were supplied are recorded here. A visual key is resolved by
 * the server-rendered project chapter, keeping asset imports out of this data
 * module while still requiring honest alternative text.
 */

export type ProjectLinkKind = "github" | "appStore" | "website" | "demo";

export type ProjectLink = {
  kind: ProjectLinkKind;
  href: string | null;
};

export type Project = {
  slug: string;
  title: string;
  /** Short descriptor shown next to the title. */
  kind: string;
  /** Short editorial line. */
  summary: string;
  /** One factual supporting sentence. */
  description: string;
  visual: "gradey" | null;
  visualAlt: string | null;
  links: ProjectLink[];
};

export const linkLabels: Record<ProjectLinkKind, string> = {
  github: "GitHub",
  appStore: "App Store",
  website: "Website",
  demo: "Live demo",
};

export const projects: Project[] = [
  {
    slug: "gradey",
    title: "Gradey",
    kind: "Student companion",
    summary: "A modern student app, reimagined.",
    description: "An open-source school companion for marks, absence, and timetables.",
    visual: "gradey",
    visualAlt:
      "Gradey running on a tilted black phone, showing a dark dashboard with a bright green overall-average card.",
    links: [
      { kind: "appStore", href: null },
      { kind: "github", href: null },
    ],
  },
  {
    slug: "countie",
    title: "Countie",
    kind: "Countdown app",
    summary: "Time, kept close.",
    description: "A countdown app using Live Activities and WidgetKit.",
    visual: null,
    visualAlt: null,
    links: [
      { kind: "appStore", href: null },
      { kind: "github", href: null },
    ],
  },
];
