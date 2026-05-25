/*
 * Chapter 03 — "Make it do something for you"
 *
 * 10 pages:
 *   1.  Chapter opener
 *   2.  Concept: Why bother (section 1)
 *   3.  Concept: About .md files (section 2)
 *   4.  Setup: Open terminal + make folder (section 3)
 *   5.  Setup: Launch + give it a task (section 4)
 *   6.  Setup: Approve + find your file (section 5)
 *   7.  Concept: What just happened (section 6)
 *   8.  Troubleshooting: In case of emergency (section 7)
 *   9.  Recap: Now you can (section 8)
 *  10.  Bridge to chapter 04
 */

import { rail, railDone, footer } from '../../shared/components.js';

export const chapterTitle = 'Honestly, Claude Code, ch.03';

function term(isPs, lines, small = false, fill = false) {
  const label = isPs ? 'Windows PowerShell' : 'bash';
  const cmds = lines.map(l =>
    l.out
      ? `<div class="cmd-out">${l.out}</div>`
      : `<div class="cmd${isPs ? ' ps' : ''}">${l.t}</div>`
  ).join('');
  return `
    <div class="term-win" style="margin-top:.1in;${fill ? ' flex:1;' : ''}">
      <img src="../../../assets/terminal-dark-wide.svg" alt="" aria-hidden="true"
           style="position:absolute; inset:0; width:100%; height:100%; display:block;" />
      <div style="position:absolute; z-index:2; top:16.7%; left:0; right:0; transform:translateY(-50%); display:flex; justify-content:center; pointer-events:none;">
        <span style="font-family:'Source Sans 3',sans-serif; font-size:7pt; color:rgba(240,239,232,.4); letter-spacing:.02em;">${label}</span>
      </div>
      <div style="height:.18in;"></div>
      <div style="position:relative; z-index:1; padding:${small ? 'calc(.04in + 18px)' : 'calc(.04in - 3px)'} .12in ${small ? 'calc(.09in + 15px)' : '.09in'};${small ? ' font-size:7.5pt;' : ''}">${cmds}</div>
    </div>`;
}

function claudePrompt(text) {
  return `
    <div style="background:var(--lav-soft); border-radius:8px; padding:.12in .16in; margin-top:.1in;">
      <div style="font-family:'Archivo'; font-weight:800; font-size:6.5pt; letter-spacing:.14em; text-transform:uppercase; color:#7a6680; margin-bottom:.06in;">PASTE THIS INTO CLAUDE</div>
      <div style="font-family:'JetBrains Mono'; font-size:8pt; line-height:1.55; color:var(--ink);">${text}</div>
    </div>`;
}

