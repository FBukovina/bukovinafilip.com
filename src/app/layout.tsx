import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import { fraunces, inter } from "@/lib/fonts";

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
  themeColor: "#0e0d0c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // The font variables must sit on <html>: the :root theme tokens in
  // globals.css reference them, and a var() on :root cannot resolve a
  // custom property that is only declared further down the tree.
  return (
    <html lang={site.locale} className={`${fraunces.variable} ${inter.variable}`}>
      <body className="grain antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ink-raised focus:px-4 focus:py-2 focus:text-meta focus:text-bone"
        >
          Skip to content
        </a>

        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
