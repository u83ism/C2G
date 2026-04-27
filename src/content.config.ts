import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// 単一ゲームコレクション用スキーマ（game/releaseYear はコレクションメタから取得）
const singleGameContent = z.object({
  title: z.string(),
  description: z.string().optional(),
  wip: z.boolean().optional(),
  publishedAt: z.string().date().optional(), // 初回公開日（YYYY-MM-DD）
  updatedAt: z.string().date().optional(),   // 最終更新日（YYYY-MM-DD）
});

// 複数ゲーム混在コレクション用スキーマ（column など）
const multiGameContent = z.object({
  title: z.string(),
  game: z.string(),
  releaseYear: z.number(),
  description: z.string().optional(),
  wip: z.boolean().optional(),
  publishedAt: z.string().date().optional(),
  updatedAt: z.string().date().optional(),
});

const civilization6 = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/civilization6' }),
  schema: singleGameContent,
});

const civilizationRevolution = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/civilization-revolution' }),
  schema: singleGameContent,
});

const slayTheSpire = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/slay-the-spire' }),
  schema: singleGameContent,
});

const amongUs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/among-us' }),
  schema: singleGameContent,
});

const column = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/column' }),
  schema: multiGameContent,
});

const ssx = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ssx' }),
  schema: singleGameContent,
});

const silentStorm = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/silent-storm' }),
  schema: singleGameContent,
});

export const collections = {
  civilization6,
  'civilization-revolution': civilizationRevolution,
  'slay-the-spire': slayTheSpire,
  'among-us': amongUs,
  column,
  ssx,
  'silent-storm': silentStorm,
};
