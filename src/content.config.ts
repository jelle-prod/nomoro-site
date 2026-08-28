import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const teardowns = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teardowns' }),
  schema: z.object({
    title: z.string(),
    product: z.string(),
    finding: z.string(),
    date: z.coerce.date(),
    video: z.string(),
    poster: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { teardowns };
