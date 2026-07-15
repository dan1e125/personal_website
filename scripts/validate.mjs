import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { runBuild } from './build.mjs';

const root = join(import.meta.dirname, '..');
const read = (file) => readFileSync(join(root, file), 'utf8');

function fail(message) {
  console.error('validate:', message);
  process.exit(1);
}

runBuild({ bumpVersion: false });

const index = read('index.html');
const translations = read('translations.js');
const faq = JSON.parse(read('content/faq.json'));
const version = read('asset-version.txt').trim();

try {
  new Function(translations);
} catch (err) {
  fail(`translations.js syntax error: ${err.message}`);
}

if (!existsSync(join(root, 'site-config.js'))) {
  fail('missing site-config.js — run npm run build');
}

const urls = [...read('sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const url of urls) {
  const path = url.replace('https://danieloa.com', '').replace(/^\//, '') || 'index.html';
  if (!existsSync(join(root, path))) {
    fail(`missing sitemap target: ${path}`);
  }
}

if (!read('sw.js').includes(`danieloa-${version}`)) {
  fail('sw.js CACHE version does not match asset-version.txt');
}

if (!index.includes('site-config.js')) {
  fail('index.html must load site-config.js');
}

for (const item of faq.en) {
  if (!index.includes(item.q)) {
    fail(`FAQ question missing in index.html: ${item.q}`);
  }
  if (!translations.includes(item.q.slice(0, 40))) {
    fail(`FAQ question missing in translations.js: ${item.q}`);
  }
}

const faqSchema = index.match(/"@type": "FAQPage"[\s\S]*?"mainEntity": \[([\s\S]*?)\]/);
if (!faqSchema || !faqSchema[1].includes(faq.en[0].q.slice(0, 20))) {
  fail('FAQ schema out of sync with content/faq.json');
}

const selectorIds = [...translations.matchAll(/'#([a-z0-9-]+)'/gi)].map((m) => m[1]);
for (const id of selectorIds) {
  if (!index.includes(`id="${id}"`)) {
    fail(`translation selector id not found in index.html: #${id}`);
  }
}

console.log('validate: ok');
