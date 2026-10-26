import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),           // e.g. "Agreements", "Compliance", "HMLR", "Spatial data", "Professionals"
    eyebrow: z.string().optional(),
    h1: z.string(),
    lede: z.string(),
    facts: z.array(z.tuple([z.string(), z.string()])).default([]),
    sources: z.array(z.tuple([z.string(), z.string()])).default([]),
    related: z.array(z.string()).default([]),
    updated: z.string(),
    draft: z.boolean().default(false),
  }),
});
export const collections = { guides };
