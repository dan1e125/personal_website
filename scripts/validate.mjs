import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');
const read = (file) => readFileSync(join(root, file), 'utf8');

const index = read('index.html');
const translations = read('translations.js');
const sitemap = read('sitemap.xml');

try {
  new Function(translations);
} catch (err) {
  console.error('translations.js syntax error:', err.message);
  process.exit(1);
}

const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const url of urls) {
  const path = url.replace('https://danieloa.com', '').replace(/^\//, '') || 'index.html';
  if (!existsSync(join(root, path))) {
    console.error(`Missing sitemap target: ${path}`);
    process.exit(1);
  }
}

const versionMatch = index.match(/\?v=([^"']+)/);
if (versionMatch) {
  const version = versionMatch[1];
  const sw = read('sw.js');
  if (!sw.includes(`danieloa-${version}`)) {
    console.error('sw.js CACHE version does not match index.html asset version');
    process.exit(1);
  }
}

console.log('validate: ok');
