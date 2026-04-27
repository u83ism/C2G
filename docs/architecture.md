# CRADLE 2 GRAVE — アーキテクチャ

最終更新: 2026-04-26

## ページ種別とルーティング

| 種別 | パス例 | 実装 |
|---|---|---|
| 静的ページ | `/wildarms/*`, `/ff5/*`, `/bm/*` 等 | `src/pages/**/*.astro`（データは `src/data/` の TypeScript） |
| コレクションページ | `/civilization/*`, `/slay-the-spire/*` 等 | `src/pages/[collection]/[slug].astro` + Markdown |
| コラムページ | `/column/*` | 同上（`column` コレクション） |
| トップ | `/` | `src/pages/index.astro`（動的生成） |
| インフォ | `/info` | `src/pages/info.astro`（静的） |

---

## コンテンツコレクション

`src/content.config.ts` に定義。全コレクション共通の `gameContent` スキーマを使用。

### コレクション一覧

| コレクション名 | ディレクトリ | URLプレフィックス |
|---|---|---|
| `silent-storm` | `src/content/silent-storm/` | `/silent-storm` |
| `civilization` | `src/content/civilization/` | `/civilization` |
| `slay-the-spire` | `src/content/slay-the-spire/` | `/slay-the-spire` |
| `among-us` | `src/content/among-us/` | `/among-us` |
| `ssx` | `src/content/ssx/` | `/ssx` |
| `column` | `src/content/column/` | `/column` |

### frontmatterスキーマ（gameContent）

| フィールド | 型 | 必須 | 説明 |
|---|---|---|---|
| `title` | `string` | ✅ | ページタイトル |
| `game` | `string` | ✅ | ゲームタイトル（トップメニューのグルーピングに使用） |
| `releaseYear` | `number` | ✅ | リリース年（トップメニューのソートに使用） |
| `description` | `string` | — | ページ説明文（OGP等） |
| `wip` | `boolean` | — | 製作途中フラグ |
| `publishedAt` | `string (YYYY-MM-DD)` | — | 初回公開日 |
| `updatedAt` | `string (YYYY-MM-DD)` | — | 最終更新日 |

---

## レイアウト・コンポーネント

### BaseLayout（`src/layouts/BaseLayout.astro`）

全ページ共通のレイアウト。

- `title` / `description` props（デフォルト値あり）
- ヘッダー・フッター・OGPタグを含む
- `sidebar` スロットが使われた場合は2カラムレイアウトに切り替わる
- mermaid.js の遅延ロードスクリプトを内包（`pre.mermaid` 要素が存在するときのみ動的インポート実行）

### MarkdownLayout（`src/layouts/MarkdownLayout.astro`）

コレクションページ用レイアウト。BaseLayout をラップ。

- パンくずリスト（`breadcrumb` prop）
- ゲームラベル＋ページタイトルのヘッダー
- `publishedAt` / `updatedAt` の日付表示（どちらか一方でも表示される）
- 見出し数が2つ以上あれば `TableOfContents` をサイドバーに自動表示

### TableOfContents（`src/components/TableOfContents.astro`）

Markdown の見出し（h2〜h3）から目次を生成するコンポーネント。
MarkdownLayout の `sidebar` スロットに渡される。

---

## データ管理

### ゲームタイトルの単一ソース（`src/data/menu.ts`）

静的ページのゲームタイトル・リリース年は `gameInfo` 定数で管理。
トップメニューカード（`staticCards`）もここを参照する。

コレクションベースのページは frontmatter の `game:` フィールドを単一ソースとする。
値は `gameInfo` の `title` と一致させること。

### トップページ更新履歴（`src/data/updates.ts` + `src/lib/buildUpdates.ts`）

更新履歴の表示ロジックは2つのソースをマージして構築する。

1. **手書きエントリ**（`src/data/updates.ts`）: サイトリニューアル・機能追加など、コンテンツ追加以外の変更
2. **コレクションエントリ**: 各 Markdown の `publishedAt` / `updatedAt` から自動生成

`buildUpdates()` 関数が両方をマージし、日付降順で上位5件を返す。
表示形式: `${game}「${title}」を公開` / `${game}「${title}」を更新`

---

## データ戦略

- **手動管理・小規模データ → TypeScriptファイル（`src/data/**/*.ts`）**
  - `satisfies` 演算子で型安全を保つ
  - 例: `src/data/ff5/jobs.ts`
- **スクレイパー生成・大量データ → JSONファイル（`src/data/**/*.json`）**
  - Pythonスクリプトが自然にJSONを出力するため
  - 例: wildarms・bm 系
