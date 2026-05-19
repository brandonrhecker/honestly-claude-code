# Honestly, Claude Code: Book Build Design

**Date:** 2026-05-19
**Author:** Brandon R. Hecker
**Status:** Draft, awaiting review

---

## what we're building

A screen-read PDF of *Honestly, Claude Code*, built from the existing repo content. Visual design system tuned for ADHD-friendly reading: consistent signifiers, smart code blocks, OS tabs, marginalia, QR codes, and a per-page link back to the living repo.

---

## hard constraints

- **Repo is canonical.** PDF mirrors the repo. The only exception is a 1-page book-only intro.
- **Voice rules** (from author's standing memory):
  - Zero em dashes. Periods and commas only.
  - Banned lexicon: "leverage", "unlock", "dive in", "here's the thing", "circle back", and the longer list.
  - No time estimates anywhere.
  - Friendly, raw, Honest Insider voice. Mild profanity as flavor.
- **No new copy** except: the 1-page book intro, and a small "git repo" callout that gets committed to ch 01 in the repo (so PDF and repo stay in sync).
- **Output:** screen-read PDF only for v1. Print-ready, EPUB, and static site are out of scope.

---

## source content

Lives at `~/honestly-claude-code/`.

```
honestly-claude-code/
  README.md                          (the repo intro page)
  branding/
    honestly-claude-code-title.jpg   (cover art, finished)
    branding.txt                     (color palette)
  01-what-the-hell/README.md
  02-the-install/README.md
  03-make-it-do-something/README.md
  04-give-it-a-brain/README.md
  05-bolt-on-a-skill/README.md
  06-plug-it-in/README.md
  07-you-made-it/README.md
  08-pull-the-plug/README.md
  reference/
    cheat-sheet.md
    will-it-replace-me.md
    is-my-data-safe.md
    getting-dependent.md
    when-it-screws-up.md
    burn-out.md
```

---

## repo restructure (must happen first)

Before the build pipeline runs, the repo gets restructured to match the book's chapter order.

1. **Create `09-questions-you-came-here-with/README.md`** combining the 5 fear FAQs as 5 sections in this order:
   - Is my data safe?
   - When it screws up
   - Will it replace me?
   - Getting dependent
   - Burning out in an automated world

   Order builds from lightest (privacy mechanics) to heaviest (systemic burnout).

2. **Delete** the 5 individual fear FAQ files from `reference/`. Their content now lives in ch 09.

3. **`reference/` shrinks** to one file: `cheat-sheet.md`.

4. **Update `README.md`** path table to list chapters 01-09 (currently shows 01-07 only, ch 08 is orphaned).

5. **Update ch 01** inline cross-references. The four `→ reference/X.md` links currently in ch 01 become section references to ch 09 (e.g., "more in ch 09, *Will it replace me?*").

6. **Add a "git repo" sidebar callout to ch 01**, ~80-150 words, explaining what a git repo is (for non-engineers), where this book lives, and that the reader doesn't need git to read it. Voice-matched, no em dashes. This text gets committed to ch 01 so the PDF inherits it.

7. **Ensure ch 08 promotion** is reflected in README path table (currently linked nowhere except a direct URL).

---

## book architecture

Reading order in the PDF:

| Page(s) | What |
|---|---|
| 1 | Title page (uses `branding/honestly-claude-code-title.jpg`) |
| 2 | blank |
| 3-4 | Table of Contents |
| 5 | blank |
| 6 | Book intro (1 page, book-only) |
| 7 | blank |
| 8+ | Ch 01 opener (left page), then body |
| ... | Ch 02-08 in order |
| ... | Ch 09 opener, then 5 sections |
| ... | Cheat sheet reference page (last content page) |
| last | blank (closing) |

**The book intro page** is the only page with content not in the repo. It carries:
- A repurposing of the README's "Real quick: yes / yes / yes" punch
- A repurposing of the README's "I work in AI" personal context
- A one-line "this book lives as a git repo at X, scan any chapter opener QR code to read updates"
- A repurposing of the README's "Who this is for"

Whether this 1-page intro stays in sync with the repo's README is a separate decision: option (a) keep them identical, option (b) the book intro is its own thing. Recommended option (a) so repo and PDF intro match.

---

## the 13-piece design system

Recurring visual patterns. Every chapter uses the same set.

### 1. Chapter opener card

Left-page lockup. Contents:
- Chapter number, large, burnt orange
- Chapter title, large, warm black
- "When you're done" outcome bullets (verbatim pull from the chapter's own `now you can` section)
- "What you need first" prereq bullets (verbatim pull from the chapter's own `quick check before we start` section)
- QR code (top right or bottom right) pointing at the chapter folder in the repo

Same shape every chapter. Reader knows in 5 seconds what they're walking into.

### 2. Section signifier icons

Same icon every time a section type appears. Reader builds pattern recognition by ch 3.

| Icon | Section | Currently appears in |
|---|---|---|
| ✓ | quick check before we start | every chapter |
| ? | why bother (and pricing-style "what it actually costs") | most chapters |
| ℹ | first, a word about ... | ch 03, 04, 05, 06, 08 |
| → | the actual steps | every chapter |
| 🔍 | what just happened | every chapter |
| ⚠ | in case of emergency | every chapter |
| ★ | now you can | every chapter |

Icons sit inline left of the section heading, in burnt orange, ~1.2× the heading cap height.

### 3. Step-counter rail

In `the actual steps` sections, numbered steps get a left-margin rail:
```
▌ 1│7   Open the Terminal app...
▌ 2│7   Install Node.js using NVM...
▌ 3│7   Close and reopen the terminal...
```
The `1│7` tells the reader where they are in the sequence. Lavender gray rule, warm black numbers.

### 4. Code block system (three variants)

**4a. Shell commands** (`bash`, `powershell`):
- Cream background, monospace
- `$` prefix prompt in burnt orange
- Lavender gray hairline rule above and below
- Indented under its parent step

**4b. Slash commands inside Claude** (`/plugin install`, `/mcp`, `/exit`):
- Cream background, monospace
- `>` prefix prompt in burnt orange (visually distinct from shell `$`)
- Slight burnt orange tint to the block edge
- Signals "type this inside the Claude prompt"

**4c. Natural-language prompts to paste** (the long quoted blocks the reader pastes to Claude):
- Quote-mark frame, sans-serif body face, italicized
- NOT monospace
- Signals "say this to Claude, not a typed command"

Three distinct silhouettes so the reader knows what they're looking at without reading.

### 5. OS tabs

Mac / Windows / Linux sections get a left-edge color tab with the OS name in small caps:
- **Mac** = burnt orange tab
- **Windows** = lavender gray tab
- **Linux** = warm black tab

By ch 3 the reader sees "orange = Mac" instinctively.

### 6. QR codes

Two roles:

- **Title page QR** → repo root (`github.com/brandonrhecker/honestly-claude-code`)
- **Per-chapter opener QR** → that chapter's folder in the repo

QR codes are ~0.75" square, with the destination domain printed under in 8pt lavender gray for sanity. Used sparingly: just the title page + each chapter opener, not on every page.

### 7. Marginalia

Short notes float in the right margin next to body text. ~1.5" wide column. Lavender gray, 9pt italic. Used for:
- Tangential context that would slow the main flow
- Definitions of jargon
- Pointer to related chapter (e.g., "ch 09 has more on this")

ADHD win: tangents stay tangential, main flow stays clean.

### 8. Cross-references with page numbers

Replaces broken hyperlinks. Format: `see ch 09, p. 142` or `see Cheat sheet, p. 178`. Page number resolved at build time. Underlined in burnt orange.

### 9. Celebration callouts

The voice moments. Currently:
- `> Congrats. You're officially a nerd now.` (ch 02)
- `> NERD.` (ch 02)
- `> You just had Claude write a real file...` (ch 03)
- `> BELIEVE. You just gave Claude a brain...` (ch 04)
- `> You just installed someone else's workflow...` (ch 05)
- `> You just had Claude combine its built-in...` (ch 06)
- `> Done. Your machine is back...` (ch 08)

Treatment: large script type (matches the "Honestly," cursive on the cover), watercolor wash behind it in burnt orange + lavender gray, ~3× body size. Breaks the page rhythm intentionally.

### 10. "What just happened" recap card

Every chapter's debrief gets a rounded card with a subtle burnt orange border, on cream background. Distinct enough that a skimming reader can land on it for a summary without reading the whole chapter.

### 11. Forward-link card (chapter close)

Bottom of every chapter's last page:

```
╭───────────────────────────────────────╮
│                                       │
│  →  next: 03                          │
│                                       │
│      Make it do something for you     │
│      page 64                          │
│                                       │
╰───────────────────────────────────────╯
```

The page number tells you exactly where to flip.

### 12. Per-page repo signifier (footer right)

A small footer mark on every body page that ties the printed page back to the living source. Format:

```
                                          47
─────────────────────────────────────────────
                    ◆  /02-the-install  ↗
```

Lavender gray hairline rule, diamond glyph, chapter's repo path, arrow. Changes per chapter, stable within a chapter.

### 13. "What's a git repo" sidebar (ch 01 only)

A boxed callout early in ch 01 explaining git repos for non-engineers. Lives in the repo's ch 01 markdown so PDF and repo stay synced.

Visual treatment: 2/3-width cream callout with lavender gray border, "a quick note" label in burnt orange caps at top.

---

## typography stack

**Headings.** Chunky display sans with personality. Matches the LEGO-block cover energy at smaller scale.
- Primary: **Recoleta** (commercial) or **Cooper** (commercial)
- Free fallback: **Fraunces** display, **Big Shoulders Display**, or **Anybody**

**Body.** Humanist sans, high readability at 11-12pt.
- Primary: **Inter**, **Söhne**, or **Untitled Sans**
- Free fallback: **Inter** (definitely free, excellent web rendering)

**Code.** Warm monospace, not sterile.
- Primary: **JetBrains Mono** (free) or **iA Writer Mono** (commercial)
- Free fallback: **JetBrains Mono** is the recommended pick

**Script.** For celebration callouts only. Matches the "Honestly," cursive on the cover.
- Primary: **Caveat** (free, Google) or **Homemade Apple** (free, Google)
- Or sourced custom to match the cover artwork

**Decision deferred:** final font picks chosen during template build, optimizing for free + good headless-Chrome rendering.

---

## color use

| Color | Hex | Used for |
|---|---|---|
| Cream | `#F5EBE0` | Page background everywhere |
| Warm black | `#1A1411` | Body text, Linux OS tab, recap card borders (option) |
| Burnt orange | `#D4602F` | Chapter numbers, section signifier icons, code prompts (`$`, `>`), Mac OS tab, cross-reference underline, recap card border, celebration script, callout label |
| Lavender gray | `#DAD0D5` | Rules and hairlines, marginalia text, Windows OS tab, table row separators, footer breadcrumb, QR domain caption |

No 5th color introduced.

---

## build pipeline

HTML/CSS + headless Chrome (`chrome --headless --print-to-pdf`).

### folder structure

```
honestly-claude-code/
  build/
    2026-05-19-book-build-design.md   (this file)
    build.sh                          (the build script)
    template/
      index.html                      (master template)
      chapter.html                    (per-chapter partial)
      title.html, toc.html, intro.html, etc.
    css/
      print.css                       (page size, margins, page breaks)
      brand.css                       (colors, typography)
      components.css                  (the 13 design pieces)
    fonts/
      (embedded TTF/WOFF2 for repro builds)
    assets/
      cover.jpg                       (symlink or copy of branding/...)
      qr/                             (auto-generated per-chapter QR PNGs)
    out/
      honestly-claude-code.pdf        (the build output)
```

### build steps

1. **Restructure repo** (one-time, manual) per the section above.
2. **Generate QR codes** for repo root + each chapter folder. Python `qrcode` library or CLI tool.
3. **Render each markdown file to HTML** using a custom converter that respects the design tokens. Likely `python-markdown` with extensions, or a small custom Node script. Pre-process for the section signifier icons by matching heading text.
4. **Stitch HTML partials** into one big `index.html`: title → ToC → intro → ch 01 → ch 02 → ... → ch 09 → cheat sheet.
5. **Generate ToC and page-number cross-refs** in a two-pass build (pass 1 measures pages, pass 2 fills in `see ch X, p. N` references).
6. **Render to PDF** via headless Chrome: `chrome --headless --print-to-pdf=out/honestly-claude-code.pdf --no-pdf-header-footer index.html`.
7. **Run a sanity diff** on the generated PDF (file size sanity, page count sanity).

### prerequisites to install

- Node 20 (already installed)
- Python 3.14 (already installed)
- Chromium or Google Chrome headless (need to confirm install)
- Python `qrcode` library + Pillow (need to install)
- `python-markdown` or chosen markdown renderer

---

## the page-numbering and cross-reference problem

Cross-references like "see ch 09, p. 142" require knowing the page number, which depends on rendering. Solution: two-pass build.

**Pass 1:** Render the whole book with placeholder cross-references. Measure each chapter's start page.
**Pass 2:** Replace placeholders with resolved page numbers. Re-render the PDF.

Alternatively: use CSS print's `target-counter()` if Chrome's print engine supports it. Test during template build.

---

## still open (decide during implementation)

- **Page size.** Options: US Trade 6×9 (book feel), iPad-friendly 8.5×11 (screen-read), or a custom intermediate (7×10). Recommend iPad-friendly because v1 is screen-read.
- **Page numbering style placement.** Centered bottom vs. outside corner (left page = left corner, right page = right corner)?
- **Cheat sheet exact placement.** Last content page in book body, or set apart as "inside back cover" with extra visual emphasis?
- **Colophon / about-author page.** Skip for v1 unless author wants one. The cover already names the author.
- **Final font picks.** Decided when building the template; constrained by free + good headless-Chrome rendering.
- **Wording of the ch 01 git-repo callout.** Drafted as a separate work item; needs author approval before committing to repo.
- **Wording of the 1-page book intro.** Drafted as a separate work item; built from README sections.

---

## out of scope (v1)

- Print-ready PDF (KDP / IngramSpark trim, bleed, spine, back cover)
- EPUB
- Static site
- Audio version
- Translations
- ISBN, copyright page, dedication page (lean front matter rule)

These are v2+ decisions.

---

## implementation phases (suggested)

If we proceed past this spec, the build breaks into these phases:

**Phase A: repo restructure**
- Create ch 09 folder + combined README from the 5 fear FAQ files
- Reduce reference/ to just cheat-sheet.md
- Update repo README path table to chapters 01-09
- Update ch 01 inline cross-references
- Draft ch 01 git-repo sidebar callout, get approval, commit
- Promote ch 08 in README path table

**Phase B: build infrastructure**
- Create `build/` folder structure
- Set up the markdown-to-HTML converter
- Wire up headless Chrome PDF rendering
- Test pipeline with one chapter as smoke test

**Phase C: design system implementation**
- Build CSS for cream paper + typography stack
- Implement the 13 design pieces
- Generate QR codes
- Render full book draft

**Phase D: page-numbering pass**
- Two-pass build for cross-references
- ToC generation with page numbers

**Phase E: polish + sanity check**
- Visual review of every chapter
- Fix paginated edge cases (orphans, widows, awkward page breaks)
- Final PDF output

Each phase ends with a buildable artifact and an author review checkpoint.

---

## risks / known unknowns

- **Headless Chrome PDF quirks.** Print CSS support varies. May need to fall back to Puppeteer for finer control if `chrome --headless --print-to-pdf` proves limiting.
- **Font licensing.** Some display fonts cost money. Final picks should optimize for free + good headless-Chrome rendering.
- **QR code visual weight.** ~0.75" QR codes might feel heavy on the chapter opener. May need to tune size or move to a corner.
- **Page count drift.** As copy gets refined in the repo, the PDF page count changes, breaking cached "see p. N" references. Mitigated by always doing the two-pass build.
- **Markdown edge cases.** Tables, blockquotes, nested code blocks. Need to validate each chapter renders correctly during Phase B smoke test.

---

## sign-off

This spec is the design contract. Implementation should match it. Material changes (e.g., output format, page architecture, removing a design piece) require updating this spec first.
