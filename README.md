# LandControl

landcontrol.co.uk — Astro 5, static output, Vercel.

- `src/pages/` routes; `src/layouts/Guide.astro` is the editorial guide template (trust block, Article + Breadcrumb schema).
- `src/content/guides/` markdown content (wave 1 onwards).
- Pricing buttons read Stripe Payment Links from `LINKS` in `src/pages/index.astro`.
- Contractual Control Alert form: endpoint to be wired to the email provider.
