/*
 * Chapter 10 — "Cheat sheet"
 * Reference appendix. No narrative arc — command tables readers
 * bookmark and return to. Verbatim from 10-reference/cheat-sheet.md.
 *
 * 5 pages:
 *   1.  Chapter opener
 *   2.  In the terminal: Open/close + Move around (section 1 of 4)
 *   3.  Inside Claude: Slash commands + Plugins (section 2 of 4)
 *   4.  Connect and fix: MCPs + When broken (section 3 of 4)
 *   5.  Two things to never forget — closing page (section 4 of 4)
 */

import { rail, railDone, footer } from '../../shared/components.js';

export const chapterTitle = 'Honestly, Claude Code, ch.10 — Cheat Sheet';

/** Dark card: label on top, orange mono command below, optional smaller subtext. */
function cmdCard(label, command, sub = '') {
  return `<div style="background:var(--ink); padding:.08in .1in; border-radius:8px;">
    <div style="font-family:'Archivo',sans-serif; font-weight:800; font-size:6pt; letter-spacing:.15em; text-transform:uppercase; color:rgba(255,255,255,.42); margin-bottom:.04in;">${label}</div>
    <div style="font-family:'JetBrains Mono'; font-size:10.5pt; color:var(--orange); line-height:1.2;">${command}</div>
    ${sub ? `<div style="font-family:'JetBrains Mono'; font-size:8pt; color:rgba(255,255,255,.3); margin-top:.03in;">${sub}</div>` : ''}
  </div>`;
}

/** Horizontal rule with centered label — visually separates command groups. */
function sectionRule(label) {
  return `<div style="display:flex; align-items:center; gap:.1in; margin:.14in 0 .09in;">
    <div style="flex:1; height:1px; background:var(--rule);"></div>
    <div style="font-family:'Archivo',sans-serif; font-weight:800; font-size:6.5pt; letter-spacing:.15em; text-transform:uppercase; color:var(--ink-mute); white-space:nowrap;">${label}</div>
    <div style="flex:1; height:1px; background:var(--rule);"></div>
  </div>`;
}

/** Symptom → fix row for the troubleshooting section. */
function fixRow(symptom, fix, isMono = false) {
  const symptomInner = isMono
    ? `<span style="font-family:'JetBrains Mono'; font-size:8pt; line-height:1.3;">${symptom}</span>`
    : `<span style="font-family:'Source Sans 3',sans-serif; font-size:9pt; line-height:1.3;">${symptom}</span>`;
  return `<div style="display:grid; grid-template-columns:1fr .2in 1fr; align-items:center; gap:.05in;">
    <div style="background:var(--paper-deep); padding:.06in .09in; border-radius:6px; border-left:2px solid var(--orange); color:var(--ink);">${symptomInner}</div>
    <div style="color:var(--orange); font-size:13pt; text-align:center; line-height:1;">&rarr;</div>
    <div style="background:var(--paper-deep); padding:.06in .09in; border-radius:6px; font-family:'Source Sans 3',sans-serif; font-size:9pt; color:var(--ink-soft); line-height:1.3;">${fix}</div>
  </div>`;
}

function pageChapterOpener() {
  return `
    <section class="page">
      <img src="../../../assets/watercolor-gray.png" alt=""
           style="position:absolute; left:-.7in; width:8.2in; top:.6in; height:3.6in; z-index:1; pointer-events:none; mix-blend-mode:multiply; opacity:.92;"/>
      ${rail(1, '', 4)}
      <img src="../../../assets/stickers/holding-something-out.png" alt=""
           style="position:absolute; right:-.37in; top:.4in; width:4.0in; z-index:2; object-fit:contain; pointer-events:none;" />

      <div style="position:absolute; left:.42in; top:1.05in; z-index:3; max-width:2.85in;">
        <div class="eyebrow">REFERENCE <span class="dot-sep">&bull;</span> CHEAT SHEET</div>
        <div class="ch-num">10</div>
        <div class="annot ink" style="position:absolute; left:1.5in; top:.42in; transform:rotate(-5deg); font-size:13pt; white-space:nowrap;">&larr; tape it to your wall.</div>
        <div style="display:inline-block;">
          <div class="ch-title" style="position:relative; white-space:nowrap;">The stuff you<br/>actually need.</div>
          <svg viewBox="0 0 220 14" preserveAspectRatio="none" style="display:block; width:2.6in; height:.18in; margin-top:.04in; margin-left:.05in;" aria-hidden="true">
            <path d="M 2 8 Q 28 2 60 6 T 130 5 Q 170 3 218 7" stroke="#d96033" stroke-width="6" stroke-linecap="round" fill="none" opacity=".88"/>
            <path d="M 8 11 Q 50 9 110 10 T 210 11" stroke="#d96033" stroke-width="2" stroke-linecap="round" fill="none" opacity=".55"/>
          </svg>
        </div>
      </div>

      <div class="lb-grid">
        <div class="lb">
          <div class="lb-badge"><div class="ico">&#128296;</div></div>
          <h4>You'll look up</h4>
          <ul>
            <li><span class="chk">&#10003;</span>Open and close Claude</li>
            <li><span class="chk">&#10003;</span>Navigate your terminal</li>
            <li><span class="chk">&#10003;</span>Slash commands</li>
            <li><span class="chk">&#10003;</span>Plugins and MCPs</li>
            <li><span class="chk">&#10003;</span>What to do when broken</li>
          </ul>
        </div>
        <div class="lb b">
          <div class="lb-badge"><div class="ico">&#129488;</div></div>
          <h4>Honest questions</h4>
          <ol>
            <li><span class="num-step">1</span>What's the one slash command you actually need?</li>
            <li><span class="num-step">2</span>What do you do when Claude stops responding?</li>
            <li><span class="num-step">3</span>Do you have to memorize any of this?</li>
          </ol>
        </div>
      </div>

      ${footer(1, "CH.10 &nbsp;&middot;&nbsp; CHEAT SHEET", "/10-reference")}
    </section>
  `;
}

