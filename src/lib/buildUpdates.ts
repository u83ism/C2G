import type { UpdateEntry } from '../data/updates';

type ContentMeta = {
  readonly title: string;
  readonly game: string;
  readonly publishedAt?: string | undefined;
  readonly updatedAt?: string | undefined;
};

// コンテンツエントリと手書きエントリをマージし、日付降順で上位 limit 件を返す
export function buildUpdates(
  manual: readonly UpdateEntry[],
  contents: readonly ContentMeta[],
  limit = 5,
): readonly UpdateEntry[] {
  const map = new Map<string, string[]>();

  const push = (date: string, item: string): void => {
    const items = map.get(date) ?? [];
    items.push(item);
    map.set(date, items);
  };

  for (const entry of manual) {
    for (const item of entry.items) push(entry.date, item);
  }

  for (const c of contents) {
    if (c.publishedAt) push(c.publishedAt, `${c.game}「${c.title}」を公開`);
    if (c.updatedAt)   push(c.updatedAt,   `${c.game}「${c.title}」を更新`);
  }

  return Array.from(map.entries())
    .sort(([a], [b]) => b.localeCompare(a))
    .slice(0, limit)
    .map(([date, items]) => ({ date, items }));
}
