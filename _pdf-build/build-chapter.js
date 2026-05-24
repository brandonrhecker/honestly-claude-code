#!/usr/bin/env node
/*
 * Render one chapter to HTML + PDF.
 * Usage: node build-chapter.js [chapter]   (default: ch01)
 *
 * Chapter modules live at chapters/<ch>/pages.js and export:
 *   - chapterTitle: <title> for the rendered HTML
 *   - renderPages(): array of HTML strings, one per page
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { svgDefs } from './shared/components.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ch = process.argv[2] || 'ch01';
const OUT_DIR = path.join(__dirname, 'out', 'chapters', ch);

const { chapterTitle, renderPages } = await import(`./chapters/${ch}/pages.js`);

async function buildHtml() {
  const css = await fs.readFile(path.join(__dirname, 'styles.css'), 'utf-8');
  const pages = renderPages();

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta http-equiv="Cache-Control" content="no-store, no-cache, must-revalidate" />
<title>${chapterTitle}</title>
<link rel="stylesheet" href="../../../assets/fonts.css" />
<style>
${css}
</style>
</head>
<body>
${svgDefs()}
${pages.join('\n')}
</body>
</html>`;
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const html = await buildHtml();

  const htmlPath = path.join(OUT_DIR, `${ch}.html`);
  await fs.writeFile(htmlPath, html, 'utf-8');
  console.log('wrote', htmlPath, `(${html.length} bytes)`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });
  try {
    const page = await browser.newPage();
    await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });
    try { await page.evaluateHandle('document.fonts.ready'); } catch (_) {}

    const pdfPath = path.join(OUT_DIR, `${ch}.pdf`);
    await page.pdf({
      path: pdfPath,
      width: '6in',
      height: '8in',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    console.log('wrote', pdfPath, `(${(await fs.stat(pdfPath)).size} bytes)`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
