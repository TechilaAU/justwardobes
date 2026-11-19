// Copies every photo and drawing referenced in src/data and src/pages into public/img so the
// new site no longer depends on the old WordPress uploads folder.
// Usage: npm run images:pull, then set PUBLIC_IMAGES_LOCAL=true and rebuild.
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';

const REMOTE = 'https://www.justwardrobes.com.au/content/wp-content/uploads/';
import { readdir } from 'node:fs/promises';
const files = [
  ...(await readdir(new URL('../src/data/', import.meta.url))).map((f) => new URL(`../src/data/${f}`, import.meta.url)),
  ...(await readdir(new URL('../src/pages/', import.meta.url))).map((f) => new URL(`../src/pages/${f}`, import.meta.url)),
];
const src = (await Promise.all(files.map((f) => readFile(f, 'utf8')))).join('\n');
const paths = [...new Set([...src.matchAll(/['"](\d{4}\/\d{2}\/[^'"]+\.(?:jpe?g|png))['"]/gi)].map((m) => m[1]))];
const out = new URL('../public/img/', import.meta.url);
await mkdir(out, { recursive: true });

let ok = 0;
for (const p of paths) {
  const file = new URL(p, out);
  await mkdir(new URL('.', file), { recursive: true });
  try { await access(file); ok++; continue; } catch {}
  const res = await fetch(REMOTE + p);
  if (!res.ok) { console.warn(`Failed ${res.status}: ${p}`); continue; }
  await writeFile(file, Buffer.from(await res.arrayBuffer()));
  ok++;
  console.log(`Saved ${p}`);
}
console.log(`${ok}/${paths.length} images in public/img`);
