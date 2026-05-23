#!/usr/bin/env node
/* Render each page of a chapter as a PNG for visual review.
   Usage: node thumb.js [chapter]   (default: ch01) */
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ch = process.argv[2] || 'ch01';
const OUT_DIR = path.join(__dirname, 'out', 'chapters', ch);
await fs.mkdir(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 600, height: 800, deviceScaleFactor: 1.5 });
await page.goto('file://' + path.join(OUT_DIR, `${ch}.html`), { waitUntil: 'networkidle0' });
try { await page.evaluateHandle('document.fonts.ready'); } catch (_) {}

const handles = await page.$$('.page');
console.log('found', handles.length, 'pages');
for (let i = 0; i < handles.length; i++) {
  const filename = path.join(OUT_DIR, `${ch}-p${String(i + 1).padStart(2, '0')}.png`);
  await handles[i].screenshot({ path: filename, omitBackground: false });
  console.log('wrote', filename);
}
await browser.close();
