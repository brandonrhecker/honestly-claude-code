# Honestly, Claude Code — Design System

This file describes the design system used to render the book.
Written as the project context for [claude.ai/design](https://claude.ai/design).

## What this is

A screen-read PDF book rendered from per-chapter markdown via headless Chrome (puppeteer). Page size **6 × 8 inches**. The aesthetic is "ink on cream paper" with chunky hand-drawn doodle illustrations.

The build pipeline lives in `_pdf-build/`. All chapters (ch00–ch10) are designed and building cleanly.

## Voice direction

- **Bourdain-of-AI**: observational, world-weary, anti-doom, anti-hype
- Anti-corporate, anti-textbook. The book reads more like an enganging walkthrough with infographics than a manual
- Lowercase used intentionally in handwritten captions and signatures
- **ZERO em dashes** (use commas, colons, or periods). No exceptions
- See repo CLAUDE.md for full voice contract and banned-lexicon rules

## Color tokens

Defined in `_pdf-build/styles.css` as CSS custom properties:

| Token | Value | Use |
|---|---|---|
| `--paper` | `#faf4ef` | Page background |
| `--paper-deep` | `#ece2d0` | Subtle paper accent |
| `--ink` | `#1f1d1a` | Body text, primary stroke |
| `--ink-soft` | `#4a4540` | Secondary body text |
| `--ink-mute` | `#7a7268` | Tertiary / labels |
| `--rule` | `#d8cdb8` | Dividers, borders |
| `--orange` | `#d96033` | Primary accent, footer, cursor |
| `--orange-deep` | `#b94c25` | Accent shadows |
| `--orange-soft` | `#f0b59b` | Accent washes |
| `--navy` | `#3a5466` | Secondary accent |
| `--navy-deep` | `#283a48` | Navy shadows |
| `--lav` | `#c5b8c9` | Tangent / skippable page accent |
| `--lav-soft` | `#ddd2dc` | Lavender wash |
| `--code-bg` | `#1f1d1a` | Terminal background, knowledge panels |
| `--code-bg-2` | `#2a2724` | Terminal alt |
| `--code-fg` | `#efe7d7` | Terminal text |
| `--code-mute` | `#8b837a` | Terminal muted |

## Type stack

Loaded via `_pdf-build/assets/fonts.css`:

- **Archivo** — titles, badges, numbers (heavy sans, weights 700-900)
- **Source Sans 3** — body copy (regular sans)
- **Caveat** — handwritten annotations, hand-drawn callouts, signatures
- **JetBrains Mono** — code, terminal output, KPI values, marginalia term labels
- **Yellowtail / Playfair Italic** — accent display fonts (sparingly)

## Spacing scale

Page padding: `0.42in` left/right, `1in` top, `0.7in` bottom (typical body page).

## Components (function name → file)

All components in `_pdf-build/shared/components.js` return HTML template strings:

| Component | Function | What it does |
|---|---|---|
| Page rail | `rail(activeIndex, washClass)` | Vertical progress dots, 1-9. Active dot orange-filled. Top-left of every body page. |
| Final rail | `railDone()` | Variant of rail with ✓ in the last dot. Used on the recap page. |
| Footer bar | `footer(pageNum, crumb, slug, opts)` | Bottom orange band with page number circle + breadcrumb + slug. Every page. |
| Fear page | `fearPage({pageNum, sectionIndex, eyebrow, question, body, tldr, xrefLabel, xrefTitle, stickyBody, footerCrumb, footerSlug})` | Whole-page template for "honest reader anxieties" (used 4× in ch01). Big Caveat question, body, TL;DR strip, cross-reference card, optional sticky note. |
| SVG filter defs | `svgDefs()` | Hidden SVG `<defs>` for `#torn` and `#torn-soft` filter references used elsewhere. |

## CSS classes (in `_pdf-build/styles.css`)

### Layout primitives

| Class | Purpose |
|---|---|
| `.page` | A 6×8in printable page |
| `.body-wrap` | Two-column body+marginalia grid |
| `.eyebrow` | Small uppercase Archivo label above section heads |
| `.section-h` | Section heading (Archivo heavy) |
| `.ch-num` | Big "01" / "02" chapter number digit |
| `.ch-title` | Chapter title (Archivo, large, multi-line) |
| `.stroke-under` | Word with handwritten orange underline |
| `.annot` / `.annot.ink` | Handwritten Caveat annotation, slight rotation |
| `.lede` | First-paragraph emphasis size |
| `.body` | Body copy block |

### Sidebar marginalia

| Class | Purpose |
|---|---|
| `.marg` | Right-column container (60% width) |
| `.marg-block` | One marginalia entry |
| `.marg-lbl` | Small uppercase label, color-coded |
| `.marg-lbl.navy` | Navy variant for "ALSO HELPFUL" / "BUT WAIT" |
| `.marg-term` | Highlighted term being defined |

### KPI badges (chapter cover)

| Class | Purpose |
|---|---|
| `.metrics-section` | Container for the "what you're signing up for" KPI row |
| `.umbrella` | The label above the KPI row (Caveat handwriting) |
| `.metrics-row` | Flex row of 3 mini-KPI items |
| `.metric-mini` | One KPI item: icon, label, value |
| `.metric-mini .mini-illus` | The 0.45in icon container (clock / face / scale) |
| `.metric-mini .mini-illus img.difficulty-icon` | Difficulty PNG, scaled down to match clock SVG |
| `.metric-mini .mini-lbl` | KPI label ("Difficulty", "Time", "Value") |
| `.metric-mini .mini-val` | KPI value text |

### Knowledge panels (cover)

| Class | Purpose |
|---|---|
| `.lb-grid` | Two-up grid of dark knowledge panels (cover bottom) |
| `.lb` | One dark panel: ink background, orange badge top-center |
| `.lb.b` | Variant: navy badge instead of orange (used for "Hard questions") |
| `.lb-badge` | The big circular badge that hangs over the panel top edge |
| `.lb .lb-badge .ico` | Emoji centered in the badge (🎓 or 🧐) |
| `.lb h4` | Panel heading ("You'll know" / "Hard questions") |
| `.lb ul`, `.lb ol`, `.lb li` | Bullet / numbered list inside panel |
| `.chk` / `.num-step` | Bullet markers (check / numbered circle) |

### "What it's not" grid

| Class | Purpose |
|---|---|
| `.notlist` | 2x2 grid of "not X" cards |
| `.not-item` | One card with orange × badge |
| `.not-item .x` | The 0.2in orange × circle |
| `.not-item .lbl` | Bold label ("Not a chatbot.") |
| `.not-item .desc` | Description below |

### Fear pages

| Class | Purpose |
|---|---|
| `.fear` | Container for a fear page |
| `.fear-eyebrow` | "BUT WAIT · SECTION X OF 9" eyebrow |
| `.fear-q` | Big Caveat question with italic emphasis |
| `.fear-q em` | Italic emphasis with orange underline |
| `.fear-body` | Body paragraphs |
| `.fear-tldr` | Dark TL;DR strip at bottom |
| `.fear-xref` | Cross-reference card |
| `.fear-sticky` | Optional sticky note (tilted) |

### Recap

| Class | Purpose |
|---|---|
| `.recap-grid` | 2×3 grid of numbered takeaways |
| `.recap-item` | One numbered takeaway |
| `.recap-item .n` | Big orange number |

### Misc

| Class | Purpose |
|---|---|
| `.card` | Generic rounded card (used for "Plain English", "READ THE LATEST", etc.) |
| `.card-title` | Small card title with icon |
| `.sticky`, `.sticky.tilt-r` | Handwritten sticky note callout |
| `.qr` | QR-code placeholder pattern |
| `.wash`, `.wash.org`, `.wash.lav` | Watercolor wash overlays (orange / lavender) |
| `.xref` | Inline cross-reference with number |
| `.dot-sep` | Small bullet separator |
| `.mono` | Inline monospace term highlight (with border) |

## Asset library

In `_pdf-build/assets/`:

- **`doodles/`** — 91 hand-drawn SVG icons (arrows, lock, light bulb, etc.) named functionally (`arrow-up-chunky-01.svg`, `light-bulb.svg`). `_original-mapping.txt` shows the rename history.
- **`stickers/`** — 40 awkward-doodle PNG stickers, the long egg-shaped character in different emotional poses. One assigned per chapter opener; all chapters end with `zen-arm-up.png` in a circle crop. See sticker assignment table in `_pdf-build/CLAUDE.md`.
- **`difficulty/`** — `easy.png` (sunglasses face), `med.png` (open grin), `hard.png` (thinking finger). For the Difficulty KPI badge.
- **`time/`** — clock SVGs (with and without numbers).
- **`fonts/`** — Local font files, referenced by `fonts.css`.
- **`watercolor-gray.png`** — Top wash for chapter opener pages.

## Aesthetic direction

Two visual languages coexist on every page:

1. **Thin inline SVG line art** for inline icons (rail dots, ×-marks, terminal mockups, decorative scribbles like the orange title underline). Roughly 1.5-2pt strokes.
2. **Chunky hand-drawn doodle stickers** (PNG) for the character illustrations. Heavy black ink, no fills, lots of whitespace built into source files (which is why they get scaled 220-290%).

Both feel "ink on cream paper." The orange accent (`--orange`) and navy (`--navy`) appear sparingly: badge backgrounds, footer band, cursors, title underlines, emphasis underlines on em-italics.

## Build pipeline

```
_pdf-build/
├── build-chapter.js          # node build-chapter.js ch01
├── shared/components.js      # rail, footer, svgDefs, fearPage
├── chapters/<ch>/pages.js    # chapter-specific page renderers
├── styles.css                # all design tokens + classes
└── assets/                   # images, fonts, SVGs
```

To render a chapter:
```
node build-chapter.js ch01        # ch01 by default (runs from _pdf-build/)
node build-chapter.js ch02        # any other chapter (ch00–ch10)
node thumb.js ch01                # per-page PNG screenshots
```

To snapshot a stable iteration:
```
bash snapshot.sh ch01             # saves pages.js + PDF to chapters/ch01/snapshots/v<N>-<date>/
git tag ch01-stable-v<N>          # tag the full repo state for code rollback
```

## Chapter design rules (locked after ch01/ch02 build)

These rules were established during the ch01 and ch02 design pass. All future chapters must follow them.

### Chapter opener page (page 1 of each chapter)

**Layout**: absolute-positioned sticker on the right, title block on the left. No grid, no flex columns.

```html
<!-- Sticker: large, right side, bleeds off the edge -->
<img src="../../../assets/stickers/<filename>.png" alt=""
     style="position:absolute; right:-.37in; top:.4in; width:4.0in; z-index:2; object-fit:contain; pointer-events:none;" />

<!-- Title block: left side -->
<div style="position:absolute; left:.42in; top:1.05in; z-index:3; max-width:2.85in;">
  <div class="eyebrow">CHAPTER N · TOPIC</div>
  <div class="ch-num">0N</div>
  <div class="annot ink" style="position:absolute; left:1.5in; top:.42in; transform:rotate(-5deg); font-size:13pt; white-space:nowrap;">← annotation</div>
  <div style="display:inline-block;">
    <div class="ch-title" style="position:relative; white-space:nowrap;">Chapter title<br/>here</div>
    <svg viewBox="0 0 220 14" ...>[orange underline]</svg>
  </div>
</div>
```

**No metrics/KPI section.** The `.metrics-section` / "what you're signing up for" block is permanently retired from chapter openers. Do not add it to new chapters.

**Sticker assignment per chapter:**
- ch00: no opener sticker (full-bleed cover + text-only page 2)
- ch01: `panicked-hands-behind-head.png`
- ch02: `pointing-or-snake.png`
- ch03: `waving-off-no-thanks.png`
- ch04: `holding-brain.png`
- ch05: `arm-raised-wrench.png`
- ch06: `holding-up-puzzle.png`
- ch07: `arms-up-yay.png`
- ch08: `holding-knife.png`
- ch09: `drawing-or-writing.png`
- ch10: `holding-something-out.png`

All chapters end with `zen-arm-up.png` in a `1.25in × 1.25in` circle crop (`border-radius:50%; overflow:hidden`), image scaled to `240%`.

### Chapter-end page background

Replace any `.wash org` CSS element with the watercolor PNG — flush to the footer, no gap:

```html
<img src="../../../assets/orange-watercolor-page-stain-left.png" alt="" aria-hidden="true"
     style="position:absolute; left:0; bottom:0; width:3.2in; z-index:1; pointer-events:none; opacity:.9;" />
```

The footer (`z-index:4`) renders on top — no white space between stain and footer bar. Keep the `.wash lav` in the top-right unchanged.

### Chapter-end sticker (last page of each chapter)

Always use `zen-arm-up.png`. Same size and circle-crop treatment as ch01:

```html
<div style="position:absolute; right:.42in; bottom:1in; width:1.25in; height:1.25in; border-radius:50%; overflow:hidden;">
  <img src="../../../assets/stickers/zen-arm-up.png" alt=""
       style="width:240%; height:240%; object-fit:contain; display:block; position:relative; left:-70%; top:-30%;" />
</div>
```

### Spacing rules

These apply to every body page in every chapter:

| Context | Spacing |
|---|---|
| After `.annot.ink` subheader (e.g. "(short version: …)") | `margin-bottom:.35in` on the annot, or `margin-top:.35in` on the next element |
| After `.section-h` before `.lede` text (no annot between them) | `margin-top:.25in` on the lede |
| Before install steps in `installPage()` | `margin-top:.32in` on the steps container |

### Terminal windows

Always use one of the four hand-drawn SVG assets as the background image. Never use CSS-drawn chrome. Never add `box-shadow` to any terminal element.

**Available SVG variants** (in `_pdf-build/assets/`):

| File | Use when |
|---|---|
| `terminal-dark-wide.svg` | Dark theme, wide/short terminal (most common — install steps, single-line commands) |
| `terminal-dark-long.svg` | Dark theme, tall terminal (multi-line output, longer sessions) |
| `terminal-light-wide.svg` | Light theme, wide/short terminal (contrast pages, light wash backgrounds) |
| `terminal-light-long.svg` | Light theme, tall terminal (light background + long output) |

Pick dark vs. light based on surrounding page background. Pick wide vs. long based on how many lines of content the terminal contains.

```html
<div class="term-win">
  <img src="../../../assets/terminal-dark-wide.svg" alt="" aria-hidden="true"
       style="position:absolute; inset:0; width:100%; height:100%; display:block;" />
  <!-- title bar label: absolutely positioned at 16.7% = center of SVG header clip (y≈40–127 of 500) -->
  <div style="position:absolute; z-index:2; top:16.7%; left:0; right:0; transform:translateY(-50%); display:flex; justify-content:center; pointer-events:none;">
    <span style="font-family:'Source Sans 3',sans-serif; font-size:7pt; color:rgba(240,239,232,.4); letter-spacing:.02em;">bash</span>
  </div>
  <!-- layout spacer — keeps content div pushed below title area -->
  <div style="height:.18in;"></div>
  <!-- command content -->
  <div style="position:relative; z-index:1; padding:.04in .12in .09in;">[commands]</div>
</div>
```

**Why `top:16.7%` and not a fixed pixel height:** the SVG header clip spans y=40–127 out of a 500-unit viewBox (center = 83.5 = 16.7%). Using a percentage keeps the label centered in the visual title bar at any terminal height — fixed-px nudges drift as terminal height varies.

The `.term-win` CSS class handles `position:relative; overflow:hidden; border-radius:9px`. No `box-shadow` anywhere on terminal elements — not on `.term-win`, not on `.cmd`, not on any child.

### Checklist alignment

`.lb li` must use `align-items: flex-start` (not `center`) so wrapped lines don't mis-align with the bullet. This is set globally in `styles.css`.

### Install page copy rules

- The Node.js download button is labeled **"Get Node.js"** (not "LTS" — users don't know what LTS means).
- The last step on Mac and Windows install pages ends with **"Turn to page 8."** (not "See the next page" — the next page is a different OS, not the first-run page).
- Linux install page keeps "See the next page." because it actually leads to first-run.

### Knowledge panel labels (chapter opener bottom panels)

- Left panel: **"You'll learn"** (conceptual chapter) / **"You'll do"** (procedural chapter)
- Right panel: always **"Honest questions"**

### Opener watercolor wash (exact values — do not change)

```html
<img src="../../../assets/watercolor-gray.png" alt=""
     style="position:absolute; left:-.7in; width:8.2in; top:.6in; height:3.6in;
            z-index:1; pointer-events:none; mix-blend-mode:multiply; opacity:.92;"/>
```

### Opener "you are here" annotation (exact values)

```html
<div class="annot ink" style="position:absolute; left:1.5in; top:.42in; transform:rotate(-5deg); font-size:13pt; white-space:nowrap;">&larr; you are here</div>
```

### Orange title underline SVG (canonical — reuse exactly)

```html
<svg viewBox="0 0 220 14" preserveAspectRatio="none" style="display:block; width:2.6in; height:.18in; margin-top:.04in; margin-left:.05in;" aria-hidden="true">
  <path d="M 2 8 Q 28 2 60 6 T 130 5 Q 170 3 218 7" stroke="#d96033" stroke-width="6" stroke-linecap="round" fill="none" opacity=".88"/>
  <path d="M 8 11 Q 50 9 110 10 T 210 11" stroke="#d96033" stroke-width="2" stroke-linecap="round" fill="none" opacity=".55"/>
</svg>
```

### Section-h + annot spacing pattern (body pages)

```html
<div class="section-h" style="margin:.06in 0 .04in;">Heading.</div>
<div class="annot ink" style="margin:-.04in 0 .35in;">(subheader annotation)</div>
<!-- negative top margin tucks annot under the heading -->
```

When no annot follows section-h, use `margin-top:.25in` on the lede instead.

### Body copy max-width

- Inside `.body-wrap` left column: `max-width:3.4in`
- Full-width pages (no marginalia): `max-width:4.6in`–`4.7in`

### Eyebrow format

```html
<div class="eyebrow">TYPE &nbsp;&middot;&nbsp; SECTION N OF 9</div>
```

Types in use: `CONCEPT`, `GROUND RULES`, `SETUP`, `BUT WAIT`, `TANGENT`, `THE HONEST PART`

### Sticky note structure

```html
<div class="sticky [tilt-r]"><b>LABEL</b> body text here.</div>
```

Label is 1–2 words all-caps. `tilt-r` floats it to the right.

### Orange "honest pick" card

```html
<div class="card" style="background:var(--orange); color:#fff; padding:.12in .16in; box-shadow:0 6px 0 -4px rgba(0,0,0,.25);">
  <div style="font-family:'Archivo'; font-weight:800; font-size:7pt; letter-spacing:.16em; text-transform:uppercase;">THE HONEST PICK</div>
  <div style="font-family:'Caveat'; font-size:17pt; line-height:1.05; margin-top:.02in;">One-liner recommendation here.</div>
</div>
```

Used for key recommendations. Label can vary ("THE ONE-LINER", "THE HONEST PICK", etc.).

## What's stable, what's still moving

- **Locked**: color tokens, font stack, page size, voice, banned-lexicon rules, em-dash ban, page architecture for all chapters (ch00–ch10), all rules in "Chapter design rules" above.
- **Open**: the "chunky doodle vs. thin line art" balance (currently mixed across chapters).
- **Pending**: cross-references with real page numbers (currently say "The long version" without page).
