#!/usr/bin/env node
/*
 * Generates QR code PNGs for all chapter links used in the book.
 * Output: assets/qr/<name>.png
 * Run once (or after repo URL changes): node generate-qr.js
 */

import QRCode from 'qrcode';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, 'assets', 'qr');

const REPO = 'https://github.com/brandonrhecker/honestly-claude-code';

const codes = {
  'repo':  REPO,
  'ch01':  `${REPO}/tree/main/01-what-the-hell`,
  'ch02':  `${REPO}/tree/main/02-the-install`,
  'ch03':  `${REPO}/tree/main/03-make-it-do-something`,
  'ch04':  `${REPO}/tree/main/04-give-it-a-brain`,
  'ch05':  `${REPO}/tree/main/05-bolt-on-a-skill`,
  'ch06':  `${REPO}/tree/main/06-plug-it-in`,
  'ch07':  `${REPO}/tree/main/07-you-made-it`,
  'ch08':  `${REPO}/tree/main/08-pull-the-plug`,
  'ch09':  `${REPO}/tree/main/09-questions-you-came-here-with`,
};

const opts = {
  type: 'png',
  width: 270,
  margin: 1,
  color: { dark: '#1f1d1a', light: '#faf4ef' },
};

await fs.mkdir(OUT_DIR, { recursive: true });

for (const [name, url] of Object.entries(codes)) {
  const out = path.join(OUT_DIR, `${name}.png`);
  await QRCode.toFile(out, url, opts);
  console.log(`wrote ${name}.png  →  ${url}`);
}
