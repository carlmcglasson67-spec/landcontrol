# LandControl

landcontrol.co.uk — Astro 5, static output, Vercel (framework preset: **Astro**).

## Structure
- `src/pages/contractual-control-agreements/` — pillar guide (FAQ schema).
- `src/content/guides/<section>/<slug>.md` — guide collection, served at `/<section>/<slug>/` by `src/pages/[section]/[slug].astro`. Section hubs come from `src/data/sections.ts` (`agreements`, `compliance`, `hmlr`, `spatial-data`, `intelligence`, `news`). Add a guide = add a markdown file; frontmatter schema in `src/content.config.ts`.
- Tools: `/agreement-checker/`, `/deadline-calculator/`, `/transitional-period-checker/`, `/readiness-checklist/`, hub at `/tools/`. All client-side, no data leaves the browser.
- `src/pages/professionals/*` audience pages, `/tracker/` implementation tracker, `/press/`, `/new-era/`.
- `src/layouts/Guide.astro` editorial template (trust block, Article/NewsArticle + Breadcrumb + FAQ schema). `src/layouts/Tool.astro` for tools (WebApplication schema).
- `public/llms.txt`, `public/robots.txt` (AI crawlers allowed), `public/og.png` share image.

## Signup (Contractual Control Alert)
`api/subscribe.js` is a Vercel function. It emails each signup to the inbox and sends the subscriber a welcome email via Hostinger SMTP. Set in Vercel → Settings → Environment Variables:
- `SMTP_USER` = contact@landcontrol.co.uk
- `SMTP_PASS` = mailbox password
- optional `SMTP_HOST` (default smtp.hostinger.com), `NOTIFY_TO`

Until those are set the form falls back to a pre-filled mailto.

## Pricing
Buttons read Stripe Payment Links from `LINKS` in `src/pages/index.astro`; empty = fall back to the signup form.

## Content rules
Every guide: dated `updated`, primary `sources`, reviewed against SI 2026/615 and HMLR Practice guide 84. Independent / not affiliated / not legal advice wording stays on every page.
