// Prints every standard robe id, grouped by size, for filling in
// src/data/standard-robe-prices.ts. Usage: npm run robes:list
import { readFile } from 'node:fs/promises';
const data = JSON.parse(await readFile(new URL('../src/data/standard-robes.json', import.meta.url), 'utf8'));
for (const [key, list] of Object.entries(data)) {
  const type = key.startsWith('EG') ? 'end-gable' : 'built-in';
  const width = key.slice(2);
  for (const p of list) {
    const f = p.split('/').pop().replace(/\.jpg$/i, '').replace(/_Page_1$/, '');
    const h = (f.match(/(\d{4})h/) || f.match(/^(\d{4})/))[1];
    const codes = f.toUpperCase().replace(/^\d{4}W-X-\d{4}H-EG-/, '').replace(/^\d{4}-/, '').replace(/-\d$/, '')
      .replace(/12-HANG|12-H/g, '12HANG').replace(/34-H/g, '34').split('-').filter(Boolean).join('-').toLowerCase();
    console.log(`'${type}-${width}-${h}'  or  '${type === 'built-in' ? 'bi' : 'eg'}-${width}-${h}-${codes}'`);
  }
}
