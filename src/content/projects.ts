/**
 * Selected work.
 *
 * Only facts that were supplied are recorded here. `null` means "not provided
 * yet" — no URLs, dates or outcomes are guessed. `summary` is a plain
 * restatement of the known facts; `note` is the longer line Filip should write
 * himself.
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
  /** One factual line. */
  summary: string;
  /** Filip's own longer sentence. Left null until written. */
  note: string | null;
  /** Technologies actually stated for this project. */
  stack: string[];
  /** Year or range. Null until confirmed — never inferred. */
  year: string | null;
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
    slug: "quipee",
    title: "Quipee",
    kind: "Social network",
    summary: "A social network built with SwiftUI and Firebase.",
    note: null,
    stack: ["SwiftUI", "Firebase"],
    year: null,
    links: [
      { kind: "appStore", href: null },
      { kind: "github", href: null },
    ],
  },
  {
    slug: "countie",
    title: "Countie",
    kind: "Countdown app",
    summary: "A countdown app using Live Activities and WidgetKit.",
    note: null,
    stack: ["SwiftUI", "Live Activities", "WidgetKit"],
    year: null,
    links: [
      { kind: "appStore", href: null },
      { kind: "github", href: null },
    ],
  },
  {
    slug: "openside",
    title: "OpenSide",
    kind: "Startup",
    summary: "The company Filip co-founded.",
    note: null,
    stack: [],
    year: null,
    links: [{ kind: "website", href: null }],
  },
  {
    slug: "gradey",
    title: "Gradey",
    kind: "Open source",
    summary: "An open-source project shipped on the App Store.",
    note: null,
    stack: [],
    year: null,
    links: [
      { kind: "appStore", href: null },
      { kind: "github", href: null },
    ],
  },
  {
    slug: "kamenictvi",
    title: "Kamenictví",
    kind: "Client work",
    summary: "A website built for a client.",
    note: null,
    stack: [],
    year: null,
    links: [{ kind: "website", href: null }],
  },
];