function pageChapterOpener() {
  return `
    <section class="page">
      <img src="../../../assets/watercolor-gray.png" alt=""
           style="position:absolute; left:-.7in; width:8.2in; top:.6in; height:3.6in; z-index:1; pointer-events:none; mix-blend-mode:multiply; opacity:.92;"/>
      ${rail(1)}
      <img src="../../../assets/stickers/waving-off-no-thanks.png" alt=""
           style="position:absolute; right:-.37in; top:calc(.4in + 10px); width:4.0in; z-index:2; object-fit:contain; pointer-events:none;" />
      <div style="position:absolute; left:.42in; top:1.05in; z-index:3; max-width:2.85in;">
        <div class="eyebrow">CHAPTER 3 <span class="dot-sep">&bull;</span> YOUR FIRST TASK</div>
        <div class="ch-num">03</div>
        <div class="annot ink" style="position:absolute; left:1.5in; top:.42in; transform:rotate(-5deg); font-size:13pt; white-space:nowrap;">&larr; a packing list, specifically</div>
        <div style="display:inline-block;">
          <div class="ch-title" style="position:relative; white-space:nowrap;">Make it do<br/>something.</div>
          <svg viewBox="0 0 220 14" preserveAspectRatio="none" style="display:block; width:2.6in; height:.18in; margin-top:.04in; margin-left:.05in;" aria-hidden="true">
            <path d="M 2 8 Q 28 2 60 6 T 130 5 Q 170 3 218 7" stroke="#d96033" stroke-width="6" stroke-linecap="round" fill="none" opacity=".88"/>
            <path d="M 8 11 Q 50 9 110 10 T 210 11" stroke="#d96033" stroke-width="2" stroke-linecap="round" fill="none" opacity=".55"/>
          </svg>
        </div>
      </div>
      <div class="lb-grid">
        <div class="lb">
          <div class="lb-badge"><div class="ico">&#128296;</div></div>
          <h4>You'll do</h4>
          <ul>
            <li><span class="chk">&#10003;</span>Launch Claude in a folder</li>
            <li><span class="chk">&#10003;</span>Give it a real task</li>
            <li><span class="chk">&#10003;</span>Read, approve, and find the file</li>
          </ul>
        </div>
        <div class="lb b">
          <div class="lb-badge"><div class="ico">&#129488;</div></div>
          <h4>Honest questions</h4>
          <ol>
            <li><span class="num-step">1</span>Is a packing list all it can do?</li>
            <li><span class="num-step">2</span>What if it writes something wrong?</li>
            <li><span class="num-step">3</span>Does the file stay after I exit?</li>
          </ol>
        </div>
      </div>
      ${footer(1, "CH.3 &nbsp;&middot;&nbsp; MAKE IT DO SOMETHING", "/03-make-it-do-something")}
    </section>
  `;
}

function pageWhyBother() {
  return `
    <section class="page">
      ${rail(1)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 1 OF 8</div>
          <div class="section-h" style="margin:.06in 0 .04in;">Why bother making Claude do your <span class="stroke-under">dirty work</span>.</div>
          <div class="annot ink" style="margin:-.04in 0 .35in; font-size:13pt; transform:rotate(-1deg);">(the "oh, it's real" moment.)</div>
          <div class="body" style="max-width:3.4in;">
            <p>You installed Claude Code. Now you'll have it do an actual thing. Not a hello-world, not a placeholder. Something you might actually want.</p>
            <p>This chapter has Claude write you a packing list. Why packing? Because everyone's made one, it needs zero setup, and you'll end up with a real file you can use.</p>
            <p>Until you watch Claude do something useful on your actual computer, the whole thing is theoretical. This is the "oh, it's real" moment.</p>
            <p>It's also the smallest possible demo of the loop: you ask, Claude proposes, you approve, Claude writes. Every more-complex thing in the rest of the book is just this with more sophistication.</p>
          </div>
          <div class="card" style="margin-top:.16in; background:var(--orange); color:#fff; border-radius:10px; padding:.14in .18in; max-width:3.4in; box-shadow:0 6px 0 -4px rgba(0,0,0,.25);">
            <div style="font-family:'Archivo',sans-serif; font-weight:800; font-size:7.5pt; letter-spacing:.18em; text-transform:uppercase; margin-bottom:.04in;">THE LOOP</div>
            <div style="font-family:'Caveat',cursive; font-size:17pt; line-height:1.05;">You ask. Claude proposes. You approve. Claude writes.</div>
          </div>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128161;</span>IS THIS ALL</div>
            <div>No. A packing list is the smallest useful demo. You'll go bigger in chapter 04 and beyond.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128161;</span>WHAT IF IT'S WRONG</div>
            <div>Read it before you approve. If it's wrong, say so. Claude will fix it. You're the check.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>ALSO HELPFUL</div>
            <div>What .md files are: <span class="xref">section <b>2</b></span></div>
            <div style="margin-top:.04in;">What just happened: <span class="xref">section <b>6</b></span></div>
          </div>
        </div>
      </div>
      ${footer(2, "CH.3 &nbsp;&middot;&nbsp; WHY BOTHER", "/03#why")}
    </section>
  `;
}

