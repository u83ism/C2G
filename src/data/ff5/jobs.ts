type ApRow = readonly [
  number | null, // Lv1
  number | null, // Lv2
  number | null, // Lv3
  number | null, // Lv4
  number | null, // Lv5
  number | null, // Lv6
  number | null, // Lv7
];

export type Job = {
  readonly name: string;
  readonly ap: ApRow;
};

export const computeTotal = (ap: ApRow): number =>
  ap.reduce<number>((sum, v) => sum + (v ?? 0), 0);

export const sfcJobs = [
  { name: 'ナイト',       ap: [10, 30,  50,  100, 150, 350, null] },
  { name: 'モンク',       ap: [15, 30,  45,  60,  100, 150, 300 ] },
  { name: 'シーフ',       ap: [10, 20,  30,  50,  75,  150, 300 ] },
  { name: '白魔道師',     ap: [10, 20,  30,  50,  70,  100, 300 ] },
  { name: '黒魔道師',     ap: [10, 20,  30,  50,  70,  100, 450 ] },
  { name: '青魔道師',     ap: [10, 20,  70,  250, null,null,null ] },
  { name: '魔法剣士',     ap: [10, 20,  30,  50,  70,  100, 400 ] },
  { name: '時魔道師',     ap: [10, 20,  30,  50,  70,  100, 250 ] },
  { name: '召喚士',       ap: [15, 30,  45,  60,  100, 500, null] },
  { name: '赤魔道師',     ap: [20, 40,  100, 999, null,null,null] },
  { name: 'バーサーカー', ap: [100,400, null,null,null,null,null] },
  { name: '忍者',         ap: [10, 30,  50,  150, 450, null,null] },
  { name: '魔獣使い',     ap: [10, 50,  100, 300, null,null,null] },
  { name: '風水師',       ap: [25, 50,  100, null,null,null,null] },
  { name: '狩人',         ap: [15, 45,  135, 405, null,null,null] },
  { name: '吟遊詩人',     ap: [25, 50,  100, null,null,null,null] },
  { name: 'サムライ',     ap: [10, 30,  60,  180, 540, null,null] },
  { name: '竜騎士',       ap: [50, 150, 400, null,null,null,null] },
  { name: '薬師',         ap: [15, 30,  45,  135, 400, null,null] },
  { name: '踊り子',       ap: [25, 50,  325, null,null,null,null] },
  { name: 'ものまね師',   ap: [999,null,null,null,null,null,null] },
] satisfies readonly Job[];

/** GBA版追加4ジョブ */
const gbaExtra = [
  { name: '剣闘士',       ap: [30, 70,  150, 450, null,null,null] },
  { name: '予言士',       ap: [25, 50,  150, 300, null,null,null] },
  { name: '砲撃士',       ap: [50, 150, 300, null,null,null,null] },
  { name: 'ネクロマンサー',ap: [15, 30,  45,  75,  100, 200, 300] },
] satisfies readonly Job[];

export const gbaJobs: readonly Job[] = [...sfcJobs, ...gbaExtra];
