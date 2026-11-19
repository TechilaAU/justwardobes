// Copies every photo referenced in src/data/images.ts into public/img so the
// new site no longer depends on the old WordPress uploads folder.
// Usage: npm run images:pull, then set PUBLIC_IMAGES_LOCAL=true and rebuild.
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';

const REMOTE = 'https://www.justwardrobes.com.au/content/wp-content/uploads/';
const src = await readFile(new URL('../src/data/images.ts', import.meta.url), 'utf8');
const paths = [...new Set([...src.matchAll(/'(\d{4}\/\d{2}\/[^']+\.(?:jpe?g|png))'/gi)].map((m) => m[1]))];
const out = new URL('../public/img/', import.meta.url);
await mkdir(out, { recursive: true });

let ok = 0;
for (const p of paths) {
  const file = new URL(p.split('/').pop(), out);
  try { await access(file); ok++; continue; } catch {}
  const res = await fetch(REMOTE + p);
  if (!res.ok) { console.warn(`Failed ${res.status}: ${p}`); continue; }
  await writeFile(file, Buffer.from(await res.arrayBuffer()));
  ok++;
  console.log(`Saved ${p}`);
}
console.log(`${ok}/${paths.length} images in public/img`);
