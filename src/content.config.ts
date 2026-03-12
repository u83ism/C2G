import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const gameContent = z.object({
  title: z.string(),
  game: z.string(),
  description: z.string().optional(),
});

const civilization = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/civilization' }),
  schema: gameContent,
});

const slayTheSpire = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/slayTheSpire' }),
  schema: gameContent,
});

export const collections = { civilization, slayTheSpire };
