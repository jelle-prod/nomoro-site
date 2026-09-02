import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const teardowns = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teardowns' }),
  schema: z.object({
    title: z.string(),
    product: z.string(),
    finding: z.string(), // one line on what was found
    date: z.coerce.date(),
    // A teardown carries a video, a set of slides, or both.
    video: z.string().optional(), // path to self-hosted MP4, e.g. /videos/acme.mp4
    poster: z.string().optional(),
    slides: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        })
      )
      .optional(),
    linkedin: z.string().optional(), // URL of the LinkedIn post, if published there
    draft: z.boolean().default(false),
  }),
});

export const collections = { teardowns };
