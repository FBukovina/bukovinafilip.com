import type { Transition, Variants } from "framer-motion";

/** Matches --ease-sharp in globals.css. */
export const EASE_SHARP: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

export const revealTransition: Transition = {
  duration: 0.2,
  ease: EASE_SHARP,
};

/** Opacity only — no lift. */
export const reveal: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: revealTransition },
};

export const revealStill: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export function stagger(step = 0.04, delay = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: step, delayChildren: delay },
    },
  };
}

export const inViewOnce = { once: true, margin: "-8% 0px -8% 0px" } as const;
