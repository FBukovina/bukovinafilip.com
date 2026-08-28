"use client";

import { useState } from "react";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion";

import { nav, site } from "@/content/site";

/**
 * Sticky, solid, one hairline. The rule only appears once the page has moved,
 * so the hero opens without a line across the top of it.
 */
export function SiteHeader() {
  const { scrollY } = useScroll();
  const [lifted, setLifted] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setLifted(value > 24);
  });

  return (
    <header
      className={`sticky top-0 z-40 bg-ink transition-[border-color] duration-500 ease-editorial ${
        lifted ? "border-b border-rule" : "border-b border-transparent"
      }`}
    >
      <div className="page-frame flex items-center justify-between py-5 md:py-6">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="text-lg display-face text-bone transition-colors duration-300 hover:text-clay"
        >
          {site.wordmark}
        </Link>

        <nav aria-label="Sections">
          <ul className="flex items-center gap-6 md:gap-8">
            {nav.map((item) => (
              <li key={item.href} className={item.primary ? "" : "hidden md:block"}>
                <a
                  href={item.href}
                  className="-my-2 block py-2 text-meta text-ash transition-colors duration-300 hover:text-bone"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
