export type TeamNickname = {
  readonly team: string;
  readonly nickname: string;
};

export type JinteNickname = {
  readonly condition: string;
  readonly nickname: string;
};

export const teamNicknames: readonly TeamNickname[] = [
  { team: 'ROLLING GUY',          nickname: 'ローリング野郎０号' },
  { team: 'LITTLE GANG',          nickname: 'ハイウェイバンディッド' },
  { team: 'SS LIMITED',           nickname: '究極一番星' },
  { team: 'KNIFE AND FORKS',      nickname: '夜明けのコーヒー' },
  { team: 'BLACK KNIGHTS',        nickname: '漆黒の竜騎士' },
  { team: 'FINE DRIVE',           nickname: '衝撃の彗星' },
  { team: 'RATT',                 nickname: 'ドラゴンフライ' },
  { team: "Queen's Paradise",     nickname: 'セクシャルバイオレット' },
  { team: 'RINGS',                nickname: 'スパイラルエンペラー' },
  { team: 'CURVING EDGE',         nickname: '首都高キング' },
  { team: 'GALAXY RACERS',        nickname: '次の部長' },
  { team: 'MAX RACING',           nickname: '最高ライダー' },
  { team: 'ELEGANT WILD',         nickname: 'エレガントランナウェイ' },
  { team: 'DEPARTURES',           nickname: 'ラッキーセンチュリー' },
  { team: 'TWISTER',              nickname: 'ロータリージャンキー' },
  { team: 'TEAM CATZ',            nickname: '炎のパニッシャー' },
  { team: 'The Road of Justice',  nickname: 'サイゴのシンパン' },
  { team: 'DIAMOND IMAGE',        nickname: 'クイーンズダイヤモンド' },
  { team: 'RHYTHM BOX',           nickname: '黄昏のコンダクター' },
  { team: 'WIND STARS',           nickname: 'クラッシュハート' },
  { team: 'Harmonize',            nickname: 'ミスタープレスリー' },
  { team: 'Super Speed Wagon',    nickname: 'ワゴンレボリューション' },
  { team: 'ANOTHER STAR',         nickname: '首都高の新星' },
  { team: 'GESELLSCHAFT',         nickname: 'レジェンドオブサーキット' },
  { team: 'EXPLOSION',            nickname: '首都高の疾風' },
  { team: 'HIGHWAY OUTLAW',       nickname: 'キャプテンドライバー' },
  { team: 'R.GANGS',              nickname: 'シュトルムウントドランク' },
  { team: 'CUPID ARROWS',         nickname: 'ライトニングワルキューレ' },
  { team: 'TOKIO JUNGLE',         nickname: '東京ネオン' },
  { team: 'tr RACING',            nickname: '神聖なるエスペランサ' },
  { team: 'TOP LEVEL',            nickname: 'オーバーザトップ' },
  { team: 'FREE WAY',             nickname: '赤き月光' },
  { team: 'DRY CRUISE',           nickname: 'ビートジェネレーション' },
  { team: 'E.R.O.',               nickname: 'ガスガズラー' },
  { team: 'TEAM ALPHA',           nickname: '極東の撃墜王' },
  { team: 'trUE RIDE',            nickname: 'アルティメットパイロット' },
  { team: 'UNLIMITED',            nickname: 'ハイウェイのシハイ者' },
  { team: 'R.R.',                 nickname: 'ファイナルレボリューション' },
  { team: 'THUNDER DRAGOON',      nickname: '龍皇' },
  { team: 'Abflug SRT',           nickname: 'ビクトリーオアデス' },
  { team: 'COMMANDER',            nickname: 'ファイナルボマー' },
  { team: 'DOUBLE MIND',          nickname: 'キイロイキュウキュウシャ' },
  { team: 'A.P.S.',               nickname: 'アルティメット野郎' },
  { team: 'FANATIC FUTURE',       nickname: 'アンタッチャブルマン' },
  { team: 'SPEED MASTER',         nickname: 'バーニングファイヤー' },
] satisfies readonly TeamNickname[];

/** 迅帝カー（R34RKK）に迅帝ステッカーを貼ったときのバトル成績別通り名 */
export const jinteNicknames: readonly JinteNickname[] = [
  { condition: 'WIN < LOSE',                   nickname: 'へなちょこ迅帝' },
  { condition: 'WIN < 300',                    nickname: 'にせ迅帝' },
  { condition: 'WIN > LOSE かつ WIN > 500',    nickname: '真迅帝' },
  { condition: '上記以外',                     nickname: '通常の称号＋迅帝' },
] satisfies readonly JinteNickname[];
