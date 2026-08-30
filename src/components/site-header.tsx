"use client";

import { useState } from "react";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion";

import { nav, site } from "@/content/site";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [lifted, setLifted] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setLifted(value > 8);
  });

  return (
    <header
      className={`site-header${lifted ? " site-header--lifted" : ""}`}
    >
      <div className="site-header__inner">
        <div className="site-header__identity">
          <Link href="/" aria-label={`${site.name} — home`} className="site-header__name">
            {site.wordmark}
          </Link>
          <p>{site.roles.join(" · ")}</p>
        </div>

        <nav aria-label="Sections">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