function pageAboutMd() {
  const rows = [
    ['Notepad / TextEdit', 'Raw: <span class="mono">#</span> and <span class="mono">-</span> mixed with text. Still readable.'],
    ['VS Code + preview', 'Pretty rendered side by side. Free, easiest path.'],
    ['GitHub (if you upload)', 'Pretty rendered automatically.'],
    ['Obsidian / Bear / Notion', 'Pretty rendered. Pick whichever you use.'],
  ];
  return `
    <section class="page">
      ${rail(2)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 2 OF 8</div>
          <div class="section-h" style="margin:.06in 0 .04in;">First, a word about <span class="mono" style="font-size:.9em;">.md</span> files.</div>
          <div class="annot ink" style="margin:-.04in 0 .35in; font-size:13pt; transform:rotate(-1deg);">(plain text. less scary than they look.)</div>
          <div class="body" style="max-width:3.4in;">
            <p>Claude is about to write a <span class="mono">.md</span> file. If these have ever intimidated you, that's fine. They're just plain text with lightweight formatting: <span class="mono">#</span> for headers, <span class="mono">-</span> for bullets, <span class="mono">**bold**</span> for bold.</p>
            <p>Your default text editor opens it just fine. You'll see the <span class="mono">#</span> and <span class="mono">-</span> characters mixed in. Still readable. For advanced readers: VS Code shows a rendered preview side by side.</p>
          </div>
          <table class="dtable" style="margin-top:.14in;">
            <thead><tr><th>Opened in</th><th>What you see</th></tr></thead>
            <tbody>${rows.map(([e, w]) => `<tr><td>${e}</td><td>${w}</td></tr>`).join('')}</tbody>
          </table>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>PLAIN ENGLISH</div>
            <div><span class="marg-term">markdown</span>: a simple system for adding formatting to plain text. Invented so humans can write formatted docs without HTML.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#10551;</span>RABBIT HOLE</div>
            <div style="font-style:italic;">This entire book is written in Markdown. If you're reading it on GitHub, you're seeing it render right now.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128161;</span>DO YOU NEED VS CODE</div>
            <div>No. Notepad and TextEdit work fine. VS Code just makes it nicer to read.</div>
          </div>
        </div>
      </div>
      ${footer(3, "CH.3 &nbsp;&middot;&nbsp; ABOUT .MD FILES", "/03#md")}
    </section>
  `;
}

