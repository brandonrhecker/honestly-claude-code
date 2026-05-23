/*
 * Shared rendering helpers used by every chapter of "Honestly, Claude Code".
 * Page functions in chapters/<ch>/pages.js import from here.
 *
 * Each helper returns an HTML template string. No DOM, no virtual DOM —
 * the build pipeline assembles them into one big HTML doc and renders it
 * to PDF via headless Chrome.
 *
 * Color tokens, type stack, and full design contract: see /DESIGN.md
 */

/**
 * Total number of section dots in the per-page progress rail.
 * Locked at 9 because every chapter is structured as 9 sections + cover/recap.
 */
export const SECTION_COUNT = 9;

/**
 * svgDefs() — Hidden SVG `<defs>` block injected once at the top of the HTML.
 * Defines reusable filter primitives (`#torn`, `#torn-soft`) that page-level
 * SVGs can reference via `filter="url(#torn)"`. Used for paper-tear edge
 * effects on washes and stickers.
 *
 * @returns {string} HTML string with the hidden SVG defs.
 */
export function svgDefs() {
  return `
    <svg width="0" height="0" style="position:absolute" aria-hidden="true">
      <defs>
        <filter id="torn">
          <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="8" />
        </filter>
        <filter id="torn-soft">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="5" />
          <feDisplacementMap in="SourceGraphic" scale="6" />
        </filter>
      </defs>
    </svg>
  `;
}

/**
 * rail(activeIndex, washClass) — Vertical progress rail in the top-left of
 * every body page. Renders 9 numbered dots; the dot at `activeIndex` gets
 * the `.now` class (orange fill); the rest are ink-outlined.
 *
 * @param {number} activeIndex — 1-based index of the current section (1..9)
 * @param {string} washClass   — Optional CSS class for the background wash
 *                                behind the rail (e.g. 'lav' for lavender on
 *                                tangent/skippable pages).
 * @returns {string} HTML string.
 */
export function rail(activeIndex, washClass = '') {
  const dots = [];
  for (let i = 1; i <= SECTION_COUNT; i++) {
    const isNow = i === activeIndex;
    dots.push(`<div class="dot${isNow ? ' now' : ''}">${i}</div>`);
    if (i < SECTION_COUNT) dots.push(`<span class="seg"></span>`);
  }
  return `
    <div class="rail-wrap">
      <div class="rail-wash${washClass ? ' ' + washClass : ''}"></div>
      <div class="rail">${dots.join('')}</div>
    </div>
  `;
}

/**
 * railDone() — Final variant of `rail()` used on the chapter recap page.
 * All 9 dots inert, then a ✓ check at the end signaling the chapter is done.
 *
 * @returns {string} HTML string.
 */
export function railDone() {
  const dots = [];
  for (let i = 1; i <= SECTION_COUNT - 1; i++) {
    dots.push(`<div class="dot">${i}</div><span class="seg"></span>`);
  }
  dots.push(`<div class="dot now">&#10003;</div>`);
  return `
    <div class="rail-wrap">
      <div class="rail-wash"></div>
      <div class="rail">${dots.join('')}</div>
    </div>
  `;
}

/**
 * footer(pageNum, crumb, slug, opts) — Orange band at the bottom of every page
 * with a circular page-number badge on the left and a breadcrumb on the right.
 *
 * @param {number} pageNum — Page number (1-indexed within the chapter).
 * @param {string} crumb   — Breadcrumb text, can contain HTML entities (e.g.
 *                            "CH.1 &middot; SO WHAT THE HELL IS THIS").
 * @param {string} slug    — Optional URL slug shown in JetBrains Mono after the
 *                            breadcrumb (e.g. "/01#repo").
 * @param {object} opts    — { lightFooter: bool, leftLabel: string }
 *                            lightFooter: white bg + orange text variant.
 *                            leftLabel: override "YOU ARE HERE" default.
 * @returns {string} HTML string.
 */
export function footer(pageNum, crumb, slug, opts = {}) {
  const bg = opts.lightFooter
    ? ` style="background:#fff; color:var(--orange);"`
    : '';
  const numStyle = opts.lightFooter
    ? ` style="background:#fff; color:var(--orange);"`
    : '';
  const crumbColor = opts.lightFooter
    ? ` style="color:var(--ink-soft);"`
    : '';
  const slugSpan = slug
    ? `<span class="sep">&middot;</span> <span style="font-family:'JetBrains Mono'; font-size:6pt; opacity:.75;">${slug}</span>`
    : '';
  return `
    <div class="page-num"${numStyle}>${pageNum}</div>
    <div class="footer-bar"${bg}>
      <div>${opts.leftLabel || 'YOU ARE HERE'}</div>
      <div class="crumb"${crumbColor}>${crumb} ${slugSpan}</div>
    </div>
  `;
}

/**
 * fearPage({...}) — Whole-page template for the "honest reader anxieties"
 * pages. Used 4× in chapter 01 (replace-me / data / makes-shit-up / burnout)
 * and likely 5× in chapter 09 (the long-version answers).
 *
 * The visual: big Caveat-font question with italic emphasis underlined in
 * orange, then a body paragraph, then a dark TL;DR strip, then a
 * cross-reference card with arrow. Optional sticky-note callout.
 *
 * @param {object} opts
 * @param {number} opts.pageNum      — Page number for the footer.
 * @param {number} opts.sectionIndex — Which rail dot to highlight (1..9).
 * @param {string} opts.eyebrow      — Small uppercase label above the question.
 * @param {string} opts.question     — The question (HTML, with <em> for emphasis).
 * @param {string} opts.body         — Body HTML (paragraphs, <strong>, etc.).
 * @param {string} [opts.tldr]       — TL;DR strip text. Omit to skip.
 * @param {string} opts.xrefLabel    — Small label on the cross-ref card.
 * @param {string} opts.xrefTitle    — Cross-ref card title (HTML allowed).
 * @param {string} [opts.stickyBody] — Sticky-note HTML. Omit to skip.
 * @param {string} opts.footerCrumb  — Breadcrumb for the footer.
 * @param {string} opts.footerSlug   — URL slug for the footer.
 * @returns {string} HTML string.
 */
export function fearPage({ pageNum, sectionIndex, eyebrow, question, body, tldr, xrefLabel, xrefTitle, stickyBody, footerCrumb, footerSlug }) {
  const stickyHtml = stickyBody
    ? `<div class="fear-sticky" style="top:.4in; right:.4in; transform:rotate(2.5deg);">
         ${stickyBody}
       </div>`
    : '';
  return `
    <section class="page">
      ${rail(sectionIndex)}
      ${stickyHtml}
      <div class="fear">
        <div class="fear-eyebrow">${eyebrow}</div>
        <div class="fear-q">${question}</div>
        <div class="fear-body">${body}</div>
        ${tldr ? `<div class="fear-tldr"><b>TL;DR</b>${tldr}</div>` : ''}
        <div class="fear-xref">
          <div class="x-text">
            <div class="x-lbl">${xrefLabel}</div>
            <div class="x-title">${xrefTitle}</div>
          </div>
          <div class="x-arrow">&rarr;</div>
        </div>
      </div>
      ${footer(pageNum, footerCrumb, footerSlug)}
    </section>
  `;
}
