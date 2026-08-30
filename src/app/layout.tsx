import type { Metadata, Viewport } from "next";

import { BootIntro } from "@/components/boot-intro";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import { ibmPlexMono, inter } from "@/lib/fonts";

import "./globals.css";

const description = `${site.name} — ${site.roles.join(", ")}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.motto}`,
    template: `%s — ${site.name}`,
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.motto}`,
    description,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.motto}`,
    description,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#090909",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Font variables must sit on <html> so :root theme tokens can resolve them.
  return (
    <html
      lang={site.locale}
      className={`${inter.variable} ${ibmPlexMono.variable}`}
      data-intro="pending"
      suppressHydrationWarning
    >
      <head>
        <script
          id="intro-prepaint"
          dangerouslySetInnerHTML={{
            __html:
              "try{var r=window.matchMedia('(prefers-reduced-motion: reduce)').matches;var s=window.sessionStorage.getItem('bukovinafilip:intro-seen:v1')==='1';document.documentElement.dataset.intro=r||s?'skip':'play'}catch(e){document.documentElement.dataset.intro='play'}",
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="skip-link"
        >
          Skip to content
        </a>

        <BootIntro />
        <SiteHeader />
        <main id="main">
          <h1 className="sr-only">{site.name} — iOS developer and selected work</h1>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
