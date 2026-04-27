// ── ゲーム情報（単一ソース） ────────────────────────────────────────────────────
// 静的ページと単一ゲームコレクションのメタデータはここで一元管理する。
export const gameInfo = {
  silentStorm:            { title: 'Silent Storm',                             releaseYear: 2003 },
  slayTheSpire:           { title: 'Slay the Spire',                           releaseYear: 2019 },
  ssx:                    { title: 'エクストリームレーシングSSX(2000)',           releaseYear: 2000 },
  amongUs:                { title: 'Among Us',                                 releaseYear: 2018 },
  civilization6:          { title: 'Civilization 6',                           releaseYear: 2016 },
  civilizationRevolution: { title: 'Civilization Revolution',                  releaseYear: 2008 },
  excitePro5:             { title: 'エキサイティングプロレス5',                   releaseYear: 2004 },
  bmoo:                   { title: 'ブラックマトリクス OO',                       releaseYear: 2002 },
  highway:                { title: '首都高バトル0',                             releaseYear: 2001 },
  tropico:                { title: 'Tropico',                                  releaseYear: 2001 },
  bm2:                    { title: 'ブラックマトリクス 2',                        releaseYear: 2000 },
  orphen:                 { title: 'Sorcerous Stabber ORPHEN 魔術士オーフェン',  releaseYear: 2000 },
  wildarms:               { title: 'ワイルドアームズ',                          releaseYear: 1996 },
  ff5:                    { title: 'ファイナルファンタジー5',                     releaseYear: 1992 },
} as const;

// コレクション名 → ゲームメタデータのマッピング（単一ゲームコレクション用）
export const collectionGameMeta = {
  'silent-storm':            gameInfo.silentStorm,
  'slay-the-spire':          gameInfo.slayTheSpire,
  'ssx':                     gameInfo.ssx,
  'among-us':                gameInfo.amongUs,
  civilization6:             gameInfo.civilization6,
  'civilization-revolution': gameInfo.civilizationRevolution,
} as const;

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
  readonly releaseYear: number;
  readonly links: readonly MenuLink[];
};

// ── コレクションのURLプレフィックス ──────────────────────────────────────────
// index.astro でコレクションエントリIDからhrefを生成するために使用する。
export const collectionUrlPrefixes = {
  'silent-storm':            '/silent-storm',
  civilization6:             '/civilization6',
  'civilization-revolution': '/civilization-revolution',
  'slay-the-spire':          '/slay-the-spire',
  'among-us':                '/among-us',
  ssx:                       '/ssx',
  column:                    '/column',
} as const;

// ── 静的ゲームカード一覧 ──────────────────────────────────────────────────────
export const staticCards: readonly GameCard[] = [
  {
    title: gameInfo.wildarms.title,
    releaseYear: gameInfo.wildarms.releaseYear,
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
    title: gameInfo.orphen.title,
    releaseYear: gameInfo.orphen.releaseYear,
    links: [
      { label: '概要', href: 'https://u83ism.github.io/DLB/orphen/aboutg.htm', external: true },
      { label: 'ボス攻略', href: 'https://u83ism.github.io/DLB/orphen/boss.htm', external: true },
      { label: '戦闘指南', href: 'https://u83ism.github.io/DLB/orphen/battle.htm', external: true },
      { label: '隠し要素＆小ネタ', href: 'https://u83ism.github.io/DLB/orphen/secret.htm', external: true },
    ],
  },
  {
    title: gameInfo.excitePro5.title,
    releaseYear: gameInfo.excitePro5.releaseYear,
    links: [
      { label: 'シーズンモード攻略', href: 'https://21st-century-power-bomb.netlify.app/game/5season', external: true, wip: true },
      { label: '技捜索用リスト', href: 'https://21st-century-power-bomb.netlify.app/game/5movelist', external: true },
      { label: '技変更ガイド', href: 'https://21st-century-power-bomb.netlify.app/game/5movechange', external: true },
    ],
  },
  {
    title: gameInfo.ff5.title,
    releaseYear: gameInfo.ff5.releaseYear,
    links: [
      { label: '必要AP量一覧表（SFC/GBA両対応）', href: '/ff5/ap-chart' },
    ],
  },
  {
    title: gameInfo.highway.title,
    releaseYear: gameInfo.highway.releaseYear,
    links: [
      { label: '攻略・裏技・データ', href: '/highway/guide' },
    ],
  },
  {
    title: gameInfo.tropico.title,
    releaseYear: gameInfo.tropico.releaseYear,
    links: [
      { label: '攻略メモ', href: '/tropico' },
    ],
  },
  {
    title: gameInfo.bm2.title,
    releaseYear: gameInfo.bm2.releaseYear,
    links: [
      { label: '武器熟練度考察', href: '/bm2/wp' },
    ],
  },
  {
    title: gameInfo.bmoo.title,
    releaseYear: gameInfo.bmoo.releaseYear,
    links: [
      { label: '自動系スキル修得考察', href: '/bmoo/exp' },
    ],
  },
];
