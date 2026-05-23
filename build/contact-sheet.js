#!/usr/bin/env node
/* Render all images in an assets/<folder> subfolder into a single contact-sheet PNG for review.
   Usage: node contact-sheet.js <subfolder>   (default: doodles) */
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sub = process.argv[2] || 'doodles';
const SRC = path.join(__dirname, 'assets', sub);
const OUT_DIR = path.join(__dirname, 'out', 'contact-sheets');
await fs.mkdir(OUT_DIR, { recursive: true });
const OUT = path.join(OUT_DIR, `${sub}-contact-sheet.png`);

const files = (await fs.readdir(SRC))
  .filter((f) => /\.(svg|png|jpe?g)$/i.test(f))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] ?? '0', 10);
    const numB = parseInt(b.match(/\d+/)?.[0] ?? '0', 10);
    return numA - numB || a.localeCompare(b);
  });

const cells = await Promise.all(
  files.map(async (f) => {
    const full = path.join(SRC, f);
    const label = f.replace(/\.(svg|png|jpe?g)$/i, '');
    const ext = path.extname(f).toLowerCase();
    let art;
    if (ext === '.svg') {
      const svg = await fs.readFile(full, 'utf8');
      art = svg;
    } else {
      art = `<img src="file://${full}" />`;
    }
    return `<div class="cell"><div class="art">${art}</div><div class="lbl">${label}</div></div>`;
  })
);

const html = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  body { margin: 0; padding: 20px; background: #faf4ef; font-family: -apple-system, sans-serif; }
  .grid { display: grid; grid-template-columns: repeat(8, 1fr); gap: 8px; }
  .cell { background: #fff; border: 1px solid #ece2d0; border-radius: 4px;
          padding: 6px; display: flex; flex-direction: column; align-items: center;
          height: 180px; }
  .art { flex: 1; display: flex; align-items: center; justify-content: center;
         width: 100%; overflow: hidden; }
  .art svg, .art img { max-width: 100%; max-height: 100%; }
  .lbl { font-size: 8px; color: #4a4540; margin-top: 4px; text-align: center;
         font-family: monospace; word-break: break-all; line-height: 1.2; }
</style></head><body>
<div class="grid">${cells.join('\n')}</div>
</body></html>`;

const tmp = path.join(OUT_DIR, `_${sub}-contact-sheet.html`);
await fs.writeFile(tmp, html);

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 800, deviceScaleFactor: 1 });
await page.goto('file://' + tmp, { waitUntil: 'networkidle0' });
const grid = await page.$('.grid');
const box = await grid.boundingBox();
await page.setViewport({ width: 1600, height: Math.ceil(box.height) + 40, deviceScaleFactor: 1 });
await page.screenshot({ path: OUT, fullPage: true });
await browser.close();

console.log(`rendered ${files.length} from assets/${sub}/ → ${OUT}`);