function pageOpenTerminal() {
  return `
    <section class="page">
      ${rail(3)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 3 OF 8</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Make the folder.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:18pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">brand new, just for this</div>
        </div>

        <div style="margin-top:.18in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 1 &nbsp;&middot;&nbsp; OPEN YOUR TERMINAL</div>
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:.12in;">
            ${[
              ['MAC', 'Cmd+Space, type Terminal, hit Enter.'],
              ['WINDOWS', 'Windows key, type Terminal, hit Enter.'],
              ['LINUX', 'You already know.'],
            ].map(([os, desc]) => `
              <div style="background:var(--paper-deep); border-radius:8px; padding:.1in .12in;">
                <div class="eyebrow" style="font-size:6.5pt; color:var(--navy); margin-bottom:.05in;">${os}</div>
                <div class="small" style="color:var(--ink-soft);">${desc}</div>
              </div>`).join('')}
          </div>
        </div>

        <div style="margin-top:.22in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 2 &nbsp;&middot;&nbsp; MAKE YOUR FOLDER</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:.18in; align-items:stretch;">
            <div style="display:flex; flex-direction:column; padding-bottom:20px;">
              <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.04in;">MAC / LINUX / WSL</div>
              ${term(false, [
                { t: 'mkdir -p ~/claude-experiments/packing-list' },
              ], true, true)}
            </div>
            <div style="display:flex; flex-direction:column; padding-bottom:20px;">
              <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.04in;">WINDOWS</div>
              ${term(true, [
                { t: 'mkdir ~\\claude-experiments\\packing-list -Force' },
              ], true, true)}
            </div>
          </div>
          <div style="display:flex; gap:.08in; align-items:flex-start; margin-top:.08in;">
            <div style="flex:0 0 auto; font-family:'Caveat'; font-size:18pt; color:var(--orange); line-height:1;">&#8594;</div>
            <div class="small" style="color:var(--ink-soft); padding-top:.03in;">Then enter the folder in the same terminal window:</div>
          </div>
        </div>

        <div style="margin-top:.12in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 3 &nbsp;&middot;&nbsp; ENTER IT</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:.18in; align-items:stretch;">
            <div style="display:flex; flex-direction:column; padding-bottom:20px;">
              <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.04in;">MAC / LINUX / WSL</div>
              ${term(false, [
                { t: 'cd ~/claude-experiments/packing-list' },
              ], true, true)}
            </div>
            <div style="display:flex; flex-direction:column; padding-bottom:20px;">
              <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.04in;">WINDOWS</div>
              ${term(true, [
                { t: 'cd ~\\claude-experiments\\packing-list' },
              ], true, true)}
            </div>
          </div>
          <div style="display:flex; gap:.08in; align-items:flex-start; margin-top:.1in;">
            <div style="flex:0 0 auto; font-family:'Caveat'; font-size:18pt; color:var(--orange); line-height:1;">&#8594;</div>
            <div class="small" style="color:var(--ink-soft); padding-top:.03in;"><span class="mono" style="background:var(--paper-deep); padding:1px 4px; border-radius:3px;">~</span> is your home folder. <span class="mono" style="background:var(--paper-deep); padding:1px 4px; border-radius:3px;">-Force</span> means don't complain if it already exists.</div>
          </div>
        </div>
      </div>
      ${footer(4, "CH.3 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; OPEN TERMINAL", "/03#terminal")}
    </section>
  `;
}

function pageLaunchAndPrompt() {
  return `
    <section class="page">
      ${rail(4)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 4 OF 8</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Launch Claude. Give it a job.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">the actual moment</div>
        </div>

        <div style="margin-top:.18in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 4 &nbsp;&middot;&nbsp; LAUNCH CLAUDE</div>
          ${term(false, [{ t: 'claude' }])}
          <div class="small" style="color:var(--ink-mute); margin-top:.22in;">First time in this folder, Claude asks if you trust it. Pick <strong style="color:var(--ink);">Yes, I trust this folder</strong> and press Enter. One-time check per folder.</div>
        </div>

        <div style="margin-top:.2in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.04in;">STEP 5 &nbsp;&middot;&nbsp; GIVE IT A TASK</div>
          ${claudePrompt('Write me a packing list for a 4-day trip to a warm climate. Essentials only: clothes, toiletries, electronics, paperwork. Save it as packing-list.md in this folder.')}
          <div class="small" style="color:var(--ink-mute); margin-top:.08in;">Change the trip details to something you're actually planning, or keep it as-is. Either way works.</div>
        </div>
      </div>
      ${footer(5, "CH.3 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; LAUNCH AND PROMPT", "/03#launch")}
    </section>
  `;
}

