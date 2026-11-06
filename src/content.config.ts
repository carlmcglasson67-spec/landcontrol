import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each guide lives at src/content/guides/<section>/<slug>.md and is served at /<section>/<slug>/.
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),                 // <title>, keyword-led
    description: z.string(),           // meta description, ~150 chars
    h1: z.string(),
    lede: z.string(),
    card: z.string().optional(),       // short label used on hub and related cards
    eyebrow: z.string().optional(),
    facts: z.array(z.tuple([z.string(), z.string()])).default([]),
    sources: z.array(z.tuple([z.string(), z.string()])).default([]),
    faq: z.array(z.tuple([z.string(), z.string()])).default([]),
    related: z.array(z.string()).default([]),   // ids like "compliance/60-day-deadline"
    published: z.string().optional(),  // news items: date of the event/article
    updated: z.string(),
    order: z.number().default(50),
    draft: z.boolean().default(false),
  }),
});
export const collections = { guides };
