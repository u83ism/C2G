export type PlateRow = {
  readonly name: string;
  readonly str: number | null;
  readonly vit: number | null;
  readonly sor: number | null;
  readonly res: number | null;
};

export const plates: readonly PlateRow[] = [
  { name: 'みずのささやき（シトゥルダーク）',    str: null, vit: null, sor: 10,   res: null },
  { name: 'だいちのうなり（グルジエフ）',         str: null, vit: 10,   sor: null, res: null },
  { name: 'れっかのいかり（ムア・ガルド）',        str: 10,   vit: null, sor: null, res: null },
  { name: 'しっぷうのつめ（フェンガロン）',        str: null, vit: null, sor: null, res: 10   },
  { name: 'やまのひびき（ディノギノス）',          str: null, vit: 20,   sor: null, res: null },
  { name: 'せいじゃのかなしみ（イオニ・パウアー）', str: 20,  vit: null, sor: null, res: null },
  { name: 'しのせっぷん（ギィ・ラムトス）',        str: null, vit: null, sor: 30,   res: null },
  { name: 'らいめいのきば（ヌア・シャックス）',    str: null, vit: null, sor: null, res: 20   },
  { name: 'せんこうのいちげき（ステア・ロウ）',    str: 10,   vit: 10,   sor: null, res: 10   },
  { name: 'わだつみのこころ（ルカーディア）',       str: null, vit: 20,   sor: 20,   res: null },
  { name: 'てんのさばき（ソラス・エムス）',         str: 10,   vit: null, sor: 20,   res: 10   },
  { name: 'ゆきのけっしょう（アルスレート）',       str: 20,   vit: 10,   sor: null, res: 10   },
  { name: 'ほしのかがやき（リグドブライト）',       str: 10,   vit: 10,   sor: 10,   res: 10   },
  { name: 'いのちのほのお（オードリューク）',       str: 20,   vit: 20,   sor: null, res: null },
  { name: 'まかいのよびごえ（ドラス・ドラム）',    str: null, vit: null, sor: 40,   res: null },
  { name: 'つるぎのまい（エクイテス）',            str: 40,   vit: null, sor: null, res: null },
  { name: 'じょうさいのまもり（ゼルテュークス）',  str: null, vit: 40,   sor: null, res: null },
  { name: 'ときのはぐるま（ダン・ダイラム）',       str: null, vit: null, sor: 50,   res: null },
  { name: 'あいのきせき（ラフティーナ）',           str: 5,    vit: 20,   sor: 30,   res: 5    },
  { name: 'ゆうきのもんしょう（ジャスティーン）',  str: 20,   vit: 10,   sor: null, res: 30   },
  { name: 'きぼうのかけら（ゼファー）',             str: 20,   vit: 20,   sor: 10,   res: 10   },
];

export type MaterialRow = {
  readonly name: string;
  readonly element: string;
  readonly material: string;
  readonly hiMaterial: string;
};

export const materials: readonly MaterialRow[] = [
  { name: 'みずのささやき（シトゥルダーク）',    element: '水', material: '×8',    hiMaterial: '×20' },
  { name: 'だいちのうなり（グルジエフ）',         element: '地', material: '×8',    hiMaterial: '×20' },
  { name: 'れっかのいかり（ムア・ガルド）',        element: '火', material: '×8',    hiMaterial: '×20' },
  { name: 'しっぷうのつめ（フェンガロン）',        element: '風', material: '×8',    hiMaterial: '×20' },
  { name: 'やまのひびき（ディノギノス）',          element: '地', material: '×10',   hiMaterial: '×20' },
  { name: 'せいじゃのかなしみ（イオニ・パウアー）', element: '聖', material: '×10',  hiMaterial: '×20' },
  { name: 'しのせっぷん（ギィ・ラムトス）',        element: '無', material: '即死攻撃（50%）', hiMaterial: '即死攻撃（99%）' },
  { name: 'らいめいのきば（ヌア・シャックス）',    element: '雷', material: '×10',   hiMaterial: '×20' },
  { name: 'せんこうのいちげき（ステア・ロウ）',    element: '無', material: '×12',   hiMaterial: '×20' },
  { name: 'わだつみのこころ（ルカーディア）',       element: '水', material: '×14',   hiMaterial: '×22' },
  { name: 'てんのさばき（ソラス・エムス）',         element: '聖', material: '×16',   hiMaterial: '×22' },
  { name: 'ゆきのけっしょう（アルスレート）',       element: '水', material: '×16',   hiMaterial: '×22' },
  { name: 'ほしのかがやき（リグドブライト）',       element: '無', material: '×16',   hiMaterial: '×22' },
  { name: 'いのちのほのお（オードリューク）',       element: '無', material: '味方全員：ステータス異常回復（戦闘不能×）＆HP回復（×10）', hiMaterial: '味方全員：ステータス異常回復（戦闘不能○）＆HP回復（×15）' },
  { name: 'まかいのよびごえ（ドラス・ドラム）',    element: '魔', material: '×18',   hiMaterial: '×25' },
  { name: 'つるぎのまい（エクイテス）',            element: '風', material: '×20',   hiMaterial: '×30' },
  { name: 'じょうさいのまもり（ゼルテュークス）',  element: '無', material: '味方全員：防御力25%上昇・全属性半減', hiMaterial: '味方全員：防御力50%上昇＆全属性無効' },
  { name: 'ときのはぐるま（ダン・ダイラム）',       element: '無', material: '×25',   hiMaterial: '×50' },
  { name: 'あいのきせき（ラフティーナ）',           element: '無', material: '味方全員：HP回復（×15）', hiMaterial: '敵：ダメージ（×15）＆アンデッド消滅 / 味方全員：HP回復（×15）' },
  { name: 'ゆうきのもんしょう（ジャスティーン）',  element: '全', material: '×30',   hiMaterial: '×60' },
  { name: 'きぼうのかけら（ゼファー）',             element: '無', material: '×30',   hiMaterial: '×60' },
];

export const fmt = (v: number | null): string => v === null ? '-' : String(v);
