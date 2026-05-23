# Visual direction scoping notes

Scratchpad for recovering this brainstorm if we lose the session. Not the final design doc — those notes get written after all 5 sections are approved.

**Session date:** 2026-05-19
**Status:** brainstorming in progress, paused mid-Section 2 of 5
**Author of book:** Brandon R. Hecker
**Repo:** github.com/brandonrhecker/honestly-claude-code
**Authoritative spec:** `build/2026-05-19-book-build-design.md` (Phase A done; this scoping refines the design system layer)

---

## Why we're rescoping

After 6 build iterations (v0.1 → v0.6), Brandon's diagnosis: the book reads as a "stiff technical manual" / "anonymous publisher template" / "AI slop." Adding more decorative pieces did not fix it. The design system itself has no personality. A CMO or design expert would not approve it.

**The words from the repo are fine and will not change.** Scope is entirely visual: layout, typography, color, illustration, emphasis treatments.

---

## MAJOR PIVOT (post-v0.7 review, 2026-05-19)

v0.7 still came back as "lacks personality / bland / mono-colored / too book-like." After reviewing 10 specific issue screenshots, Brandon clarified the real target:

> "you are building this as a book visually, I am wanting something with a personality like a UI for a video game but with more punchy aspects of a website... more creative, infographics, gamebook with intresting visual elements that reinforces the text from suble to punchy... not just read line by line."

Then refined: **not RPG-themed**, just *different ways to show information*. Then added: **with training modules.**

**The new target paradigm:**

This is NOT a book. It's a **visually rich modular training document** that uses:
- **Modular composition** like a website — each page is composed of designed *modules* (cards, panels, infographics, hero blocks), not a single column of body text with decorations
- **Infographic-driven information design** — when info CAN be shown visually (a tier comparison, a decision tree, a flow), it SHOULD be
- **Training-module structure** — each chapter is shaped like an educational module: stated outcome, prereqs, practice with state, checkpoint, completion reward
- **Dynamic visual range** — subtle pages AND punchy pages on purpose; not uniform energy
- **Variety as a feature** — the pricing table is NOT a table; it's a tier-comparison module. Install steps are NOT a numbered list; they're a step-by-step module with state. Troubleshooting is NOT a table; it's an if-this-then-that decision module.

**References that combine all of this** (educational, modular, visually rich, designed):
- Stripe developer onboarding pages
- Linear setup flow
- Notion getting-started guides
- Mailchimp interactive guides
- Atlassian product walkthroughs

**Reference Brandon shared (in Drive folder):**
- 4 RPG quick-start books (Call of Cthulhu, Coriolis, Humblewood, Mothership) — referenced for their *technique* of varied visual treatment, not their theme
- Unfuck Your Worth Workbook — voice + tonal cousin to Brandon's "Honestly" brand

