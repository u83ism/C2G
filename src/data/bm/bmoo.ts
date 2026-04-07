export type StageExp = {
  readonly stage: string;
  readonly baseExp: number;
  readonly bonus: number;
  readonly runningTotal: number;
};

export type CharacterMastery = {
  readonly name: string;
  readonly startLevel: number;
  readonly masterLevel: number;
  readonly requiredExp: number;
  readonly inherited?: true;
};

export const stageExps: readonly StageExp[] = [
  { stage: '1-3「偽翼のカイン」',                    baseExp:  1000, bonus:     0, runningTotal:   1200 },
  { stage: '2-1「前略サーカスにて」',                 baseExp:   600, bonus:     0, runningTotal:   1800 },
  { stage: '2-2「乙女の一徹」',                       baseExp:  1700, bonus:   200, runningTotal:   3700 },
  { stage: '2-3「悪魔討伐部隊」',                     baseExp:  2300, bonus:   400, runningTotal:   6400 },
  { stage: '2-4「闇にうごめく者」',                   baseExp:  4700, bonus:     0, runningTotal:  11100 },
  { stage: '2-5「黒き翼のアベル」',                   baseExp:  4500, bonus:   800, runningTotal:  16400 },
  { stage: '3-1「強襲」',                             baseExp:  8600, bonus:     0, runningTotal:  25000 },
  { stage: '3-2「異形の化身」',                       baseExp: 10900, bonus:     0, runningTotal:  35900 },
  { stage: '3-3「悪魔のささやき」',                   baseExp: 13800, bonus:   950, runningTotal:  50650 },
  { stage: '4-1「強剣士クレイス」',                   baseExp: 17400, bonus:   830, runningTotal:  68880 },
  { stage: '4-2「廃棄された実験体」',                 baseExp:  5400, bonus:     0, runningTotal:  74280 },
  { stage: '4-3「強行突破」',                         baseExp:  5400, bonus:     0, runningTotal:  79680 },
  { stage: '4-4「渦巻く運命」',                       baseExp: 11100, bonus:  2400, runningTotal:  93180 },
  { stage: '5-1「消えない傷痕」',                     baseExp: 16800, bonus:  1500, runningTotal: 111480 },
  { stage: '5-2「嘆きの赤い牙」',                     baseExp: 20300, bonus:  1150, runningTotal: 132930 },
  { stage: '5-3「アラギ」',                           baseExp:     0, bonus:  1500, runningTotal: 134430 },
  { stage: '6-1「惨劇の広場」',                       baseExp:     0, bonus: 36000, runningTotal: 170430 },
  { stage: '6-2「赤い牙の再撃」',                     baseExp:     0, bonus:  3100, runningTotal: 173530 },
  { stage: '6-3「闇にうごめく玩具」',                 baseExp:     0, bonus:  4000, runningTotal: 177530 },
  { stage: '6-4「烈火のごとく」',                     baseExp:     0, bonus:  2000, runningTotal: 179530 },
  { stage: '6-5「あざ笑うアラギ」',                   baseExp: 37200, bonus:  2170, runningTotal: 218900 },
  { stage: '7-1「その目を塞ぐ恐怖」',                 baseExp: 36900, bonus:     0, runningTotal: 255800 },
  { stage: '7-2「死を呼ぶ黒き翼」',                   baseExp: 33600, bonus:  3200, runningTotal: 292600 },
  { stage: '7-3「残響する赤い叫び」',                 baseExp: 35000, bonus:  4450, runningTotal: 332050 },
  { stage: '8-1「理念の灯火」',                       baseExp: 38000, bonus:     0, runningTotal: 370050 },
  { stage: '8-2「白き死の運び手」',                   baseExp: 40000, bonus:     0, runningTotal: 410050 },
  { stage: '8-3「永劫の律を守る者」',                 baseExp: 34000, bonus:  7750, runningTotal: 451800 },
  { stage: '9-1「ホワイトフェイス」',                 baseExp: 30000, bonus: 15000, runningTotal: 496800 },
  { stage: '10-1「最後に笑う者／ハラカラの闇」',      baseExp: 35200, bonus:  5000, runningTotal: 537000 },
];

export const characterMasteries: readonly CharacterMastery[] = [
  { name: 'カイン',        startLevel:  4, masterLevel: 50, requiredExp: 121900 },
  { name: 'ヨハネ',        startLevel:  5, masterLevel: 49, requiredExp: 116600 },
  { name: 'ルカ',          startLevel: 12, masterLevel: 44, requiredExp:  88000 },
  { name: 'ザイオン',      startLevel: 12, masterLevel: 48, requiredExp: 106200 },
  { name: 'エクサル',      startLevel:  9, masterLevel: 50, requiredExp: 118900 },
  { name: 'シリア',        startLevel: 15, masterLevel: 50, requiredExp: 112000 },
  { name: 'リリス',        startLevel:  0, masterLevel: 50, requiredExp:       0 },
  { name: 'ステイエン',    startLevel: 18, masterLevel: 50, requiredExp: 107200 },
  { name: 'キロタ',        startLevel: 22, masterLevel: 50, requiredExp:  99400 },
  { name: 'べイル',        startLevel: 34, masterLevel: 49, requiredExp:  61500 },
  { name: 'クレイス',      startLevel: 36, masterLevel: 50, requiredExp:  59500 },
  { name: 'リプサリス',    startLevel: 36, masterLevel: 50, requiredExp:  59500 },
];

export const inheritedCharacters: readonly CharacterMastery[] = [
  { name: 'ヴァルトス',        startLevel: 31, masterLevel: 49, requiredExp:  71100, inherited: true },
  { name: 'リリス（黒羽根）',  startLevel: 37, masterLevel: 50, requiredExp:  55900, inherited: true },
];

export const masteryTotal = 1177000;
