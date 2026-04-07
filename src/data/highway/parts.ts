export type PartUnlock = {
  readonly part: string;
  readonly type: string;
  readonly unlock: string;
};

export const partUnlocks: readonly PartUnlock[] = [
  { part: 'エンジン',             type: 'Type4', unlock: '13DEVILS「ハードウェポン」' },
  { part: 'エンジン',             type: 'Type5', unlock: '13DEVILS「スティールハート」' },
  { part: 'エンジン',             type: 'Type6', unlock: 'The ZODIAC「黄金の疾風」' },
  { part: 'マフラー＆エアクリーナー', type: 'Type5', unlock: '13DEVILS「トゥルースライド」' },
  { part: 'マフラー＆エアクリーナー', type: 'Type6', unlock: '13DEVILS「夢見の生霊」' },
  { part: 'マフラー＆エアクリーナー', type: 'Type7', unlock: 'The ZODIAC「紅の悪魔」' },
  { part: 'トランスミッション',   type: 'Type3', unlock: '13DEVILS「ブラッドハウンド」' },
  { part: 'トランスミッション',   type: 'Type4', unlock: '13DEVILS「ダイングスター」' },
  { part: 'サスペンション',       type: 'Type3', unlock: '13DEVILS「ユウウツな天使」' },
  { part: 'サスペンション',       type: 'Type4', unlock: '13DEVILS「シャドウアイズ」' },
  { part: 'サスペンション',       type: 'Type5', unlock: 'The ZODIAC「パープルメテオ」' },
  { part: 'ドライブトレーン',     type: 'Type6', unlock: '13DEVILS「裏切りのジャックナイフ」' },
  { part: 'ドライブトレーン',     type: 'Type7', unlock: 'R.GANGS「戦慄のドリフトダンサー」' },
  { part: 'ドライブトレーン',     type: 'Type8', unlock: '13DEVILS「ルシファー大塚」' },
  { part: 'ドライブトレーン',     type: 'Type9', unlock: '13DEVILS「迅帝」' },
  { part: 'ボディ',               type: 'Type3', unlock: '13DEVILS「シタール兼山」' },
  { part: 'ボディ',               type: 'Type4', unlock: 'The ZODIAC「ブループレッシャー」' },
  { part: 'エアロパーツ',         type: 'Type3', unlock: 'RHYTHM BOX「ヒップホップレッド」' },
  { part: 'エアロパーツ',         type: 'Type4', unlock: '13DEVILS「追撃のテイルガンナー」' },
  { part: 'エアロパーツ',         type: 'Type5', unlock: 'The ZODIAC「嘆きのプルート」' },
  { part: 'ミラー',               type: 'Type2', unlock: 'ELEGANT WILD「300マイルの赤いルビー」' },
] satisfies readonly PartUnlock[];
