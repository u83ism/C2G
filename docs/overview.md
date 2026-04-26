# CRADLE 2 GRAVE — サイト概要

最終更新: 2026-04-26

## サイト情報

- **サイト名:** CRADLE 2 GRAVE（C2G）
- **管理人:** ゆうやみ
- **公開時期:** 2000年頃〜現在
- **コンセプト:** 機種・ジャンル不問の個人ゲーム攻略・考察サイト
- **本番URL:** https://cradle2grave.netlify.app/
- **ホスティング:** Netlify（GitHub `main` ブランチから自動デプロイ）

---

## 技術スタック

| 項目 | 内容 |
|---|---|
| SSG | Astro（v6系） |
| 言語 | TypeScript（strict） |
| スタイル | CSS（変数ベース・ダークテーマ） |
| ホスティング | Netlify |
| CD | Netlify（`main` push で自動デプロイ） |
| データ形式 | Markdown（文章系）/ TypeScript・JSON（データ系） |

## 導入プラグイン

| プラグイン | 種別 | 役割 |
|---|---|---|
| `rehype-external-links` | rehype | 外部リンクに `_blank` / `noopener` と🔗を自動付与 |
| `remarkMermaid`（自作） | remark | ` ```mermaid ` ブロックを `<pre class="mermaid">` に変換。Shiki より前に動かすため remark で実装 |
| `mermaid` | クライアント | `<pre class="mermaid">` 要素が存在するページでのみ動的インポートしてダイアグラムを描画 |
