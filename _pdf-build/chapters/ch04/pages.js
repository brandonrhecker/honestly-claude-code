/*
 * Chapter 04 — "Give it a brain"
 *
 * 11 pages:
 *   1.  Chapter opener
 *   2.  Concept: Why bother (section 1)
 *   3.  Concept: What CLAUDE.md actually is (section 2)
 *   4.  Setup: Make your folder (section 3)
 *   5.  Setup: Launch + write CLAUDE.md (section 4)
 *   6.  Setup: Put it to work (section 5)
 *   7.  Setup: Find your file (section 6)
 *   8.  Concept: What just happened (section 7)
 *   9.  Troubleshooting: In case of emergency (section 8)
 *  10.  Recap: Now you can (section 9)
 *  11.  Bridge to chapter 05
 */

import { rail, railDone, footer } from '../../shared/components.js';

export const chapterTitle = 'Honestly, Claude Code, ch.04';

// Reusable: dark terminal block with SVG chrome
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

// Reusable: "paste this to Claude" prompt block
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
      <img src="../../../assets/stickers/holding-brain.png" alt=""
           style="position:absolute; right:-.37in; top:.4in; width:4.0in; z-index:2; object-fit:contain; pointer-events:none;" />
      <div style="position:absolute; left:.42in; top:1.05in; z-index:3; max-width:2.85in;">
        <div class="eyebrow">CHAPTER 4 <span class="dot-sep">&bull;</span> MEMORY</div>
        <div class="ch-num">04</div>
        <div class="annot ink" style="position:absolute; left:1.5in; top:.42in; transform:rotate(-5deg); font-size:13pt; white-space:nowrap;">&larr; just a text file, actually</div>
        <div style="display:inline-block;">
          <div class="ch-title" style="position:relative; white-space:nowrap;">Give it a<br/>brain.</div>
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
            <li><span class="chk">&#10003;</span>Write your first CLAUDE.md</li>
            <li><span class="chk">&#10003;</span>Give a folder a brain</li>
            <li><span class="chk">&#10003;</span>Watch Claude actually follow your rules</li>
          </ul>
        </div>
        <div class="lb b">
          <div class="lb-badge"><div class="ico">&#129488;</div></div>
          <h4>Honest questions</h4>
          <ol>
            <li><span class="num-step">1</span>Will Claude actually read it?</li>
            <li><span class="num-step">2</span>What should I put in it?</li>
            <li><span class="num-step">3</span>Can I break something with it?</li>
          </ol>
        </div>
      </div>
      ${footer(1, "CH.4 &nbsp;&middot;&nbsp; GIVE IT A BRAIN", "/04-give-it-a-brain")}
    </section>
  `;
}

function pageWhyBother() {
  return `
    <section class="page">
      ${rail(1)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 1 OF 9</div>
          <div class="section-h" style="margin:.06in 0 .04in;">Why bother with <span class="stroke-under">CLAUDE.md</span>.</div>
          <div class="annot ink" style="margin:-.04in 0 .35in; font-size:13pt; transform:rotate(-1deg);">(because repeating yourself forever is not a feature.)</div>
          <div class="body" style="max-width:3.4in;">
            <p>In chapter 03, you launched Claude in a folder and asked for a packing list. It worked, but Claude went in blind. It didn't know what the folder was for, what you preferred, or what rules to follow.</p>
            <p>That's where CLAUDE.md comes in. It's the file you write that tells Claude what the folder is for, who you are, and the rules to follow inside it.</p>
            <p>This chapter: you will create your first CLAUDE.md and watch Claude actually follow it.</p>
          </div>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128161;</span>WITHOUT IT</div>
            <div>Claude forgets everything between sessions. You re-explain the project every time.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128161;</span>WITH IT</div>
            <div>Claude reads the file when you launch. Acts like someone who's been on the project for weeks.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>ALSO HELPFUL</div>
            <div>What to put in it: <span class="xref">section <b>2</b></span></div>
            <div style="margin-top:.04in;">If it breaks: <span class="xref">section <b>8</b></span></div>
          </div>
        </div>
      </div>
      ${footer(2, "CH.4 &nbsp;&middot;&nbsp; WHY BOTHER", "/04#why")}
    </section>
  `;
}

function pageWhatItIs() {
  return `
    <section class="page">
      ${rail(2)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 2 OF 9</div>
          <div class="section-h" style="margin:.06in 0 .04in;">First, a word about <span class="stroke-under">CLAUDE.md</span>.</div>
          <div class="annot ink" style="margin:-.04in 0 .35in; font-size:13pt; transform:rotate(-1deg);">(a text file with a specific name. that's it.)</div>
          <div class="body" style="max-width:3.4in;">
            <p>It's a <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">.md</span> file named <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">CLAUDE.md</span> (uppercase, exactly). Lives in the root of whatever folder you launch Claude from. One per project.</p>
            <p>Claude reads it automatically every time you launch. You don't tell it to. It just does.</p>
            <p>Think of it as the folder's BELIEVE sign. You write it once and every session loads it automatically.</p>
          </div>
          <div class="card" style="margin-top:.14in; background:var(--lav-soft); border-radius:8px; padding:.12in .16in; max-width:3.4in;">
            <div class="card-title" style="margin-bottom:.06in;"><span class="ico">i</span>Plain English</div>
            <div class="small" style="color:var(--ink-soft);">"Root of the folder" means the main folder itself, not a subfolder inside it. If your folder is <span class="mono" style="background:#fff; padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">writing/</span>, CLAUDE.md sits directly inside <span class="mono" style="background:#fff; padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">writing/</span>.</div>
          </div>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>WHAT TO PUT IN IT</div>
            <div>What the project is for. Your preferences. Style rules. Filename formats. Things to never do.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>HOW LONG</div>
            <div>Aim for 200-400 words. Too long and Claude has too much to weigh. Bullet points beat paragraphs.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#10551;</span>RABBIT HOLE</div>
            <div style="font-style:italic;">You're using CLAUDE.md right now. This entire book has one that tells Claude the voice, tone, and banned-word list.</div>
          </div>
        </div>
      </div>
      ${footer(3, "CH.4 &nbsp;&middot;&nbsp; WHAT IT IS", "/04#what")}
    </section>
  `;
}

function pageMakeFolder() {
  return `
    <section class="page">
      ${rail(3)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 3 OF 9</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Make your folder.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">one command</div>
        </div>
        <div class="lede" style="font-size:10pt; max-width:4.7in; margin-top:.25in;">Open your terminal. Pick your OS.</div>

        <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in; margin-top:.16in;">STEP 1 &nbsp;&middot;&nbsp; MAKE YOUR FOLDER</div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:.18in; margin-top:.08in; align-items:stretch;">
          <div style="display:flex; flex-direction:column; padding-bottom:20px;">
            <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.04in;">MAC / LINUX / WSL</div>
            ${term(false, [
              { t: 'mkdir -p ~/claude-experiments/writing' },
            ], true, true)}
          </div>
          <div style="display:flex; flex-direction:column; padding-bottom:20px;">
            <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.04in;">WINDOWS</div>
            ${term(true, [
              { t: 'mkdir ~\\claude-experiments\\writing -Force' },
            ], true, true)}
          </div>
        </div>
        <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in; margin-top:.18in;">STEP 2 &nbsp;&middot;&nbsp; ENTER IT</div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:.18in; align-items:stretch;">
          <div style="display:flex; flex-direction:column; padding-bottom:20px;">
            <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.04in;">MAC / LINUX / WSL</div>
            ${term(false, [
              { t: 'cd ~/claude-experiments/writing' },
            ], true, true)}
          </div>
          <div style="display:flex; flex-direction:column; padding-bottom:20px;">
            <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.04in;">WINDOWS</div>
            ${term(true, [
              { t: 'cd ~\\claude-experiments\\writing' },
            ], true, true)}
          </div>
        </div>

        <div style="margin-top:.22in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 3 &nbsp;&middot;&nbsp; LAUNCH CLAUDE</div>
          ${term(false, [{ t: 'claude' }])}
          <div class="small" style="color:var(--ink-mute); margin-top:.22in;">First time in this folder, Claude asks if you trust it. Pick <strong style="color:var(--ink);">Yes, I trust this folder</strong> and press Enter.</div>
        </div>

        <div class="sticky tilt-r" style="bottom:.5in; right:.3in;">
          <b>REMINDER</b>
          same terminal<br/>from chapter 02.<br/>it's still open.
        </div>
      </div>
      ${footer(4, "CH.4 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; MAKE YOUR FOLDER", "/04#folder")}
    </section>
  `;
}

function pageWriteClaude() {
  return `
    <section class="page">
      ${rail(4)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 4 OF 9</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Ask Claude to write its own brain.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:18pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">yes, really</div>
        </div>
        <div class="lede" style="font-size:10pt; max-width:4.7in; margin-top:.25in;">You're going to ask the AI to write its own instructions. This is not weird. This is the move.</div>

        <div style="margin-top:.18in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.04in;">STEP 4 &nbsp;&middot;&nbsp; PASTE THIS</div>
          ${claudePrompt('Write a CLAUDE.md for this folder. This is where I\'ll keep my personal writing: short essays and journal entries. My writing voice is Ted Lasso: relentlessly warm, folksy wisdom, finds the good in everyone, with occasional mustache-based confidence. Around 400&ndash;600 words per piece. Save each piece as YYYY-MM-DD-slug.md.')}
        </div>

        <div style="margin-top:.18in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.06in;">STEP 5 &nbsp;&middot;&nbsp; APPROVE IT</div>
          <div class="body" style="font-size:9.7pt; max-width:4.6in;">
            <p>Claude will write a CLAUDE.md and ask permission to save it. Read through what it wrote. If it looks reasonable, approve. You can edit it later, it's just a text file.</p>
          </div>
        </div>
      </div>
      ${footer(5, "CH.4 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; WRITE YOUR CLAUDE.MD", "/04#write")}
    </section>
  `;
}

function pagePutToWork() {
  return `
    <section class="page">
      ${rail(5)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 5 OF 9</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Put it to work.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">now Claude knows the rules</div>
        </div>
        <div class="lede" style="font-size:10pt; max-width:4.7in; margin-top:.25in;">Claude just read its own CLAUDE.md. Let's see if it sticks.</div>

        <div style="margin-top:.18in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.04in;">STEP 6 &nbsp;&middot;&nbsp; PASTE THIS</div>
          ${claudePrompt('Write a pep talk for someone who\'s scared to start using AI. Follow the rules in CLAUDE.md.')}
        </div>

        <div style="margin-top:.18in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.06in;">STEP 7 &nbsp;&middot;&nbsp; APPROVE IT</div>
          <div class="body" style="font-size:9.7pt; max-width:4.6in;">
            <p>Claude reads CLAUDE.md, follows the style, keeps the length, and saves the file with the <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">YYYY-MM-DD-slug.md</span> format. Approve when ready.</p>
            <p>If something looks off (wrong length, wrong vibe), open CLAUDE.md in a text editor and tighten the rules. More specific beats more verbose.</p>
          </div>
        </div>

        <div class="sticky" style="bottom:.9in; left:.2in;">
          <b>WHAT TO WATCH</b>
          style matches<br/>Ted Lasso?<br/>filename format right?
        </div>
      </div>
      ${footer(6, "CH.4 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; PUT IT TO WORK", "/04#work")}
    </section>
  `;
}

function pageFindFile() {
  return `
    <section class="page">
      ${rail(6)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 6 OF 9</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Find your file.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">it actually exists now</div>
        </div>
        <div class="lede" style="font-size:10pt; max-width:4.7in; margin-top:.25in;">Step 8: open the folder in your file browser and find the new file.</div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:.22in; margin-top:.2in;">
          <div>
            <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.08in;">MAC</div>
            <div class="body" style="font-size:9.5pt;">Open Finder. Press <span class="mono" style="background:var(--paper-deep); padding:1px 5px; border-radius:3px;">Cmd+Shift+G</span>, paste:</div>
            <div style="font-family:'JetBrains Mono'; font-size:8.5pt; background:var(--paper-deep); padding:.08in .12in; border-radius:6px; margin-top:.08in; color:var(--ink);">~/claude-experiments/writing</div>
            <div class="small" style="color:var(--ink-mute); margin-top:.06in;">Double-click the <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">YYYY-MM-DD-slug.md</span> file to open it in TextEdit.</div>
          </div>
          <div>
            <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.08in;">WINDOWS</div>
            <div class="body" style="font-size:9.5pt;">Press <span class="mono" style="background:var(--paper-deep); padding:1px 5px; border-radius:3px;">Win+R</span>, paste:</div>
            <div style="font-family:'JetBrains Mono'; font-size:8.5pt; background:var(--paper-deep); padding:.08in .12in; border-radius:6px; margin-top:.08in; color:var(--ink);">%USERPROFILE%\claude-experiments\writing</div>
            <div class="small" style="color:var(--ink-mute); margin-top:.06in;">Press Enter. File Explorer opens to the folder. Double-click the file to open it in Notepad.</div>
          </div>
        </div>

        <div style="margin-top:.22in; padding:.12in .16in; background:var(--paper-deep); border-radius:8px;">
          <div class="eyebrow" style="font-size:7pt; color:var(--ink-mute); margin-bottom:.06in;">LINUX / WSL</div>
          <div class="small" style="color:var(--ink-soft);">Run <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">ls ~/claude-experiments/writing</span> to confirm the file is there. Open it with <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">cat FILENAME.md</span> or your text editor of choice.</div>
        </div>

        <div style="margin-top:.16in; display:flex; align-items:center; gap:.1in;">
          <div style="font-family:'Caveat'; font-size:16pt; color:var(--orange);">&#10003;</div>
          <div class="small" style="color:var(--ink-soft);">The file exists. Claude wrote it. You didn't write a line of code to make that happen.</div>
        </div>
      </div>
      ${footer(7, "CH.4 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; FIND YOUR FILE", "/04#file")}
    </section>
  `;
}

function pageWhatJustHappened() {
  return `
    <section class="page">
      ${rail(7)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 7 OF 9</div>
          <div class="section-h" style="margin:.06in 0 .04in;">What just <span class="stroke-under">happened</span>.</div>
          <div class="annot ink" style="margin:-.04in 0 .35in; font-size:13pt; transform:rotate(-1deg);">(you made a folder with a memory.)</div>

          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 9 &nbsp;&middot;&nbsp; EXIT CLAUDE</div>
          ${term(false, [{ t: '/exit' }])}

          <div class="body" style="max-width:3.4in; margin-top:.2in;">
            <p>Here's what actually happened in those 9 steps:</p>
          </div>
          <div style="display:flex; flex-direction:column; gap:.1in; margin-top:.12in; max-width:3.4in;">
            ${[
              ['You created a project-level CLAUDE.md', 'that defines what this folder is for and how Claude behaves inside it.'],
              ['Claude read it automatically', 'when you sent the second prompt. You didn\'t tell it to.'],
              ['It followed the rules', 'the style, the word count, the filename format.'],
              ['This works forever', 'every future session in this folder loads CLAUDE.md automatically.'],
            ].map(([bold, desc], i) => `
              <div style="display:flex; gap:.1in; align-items:flex-start;">
                <div style="flex:0 0 auto; width:.26in; height:.26in; background:var(--orange); border-radius:50%; display:flex; align-items:center; justify-content:center; font-family:'Archivo'; font-weight:800; font-size:8pt; color:#fff;">${i + 1}</div>
                <div class="small" style="color:var(--ink); padding-top:.04in;"><strong>${bold}</strong> ${desc}</div>
              </div>`).join('')}
          </div>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>PLAIN ENGLISH</div>
            <div><span class="marg-term">session</span>: one run of Claude Code, from launch to exit. Each session starts fresh unless CLAUDE.md tells it otherwise.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>NEXT STEP</div>
            <div>You can edit <span class="mono">CLAUDE.md</span> directly any time. Add rules, remove rules, refine the style. Claude picks up the changes next launch.</div>
          </div>
        </div>
      </div>
      ${footer(8, "CH.4 &nbsp;&middot;&nbsp; WHAT JUST HAPPENED", "/04#recap")}
    </section>
  `;
}

function pageTroubleshooting() {
  const rows = [
    ['Claude wrote something that ignores your CLAUDE.md', 'Either the file is misnamed (must be <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">CLAUDE.md</span> exactly, uppercase) or you launched Claude in a different folder', 'Run <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">ls</span> to see the file list. Check that <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">CLAUDE.md</span> is there. Confirm you\'re in the right folder with <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">pwd</span>.'],
    ['You can\'t find CLAUDE.md after creating it', 'Probably saved in the wrong folder', 'Type <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">pwd</span> to see where Claude was working. That\'s where the file is.'],
    ['Claude follows some rules but not others', 'Rules might be ambiguous, contradictory, or buried in long paragraphs', 'Open <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">CLAUDE.md</span> and rewrite the conflicting parts as a bulleted list. Shorter, more specific.'],
    ['CLAUDE.md is too long and Claude seems to ignore parts', 'Lots of context means Claude has more to weigh', 'Trim to the essentials. Aim for 200-400 words.'],
  ];
  return `
    <section class="page">
      ${rail(8)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">IN CASE OF EMERGENCY &nbsp;&middot;&nbsp; SECTION 8 OF 9</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Be a goldfish.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">don't dwell. fix and move on</div>
        </div>
        <div class="lede" style="font-size:10pt; max-width:4.7in; margin-top:.25in;">CLAUDE.md not behaving? Here's what's probably happening and how to fix it.</div>
        <table class="dtable" style="margin-top:.18in;">
          <thead>
            <tr><th style="width:1.4in;">Symptom</th><th style="width:1.4in;">What it means</th><th>What to do</th></tr>
          </thead>
          <tbody>
            ${rows.map(([s, m, f]) => `<tr><td>${s}</td><td>${m}</td><td>${f}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
      ${footer(9, "CH.4 &nbsp;&middot;&nbsp; IN CASE OF EMERGENCY", "/04#help")}
    </section>
  `;
}

function pageRecap() {
  const items = [
    'Create a CLAUDE.md in any folder to define what it\'s for',
    'Have Claude read project context automatically every session',
    'Edit CLAUDE.md to refine rules over time',
    'Know that "Claude doesn\'t remember" is half-true: it doesn\'t remember conversations, but a project\'s CLAUDE.md is forever',
  ];
  return `
    <section class="page">
      ${railDone()}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">WHERE YOU ARE &nbsp;&middot;&nbsp; SECTION 9 OF 9</div>
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
          <div style="font-family:'Caveat'; font-size:16pt; color:var(--ink-soft);">You can do this. Onward. Four chapters down. Next: skills. We'll install someone else's workflow and use it in this same folder.</div>
        </div>
      </div>
      ${footer(10, "CH.4 &nbsp;&middot;&nbsp; NOW YOU CAN", "/04#all")}
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
          <div class="eyebrow" style="color:var(--ink-mute);">YOU FINISHED &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 4</div>
          <div style="display:flex; align-items:center; gap:.08in; color:var(--orange); font-family:'Caveat'; font-size:18pt;">
            <span>turn the page</span>
            <span style="font-size:26pt; line-height:1;">&rarr;</span>
          </div>
        </div>

        <div style="margin-top:.16in;">
          <div style="display:flex; align-items:center; gap:.06in;">
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; letter-spacing:.1em; color:var(--ink-soft);">WHERE YOU ARE</div>
            <div style="flex:1; height:8px; background:var(--paper-deep); border-radius:99px; position:relative; overflow:hidden;">
              <div style="position:absolute; left:0; top:0; bottom:0; width:44%; background:var(--orange);"></div>
            </div>
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; color:var(--orange);">4 / 9</div>
          </div>
        </div>

        <div style="margin-top:.2in; background:#fff; border-radius:14px; padding:.18in .22in; box-shadow:0 14px 30px -16px rgba(0,0,0,.25); position:relative;">
          <div style="display:flex; align-items:flex-start; gap:.2in;">
            <div>
              <div class="eyebrow" style="color:var(--orange);">UP NEXT &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 5</div>
              <div style="font-family:'Archivo'; font-weight:900; font-size:46pt; color:var(--orange); line-height:.9; margin:.02in 0;">05</div>
              <div class="ch-title" style="font-size:21pt; line-height:.95;">Bolt on a skill.</div>
              <div class="lede" style="font-size:9.5pt; max-width:3.1in; margin-top:.08in;">Install someone else's workflow and use it in this same folder. No coding, no config files.</div>
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
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Install a skill and run it on a real task.</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">YOU WILL SEE</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Someone else's workflow running in your folder.</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">DIFFICULTY</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">About the same as this one.</div>
            </div>
          </div>
        </div>

        <div style="position:absolute; bottom:0; left:0; right:0; display:flex; justify-content:space-between; align-items:flex-end; gap:.2in;">
          <div style="max-width:3in;">
            <div style="font-family:'Caveat'; font-size:18pt; color:var(--ink); line-height:1; white-space:nowrap;">see you on the next page</div>
            <div class="small" style="color:var(--ink-mute); margin-top:.04in;">honestly, <b style="color:var(--ink);">brandon</b>. still not an algorithm</div>
          </div>
          <div style="text-align:center; flex:0 0 auto;">
            <img src="../../../assets/qr/ch05.png" style="width:.9in; height:.9in; display:block;" alt="QR code" />
            <div class="small" style="color:var(--ink-mute); margin-top:.04in; font-family:'JetBrains Mono'; font-size:7pt;">repo &middot; ch.05</div>
          </div>
        </div>
      </div>

      ${footer(11, "UP NEXT &nbsp;&middot;&nbsp; BOLT ON A SKILL", "/05-bolt-on-a-skill")}
    </section>
  `;
}

export function renderPages() {
  return [
    pageChapterOpener(),
    pageWhyBother(),
    pageWhatItIs(),
    pageMakeFolder(),
    pageWriteClaude(),
    pagePutToWork(),
    pageFindFile(),
    pageWhatJustHappened(),
    pageTroubleshooting(),
    pageRecap(),
    pageNext(),
  ];
}
