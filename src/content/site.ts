/**
 * Identity, navigation and contact points.
 *
 * A `null` href means the destination has not been supplied yet. Components
 * render those as inert labels rather than dead links, so searching this
 * directory for `null` lists everything still outstanding.
 */

export type SocialLink = {
  label: string;
  /** Full URL, or `mailto:` for email. */
  href: string | null;
  /** Shown next to the label as a quiet secondary cue. */
  handle: string | null;
};

export const site = {
  name: "Filip Bukovina",
  displayName: "Filip Bukovina",
  motto: "still becoming.",
  wordmark: "Filip Bukovina",
  domain: "bukovinafilip.com",
  url: "https://bukovinafilip.com",
  /** Facts only. Rendered as a single quiet line beneath the hero. */
  roles: ["iOS developer", "co-founder of OpenSide", "IT student at SSŠVT"],
  locale: "en",
} as const;

/**
 * DRAFT COPY — grounded strictly in supplied facts, but written in an assumed
 * voice. Filip should rewrite this in his own words before launch.
 */
export const about = [
  "I'm an IT student at SSŠVT and an iOS developer. I co-founded OpenSide, and most of my time goes into building software — apps, products, and the occasional experiment that ends up becoming one of the first two.",
  "I also teach English. Between the two, I've come to prefer work that only counts as finished once someone else understands it.",
] as const;

/**
 * The portfolio is short enough that every destination remains visible at
 * every viewport size.
 */
export const nav = [
  { label: "work", href: "#work" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
] as const;

export const socials: SocialLink[] = [
  { label: "GitHub", href: null, handle: null },
  { label: "X", href: null, handle: null },
  { label: "LinkedIn", href: null, handle: null },
  { label: "Email", href: null, handle: null },
];
