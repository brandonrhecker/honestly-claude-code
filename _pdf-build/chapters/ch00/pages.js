/*
 * Chapter 00 — Front matter
 *
 * 2 pages:
 *   1.  Cover — full-bleed cover image
 *   2.  "Real quick:" — centered disclaimer in book style
 */

export const chapterTitle = 'Honestly, Claude Code';

function pageCover() {
  return `
    <section class="page" style="padding:0; margin:0;">
      <img src="../../../assets/honestly-claude-code-brandon-hecker.png" alt="Honestly, Claude Code by Brandon Hecker"
           style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block;" />
    </section>
  `;
}

function pageRealQuick() {
  return `
    <section class="page">
      <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center;">
        <div style="text-align:center; max-width:3.6in; font-family:'Source Sans 3', sans-serif;">
          <div style="font-family:'Archivo'; font-weight:900; font-size:18pt; color:var(--ink); margin-bottom:.3in;">Real quick:</div>
          <p style="font-size:10pt; line-height:1.6; color:var(--ink); margin:0 0 .18in;">Yes, this is a guide for humans learning to use AI.</p>
          <p style="font-size:10pt; line-height:1.6; color:var(--ink); margin:0 0 .18in;">Yes, I used AI to write the guide.</p>
          <p style="font-size:10pt; line-height:1.6; color:var(--ink); margin:0 0 .3in;">Yes, that's hypocritical.</p>
          <p style="font-family:'Caveat'; font-size:22pt; color:var(--orange); margin:0;">Mind your business.</p>
        </div>
      </div>
    </section>
  `;
}

export function renderPages() {
  return [
    pageCover(),
    pageRealQuick(),
  ];
}
