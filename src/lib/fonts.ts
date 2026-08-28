import { Fraunces, Inter } from "next/font/google";

/**
 * Fraunces carries the identity: hero, headings, project titles, motto.
 * Italic is loaded because the motto is set in it.
 */
export const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

/** Inter handles everything that has to be read rather than felt. */
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});
