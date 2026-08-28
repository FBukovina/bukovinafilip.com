"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { inViewOnce, reveal, revealStill, revealTransition, stagger } from "@/lib/motion";

type BaseProps = {
  children: ReactNode;
  className?: string;
  /** Animate immediately on mount instead of waiting for the viewport. */
  onMount?: boolean;
  delay?: number;
};

/** Reveals its children as one block. */
export function Reveal({ children, className, onMount = false, delay = 0 }: BaseProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reduced ? revealStill : reveal}
      initial="hidden"
      animate={onMount ? "visible" : undefined}
      whileInView={onMount ? undefined : "visible"}
      viewport={inViewOnce}
      transition={reduced ? { duration: 0 } : { ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Reveals each `RevealItem` inside it in sequence. */
export function RevealGroup({
  children,
  className,
  onMount = false,
  delay = 0,
  step = 0.07,
}: BaseProps & { step?: number }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reduced ? revealStill : stagger(step, delay)}
      initial="hidden"
      animate={onMount ? "visible" : undefined}
      whileInView={onMount ? undefined : "visible"}
      viewport={inViewOnce}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: Omit<BaseProps, "onMount" | "delay">) {
  const reduced = useReducedMotion();

  return (
    <motion.div className={className} variants={reduced ? revealStill : reveal}>
      {children}
    </motion.div>
  );
}
