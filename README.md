# Suraksha24 — marketing website

Premium marketing site for Suraksha24, a home healthcare service in Kolkata built for NRI
families whose parents live in India. Next.js (App Router) + TypeScript + Tailwind CSS,
statically generated.

## Stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS v4** — theme tokens (colours, fonts, shadows) live in [app/globals.css](app/globals.css)
- **Fraunces** (serif display) + **Inter** (sans body) via `next/font/google`
- **next-mdx-remote** for the blog (Markdown/MDX files, no CMS)
- Pages are statically generated at build time. The one exception is
  `app/api/contact/route.ts`, a server Route Handler — this is why the project is a normal
  Next.js build rather than `output: "export"`.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build (also used for type-checking)
npm run lint      # ESLint
```

## Where to edit things

Almost everything a client would want to change lives in **`/config`**, not scattered
across components:

| File | Controls |
|---|---|
| `config/site.ts` | Contact details, nav, trust-strip stats, "How it works" steps, all 7 services, testimonials, FAQ, footer copy, timezone-widget cities |
| `config/estimator.ts` | Care plan cost estimator rates (₹/hour per service) — **placeholder rates, replace with real pricing** |
| `config/servicePicker.ts` | The "which service do you need?" decision tree |

Edit these and the site updates everywhere that data is used — no component edits needed.

### Blog posts

Posts are Markdown/MDX files in `content/blog/*.mdx` with frontmatter:

```md
---
title: "Post title"
slug: "post-title"          # optional — defaults to the filename
excerpt: "One or two sentences shown on cards."
author: "Suraksha24 Care Team"
authorRole: "Care Team, Suraksha24"
date: "2026-06-02"          # YYYY-MM-DD
category: "Elder Care"      # any string — filter chips are generated from whatever's used
coverImage: "/blog/my-cover.jpg"   # optional — omit to use the built-in cover placeholder
readingTime: "4 min read"   # optional — auto-calculated from word count if omitted
sample: true                # shows a "Sample content" badge; remove once the post is reviewed
draft: true                 # set true to hide a post from the site entirely
---

Body content in Markdown. `## H2` and `### H3` headings automatically populate the
table of contents. `<Callout type="info" title="...">…</Callout>` and
`<Callout type="tip" ...>` are available directly in the content for info/tip boxes.
```

Adding a new `.mdx` file to `content/blog/` is all that's needed — the listing page,
sitemap, category filters and related-articles logic all pick it up automatically.
`generateStaticParams` in `app/blog/[slug]/page.tsx` prerenders every post at build time.

The 4 seed posts are placeholder editorial content (`sample: true`) written to be
genuinely useful and non-diagnostic, but they should be reviewed/replaced with the
client's own voice before launch.

## Project structure

```
app/                       Routes (App Router)
  page.tsx                 Home
  services/page.tsx        Full services page (expands the 01–07 grid)
  blog/page.tsx             Blog listing
  blog/[slug]/page.tsx      Blog article (SSG)
  about/page.tsx, contact/page.tsx
  api/contact/route.ts      Stub POST handler for the callback form (logs to server console)
  sitemap.ts, robots.ts     SEO
components/
  ui/                       Generic building blocks: Button, Section, Card, ServiceCard,
                            FadeIn (scroll reveal), Accordion
  layout/                   Header, Footer, WhatsAppButton, MobileActionBar
  home/                     Home-page sections + interactive widgets (timezone, service
                            picker, stat counters, testimonial carousel)
  services/                 ServiceSection, ServiceQuickNav, CarePlanEstimator
  blog/                     PostCard, BlogIndexClient (search/filter), TableOfContents,
                            ReadingProgressBar, ShareButtons, RelatedArticles, InlineCta,
                            Callout, mdxComponents (MDX → styled JSX map)
  forms/CallbackForm.tsx    Shared callback form (used on the home page CTA, /contact, and
                            reachable from the mobile action bar)
config/                     Editable content (see table above)
content/blog/               Blog post source files (.mdx)
lib/                        Blog data layer (lib/blog.ts), reading time, TOC extraction,
                            date/stat formatting helpers
```

## Design system notes

- Palette, fonts and shadow tokens are defined once in `app/globals.css` under `@theme
  inline` — change a colour there and it updates everywhere (`bg-forest`, `text-gold`,
  `shadow-soft`, etc. are all generated from these tokens).
- `FadeIn` (`components/ui/FadeIn.tsx`) is the scroll-reveal used site-wide. It renders
  visible by default (both server-rendered HTML and pre-hydration) and only hides an
  element if, after mount, it's confirmed to start below the fold — so content is never
  hidden if JavaScript fails to load. It also respects `prefers-reduced-motion`.
- The contact form (`components/forms/CallbackForm.tsx`) posts JSON to
  `app/api/contact/route.ts`, which currently just validates and logs the submission.
  Wire it up to real email/CRM delivery when a backend is available — the field names
  (`name`, `country`, `phone`, `bestTime`, `message`) are the stable contract to build on.

## Before you launch — replace these placeholders

- **Stats** in `config/site.ts` (`trustStats`) — "10,000+ visits", "4.8★" are illustrative.
- **Testimonials** in `config/site.ts` (`nriTestimonials`) — all marked `placeholder: true`.
- **Sample blog posts** in `content/blog/` — marked `sample: true`, written to be useful
  but should get a final editorial review.
- **Care plan estimator rates** in `config/estimator.ts` — placeholder ₹/hour figures.
- **`public/og-image.jpg`** — referenced in `app/layout.tsx` metadata but not included;
  add a real 1200×630 social preview image.
- **Favicon** (`app/favicon.ico`) — currently the default Next.js icon.
- **Map embed** on `/contact` — currently a labelled placeholder box; swap in a real
  Google Maps embed for the Salt Lake office once you have an embed URL/API key.
- **`siteConfig.url`** in `config/site.ts` — set to the real production domain (used in
  canonical URLs, sitemap, and Open Graph tags).