function pageApproveAndFind() {
  return `
    <section class="page">
      ${rail(5)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 5 OF 8</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Say yes. Find the file.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">it actually exists now</div>
        </div>

        <div style="margin-top:.18in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.06in;">STEP 6 &nbsp;&middot;&nbsp; READ AND APPROVE</div>
          <div class="body" style="font-size:9.7pt; max-width:4.6in;">Claude shows you the packing list and asks permission to save it. <strong>Read it.</strong> If something looks off, tell Claude what to fix before approving. When it looks good, approve.</div>
        </div>

        <div style="margin-top:.2in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 7 &nbsp;&middot;&nbsp; FIND IT IN YOUR FILE MANAGER</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:.22in;">
            <div>
              <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.08in;">MAC</div>
              <div class="body" style="font-size:9.5pt;">Open Finder. Press <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">Cmd+Shift+G</span>, paste:</div>
              <div style="font-family:'JetBrains Mono'; font-size:8.5pt; background:var(--paper-deep); padding:.08in .12in; border-radius:6px; margin-top:.08in;">~/claude-experiments/packing-list</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.08in;">WINDOWS</div>
              <div class="body" style="font-size:9.5pt;">Press <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">Win+R</span>, paste:</div>
              <div style="font-family:'JetBrains Mono'; font-size:8.5pt; background:var(--paper-deep); padding:.08in .12in; border-radius:6px; margin-top:.08in;">%USERPROFILE%\claude-experiments\packing-list</div>
            </div>
          </div>
          <div class="small" style="color:var(--ink-mute); margin-top:.1in;">Double-click <span class="mono">packing-list.md</span> to open it. On Windows, click <strong>Open anyway</strong> if it warns about file type. For a prettier view, open it in VS Code.</div>
        </div>

        <div style="margin-top:.16in; display:flex; align-items:center; gap:.1in;">
          <div style="font-family:'Caveat'; font-size:16pt; color:var(--orange);">&#10003;</div>
          <div class="small" style="color:var(--ink-soft);">The file exists. On your disk. You didn't write a line of code.</div>
        </div>
      </div>
      ${footer(6, "CH.3 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; APPROVE AND FIND", "/03#approve")}
    </section>
  `;
}

function pageWhatJustHappened() {
  return `
    <section class="page">
      ${rail(6)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 6 OF 8</div>
          <div class="section-h" style="margin:.06in 0 .04in;">What just <span class="stroke-under">happened</span>.</div>
          <div class="annot ink" style="margin:-.04in 0 .35in; font-size:13pt; transform:rotate(-1deg);">(you just did the whole game.)</div>

          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 8 &nbsp;&middot;&nbsp; EXIT CLAUDE</div>
          ${term(false, [{ t: '/exit' }])}

          <div class="body" style="max-width:3.4in; margin-top:.18in;">
            <p>Five things happened in that sequence:</p>
          </div>
          <div style="display:flex; flex-direction:column; gap:.1in; margin-top:.12in; max-width:3.4in;">
            ${[
              ['Launched Claude in a specific folder', 'Claude can only see and write to the folder you launched from (and subfolders).'],
              ['Gave it a real prompt', 'not a test. An actual thing.'],
              ['It proposed an action (writing a file)', 'and waited for your okay.'],
              ['You approved', 'and it did the thing.'],
              ['The file exists', 'On your disk. Yours to edit, delete, or send.'],
            ].map(([bold, desc], i) => `
              <div style="display:flex; gap:.1in; align-items:flex-start;">
                <div style="flex:0 0 auto; width:.26in; height:.26in; background:var(--orange); border-radius:50%; display:flex; align-items:center; justify-content:center; font-family:'Archivo'; font-weight:800; font-size:8pt; color:#fff;">${i + 1}</div>
                <div class="small" style="color:var(--ink); padding-top:.04in;"><strong>${bold}</strong> ${desc}</div>
              </div>`).join('')}
          </div>
          <div class="body" style="max-width:3.4in; margin-top:.14in;">
            <p>The "ask permission before writing" step is core to how Claude Code works. It's not autonomous. You're always the human in the loop. That's a feature, not a bug.</p>
          </div>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>PLAIN ENGLISH</div>
            <div><span class="marg-term">approve</span>: Claude always shows you what it plans to do before doing it. Your OK is required. This is on purpose.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>NEXT STEP</div>
            <div>Next chapter: give Claude a memory. It's a bigger shift than it sounds.</div>
          </div>
        </div>
      </div>
      ${footer(7, "CH.3 &nbsp;&middot;&nbsp; WHAT JUST HAPPENED", "/03#recap")}
    </section>
  `;
}

