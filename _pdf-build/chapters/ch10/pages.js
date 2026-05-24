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

/** Two-column command reference table. heads = [col1 label, col2 label]. */
function cmdTable(title, heads, rows, note) {
  const rowHtml = rows.map(([col1, col2], i) => `
    <tr>
      <td>${col1}</td>
      <td><span class="mono">${col2}</span></td>
    </tr>`).join('');
  const noteHtml = note
    ? `<div class="small" style="color:var(--ink-soft); margin-top:.06in; font-style:italic;">${note}</div>`
    : '';
  return `
    <div style="margin-top:.2in;">
      <div class="eyebrow" style="color:var(--navy); margin-bottom:.04in; font-size:7pt;">${title}</div>
      <table class="dtable">
        <thead>
          <tr>
            <th style="width:52%;">${heads[0]}</th>
            <th>${heads[1]}</th>
          </tr>
        </thead>
        <tbody>${rowHtml}</tbody>
      </table>
      ${noteHtml}
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

        ${cmdTable(
          'OPEN AND CLOSE CLAUDE',
          ['What you want', 'What you type'],
          [
            ['Start Claude in this folder', 'claude'],
            ['Check it\'s installed', 'claude --version'],
            ['Exit cleanly', '/exit'],
            ['Force quit (last resort)', 'Ctrl+C twice'],
          ]
        )}

        ${cmdTable(
          'MOVE AROUND YOUR COMPUTER',
          ['What you want', 'What you type'],
          [
            ['See where you are', 'pwd'],
            ['List what\'s in this folder', 'ls'],
            ['Step into a folder', 'cd folder-name'],
            ['Go up one folder', 'cd ..'],
            ['Go to your home folder', 'cd ~'],
            ['Make a new folder', 'mkdir folder-name'],
          ]
        )}
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

        ${cmdTable(
          'SLASH COMMANDS',
          ['What you want', 'What you type'],
          [
            ['See what\'s available', '/help'],
            ['Change the theme', '/theme'],
            ['See current permissions', '/permissions'],
            ['See your connected apps', '/mcp'],
            ['Reload plugins', '/reload-plugins'],
            ['Exit', '/exit'],
          ]
        )}

        ${cmdTable(
          'PLUGINS — BUNDLES OF SKILLS',
          ['What you want', 'What you type'],
          [
            ['Register a marketplace', '/plugin marketplace add &lt;owner/repo&gt;'],
            ['Install a plugin', '/plugin install &lt;name&gt;@&lt;marketplace&gt;'],
            ['Uninstall a plugin', '/plugin uninstall &lt;name&gt;@&lt;marketplace&gt;'],
            ['Remove a marketplace', '/plugin marketplace remove &lt;name&gt;'],
          ],
          'Always run <span class="mono">/reload-plugins</span> after installing or removing.'
        )}
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

        ${cmdTable(
          'MCPs — CONNECT CLAUDE TO OTHER APPS',
          ['What you want', 'What you type'],
          [
            ['Add an HTTP MCP', 'claude mcp add --transport http &lt;name&gt; &lt;url&gt;'],
            ['List your MCPs', 'claude mcp list'],
            ['Remove an MCP', 'claude mcp remove &lt;name&gt;'],
          ],
          'Then run <span class="mono">/mcp</span> inside Claude to confirm it\'s connected.'
        )}

        <div style="margin-top:.2in;">
          <div class="eyebrow" style="color:var(--navy); margin-bottom:.04in; font-size:7pt;">WHEN SOMETHING'S BROKEN</div>
          <table class="dtable">
            <thead>
              <tr>
                <th style="width:40%;">Symptom</th>
                <th>First thing to try</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><span class="mono">claude: command not found</span></td><td>Close and reopen your terminal</td></tr>
              <tr><td>A slash command does nothing</td><td>Run <span class="mono">/reload-plugins</span></td></tr>
              <tr><td>Permission error on install</td><td>Don't use <span class="mono">sudo</span>. See chapter 02.</td></tr>
              <tr><td>Claude wrote in the wrong folder</td><td><span class="mono">/exit</span>, <span class="mono">cd</span> to the right folder, <span class="mono">claude</span> again</td></tr>
              <tr><td>MCP shows "failed"</td><td>Remove it, add it again</td></tr>
              <tr><td>Anything else</td><td>Copy the error, ask Claude what it means</td></tr>
            </tbody>
          </table>
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
