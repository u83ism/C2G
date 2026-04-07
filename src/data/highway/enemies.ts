export type EnemyCar = {
  readonly no: number;
  readonly name: string;
  readonly car: string;
  readonly weightKg: number;
  readonly powerPs: number;
  readonly location: string;
};

export type CustomCar = {
  readonly name: string;
  readonly car: string;
  readonly weightKg: number;
  readonly powerPs: number;
};

/** 13DEVILS・The ZODIAC・？？？の敵車スペック */
export const enemyCars: readonly EnemyCar[] = [
  { no: 374, name: '裏切りのジャックナイフ', car: 'TYPE-S13KKK',  weightKg: 1132, powerPs:  477, location: '環状線' },
  { no: 375, name: 'トゥルースライド',       car: 'TYPE-Z32ZXK',  weightKg: 1278, powerPs:  461, location: '環状線' },
  { no: 376, name: 'ユウウツな天使',         car: 'TYPE-S14KMK',  weightKg: 1152, powerPs:  558, location: '環状線' },
  { no: 377, name: 'ハード ウェポン',         car: 'TYPE-100TVK',  weightKg: 1405, powerPs:  581, location: '新環状' },
  { no: 378, name: '墜落の刃',               car: 'TYPE-Y33CVK',  weightKg: 1525, powerPs:  638, location: '新環状' },
  { no: 379, name: 'ブラッド ハウンド',       car: 'TYPE-S161VK',  weightKg: 1578, powerPs:  820, location: '新環状' },
  { no: 380, name: 'ルシファー大塚',         car: 'TYPE-AP1HTK',  weightKg: 1162, powerPs:  550, location: '新環状' },
  { no: 381, name: 'シタール兼山',           car: 'TYPE-JZZ30K',  weightKg: 1464, powerPs:  795, location: '新環状' },
  { no: 382, name: 'スティール ハート',       car: 'TYPE-A80RK',   weightKg: 1426, powerPs:  816, location: '新環状' },
  { no: 383, name: 'ダイング スター',         car: 'TYPE-Z15AMK',  weightKg: 1479, powerPs:  964, location: '環状線' },
  { no: 384, name: '夢見の生霊',             car: 'TYPE-NA2K',    weightKg: 1079, powerPs:  720, location: '新環状' },
  { no: 385, name: '追撃のテイルガンナー',   car: 'TYPE-FC3E3K',  weightKg:  991, powerPs:  652, location: '湾岸線' },
  { no: 386, name: 'シャドウアイズ',         car: 'TYPE-A70GTK',  weightKg: 1274, powerPs:  926, location: '横羽線' },
  { no: 387, name: '迅帝',                   car: 'TYPE-R34RKK',  weightKg: 1290, powerPs: 1200, location: '？？？' },
  { no: 388, name: 'ミッドナイト ローズ',     car: 'TYPE-Z16AK',   weightKg: 1330, powerPs:  913, location: '環状線' },
  { no: 389, name: '黄金の疾風',             car: 'TYPE-NA1K',    weightKg: 1060, powerPs:  658, location: '環状線' },
  { no: 390, name: '影の謀反者',             car: 'TYPE-PS13XK',  weightKg:  996, powerPs:  744, location: '新環状' },
  { no: 391, name: 'ハード リフ',             car: 'TYPE-S15RKK',  weightKg: 1013, powerPs:  821, location: '新環状' },
  { no: 392, name: 'ブルー プレッシャー',     car: 'TYPE-Y34GUK',  weightKg: 1385, powerPs:  871, location: '新環状' },
  { no: 393, name: '無冠の帝王',             car: 'TYPE-JCESEK',  weightKg: 1308, powerPs: 1030, location: '湾岸線' },
  { no: 394, name: '嘆きのブルート',         car: 'TYPE-UZZ30K',  weightKg: 1107, powerPs:  783, location: '湾岸線' },
  { no: 395, name: '紅の悪魔',               car: 'TYPE-R34RK',   weightKg: 1386, powerPs: 1189, location: '湾岸線' },
  { no: 396, name: 'クイーンズ ナイト',       car: 'TYPE-Z32VSK',  weightKg: 1101, powerPs:  972, location: '横羽線' },
  { no: 397, name: 'パープルメテオ',         car: 'TYPE-R32RNK',  weightKg: 1182, powerPs: 1173, location: '横羽線' },
  { no: 398, name: 'エキゾースト イブ',       car: 'TYPE-A80RZK',  weightKg: 1262, powerPs: 1038, location: '横羽線' },
  { no: 399, name: '白いカリスマ',           car: 'TYPE-FD3RK',   weightKg:  998, powerPs: 1106, location: '？？？' },
  { no: 400, name: '？？？',                 car: 'TYPE-S30ZX',   weightKg:  722, powerPs: 1104, location: '？？？' },
] satisfies readonly EnemyCar[];

