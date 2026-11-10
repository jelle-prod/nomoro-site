import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Journal. One folder per article under src/content/journal/<slug>/index.md
 * with its images beside it, or a flat <slug>.md for text only pieces.
 *
 * Categories are fixed by the design brief. Do not add a fifth.
 */
export const categories = ['Observations', 'Discoveries', 'Field Notes', 'No Product Needed'] as const;

const journal = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: './src/content/journal' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One line under the title. Set in the serif. */
      standfirst: z.string(),
      /** Short plain summary for lists, meta description and Open Graph. */
      excerpt: z.string().max(200),
      date: z.coerce.date(),
      category: z.enum(categories),
      /** Shot 1: the chore, not the object. Required to publish. */
      hero: image().optional(),
      heroAlt: z.string().optional(),
      heroCaption: z.string().optional(),
      author: z.string().default('Jelle Eysermans'),
      readingMinutes: z.number().int().positive().optional(),
      featured: z.boolean().default(false),
      related: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { journal };
