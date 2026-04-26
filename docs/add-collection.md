# 新規コレクションゲーム追加手順

記事数が複数になる見込みのゲームはコレクション方式で追加する。
**修正ファイルが多く、抜け漏れが起きやすい。以下を順番通りに実施すること。**

---

## 変数の定義

| 変数 | 例 | 説明 |
|---|---|---|
| `<game-id>` | `silent-storm` | ケバブケースのコレクション名 |
| `<camelCase>` | `silentStorm` | キャメルケース（TS変数名用） |
| `<GameTitle>` | `Silent Storm` | ゲームの正式タイトル |
| `<year>` | `2003` | リリース年 |

---

## 手順

### 1. `src/data/menu.ts`

`gameInfo` にエントリを追加：
```ts
<camelCase>: { title: '<GameTitle>', releaseYear: <year> },
```

`collectionUrlPrefixes` にエントリを追加：
```ts
'<game-id>': '/<game-id>',
```

### 2. `src/content.config.ts`

コレクション定義を追加：
```ts
const <camelCase> = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/<game-id>' }),
  schema: gameContent,
});
```

`collections` のエクスポートに追加：
```ts
export const collections = { ..., '<game-id>': <camelCase> };
```

### 3. `npx astro sync` を実行する（重要）

```bash
npx astro sync
```

`content.config.ts` を変更しても Astro は型定義（`.astro/types.d.ts`）を自動更新しない。
これを忘れると次のステップで `getCollection('<game-id>')` が型エラーになる。

### 4. `src/content/<game-id>/`

ディレクトリを作成し、最初の Markdown を置く。

frontmatter テンプレート：
```yaml
---
title: "記事タイトル"
game: "<GameTitle>"
releaseYear: <year>
description: "説明文"
wip: true
---
```

### 5. `src/pages/<game-id>/[slug].astro`

既存の `slay-the-spire/[slug].astro` をコピーして `breadcrumb` を変更する：

```astro
---
import { getCollection, render } from 'astro:content';
import MarkdownLayout from '../../layouts/MarkdownLayout.astro';

export async function getStaticPaths() {
  const entries = await getCollection('<game-id>');
  return entries.map(entry => ({
    params: { slug: entry.id },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content, headings } = await render(entry);
---

<MarkdownLayout
  title={entry.data.title}
  description={entry.data.description}
  game={entry.data.game}
  headings={headings}
  breadcrumb={[{ label: '<GameTitle>', href: '/<game-id>' }]}
  publishedAt={entry.data.publishedAt}
  updatedAt={entry.data.updatedAt}
>
  <Content />
</MarkdownLayout>
```

### 6. `src/pages/<game-id>/index.astro`（記事が複数ある場合）

`column/index.astro` を参考に作成する。

### 7. `src/pages/index.astro`（4箇所修正）

**① `Promise.all` に追加：**
```ts
const [..., <camelCase>Entries] = await Promise.all([
  ...,
  getCollection('<game-id>'),
]);
```

**② `toCards` の型引数に追加：**
```ts
function toCards(entries: CollectionEntry<'...' | '<game-id>'>[], ...)
```

**③ `allContentMetas` の配列に追加：**
```ts
const allContentMetas = [
  ...,
  ...<camelCase>Entries,
].map(...);
```

**④ `allCards` の配列に追加：**
```ts
const allCards = [
  ...,
  ...toCards(<camelCase>Entries, collectionUrlPrefixes['<game-id>']),
].sort(...);
```

---

## チェックリスト

- [ ] `src/data/menu.ts` — `gameInfo` にエントリ追加
- [ ] `src/data/menu.ts` — `collectionUrlPrefixes` にエントリ追加
- [ ] `src/content.config.ts` — コレクション定義追加・`collections` エクスポート更新
- [ ] `npx astro sync` 実行
- [ ] `src/content/<game-id>/` — ディレクトリ作成・最初の Markdown 追加
- [ ] `src/pages/<game-id>/[slug].astro` — 個別記事ページ作成
- [ ] `src/pages/<game-id>/index.astro` — 一覧ページ作成（任意）
- [ ] `src/pages/index.astro` — `Promise.all` / `toCards` 型 / `allContentMetas` / `allCards` の4箇所更新