Plus a Kittl 2026 Design Trend Report (page is JS-rendered, couldn't fetch — Brandon may screenshot/export relevant sections).

**What invalidates from earlier in this scoping session:**

- Approach C ("Cover-Continuous + Kleon Punch") is partly invalidated. Kleon-style is too book-like. The cover-continuous illustration vocabulary still applies, but the broader paradigm shifts from "indie nonfiction book" to "designed training document."
- Section 3 (layout + page rhythm as drafted) needs full rewrite. The unit is no longer "page in a book" — it's "module library + page composition."
- The 13 design pieces from the original spec are nearly all wrong target. Need to be rebuilt as a *module library* (each module a discrete visual treatment for a content type), not as decorative pieces.

**What still holds:**

- 8 design pillars (mostly intact — pillar 4 "progress feels like a journey" gets sharper as "training-module structure")
- Section 2 typography stack (Calistoga + Atkinson Hyperlegible + Kalam + JetBrains Mono + Yellowtail) — pending verification that Calistoga is actually loading
- Hand-drawn accent quality throughout
- The locked color palette
- The cover-continuous illustration vocabulary
- The hard constraint: no consecutive whitespace pages

**Sections 1, 3, 4, 5 of the original 5-section design** all need re-scoping from the new paradigm.

---

---

## Locked direction (approved this session)

**Approach C — Cover-Continuous + Kleon Punch.**

The cover's visual vocabulary (watercolor LEGO blocks, walking figures, magnifying-glass-on-chart, watercolor washes, script lettering) becomes a recurring vocabulary throughout the book. Layered with Austin Kleon-style indie nonfiction moves (hand-drawn emphasis, full-page typographic moments — but earned, not patterned).

**Why this approach over alternatives:**
- A (Kleon Maximalist alone) lacks the cover-language anchor
- B (Stripe Press Warm) fails ADHD test — uniform pages disengage scattered readers
- C combines warmth, page variety, and brand continuity

**Hard constraint from Brandon:**
- No consecutive whitespace pages. Pull quotes earn their interruption. Most pages stay content-dense.
- Watercolor stain PNGs only belong in bottom corners — never mid-page. Most of v0.6's stain placements get deleted.

---

## The 8 design pillars (Brandon-approved)

1. **Hand-drawn throughout** — illustrations AND every accent (arrows, check marks, number circles, underlines, highlights, step rails) feel hand-drawn. The book reads as "a person made every mark on this page."

2. **Content modes get distinct visual treatments.** Steps look structured and scannable. Prose flows more organically with breathing room. Callouts feel like asides. Celebrations feel like achievements. The reader's brain knows what mode it's in without thinking.

3. **Visual cues that look like they just happened.** PDF equivalent of micro-interactions: arrows that look freshly drawn pointing at the important thing, check marks stamped on after a step, highlights that look like someone underlined a phrase. Static page, but it *feels* responsive.

4. **Progress feels like a journey, with rewards.** Chapters as levels (a small "you are here" map). Steps as small achievements (each tick is a dopamine hit). Chapter close celebration = the "boss defeated" reward. Book has a story arc even though it's instructional.

5. **Visual learners welcomed.** Small explanatory diagrams (what's a terminal, what's a folder, what's an MCP server) drawn in the cover's hand-drawn watercolor style. Visuals do explanatory work, not just decoration.

6. **Anti-IKEA, anti-API-doc.** Two failure modes designed against. If a page starts looking like IKEA instructions or API reference, we've failed.

7. **Depth without bloat.** Hand-drawn watercolor textures and subtle shadows give pages physical depth. Compressed PNGs and SVG where possible. PDF stays under reasonable size.

8. **Accessibility-first.** Contrast ratios meet AA. Screen-reader-readable text isn't trapped in images. Color is never the only signal (icon + text together).

---

## Section progress

- **Section 1 — Illustration system:** APPROVED ("looks ok")
- **Section 2 — Typography + emphasis:** APPROVED (UI/UX validated, all 3 refinements taken)
- **Section 3 — Layout + page rhythm (organic + structured tension, content modes):** PENDING
- **Section 4 — Color usage (color blocks as structure, depth treatments):** PENDING
- **Section 5 — What gets cut (clean kill list from the original 13 design pieces):** PENDING

---

## Section 1 detail — Illustration system (APPROVED)

**Premise:** the cover's visual vocabulary recurs inside the book as custom illustrations, one per chapter, used as the chapter opener hero image. The illustration *means* something to the chapter, not just decorates it.

**Per-chapter illustration concepts:**

- Ch 01 (what the hell is Claude Code) — small recurrences of cover motifs
- Ch 02 (install) — hand at a terminal, or LEGO blocks mid-assembly
- Ch 03 (first task) — walking figure handing a folder to a small Claude figure
- Ch 04 (give it a brain) — LEGO blocks forming a brain, or a CLAUDE.md document with character
- Ch 05 (bolt on a skill) — new LEGO piece clicking into existing structure
- Ch 06 (plug into apps) — cables/connectors between LEGO modules
- Ch 07 (you made it) — the two walking figures from the cover now standing at the end of the chart
- Ch 08 (pull the plug) — a hand pulling a cable
- Ch 09 (questions) — the cover's magnifying glass, now bigger, examining a question mark
- Cheat sheet — smaller recurrences of cover motifs

**Where they live:** chapter opener page, meaningful illustration size (not corner decoration). One hero per chapter. Possible mid-chapter recurrence for visual-learner explainer diagrams.

**Generation path:** Claude generates samples in the cover's watercolor + hand-drawn style. Brandon can swap any later for commissioned art. Build pipeline references each by file path so swapping is a one-line edit.

**Kills:** Phosphor icons in big floating pills. Random mid-page watercolor stains. Walking-people illustration jammed above every chapter-close card. Random decoration that doesn't serve the section.

---

## Section 2 detail — Typography + emphasis (APPROVED)

**Final type stack (after UI/UX validation refinements):**

| Role | Font | Purpose |
|---|---|---|
| Display | **Calistoga** *(was Playfair Display)* | Chapter titles, section headers. Chunky display serif chosen for "human warmth." Used bigger than v0.6 — can break the grid. |
| Body | **Atkinson Hyperlegible** *(was Inter)* | Body prose. Designed by the Braille Institute for maximum legibility — ADHD, dyslexia, low-vision friendly. Differentiates from "default Google Font book." |
| Mono | JetBrains Mono | Code blocks, in-line code, terminal labels. |
| Script | Yellowtail | RESERVED for celebration moments only (1 per chapter). Stays special. |
| Marker | Kalam | Hand-drawn emphasis, marginalia, asides, callout headers. Felt-tip pen feel. UI/UX-validated. |
| Pull quote | Playfair Display Italic | RESERVED for the 1 in-flow pull quote per chapter. Its actual strength. |

**Hierarchy with character moves:**

- Chapter titles — Calistoga, oversized, can run off the page edge. Number is its own typographic statement.
- Section headers — Calistoga + a marker-drawn underline beneath (SVG, slightly imperfect line). Replaces v0.6 Phosphor-icon-in-pill.
- Subsection labels — Kalam or small Atkinson Hyperlegible caps depending on context.
- Body emphasis (bold) — sometimes a yellow/peach marker highlight behind the bold phrase (SVG stroke). Reserved for punchy moments, not every bold.
- Marginalia — Kalam in author's voice, right margin. Asides, jokes, real talk.
- Pull quote (max one per chapter, in-flow not full-page) — Playfair Display Italic extra large with hand-drawn opening quote mark.

**Locked color contrast rules (Pillar 8):**

- Body text = warm black `#1A1411` on cream `#F5EBE0` only (~16:1, AAA)
- Burnt orange `#D4602F` = large text + accents only. Fails 4.5:1 against cream for body-size text. Never use for body or fine print.
- Lavender gray `#DAD0D5` = structural backgrounds and borders only. Never for text (~1.3:1).

**Hand-drawn emphasis SVG library to build:**

- Yellow/peach marker highlights (stroke behind bold phrases)
- Hand-drawn circles around key terms
- Hand-drawn underlines beneath section headers
- Slightly imperfect arrows pointing at the important next thing
- Hand-drawn check marks for completed steps (replacing Phosphor circle-checks)
- Hand-drawn step number circles (replacing perfect-circle counters)
- Hand-drawn checkboxes for prereqs (currently squares with orange border)

These are drawn once as SVG (by Claude or commissioned) and reused everywhere. Same hand throughout.

**Kills:**
- Phosphor icons inside orange filled pills as section signifiers
- Drop cap "Y" treatment (editorial-magazine, wrong for Kleon energy)
- Unicode/symbolic emphasis (✓ ? ⚠) — replaced by hand-drawn equivalents
- Yellowtail anywhere except the 1-per-chapter celebration moment

---

## Pending sections (not yet presented)

**Section 3 — Layout + page rhythm:**
- Organic + structured tension: step pages get strict grids (ADHD scannability), prose pages get breathing/asymmetry
- Content modes: prose, steps, callouts, celebrations, marginalia, code blocks
- Page rhythm: how density alternates without consecutive whitespace
- The "you are here" chapter map / progress indicator concept

**Section 4 — Color usage:**
- Color blocks as STRUCTURE not garnish (a peach block holds a callout; a cream block holds body; a burnt-orange block holds a punctuation moment)
- Where the locked palette (cream, warm black, burnt orange, lavender gray) gets used and where it doesn't
- Subtle hand-drawn watercolor textures for depth without file-size bloat
- Contrast ratios for AA accessibility

**Section 5 — What gets cut:**
- Clean kill list from the current 13 design pieces
- What survives (probably ~6)
- What gets renamed/repurposed
- Plus: the existing `2026-05-19-book-build-design.md` spec needs its design-system section updated to reflect this rescope

---

## Files relevant to this scoping

- `/home/bhecker/honestly-claude-code/build/2026-05-19-book-build-design.md` — original spec, Phase A done, design system section needs updating after this brainstorm
- `/home/bhecker/honestly-claude-code/build/styles.css` — v0.6 CSS, will be rewritten after scope is locked
- `/home/bhecker/honestly-claude-code/build/build.js` — v0.6 build script, will be rewritten after scope is locked
- `/home/bhecker/honestly-claude-code/build/out/sample.pdf` — v0.6 output, the one Brandon diagnosed as "stiff technical manual"
- `/home/bhecker/honestly-claude-code/branding/` — cover art + watercolor stain PNGs (most of which get deleted from interior use) + LEGO blocks + walking people illustration
- `~/projects/the-honest-insider/brand/brand-voice.md` — authoritative brand voice (Bourdain-of-AI, banned lexicon, 16-item audit) — load before writing any new copy (but copy is not being changed in this scope)

---

## Brandon's preferences applied to this scoping

- Short responses, ADHD-friendly (bullets > paragraphs)
- Friendly raw tone, no homework vibes
- Ask before pushing style decisions
- No cute names until approved (no naming the design system, no naming SVG asset packs)
- No time estimates
- Zero em dashes anywhere
- Hand-drawn quality throughout

---

## Resume instructions for next session

**CRITICAL — read this section first before anything else.**

1. **Read this file top-to-bottom.** Especially the MAJOR PIVOT 2 section below.
2. **Check `build/references/` for image files.** Brandon was going to mock up a few page designs as images and drop them there to use as design references. If files exist, your first job is to read them all, extract the design DNA, and propose a rebuild from those mockups.
3. **If references/ is empty**, ask Brandon if he's still planning to mock up pages, or if he wants to take a different direction. Don't restart building from scratch without his go-ahead.
4. **Don't re-run earlier brainstorming questions.** The pillars, palette, type stack, and the broad direction are settled. The open question is execution from his mockups.

---

## MAJOR PIVOT 2 — Mario × hand-drawn × Brandon-as-art-director (2026-05-19 → 2026-05-20)

After v0.8 ("modular guide direction") was built — pricing table → tier cards, troubleshooting table → decision rows, OS sections → colored containers, "Real quick" punchline isolated, etc. — Brandon's feedback was: "starting to look better. I dont like the round card container look but its a much better layout."

Then he gave concrete direction:

> "you know how the claude code logo is blocky? what would happen if you worked for Nintindo and used Super Mario NES as a design refrence to build UI elements that are much better looking than the current elements? example: cards, page numbers? etc example page numbers could be more blocky? Mario meets hand drawn human feel. I also want the background of all pages except for the title page to be #fbf6f0"

This was applied in **v0.8.1** (the current build):

**What changed in v0.8.1:**
- All round corners → square corners. Every card, badge, tier, button is now `border-radius: 0`.
- Hard offset block-shadows on every container — Mario brick energy. Shadows in palette colors (black, orange, lavender) per the card's mood.
- Page numbers in @page margin box: now a small orange tile with black border (JetBrains Mono Bold, cream on orange).
- Chapter map nodes: squares instead of circles. "You are here" indicator is a Mario-style flagpole + flag + label.
- Step number circles: now solid orange blocks with black borders + hard shadow + Calistoga number.
- OS section labels: blocky tab labels overhanging the container, with offset shadow.
- Pricing tier cards: Mario blocks. Pro tier has a tilted "pick this one" banner with offset shadow.
- Forward link arrow: chunky orange tile with hand-drawn arrow inside (Mario pipe / arrow energy).
- Celebration card: orange block, black border, tilted black "you did it" tab on top, decorative burst marks.
- Recap card: lavender block with deeper lavender shadow, tilted "recap" tab.
- Outcomes card: orange block with deeper orange shadow, tilted "you can now" tab.
- All page backgrounds: `#FBF6F0` (cream-50). Title page is the only exception.

**Status of v0.8.1:** built, sent to Brandon, no critique recorded. Brandon then said: "if I design a few pages as images, would you be able to use that as inspration and recreate the theme?"

---

## NEW PLAN — Brandon mocks up pages, Claude reverse-engineers

The expensive guessing loop has run its course. After 8+ build iterations with Claude making creative direction calls, Brandon's switching to a much faster pattern:

1. **Brandon designs a few page mockups as images** (any tool — Figma, Canva, hand-sketched, anything).
2. **Drops them in `honestly-claude-code/build/references/`.** Filenames serve as commentary (like the `build/issues/` folder pattern).
3. **Claude reads the images**, extracts design DNA: colors (exact hex), type style + hierarchy, layout grids, module treatments (corners, borders, shadows, fills), decorative elements, color usage as structure.
4. **Claude proposes the design system** based on the mockups before writing any code. Brandon confirms or adjusts.
5. **Claude rebuilds styles.css + build.js** to match the mockups.

**Why this works better than continued guessing:**
- Brandon can show taste 100x faster than he can describe it in words.
- Claude can match observed design 100x better than it can invent direction.
- The "I dont know how to get what I want" problem is solved by Brandon making the target visible.

**What helps Claude extract maximum design DNA:**
- Multiple page types in one batch (chapter opener, prose body, steps, celebration, callout, recap — the more module types he mocks, the more design DNA Claude can extract)
- High resolution (PDF screenshots or 2x retina PNGs are ideal)
- Filename hints about role ("chapter opener mockup", "celebration page", etc.)
- Notes about what's a direct reference vs. borrowed/inspirational

**What's harder to perfectly match:**
- Custom illustrations — Claude can approximate, not replicate exactly
- Fonts not on Google Fonts — Claude substitutes closest
- Complex blend modes / specific photo effects

---

## Things that survive into the next session

**Settled — don't relitigate:**
- 8 design pillars (hand-drawn throughout, distinct content modes, micro-interaction visual cues, training-module structure with rewards, visual learners welcomed, anti-IKEA/anti-API-doc, depth without bloat, accessibility-first)
- Expanded 4-family color palette (cream/black/orange/lavender, each in 3-5 steps) — Brandon may evolve this from his mockups but the structure is approved
- Type stack: Calistoga (display), Atkinson Hyperlegible (body), Kalam (marker), JetBrains Mono (code), Yellowtail (script), Playfair Display Italic (pull quotes)
- Background `#FBF6F0` on all pages except title
- "Guide not textbook" framing
- "Modular composition like a website, not flowing prose"
- "Training-module structure for each chapter"
- Hard constraint: no consecutive whitespace pages
- The repo words don't change — visual treatment only

**What Brandon's mockups may legitimately change:**
- Card treatment (currently Mario-blocky with square corners + hard shadows — Brandon may pull back from this or push further)
- Decorative elements (currently flags, burst marks, hand-drawn arrows — Brandon may have a different vocabulary in mind)
- Specific module shapes (tier cards, step blocks, decision rows, OS containers — all open to redesign)
- Color usage specifics (how aggressively to use which family on which page)
- Page-level mood backgrounds (currently all cream-50 — may shift)

---

## Current files state (as of v0.8.1)

- `build/styles.css` — v0.8.1, Mario-blocky modular guide direction
- `build/build.js` — v0.8.1, generates the prototype with the modular transforms
- `build/out/sample.pdf` — v0.8.1 prototype
- `build/out/sample.html` — v0.8.1 debug HTML
- `build/issues/` — Brandon's v0.7 critique screenshots with filename commentary (still relevant for diagnostic patterns)
- `build/references/` — NEW empty folder, ready for Brandon's mockups

**Do not assume v0.8.1 is the design target.** It's a working prototype that establishes the modular infrastructure. The actual visual treatment should be reset based on Brandon's mockups.

---

## Original resume instructions (now superseded)

The steps below were written for a different scoping phase and no longer apply. Kept for reference only.

1. ~~Read this file top-to-bottom.~~ (Still do this — that's #1 above.)
2. ~~Confirm with Brandon that the Section 1 + pillars + Approach C are still locked.~~ (Approach C was a directional name from an earlier scoping pass; the pillars hold but Approach C as a label is dead. Don't re-anchor on it.)
3. ~~If Section 2 (typography) is still awaiting approval, re-present it...~~ (Approved.)
4. ~~After Section 2 approval, present Section 3...~~ (Section 3 was superseded by the modular direction.)
5. ~~Continue through Sections 4 and 5.~~ (Both superseded.)
6. ~~Once all 5 are approved, write the final design doc...~~ (Skip. Mockup-driven design replaces the section-by-section spec.)
7. ~~Then rewrite styles.css and build.js to match.~~ (Now contingent on Brandon's mockups.)
