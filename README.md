# Vikram Kumawat — Portfolio

A premium, production-ready personal portfolio built for finance, audit, and FP&A audiences — Audit Associate at PwC India, CA Final candidate.

**Design direction:** a "general ledger" visual language — hairline dividers instead of cards, mono-spaced financial figures, account-code section labels (`ACCT / 00X`), a stock-ticker marquee, and a spreadsheet-cell-selector cursor. Built dark-first with a single emerald accent, bold DogStudio-style scroll and load animations, and restrained typography (Space Grotesk display / Inter body / JetBrains Mono data).

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom design-token theme (`tailwind.config.ts`)
- **Framer Motion** for all animation — scroll reveals, stagger, magnetic buttons, count-up numbers, page-load sequence (this covers everything GSAP would otherwise be needed for, so it isn't included as a separate dependency)
- **Lucide Icons**
- **react-hook-form + zod** for the validated contact form
- **next-themes** for the theme provider (dark by default)
- Dynamically generated **favicon** and **OpenGraph/Twitter image** via `next/og` (no binary asset needed)

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

Build & run production locally:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx          # Root layout, fonts, SEO metadata, JSON-LD
  page.tsx             # Assembles all sections
  globals.css          # Design tokens, ledger grid, scrollbar, focus states
  sitemap.ts            # /sitemap.xml
  robots.ts              # /robots.txt
  icon.tsx                # Generated favicon
  opengraph-image.tsx     # Generated OG/Twitter card
  not-found.tsx            # Custom 404
  loading.tsx               # Route-level loading fallback

components/
  layout/    navbar, footer, theme-provider, cursor, scroll-progress,
             back-to-top, loading-screen
  sections/  hero, about, experience, skills, achievements,
             certifications, education, contact
  ui/        reveal (scroll animation primitives), marquee,
             magnetic-button

lib/
  data.ts     # Single source of truth for all portfolio content
  utils.ts    # cn() classname helper

types/
  index.ts    # Shared content types

public/
  resume.pdf   # Downloadable resume (wired to Hero + Navbar)
  profile.png  # Hero portrait
  manifest.json
```

## Editing content

All real content — name, experience, skills, education, certifications, stats — lives in **`lib/data.ts`**. Nothing is hardcoded in components. To update your resume, edit that file only.

To swap the resume PDF or profile photo, just replace `public/resume.pdf` and `public/profile.png` with the same filenames.

## Sections included

Hero · About · Experience (ledger-style timeline) · Skills (categorized animated badges) · Track Record (animated count-up stats) · Certifications · Education (results table) · Contact (validated form) · Footer.

**Not included yet:** Projects and Testimonials sections were intentionally left out — there's no real project or testimonial data yet, and shipping fake ones would work against the "recruiter trust" goal of this site. The moment you have 2–3 real projects or quotes, they're straightforward to add as new sections following the same pattern as `certifications.tsx` (see "Future improvements" below).

## Performance & accessibility notes

- Images use `next/image` with priority-loading only on the hero portrait.
- All interactive elements have visible focus rings (`:focus-visible`).
- `prefers-reduced-motion` is respected globally — animations are disabled for users who request it.
- Custom cursor is disabled on touch devices automatically.
- Semantic HTML (`<nav>`, `<main>`, `<footer>`, `<table>` for education) throughout.
- Metadata, JSON-LD (`Person` schema), sitemap, and robots.txt are all wired for SEO out of the box.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required for the current build.
4. Click **Deploy**.
5. Once live, update the `SITE_URL` constant in `app/layout.tsx` and the URLs in `app/sitemap.ts` / `app/robots.ts` to your real production domain.
6. (Optional) Connect a custom domain under Vercel → Project → Settings → Domains.

## Future improvements

- **Projects section** — once you have 2–3 shipped projects (even small automation scripts), add a `components/sections/projects.tsx` with preview images, tech stack, GitHub/demo links, and impact metrics.
- **Testimonials** — a quote from a PwC manager or CA mentor would add strong third-party credibility; wire into a carousel using Framer Motion's `AnimatePresence`.
- **Contact form backend** — currently the form opens a pre-filled `mailto:` link (zero-backend, always works). To capture submissions instead, wire it to Resend, Formspree, or a Vercel serverless function with your own email API key.
- **Blog / Insights** — short write-ups on Ind AS topics, financial modelling notes, or AI-in-finance experiments would strengthen the "finance × technology" positioning for recruiters.
- **Analytics** — add Vercel Analytics or Plausible to see which sections recruiters actually spend time on.
- **CMS** — if content will change often, consider moving `lib/data.ts` into a lightweight CMS (Sanity, Contentlayer) instead of hand-editing.
