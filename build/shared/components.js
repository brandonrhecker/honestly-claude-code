/*
 * Shared rendering helpers used by every chapter.
 * Page functions in chapters/<ch>/pages.js import from here.
 */

export const SECTION_COUNT = 9;

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

/*
 * fearPage: shared template for the "honest reader anxieties" pages.
 * Used by ch01, will likely be used by ch09 (the long-version FAQs) too.
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
