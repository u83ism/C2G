import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const gameContent = z.object({
  title: z.string(),
  game: z.string(),
  releaseYear: z.number(),
  description: z.string().optional(),
  wip: z.boolean().optional(),
  publishedAt: z.string().date().optional(), // 初回公開日（YYYY-MM-DD）
  updatedAt: z.string().date().optional(),   // 最終更新日（YYYY-MM-DD）
});

const civilization = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/civilization' }),
  schema: gameContent,
});

const slayTheSpire = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/slay-the-spire' }),
  schema: gameContent,
});

const amongUs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/among-us' }),
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

const silentStorm = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/silent-storm' }),
  schema: gameContent,
});

export const collections = { civilization, 'slay-the-spire': slayTheSpire, 'among-us': amongUs, column, ssx, 'silent-storm': silentStorm };
