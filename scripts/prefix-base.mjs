// GitHub Pages serves the site from /<repo>/, not the domain root. The pages
// use root links (href="/wardrobes/"), so this rewrites them in the built HTML.
// Only used by the Pages workflow; the real site is served from the root.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const base = (process.env.BASE_PATH || '/').replace(/\/$/, '');
if (!base) process.exit(0);

const walk = async (dir) => (await Promise.all((await readdir(dir, { withFileTypes: true }))
  .map((d) => (d.isDirectory() ? walk(join(dir, d.name)) : [join(dir, d.name)])))).flat();

const esc = base.slice(1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const rootLink = new RegExp(`\\b(href|src|action)="/(?!/|${esc}/)`, 'g');

let n = 0;
for (const file of (await walk('dist')).filter((f) => f.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  const out = html.replace(rootLink, `$1="${base}/`);
  if (out !== html) { await writeFile(file, out); n++; }
}
console.log(`Prefixed root links with ${base} in ${n} files`);
