import type { Transition, Variants } from "framer-motion";

/** Matches --ease-editorial in globals.css. */
export const EASE_EDITORIAL: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const revealTransition: Transition = {
  duration: 0.9,
  ease: EASE_EDITORIAL,
};

/**
 * The site's only reveal gesture: a short lift with a fade. Applied to a whole
 * block, or to children via `stagger` for a line-by-line text reveal.
 */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
};

export const revealStill: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export function stagger(step = 0.07, delay = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: step, delayChildren: delay },
    },
  };
}

/** Shared in-view settings so every section reveals at the same threshold. */
export const inViewOnce = { once: true, margin: "-12% 0px -12% 0px" } as const;
