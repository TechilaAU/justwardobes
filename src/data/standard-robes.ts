// Standard robe configurations, taken from the drawings on the current site.
// Each drawing filename encodes the layout from left to right, e.g.
// "2040-DU-DH-BOS" = 2040mm high: drawer unit, double hanging, bank of shelves.
import drawings from './standard-robes.json';
import { prices } from './standard-robe-prices';

export type RobeType = 'built-in' | 'end-gable';

export const robeTypes: { id: RobeType; label: string; text: string }[] = [
  { id: 'built-in', label: 'Built-in cavity', text: 'You already have a robe recess with a wall on both sides.' },
  { id: 'end-gable', label: 'With end panel', text: 'No recess, or an open end. We add a finished end panel (gable).' },
];

const SECTIONS: Record<string, string> = {
  DU: 'Drawer unit',
  LH: 'Long hanging',
  DH: 'Double hanging',
  BOS: 'Bank of shelves',
  FS: 'Fixed shelves',
  SH: 'Shelves',
  ADJ: 'Adjustable shelves',
  '12HANG': 'Half hanging',
  '12H': 'Half hanging',
  '34': 'Three-quarter hanging',
  '34H': 'Three-quarter hanging',
  LHS: 'Long hanging with shelf',
  LHSH: 'Long hanging with shelves',
  DHFS: 'Double hanging and fixed shelves',
  LHDH: 'Long and double hanging',
};

export type Robe = {
  id: string;            // e.g. bi-2000-2040-du-dh-bos
  type: RobeType;
  width: number;
  height: number;
  sections: string[];    // plain-English names, left to right
  codes: string;         // e.g. DU-DH-BOS
  drawing: string;       // uploads path of the drawing
  price: number | null;  // AUD inc GST, null = price on request
};

const parse = (key: string, path: string): Robe => {
  const type: RobeType = key.startsWith('EG') ? 'end-gable' : 'built-in';
  const width = Number(key.slice(2));
  const file = path.split('/').pop()!.replace(/\.jpg$/i, '').replace(/_Page_1$/, '');
  const height = Number((file.match(/(\d{4})h/) || file.match(/^(\d{4})/))![1]);
  const raw = file.toUpperCase()
    .replace(/^\d{4}W-X-\d{4}H-EG-/, '')
    .replace(/^\d{4}-/, '')
    .replace(/-\d$/, '')
    .replace(/12-HANG|12-H/g, '12HANG').replace(/34-H/g, '34');
  const codes = raw.split('-').filter(Boolean);
  const sections = codes.map((c) => SECTIONS[c] ?? c);
  const id = `${type === 'built-in' ? 'bi' : 'eg'}-${width}-${height}-${codes.join('-').toLowerCase()}`;
  return { id, type, width, height, sections, codes: codes.join('-'), drawing: path, price: null };
};

export const robes: Robe[] = Object.entries(drawings as Record<string, string[]>)
  .flatMap(([key, list]) => list.map((p) => parse(key, p)))
  .map((r) => ({ ...r, price: prices[r.id] ?? prices[`${r.type}-${r.width}-${r.height}`] ?? null }));

export const widths = [...new Set(robes.map((r) => r.width))].sort((a, b) => a - b);
export const heights = [...new Set(robes.map((r) => r.height))].sort((a, b) => a - b);

export const formatPrice = (n: number) =>
  n.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 });
