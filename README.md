# bukovinafilip.com

Personal site for Filip Bukovina — _still becoming._

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

| Script              | Purpose                        |
| ------------------- | ------------------------------ |
| `npm run dev`       | Development server             |
| `npm run build`     | Production build               |
| `npm run start`     | Serve the production build     |
| `npm run lint`      | ESLint                         |
| `npm run typecheck` | TypeScript, no emit            |

## Structure

```
src/
  app/
    layout.tsx        Root shell: fonts, metadata, header, footer, skip link
    page.tsx          Homepage composition — the only place sections are ordered
    globals.css       Design tokens and base styles (single source of truth)
    robots.ts
    sitemap.ts
  components/
    section.tsx       The site's one layout pattern + the shared editorial grid
    reveal.tsx        Reveal / RevealGroup / RevealItem — the only motion primitives
    external-link.tsx Outbound link that degrades to inert text when the URL is unknown
    project-row.tsx   One row of the work index
    motto.tsx         "still becoming." with the accent full stop
    site-header.tsx   Sticky header (client: hairline appears on scroll)
    site-footer.tsx   Motto, elsewhere links, copyright
    sections/         hero · about · selected-work · now
  content/
    site.ts           Identity, about copy, nav, social links
    projects.ts       Selected work
    now.ts            Current focus
  lib/
    fonts.ts          Fraunces + Inter
    motion.ts         Easing, durations, variants
    format.ts         Date formatting
```

### Where to edit what

- **Text, projects, links, "now"** — `src/content/`. Nothing else needs touching.
- **Colours, type scale, spacing, easing** — the `@theme` block in `src/app/globals.css`.
- **Section order** — `src/app/page.tsx`.

## Design tokens

Defined once in `src/app/globals.css`.

| Token          | Value     | Role                          |
| -------------- | --------- | ----------------------------- |
| `--color-ink`  | `#0e0d0c` | Page ground, warm near-black  |
| `--color-bone` | `#ede8e0` | Primary text, warm off-white  |
| `--color-ash`  | `#9c958b` | Secondary text                |
| `--color-dust` | `#6b655c` | Metadata, numerals            |
| `--color-rule` | `#272420` | Hairline dividers             |
| `--color-clay` | `#c77a4b` | The single accent             |

Type is fluid (`clamp`) rather than breakpoint-stepped, so mobile never inherits
desktop proportions. Fraunces carries display type; Inter carries everything
meant to be read. Radii stay near-flat by design — hierarchy comes from
whitespace, hairlines and type, not from cards or shadows.

Motion is limited to one gesture: a short lift with a fade, on mount in the hero
and on scroll elsewhere. `useReducedMotion` disables it entirely.

## Still missing

Everything below renders as a visible placeholder rather than an invented value.
Search `src/content/` for `null` to find them.

**URLs** (`src/content/site.ts`, `src/content/projects.ts`)

- GitHub, X, LinkedIn profile URLs and the contact email
- Quipee — App Store, GitHub
- Countie — App Store, GitHub
- OpenSide — website
- Gradey — App Store, GitHub
- Kamenictví — website

**Copy**

- `about` in `src/content/site.ts` is draft copy written from the supplied facts.
  It should be rewritten in Filip's own voice.
- Each project's `note` is `null`. The rows currently show a factual one-liner;
  a sentence per project would carry more.
- Project `year` values are unconfirmed and therefore omitted.

**Assets** (no `public/` directory yet)

- `src/app/favicon.ico` or `icon.svg`
- `src/app/opengraph-image.png` (1200×630) — social previews currently fall back
  to text only
- Optional portrait for the About section

## Deployment

Import the repository on Vercel; the defaults are correct for Next.js. Set the
production domain to `bukovinafilip.com` and confirm `site.url` in
`src/content/site.ts` matches — it is the base for canonical URLs, the sitemap
and Open Graph tags.

## Extending later

The structure anticipates, without pre-building:

- `src/app/work/[slug]/page.tsx` — project detail pages, keyed off the existing
  `slug` in `src/content/projects.ts`
- `src/app/notes/` — notes or posts, at which point MDX becomes worth adding