function pageTerminalBasics() {
  return `
    <section class="page">
      ${rail(2, '', 4)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">REFERENCE &nbsp;&middot;&nbsp; SECTION 1 OF 4</div>
        <div style="margin-top:.04in; display:flex; align-items:baseline; justify-content:space-between; gap:.18in;">
          <div class="section-h">In the <span class="stroke-under">terminal</span>.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:18pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">type these outside Claude</div>
        </div>

        ${sectionRule('OPEN + CLOSE')}
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:.07in;">
          ${cmdCard('START CLAUDE', 'claude')}
          ${cmdCard('CHECK INSTALL', 'claude --version')}
          ${cmdCard('EXIT CLEANLY', '/exit')}
          ${cmdCard('FORCE QUIT', 'Ctrl+C &nbsp;&nbsp; twice')}
        </div>

        ${sectionRule('NAVIGATE YOUR COMPUTER')}
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:.07in;">
          ${cmdCard('WHERE AM I?', 'pwd')}
          ${cmdCard("WHAT'S IN HERE?", 'ls')}
          ${cmdCard('STEP INTO A FOLDER', 'cd folder-name')}
          ${cmdCard('GO UP ONE LEVEL', 'cd ..')}
          ${cmdCard('GO HOME', 'cd ~')}
          ${cmdCard('MAKE A FOLDER', 'mkdir folder-name')}
        </div>
      </div>
      ${footer(2, "CH.10 &nbsp;&middot;&nbsp; TERMINAL BASICS", "/10-reference#terminal")}
    </section>
  `;
}

function pageClaudeInterface() {
  return `
    <section class="page">
      ${rail(3, '', 4)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">REFERENCE &nbsp;&middot;&nbsp; SECTION 2 OF 4</div>
        <div style="margin-top:.04in; display:flex; align-items:baseline; justify-content:space-between; gap:.18in;">
          <div class="section-h">Inside <span class="stroke-under">Claude</span>.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:18pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">type these at the prompt</div>
        </div>

        ${sectionRule('SLASH COMMANDS')}
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:.07in;">
          ${cmdCard("SEE WHAT'S AVAILABLE", '/help')}
          ${cmdCard('CHANGE THE THEME', '/theme')}
          ${cmdCard('SEE PERMISSIONS', '/permissions')}
          ${cmdCard('SEE CONNECTED APPS', '/mcp')}
          ${cmdCard('RELOAD PLUGINS', '/reload-plugins')}
          ${cmdCard('EXIT', '/exit')}
        </div>

        ${sectionRule('PLUGINS — BUNDLES OF SKILLS')}
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:.07in;">
          ${cmdCard('ADD A MARKETPLACE', '/plugin marketplace add', '&lt;owner/repo&gt;')}
          ${cmdCard('INSTALL A PLUGIN', '/plugin install', '&lt;name&gt;@&lt;marketplace&gt;')}
          ${cmdCard('UNINSTALL A PLUGIN', '/plugin uninstall', '&lt;name&gt;@&lt;marketplace&gt;')}
          ${cmdCard('REMOVE A MARKETPLACE', '/plugin marketplace remove', '&lt;name&gt;')}
        </div>
        <div style="margin-top:.08in; font-family:'Source Sans 3',sans-serif; font-size:8.5pt; color:var(--ink-mute); font-style:italic;">Always run <span style="font-family:'JetBrains Mono'; font-size:.85em;">/reload-plugins</span> after installing or removing.</div>
      </div>
      ${footer(3, "CH.10 &nbsp;&middot;&nbsp; CLAUDE INTERFACE", "/10-reference#claude")}
    </section>
  `;
}

