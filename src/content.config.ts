import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const gameContent = z.object({
  title: z.string(),
  game: z.string(),
  description: z.string().optional(),
  wip: z.boolean().optional(),
});

const civilization = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/civilization' }),
  schema: gameContent,
});

const slayTheSpire = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/slayTheSpire' }),
  schema: gameContent,
});

const amongUs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/amongUs' }),
  schema: gameContent,
});

const column = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/column' }),
  schema: gameContent,
});

const ssx = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ssx' }),
  schema: gameContent,
});

export const collections = { civilization, slayTheSpire, amongUs, column, ssx };