/**
 * カスタムカーを購入しLPS発動済みフルチューンしたときの自車スペック
 * NA車以外はフルブースト状態の値
 */
export const customCars: readonly CustomCar[] = [
  { name: '裏切りのジャックナイフ', car: 'TYPE-S13KKK',  weightKg:  906, powerPs:  697 },
  { name: 'トゥルースライド',       car: 'TYPE-Z32ZXK',  weightKg: 1171, powerPs:  631 },
  { name: 'ユウウツな天使',         car: 'TYPE-S14KMK',  weightKg: 1004, powerPs:  740 },
  { name: 'ハード ウェポン',         car: 'TYPE-100TVK',  weightKg: 1299, powerPs:  844 },
  { name: '墜落の刃',               car: 'TYPE-Y33CVK',  weightKg: 1421, powerPs:  857 },
  { name: 'ブラッド ハウンド',       car: 'TYPE-S161VK',  weightKg: 1478, powerPs: 1029 },
  { name: 'ルシファー大塚',         car: 'TYPE-AP1HTK',  weightKg: 1060, powerPs:  621 },
  { name: 'シタール兼山',           car: 'TYPE-JZZ30K',  weightKg: 1326, powerPs:  973 },
  { name: 'スティール ハート',       car: 'TYPE-A80RK',   weightKg: 1324, powerPs:  936 },
  { name: 'ダイング スター',         car: 'TYPE-Z15AMK',  weightKg: 1355, powerPs: 1104 },
  { name: '夢見の生霊',             car: 'TYPE-NA2K',    weightKg: 1055, powerPs:  720 },
  { name: '追撃のテイルガンナー',   car: 'TYPE-FC3E3K',  weightKg:  963, powerPs:  690 },
  { name: 'シャドウアイズ',         car: 'TYPE-A70GTK',  weightKg: 1255, powerPs:  974 },
  { name: '迅帝',                   car: 'TYPE-R34RKK',  weightKg: 1276, powerPs: 1258 },
  { name: 'ミッドナイト ローズ',     car: 'TYPE-Z16AK',   weightKg: 1314, powerPs:  959 },
  { name: '黄金の疾風',             car: 'TYPE-NA1K',    weightKg: 1032, powerPs:  702 },
  { name: '影の謀反者',             car: 'TYPE-PS13XK',  weightKg:  900, powerPs:  782 },
  { name: 'ハード リフ',             car: 'TYPE-S15RKK',  weightKg:  893, powerPs:  863 },
  { name: 'ブルー プレッシャー',     car: 'TYPE-Y34GUK',  weightKg: 1381, powerPs:  916 },
  { name: '無冠の帝王',             car: 'TYPE-JCESEK',  weightKg: 1292, powerPs: 1087 },
  { name: '嘆きのブルート',         car: 'TYPE-UZZ30K',  weightKg: 1107, powerPs:  783 },
  { name: '紅の悪魔',               car: 'TYPE-R34RK',   weightKg: 1302, powerPs: 1247 },
  { name: 'クイーンズ ナイト',       car: 'TYPE-Z32VSK',  weightKg: 1101, powerPs:  972 },
  { name: 'パープルメテオ',         car: 'TYPE-R32RNK',  weightKg: 1168, powerPs: 1230 },
  { name: 'エキゾースト イブ',       car: 'TYPE-A80RZK',  weightKg: 1262, powerPs: 1038 },
  { name: '白いカリスマ',           car: 'TYPE-FD3RK',   weightKg:  998, powerPs: 1106 },
  { name: '？？？',                 car: 'TYPE-S30ZX',   weightKg:  712, powerPs: 1104 },
] satisfies readonly CustomCar[];
