// ── サイト全体の手書き更新履歴 ──────────────────────────────────────────────
// コンテンツ追加・更新以外のサイト変更（リニューアル・機能追加等）をここに記載する。
// 日付は YYYY-MM-DD 形式で記載すること。

export type UpdateEntry = {
  readonly date: string;
  readonly items: readonly string[];
};

export const manualUpdates: readonly UpdateEntry[] = [
  { date: '2026-04-27', items: ['一部ページのURLを変更しました'] },
  { date: '2026-04-09', items: ['サイトをリニューアルしました'] },
];
