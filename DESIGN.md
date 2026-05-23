# Honestly, Claude Code — Design System

This file describes the design system used to render the book.
Written as the project context for [claude.ai/design](https://claude.ai/design).

## What this is

A screen-read PDF book rendered from per-chapter markdown via headless Chrome (puppeteer). Page size **6 × 8 inches**. The aesthetic is "ink on cream paper" with chunky hand-drawn doodle illustrations.

The build pipeline lives in `build/`. Chapter 01 is shipped at design quality; chapters 02-09 still need design rollout (the same templates).

## Voice direction

- **Bourdain-of-AI**: observational, world-weary, anti-doom, anti-hype
- Anti-corporate, anti-textbook. The book reads more like an essay than a manual
- Lowercase used intentionally in handwritten captions and signatures
- **ZERO em dashes** (use commas, colons, or periods). No exceptions
- See repo CLAUDE.md for full voice contract and banned-lexicon rules

## Color tokens

Defined in `build/styles.css` as CSS custom properties:

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

Loaded via `build/assets/fonts.css`:

- **Archivo** — titles, badges, numbers (heavy sans, weights 700-900)
- **Source Sans 3** — body copy (regular sans)
- **Caveat** — handwritten annotations, hand-drawn callouts, signatures
- **JetBrains Mono** — code, terminal output, KPI values, marginalia term labels
- **Yellowtail / Playfair Italic** — accent display fonts (sparingly)

## Spacing scale

Page padding: `0.42in` left/right, `1in` top, `0.7in` bottom (typical body page).

## Components (function name → file)

All components in `build/shared/components.js` return HTML template strings:

| Component | Function | What it does |
|---|---|---|
| Page rail | `rail(activeIndex, washClass)` | Vertical progress dots, 1-9. Active dot orange-filled. Top-left of every body page. |
| Final rail | `railDone()` | Variant of rail with ✓ in the last dot. Used on the recap page. |
| Footer bar | `footer(pageNum, crumb, slug, opts)` | Bottom orange band with page number circle + breadcrumb + slug. Every page. |
| Fear page | `fearPage({pageNum, sectionIndex, eyebrow, question, body, tldr, xrefLabel, xrefTitle, stickyBody, footerCrumb, footerSlug})` | Whole-page template for "honest reader anxieties" (used 4× in ch01). Big Caveat question, body, TL;DR strip, cross-reference card, optional sticky note. |
| SVG filter defs | `svgDefs()` | Hidden SVG `<defs>` for `#torn` and `#torn-soft` filter references used elsewhere. |

## CSS classes (in `build/styles.css`)

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

In `build/assets/`:

- **`doodles/`** — 91 hand-drawn SVG icons (arrows, lock, light bulb, etc.) named functionally (`arrow-up-chunky-01.svg`, `light-bulb.svg`). `_original-mapping.txt` shows the rename history.
- **`stickers/`** — 40 awkward-doodle PNG stickers, the long egg-shaped character in different emotional poses. Three currently used: `panicked-hands-behind-head.png` (ch01 cover), `curious-leaner.png` (ch01 repo callout), `zen-arm-up.png` (ch01 bridge to ch02).
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
build/
├── build-chapter.js          # node build-chapter.js ch01
├── shared/components.js      # rail, footer, svgDefs, fearPage
├── chapters/<ch>/pages.js    # chapter-specific page renderers
├── styles.css                # all design tokens + classes
└── assets/                   # images, fonts, SVGs
```

To render a chapter:
```
cd build && npm run build         # ch01 by default
node build-chapter.js ch02        # any other chapter
node thumb.js ch01                # per-page PNG screenshots
```

To snapshot a stable iteration:
```
bash snapshot.sh ch01             # saves pages.js + PDF to chapters/ch01/snapshots/v<N>-<date>/
git tag ch01-stable-v<N>          # tag the full repo state for code rollback
```

## What's stable, what's still moving

- **Locked**: color tokens, font stack, page size, voice, banned-lexicon rules, em-dash ban, the chapter 01 page architecture.
- **Open**: the "chunky doodle vs. thin line art" balance (currently mixed). Page architecture for chapters 02-09 (will likely reuse ch01's templates).
- **Pending**: cross-references with real page numbers (currently say "The long version" without page).
