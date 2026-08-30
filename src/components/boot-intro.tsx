"use client";

import { getImageProps } from "next/image";
import { useEffect, useState } from "react";

import desktopTexture from "@/assets/portfolio/boot-texture-desktop.png";
import mobileTexture from "@/assets/portfolio/boot-texture-mobile.png";
import { site } from "@/content/site";

const INTRO_KEY = "bukovinafilip:intro-seen:v1";
const INTRO_DURATION_MS = 2050;

export function BootIntro() {
  const [mounted, setMounted] = useState(true);

  const desktopImage = getImageProps({
    alt: "",
    src: desktopTexture,
    fill: true,
    priority: true,
    sizes: "100vw",
  });
  const mobileImage = getImageProps({
    alt: "",
    src: mobileTexture,
    fill: true,
    priority: true,
    sizes: "100vw",
  });

  useEffect(() => {
    const root = document.documentElement;

    if (root.dataset.intro !== "play") {
      return;
    }

    const timer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(INTRO_KEY, "1");
      } catch {
        // The intro can still complete when storage is unavailable.
      }

      root.dataset.intro = "done";
      setMounted(false);
    }, INTRO_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="boot-intro" aria-label={`${site.motto} Introduction`}>
      <picture className="boot-intro__texture">
        <source media="(max-width: 639px)" srcSet={mobileImage.props.srcSet} />
        <img {...desktopImage.props} alt="" />
      </picture>
      <p className="boot-intro__motto">{site.motto}</p>
    </div>
  );
}
