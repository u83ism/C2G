import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

// コレクション名 → URL パスとゲームラベルのマッピング
const COLLECTION_META = {
  civilization6: { path: 'civilization6', label: 'Civilization VI' },
  'civilization-revolution': { path: 'civilization-revolution', label: 'Civilization Revolution' },
  'slay-the-spire': { path: 'slay-the-spire', label: 'Slay the Spire' },
  'among-us': { path: 'among-us', label: 'Among Us' },
  ssx: { path: 'ssx', label: 'SSX' },
  'silent-storm': { path: 'silent-storm', label: 'Silent Storm' },
} as const;

export async function GET(context: APIContext) {
  // singleGameContent コレクションの全エントリを収集
  const singleCollections = await Promise.all(
    Object.entries(COLLECTION_META).map(async ([name, meta]) => {
      const entries = await getCollection(name as keyof typeof COLLECTION_META, ({ data }) => !data.wip);
      return entries.map(entry => ({
        title: `${meta.label} ${entry.data.title}`,
        description: entry.data.description,
        link: `/${meta.path}/${entry.id}/`,
        pubDate: entry.data.publishedAt ? new Date(entry.data.publishedAt) : undefined,
      }));
    }),
  );

  // column コレクション（game フィールドあり）
  const columnEntries = await getCollection('column', ({ data }) => !data.wip);
  const columnItems = columnEntries.map(entry => ({
    title: `${entry.data.game} ${entry.data.title}`,
    description: entry.data.description,
    link: `/column/${entry.id}/`,
    pubDate: entry.data.publishedAt ? new Date(entry.data.publishedAt) : undefined,
  }));

  // 全エントリを統合して公開日降順でソート
  const allItems = [...singleCollections.flat(), ...columnItems].sort((a, b) => {
    if (!a.pubDate && !b.pubDate) return 0;
    if (!a.pubDate) return 1;
    if (!b.pubDate) return -1;
    return b.pubDate.getTime() - a.pubDate.getTime();
  });

  return rss({
    title: 'CRADLE 2 GRAVE',
    description: 'ゲーム系研究サイト。ジャンル・機種問わず面白いゲームを追い求めています。',
    site: context.site!,
    items: allItems,
    customData: '<language>ja</language>',
  });
}