function pageTroubleshooting() {
  const rows = [
    ['<span class="mono">claude: command not found</span>', 'The install didn\'t take.', 'Re-run chapter 02 from your OS section.'],
    ['Claude wrote the file in the wrong place', 'You launched from the wrong folder.', 'Run <span class="mono">/exit</span>, then <span class="mono">cd</span> to the right folder and launch again.'],
    ['Claude refused to write', 'A permission setting may be blocking it.', 'Run <span class="mono">/permissions</span> inside Claude to see what\'s allowed.'],
    ['Claude wrote something weird', 'The model is good but not magic.', 'Tell it exactly what to fix. Be specific. It will re-do it.'],
    ['You can\'t find the file', 'Probably in a different folder than you think.', 'Run <span class="mono">pwd</span> in the terminal. That\'s the folder Claude was working in.'],
  ];
  return `
    <section class="page">
      ${rail(7)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">IN CASE OF EMERGENCY &nbsp;&middot;&nbsp; SECTION 7 OF 8</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Did Claude get weird on you?</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">not your fault. let's fix it</div>
        </div>
        <div class="lede" style="font-size:10pt; max-width:4.7in; margin-top:.25in;">It happens. Here's what's probably going on and how to get back on track.</div>
        <table class="dtable" style="margin-top:.18in;">
          <thead>
            <tr><th style="width:1.4in;">Message or symptom</th><th style="width:1.3in;">What it means</th><th>What to do</th></tr>
          </thead>
          <tbody>
            ${rows.map(([s, m, f]) => `<tr><td>${s}</td><td>${m}</td><td>${f}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
      ${footer(8, "CH.3 &nbsp;&middot;&nbsp; IN CASE OF EMERGENCY", "/03#help")}
    </section>
  `;
}

function pageRecap() {
  const items = [
    'Launch Claude in a folder and have it write files there',
    'Read a Claude action proposal and decide whether to approve',
    'Find and use the files Claude creates on your disk',
    'Trust that Claude isn\'t going to do something destructive without asking first',
  ];
  return `
    <section class="page">
      ${railDone(8)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">WHERE YOU ARE &nbsp;&middot;&nbsp; SECTION 8 OF 8</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; margin-top:.04in;">
          <div class="section-h">Now you can.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg);">tl;dr</div>
        </div>
        <div class="recap-grid" style="margin-top:.18in;">
          ${items.map((text, i) => `
            <div class="recap-item">
              <div class="n">${i + 1}</div>
              <div class="small" style="color:var(--ink-soft);"><strong style="color:var(--ink);">${text}</strong></div>
            </div>`).join('')}
        </div>
        <div style="position:absolute; bottom:0; left:0;">
          <div style="font-family:'Caveat'; font-size:16pt; color:var(--ink-soft);">Three chapters down. The next one teaches Claude where it is and what your project is about. A much bigger shift than it sounds.</div>
        </div>
      </div>
      ${footer(9, "CH.3 &nbsp;&middot;&nbsp; NOW YOU CAN", "/03#all")}
    </section>
  `;
}

function pageNext() {
  return `
    <section class="page">
      <img src="../../../assets/orange-watercolor-page-stain-left.png" alt="" aria-hidden="true"
           style="position:absolute; left:0; bottom:0; width:3.2in; z-index:1; pointer-events:none; opacity:.9;" />
      <div class="wash lav" style="right:-.8in; top:-.8in; width:3.2in; height:2.4in; opacity:.55;"></div>

      <div style="position:absolute; left:.42in; right:.42in; top:.6in; bottom:.7in; z-index:2;">
        <div style="display:flex; align-items:center; justify-content:space-between;">
          <div class="eyebrow" style="color:var(--ink-mute);">YOU FINISHED &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 3</div>
          <div style="display:flex; align-items:center; gap:.08in; color:var(--orange); font-family:'Caveat'; font-size:18pt;">
            <span>turn the page</span>
            <span style="font-size:26pt; line-height:1;">&rarr;</span>
          </div>
        </div>

        <div style="margin-top:.16in;">
          <div style="display:flex; align-items:center; gap:.06in;">
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; letter-spacing:.1em; color:var(--ink-soft);">WHERE YOU ARE</div>
            <div style="flex:1; height:8px; background:var(--paper-deep); border-radius:99px; position:relative; overflow:hidden;">
              <div style="position:absolute; left:0; top:0; bottom:0; width:33%; background:var(--orange);"></div>
            </div>
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; color:var(--orange);">3 / 9</div>
          </div>
        </div>

        <div style="margin-top:.2in; background:#fff; border-radius:14px; padding:.18in .22in; box-shadow:0 14px 30px -16px rgba(0,0,0,.25); position:relative;">
          <div style="display:flex; align-items:flex-start; gap:.2in;">
            <div>
              <div class="eyebrow" style="color:var(--orange);">UP NEXT &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 4</div>
              <div style="font-family:'Archivo'; font-weight:900; font-size:46pt; color:var(--orange); line-height:.9; margin:.02in 0;">04</div>
              <div class="ch-title" style="font-size:21pt; line-height:.95;">Give it a brain.</div>
              <div class="lede" style="font-size:9.5pt; max-width:3.1in; margin-top:.08in;">Write a CLAUDE.md that tells Claude what a folder is for. Claude reads it automatically every session.</div>
            </div>
            <div style="margin-left:auto; text-align:center;">
              <div style="width:1.25in; height:1.25in; border-radius:50%; overflow:hidden; display:flex; align-items:center; justify-content:center;">
                <img src="../../../assets/stickers/zen-arm-up.png" alt="" style="width:240%; height:240%; object-fit:contain; display:block;" />
              </div>
              <div style="font-family:'Archivo'; font-weight:800; font-size:7.5pt; letter-spacing:.1em; color:var(--ink-mute); margin-top:.05in;">STARTS NEXT</div>
              <div style="font-family:'Archivo'; font-weight:900; font-size:20pt; color:var(--orange); line-height:.9;">&rarr;</div>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:.12in; margin-top:.14in; padding-top:.12in; border-top:1px dashed var(--rule);">
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">YOU WILL DO</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Write a CLAUDE.md and watch Claude follow it.</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">YOU WILL SEE</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Claude producing work that actually matches your rules.</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">DIFFICULTY</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Same as this one. Less terminal, more thinking.</div>
            </div>
          </div>
        </div>

        <div style="position:absolute; bottom:0; left:0; right:0; display:flex; justify-content:space-between; align-items:flex-end; gap:.2in;">
          <div style="max-width:3in;">
            <div style="font-family:'Caveat'; font-size:18pt; color:var(--ink); line-height:1; white-space:nowrap;">see you on the next page</div>
            <div class="small" style="color:var(--ink-mute); margin-top:.04in;">honestly, <b style="color:var(--ink);">brandon</b>. still not an algorithm</div>
          </div>
          <div style="text-align:center; flex:0 0 auto;">
            <img src="../../../assets/qr/ch04.png" style="width:.9in; height:.9in; display:block;" alt="QR code" />
            <div class="small" style="color:var(--ink-mute); margin-top:.04in; font-family:'JetBrains Mono'; font-size:7pt;">repo &middot; ch.04</div>
          </div>
        </div>
      </div>

      ${footer(10, "UP NEXT &nbsp;&middot;&nbsp; GIVE IT A BRAIN", "/04-give-it-a-brain")}
    </section>
  `;
}

export function renderPages() {
  return [
    pageChapterOpener(),
    pageWhyBother(),
    pageAboutMd(),
    pageOpenTerminal(),
    pageLaunchAndPrompt(),
    pageApproveAndFind(),
    pageWhatJustHappened(),
    pageTroubleshooting(),
    pageRecap(),
    pageNext(),
  ];
}
