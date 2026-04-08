export type MenuLink = {
  readonly label: string;
  readonly href?: string;
  readonly wip?: boolean;
  readonly external?: boolean;
  readonly children?: readonly MenuLink[];
};

export type GameCard = {
  readonly title: string;
  readonly subtitle?: string;
  readonly links: readonly MenuLink[];
};

export type MenuSection = {
  readonly label: string;
  readonly cards: readonly GameCard[];
};

// ── URL prefixes for content collections ────────────────────────────────────
// Used in index.astro to build hrefs from collection entry IDs.
export const collectionUrlPrefixes = {
  civilization:  '/civilization',
  slayTheSpire:  '/slay-the-spire',
  amongUs:       '/among-us',
  ssx:           '/ssx',
  column:        '/column',
} as const;

// ── Display order for ゲームメモ・考察 cards ─────────────────────────────────
// Derived from the game field in frontmatter (collection) or title (static).
export const memoCardOrder: readonly string[] = [
  'Slay the Spire',
  'Civilization 6',
  'Civilization Revolution',
  'Among Us',
  'BLACK/MATRIXシリーズ',
  'Tropico',
  '首都高バトル0',
  'SSX',
  'Final Fantasy 5',
];

// ── Static cards for ゲームメモ・考察 (data-driven pages, not collections) ──
export const staticMemoCards: readonly GameCard[] = [
  {
    title: 'BLACK/MATRIXシリーズ',
    links: [
      { label: 'B/M2 武器熟練度考察', href: '/bm/bm2-wp' },
      { label: 'B/MOO 自動系スキル修得考察', href: '/bm/bmoo-exp' },
    ],
  },
  {
    title: 'Tropico',
    links: [
      { label: '攻略メモ', href: '/tropico' },
    ],
  },
  {
    title: '首都高バトル0',
    links: [
      { label: '攻略・裏技・データ', href: '/highway/guide' },
    ],
  },
  {
    title: 'Final Fantasy 5',
    links: [
      { label: '必要AP量一覧表（SFC/GBA両対応）', href: '/ff5/ap-chart' },
    ],
  },
];

// ── メイン攻略 section ────────────────────────────────────────────────────────
export const mainSection: MenuSection = {
  label: 'メイン攻略',
  cards: [
    {
      title: 'ワイルドアームズ（無印）',
      subtitle: 'Wild Arms / PS',
      links: [
        { label: '概要', href: '/wildarms/about' },
        { label: 'ミニゲーム・イベントデータ', href: '/wildarms/eventdeta' },
        { label: '豆知識', href: '/wildarms/mame' },
        { label: '隠し要素', href: '/wildarms/secret' },
        { label: '裏技・バグ技', href: '/wildarms/urawaza' },
        { label: '「海歩きバグ」検証', href: '/wildarms/walksea' },
        { label: '盗める・落とす重要アイテムリスト', href: '/wildarms/item' },
        {
          label: 'ステータス成長表',
          children: [
            { label: 'ロディ', href: '/wildarms/s-rody' },
            { label: 'ザック', href: '/wildarms/s-zack' },
            { label: 'セシリア', href: '/wildarms/s-cecilia' },
            { label: 'グラフによる比較', href: '/wildarms/s-graph' },
          ],
        },
        {
          label: '戦闘研究',
          children: [
            { label: 'ロディ', href: '/wildarms/b-rody' },
            { label: 'ザック', href: '/wildarms/b-zack' },
            { label: 'セシリア', href: '/wildarms/b-cecilia' },
            { label: 'ガーディアン関連研究', href: '/wildarms/b-guardian' },
          ],
        },
      ],
    },
    {
      title: '魔術士オーフェン',
      subtitle: 'Sorcerous Stabber ORPHEN / PS',
      links: [
        { label: '概要', href: 'https://u83ism.github.io/DLB/orphen/aboutg.htm', external: true },
        { label: 'ストーリー攻略', wip: true },
        { label: 'ボス攻略', href: 'https://u83ism.github.io/DLB/orphen/boss.htm', external: true },
        { label: '戦闘指南', href: 'https://u83ism.github.io/DLB/orphen/battle.htm', external: true },
        { label: '隠し要素＆小ネタ', href: 'https://u83ism.github.io/DLB/orphen/secret.htm', external: true },
        { label: '敵データベース', wip: true },
      ],
    },
    {
      title: '各種プロレスゲーム',
      links: [
        {
          label: 'エキサイティングプロレス5',
          children: [
            { label: 'シーズンモード攻略', href: 'https://21st-century-power-bomb.netlify.app/game/5season', external: true, wip: true },
            { label: '技捜索用リスト', href: 'https://21st-century-power-bomb.netlify.app/game/5movelist', external: true },
            { label: '技変更ガイド', href: 'https://21st-century-power-bomb.netlify.app/game/5movechange', external: true },
          ],
        },
      ],
    },
  ],
};
