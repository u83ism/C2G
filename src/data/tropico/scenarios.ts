export type Scenario = {
  readonly name: string;
  readonly difficulty: string;
  readonly stars: number;
  readonly category: string;
};

export const scenarios: readonly Scenario[] = [
  { name: 'フルータル社',          difficulty: '困難',           stars: 3, category: 'トロピコ' },
  { name: 'ミ・コラソン',          difficulty: '途方もなく困難', stars: 5, category: 'トロピコ' },
  { name: '再興',                   difficulty: '非常に困難',     stars: 4, category: 'トロピコ' },
  { name: '農園天国',               difficulty: '困難',           stars: 3, category: 'トロピコ' },
  { name: 'イスラ・デ・フォレスタ', difficulty: '普通',           stars: 2, category: 'トロピコ' },
  { name: 'ニューハバナ',           difficulty: '困難',           stars: 3, category: 'トロピコ' },
  { name: 'ロス・エクスコンビクトス', difficulty: '普通',         stars: 2, category: 'トロピコ' },
  { name: '母なるタバコ',           difficulty: '困難',           stars: 3, category: 'トロピコ' },
  { name: '戦闘の仲間',             difficulty: '普通',           stars: 2, category: 'パラダイスアイランド（軍事）' },
  { name: '一生涯のプレジデンテ',   difficulty: '困難',           stars: 3, category: 'パラダイスアイランド（軍事）' },
  { name: '反逆者の行進',           difficulty: '困難',           stars: 3, category: 'パラダイスアイランド（軍事）' },
  { name: '良き大地',               difficulty: '普通',           stars: 2, category: 'パラダイスアイランド（軍事）' },
  { name: '深緑の島',               difficulty: '途方もなく困難', stars: 5, category: 'パラダイスアイランド（観光）' },
  { name: 'エコ・トロピコ',         difficulty: '困難',           stars: 3, category: 'パラダイスアイランド（観光）' },
  { name: 'トロピコの鉱脈',         difficulty: '非常に困難',     stars: 4, category: 'パラダイスアイランド（観光）' },
  { name: 'クラブ　トロピコ',       difficulty: '普通',           stars: 2, category: 'パラダイスアイランド（観光）' },
  { name: 'サンゴの上の宮殿',       difficulty: '困難',           stars: 3, category: 'パラダイスアイランド（観光）' },
  { name: 'ラス・トロピカス',       difficulty: '困難',           stars: 3, category: 'パラダイスアイランド（観光）' },
  { name: '監獄ロック',             difficulty: '困難',           stars: 3, category: 'パラダイスアイランド（観光）' },
  { name: '観光の楽園',             difficulty: '普通',           stars: 2, category: 'パラダイスアイランド（観光）' },
  { name: '春休み',                 difficulty: '簡単',           stars: 1, category: 'パラダイスアイランド（観光）' },
  { name: '乱獲の果てに',           difficulty: '非常に困難',     stars: 4, category: 'パラダイスアイランド（観光）' },
  { name: 'ゴールドラッシュ',       difficulty: '普通',           stars: 2, category: 'パラダイスアイランド（その他）' },
  { name: '表の顔と裏の顔',         difficulty: '非常に困難',     stars: 4, category: 'パラダイスアイランド（その他）' },
  { name: 'トライアシック・パーク', difficulty: '普通',           stars: 2, category: 'パラダイスアイランド（その他）' },
  { name: 'カリブの教育者',         difficulty: '困難',           stars: 3, category: 'パラダイスアイランド（その他）' },
  { name: 'スシオ山',               difficulty: '困難',           stars: 3, category: 'パラダイスアイランド（その他）' },
  { name: '海賊の洞窟',             difficulty: '困難',           stars: 3, category: 'パラダイスアイランド（その他）' },
  { name: '騎士よまたがれ！',       difficulty: '途方もなく困難', stars: 5, category: 'パラダイスアイランド（その他）' },
  { name: '故郷を夢見て',           difficulty: '簡単',           stars: 1, category: 'パラダイスアイランド（その他）' },
  { name: '島から出て行け！',       difficulty: '普通',           stars: 2, category: 'パラダイスアイランド（その他）' },
];

export const buildStars = (count: number): string => '★'.repeat(count);