function pageConnectAndFix() {
  return `
    <section class="page">
      ${rail(4, '', 4)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">REFERENCE &nbsp;&middot;&nbsp; SECTION 3 OF 4</div>
        <div style="margin-top:.04in; display:flex; align-items:baseline; justify-content:space-between; gap:.18in;">
          <div class="section-h">Connect <span class="stroke-under">and fix</span>.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:18pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">don't throw the laptop</div>
        </div>

        ${sectionRule('MCPs — CONNECT CLAUDE TO OTHER APPS')}
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:.07in;">
          ${cmdCard('ADD AN MCP', 'claude mcp add', '--transport http &lt;name&gt; &lt;url&gt;')}
          ${cmdCard('LIST YOUR MCPs', 'claude mcp list')}
          ${cmdCard('REMOVE AN MCP', 'claude mcp remove', '&lt;name&gt;')}
        </div>
        <div style="margin-top:.07in; font-family:'Source Sans 3',sans-serif; font-size:8.5pt; color:var(--ink-mute); font-style:italic;">Then run <span style="font-family:'JetBrains Mono'; font-size:.85em;">/mcp</span> inside Claude to confirm it's connected.</div>

        ${sectionRule("WHEN SOMETHING'S BROKEN")}
        <div style="display:flex; flex-direction:column; gap:.06in;">
          ${fixRow('claude: command not found', 'Close and reopen your terminal', true)}
          ${fixRow('A slash command does nothing', 'Run /reload-plugins', false)}
          ${fixRow('Permission error on install', "Don't use sudo — see chapter 02", false)}
          ${fixRow('Claude wrote in the wrong folder', '/exit, cd to the right folder, claude again', false)}
          ${fixRow('MCP shows "failed"', 'Remove it, add it again', false)}
          ${fixRow('Anything else', 'Copy the error. Ask Claude what it means.', false)}
        </div>
      </div>
      ${footer(4, "CH.10 &nbsp;&middot;&nbsp; CONNECT + FIX", "/10-reference#fix")}
    </section>
  `;
}

function pageNeverForget() {
  return `
    <section class="page">
      <img src="../../../assets/orange-watercolor-page-stain-left.png" alt="" aria-hidden="true"
           style="position:absolute; left:0; bottom:0; width:3.2in; z-index:1; pointer-events:none; opacity:.9;" />
      <div class="wash lav" style="right:-.8in; top:-.8in; width:3.2in; height:2.4in; opacity:.55;"></div>

      ${railDone(4)}

      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2; display:flex; flex-direction:column;">
        <div class="eyebrow" style="color:var(--ink-mute);">REFERENCE &nbsp;&middot;&nbsp; SECTION 4 OF 4</div>
        <div style="margin-top:.04in;">
          <div class="section-h">Two things to <span class="stroke-under">never forget</span>.</div>
        </div>

        <div style="margin-top:.4in; display:flex; flex-direction:column; gap:.32in; flex:1;">
          <div style="display:flex; gap:.2in; align-items:flex-start;">
            <div style="font-family:'Archivo'; font-weight:900; font-size:52pt; color:var(--orange); line-height:.85; flex:0 0 auto; margin-top:-.06in;">1.</div>
            <div>
              <div style="font-family:'Archivo'; font-weight:800; font-size:13pt; color:var(--ink); line-height:1.2;">Read what Claude wrote before you click yes.</div>
              <div class="lede" style="margin-top:.1in; max-width:3.4in;">Even when half of it might as well be in Greek. Look anyway.</div>
            </div>
          </div>

          <div style="display:flex; gap:.2in; align-items:flex-start;">
            <div style="font-family:'Archivo'; font-weight:900; font-size:52pt; color:var(--orange); line-height:.85; flex:0 0 auto; margin-top:-.06in;">2.</div>
            <div>
              <div style="font-family:'Archivo'; font-weight:800; font-size:13pt; color:var(--ink); line-height:1.2;">You can always <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">/exit</span> and start over.</div>
              <div class="lede" style="margin-top:.1in; max-width:3.4in;">Nothing is permanent.</div>
            </div>
          </div>
        </div>

        <div style="display:flex; align-items:center; justify-content:space-between; padding-top:.2in; border-top:1px dashed var(--rule);">
          <div>
            <div style="font-family:'Caveat'; font-size:20pt; color:var(--ink); line-height:1;">you actually did it.</div>
            <div class="small" style="color:var(--ink-mute); margin-top:.04in;">honestly, <b style="color:var(--ink);">brandon</b>. still not an algorithm.</div>
          </div>
          <div style="width:1.25in; height:1.25in; border-radius:50%; overflow:hidden; display:flex; align-items:center; justify-content:center; flex:0 0 auto;">
            <img src="../../../assets/stickers/zen-arm-up.png" alt="" style="width:240%; height:240%; object-fit:contain; display:block;" />
          </div>
        </div>
      </div>

      ${footer(5, "CH.10 &nbsp;&middot;&nbsp; NEVER FORGET", "/10-reference#rules")}
    </section>
  `;
}

export function renderPages() {
  return [
    pageChapterOpener(),
    pageTerminalBasics(),
    pageClaudeInterface(),
    pageConnectAndFix(),
    pageNeverForget(),
  ];
}
