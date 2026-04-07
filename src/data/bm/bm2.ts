export type WeaponMastery = {
  readonly weapon: string;
  readonly lv: readonly [number, number, number, number, number, number, number, number]; // Lv2-Lv9
  readonly total: number;
};

export const weaponMasteries: readonly WeaponMastery[] = [
  { weapon: '速剣術', lv: [17, 28, 38, 45, 50, 55, 60, 65], total: 358 },
  { weapon: '護剣術', lv: [29, 30, 40, 45, 50, 55, 60, 65], total: 374 },
  { weapon: '撃剣術', lv: [25, 25, 39, 43, 47, 51, 55, 59], total: 344 },
  { weapon: '斬殴術', lv: [20, 25, 35, 39, 42, 46, 51, 54], total: 312 },
  { weapon: '突穿術', lv: [18, 22, 40, 45, 50, 55, 60, 65], total: 355 },
  { weapon: '弓射術', lv: [35, 35, 35, 47, 53, 59, 65, 71], total: 400 },
  { weapon: '魔導術', lv: [20, 20, 30, 34, 37, 40, 43, 46], total: 270 },
];

export const grandTotal = 2413;

export const LEVELS = ['Lv2', 'Lv3', 'Lv4', 'Lv5', 'Lv6', 'Lv7', 'Lv8', 'Lv9'] as const;
