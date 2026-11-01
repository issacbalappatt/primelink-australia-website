import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    topic: z.enum(['Guide', 'Hazardous areas', 'Procurement', 'Logistics']),
    minutes: z.number(),
  }),
});

export const collections = { insights };
