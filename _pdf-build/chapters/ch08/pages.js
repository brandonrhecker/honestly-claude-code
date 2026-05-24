/*
 * Chapter 08 — "Pull the plug"
 *
 * 10 pages:
 *   1.  Chapter opener
 *   2.  Concept: What gets installed (section 1 of 7)
 *   3.  Setup: Mac steps (section 2 of 7)
 *   4.  Setup: Windows steps (section 3 of 7)
 *   5.  Setup: Linux steps (section 4 of 7)
 *   6.  Setup: One last thing — cancel (section 5 of 7)
 *   7.  Concept: What just happened (section 6 of 7)
 *   8.  Ground rules: In case of emergency (section 7 of 7)
 *   9.  Recap
 *  10.  Bridge to chapter 09
 */

import { rail, railDone, footer } from '../../shared/components.js';

export const chapterTitle = 'Honestly, Claude Code, ch.08';

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

function pageChapterOpener() {
  return `
    <section class="page">
      <img src="../../../assets/watercolor-gray.png" alt=""
           style="position:absolute; left:-.7in; width:8.2in; top:.6in; height:3.6in; z-index:1; pointer-events:none; mix-blend-mode:multiply; opacity:.92;"/>
      ${rail(1, '', 7)}
      <img src="../../../assets/stickers/holding-knife.png" alt=""
           style="position:absolute; right:-.37in; top:.4in; width:4.0in; z-index:2; object-fit:contain; pointer-events:none;" />
      <div style="position:absolute; left:.42in; top:1.05in; z-index:3; max-width:2.85in;">
        <div class="eyebrow">CHAPTER 8 <span class="dot-sep">&bull;</span> CLEAN EXIT</div>
        <div class="ch-num">08</div>
        <div class="annot ink" style="position:absolute; left:1.5in; top:.42in; transform:rotate(-5deg); font-size:13pt; white-space:nowrap;">&larr; no hard feelings.</div>
        <div style="display:inline-block;">
          <div class="ch-title" style="position:relative; white-space:nowrap;">Pull the plug.</div>
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
            <li><span class="chk">&#10003;</span>Uninstall the claude command</li>
            <li><span class="chk">&#10003;</span>Remove your ~/.claude/ folder</li>
            <li><span class="chk">&#10003;</span>Clean up demo folders (optional)</li>
            <li><span class="chk">&#10003;</span>Cancel your Anthropic subscription</li>
          </ul>
        </div>
        <div class="lb b">
          <div class="lb-badge"><div class="ico">&#129488;</div></div>
          <h4>Honest questions</h4>

          <ol>
            <li><span class="num-step">1</span>Does uninstalling delete my account?</li>
            <li><span class="num-step">2</span>What happens to my ~/.claude/ data?</li>
            <li><span class="num-step">3</span>Can I reinstall later?</li>
          </ol>
        </div>
      </div>
      ${footer(1, "CH.8 &nbsp;&middot;&nbsp; PULL THE PLUG", "/08-pull-the-plug")}
    </section>
  `;
}

function pageWhatGetsInstalled() {
  return `
    <section class="page">
      ${rail(1, '', 7)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 1 OF 7</div>
          <div class="section-h" style="margin:.06in 0 .04in;">First, a word about <span class="stroke-under">what got installed</span>.</div>
          <div class="annot ink" style="margin:-.04in 0 .35in; font-size:13pt; transform:rotate(-1deg);">(take what you need, skip the rest.)</div>
          <div class="body" style="max-width:3.4in;">
            <p>You tried it. Maybe it's not for you. Maybe you're moving to a new machine and want a clean install. Maybe you're switching tools. Whatever the reason, getting Claude Code off your computer should be as easy as putting it on.</p>
            <p>No hard feelings. This chapter walks you through the full uninstall: the CLI, the configs, the demo folders, the optional supporting stuff. Take what you need, skip what you don't.</p>
            <p>When you went through chapter 02 and the chapters after it, a few things landed on your machine. Removing them one at a time, in order, leaves your machine back at neutral.</p>
          </div>
          <div style="display:flex; flex-direction:column; gap:.1in; margin-top:.14in; max-width:3.4in;">
            ${[
              ['Claude Code itself', 'the <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">claude</span> command, installed via npm.'],
              ['Your <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">~/.claude/</span> folder', 'holds your memory, installed plugins, MCP registrations, skills, and Claude Code settings.'],
              ['Demo folders', '<span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">~/claude-experiments/packing-list/</span>, <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">writing/</span>, <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">brainstorm/</span> from chapters 03-06.'],
              ['Node.js', 'the runtime Claude Code is built on. Only remove this if you didn\'t have it before chapter 02.'],
              ['An Anthropic subscription', 'Pro, Max, or similar. A billing relationship with Anthropic that you cancel separately.'],
            ].map(([title, desc]) => `
              <div style="display:flex; gap:.1in; align-items:flex-start;">
                <div style="flex:0 0 .08in; width:.08in; height:.08in; border-radius:50%; background:var(--orange); margin-top:.05in; flex-shrink:0;"></div>
                <div class="small" style="color:var(--ink);"><strong>${title}</strong>: ${desc}</div>
              </div>`).join('')}
          </div>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128161;</span>THE ORDER</div>
            <div>CLI first, then config folder, then optional cleanup. Do it in this order and you won't miss anything.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>YOUR ACCOUNT</div>
            <div>Uninstalling the CLI does NOT delete your Anthropic account. That's a separate step covered in section 5.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>REINSTALL LATER?</div>
            <div>Yes. Chapter 02 is right where you left it.</div>
          </div>
        </div>
      </div>
      ${footer(2, "CH.8 &nbsp;&middot;&nbsp; WHAT GETS INSTALLED", "/08#installed")}
    </section>
  `;
}

function pageMacSteps() {
  return `
    <section class="page">
      ${rail(2, '', 7)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 2 OF 7</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Mac.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">open Terminal</div>
        </div>

        <div style="margin-top:.12in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 1 &nbsp;&middot;&nbsp; UNINSTALL THE CLI</div>
          ${term(false, [{ t: 'npm uninstall -g @anthropic-ai/claude-code' }])}
        </div>

        <div style="background:var(--paper-deep); border-radius:6px; padding:.09in .12in; margin-top:.08in; max-width:4.4in;">
          <div class="eyebrow" style="font-size:6.8pt; color:var(--navy); margin-bottom:.06in;">IF STEP 1 FAILS ("not installed", "command not found")</div>
          <div class="small" style="color:var(--ink); margin-bottom:.06in;">Skip npm and delete the binary directly:</div>
          ${term(false, [{ t: 'which claude' }, { t: 'rm $(which claude)' }], true)}
        </div>

        <div style="margin-top:.12in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 2 &nbsp;&middot;&nbsp; REMOVE THE CONFIG FOLDER</div>
          ${term(false, [{ t: 'rm -rf ~/.claude' }])}
          <div class="small" style="color:var(--ink-mute); margin-top:.08in; max-width:4.4in;">Wipes memory, installed plugins, MCP registrations, skill files, and settings. No trace left.</div>
        </div>

        <div style="margin-top:.1in; display:grid; grid-template-columns:1fr 1fr; gap:.12in; max-width:4.6in;">
          <div style="background:var(--paper-deep); border-radius:6px; padding:.09in .12in;">
            <div class="eyebrow" style="font-size:6.8pt; color:var(--ink-mute); margin-bottom:.06in; min-height:3em;">OPTIONAL: DEMO FOLDERS</div>
            ${term(false, [{ t: 'rm -rf ~/claude-experiments' }], true)}
          </div>
          <div style="background:var(--paper-deep); border-radius:6px; padding:.09in .12in;">
            <div class="eyebrow" style="font-size:6.8pt; color:var(--ink-mute); margin-bottom:.06in; min-height:3em;">OPTIONAL: REMOVE NVM + NODE</div>
            ${term(false, [{ t: 'nvm uninstall --lts' }, { t: 'rm -rf ~/.nvm' }], true)}
            <div class="small" style="color:var(--ink-mute); margin-top:.06in;">Then open <span class="mono" style="font-size:.8em; background:var(--paper-deep); padding:1px 3px; border-radius:2px; border:1px solid var(--rule);">~/.zshrc</span> and delete the lines that mention nvm.</div>
          </div>
        </div>
      </div>
      ${footer(3, "CH.8 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; MAC", "/08#mac")}
    </section>
  `;
}

function pageWindowsSteps() {
  return `
    <section class="page">
      ${rail(3, '', 7)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 3 OF 7</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Windows.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">open Windows Terminal</div>
        </div>

        <div style="margin-top:.08in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.06in;">STEP 1 &nbsp;&middot;&nbsp; UNINSTALL THE CLI</div>
          ${term(true, [{ t: 'npm uninstall -g @anthropic-ai/claude-code' }])}
          <div class="small" style="color:var(--ink-mute); margin-top:.04in; max-width:4.4in;">If you see an error about running scripts being disabled, use <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">npm.cmd</span> instead:</div>
          ${term(true, [{ t: 'npm.cmd uninstall -g @anthropic-ai/claude-code' }], true)}
        </div>

        <div style="background:var(--paper-deep); border-radius:6px; padding:.06in .12in; margin-top:.05in; max-width:4.4in;">
          <div class="eyebrow" style="font-size:6.8pt; color:var(--navy); margin-bottom:.04in;">IF STEP 1 STILL FAILS</div>
          <div class="small" style="color:var(--ink); margin-bottom:.04in;">Find and delete the binary directly:</div>
          ${term(true, [{ t: 'where claude' }, { t: 'Remove-Item (Get-Command claude).Source' }], true)}
        </div>

        <div style="margin-top:.08in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.06in;">STEP 2 &nbsp;&middot;&nbsp; REMOVE THE CONFIG FOLDER</div>
          ${term(true, [{ t: 'Remove-Item -Recurse -Force $env:USERPROFILE\\.claude' }])}
        </div>

        <div style="margin-top:.08in; display:grid; grid-template-columns:1fr 1fr; gap:.12in; max-width:4.6in;">
          <div style="background:var(--paper-deep); border-radius:6px; padding:.09in .12in;">
            <div class="eyebrow" style="font-size:6.8pt; color:var(--ink-mute); margin-bottom:.06in;">OPTIONAL: DEMO FOLDERS</div>
            ${term(true, [{ t: 'Remove-Item -Recurse -Force $env:USERPROFILE\\claude-experiments' }], true)}
          </div>
          <div style="background:var(--paper-deep); border-radius:6px; padding:.09in .12in;">
            <div class="eyebrow" style="font-size:6.8pt; color:var(--ink-mute); margin-bottom:.06in;">OPTIONAL: REMOVE NODE</div>
            <div class="small" style="color:var(--ink-mute);">Settings &rarr; Apps &rarr; find <strong>Node.js</strong> &rarr; Uninstall. Skip if you use Node elsewhere.</div>
          </div>
        </div>
      </div>
      ${footer(4, "CH.8 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; WINDOWS", "/08#windows")}
    </section>
  `;
}

function pageLinuxSteps() {
  return `
    <section class="page">
      ${rail(4, '', 7)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 4 OF 7</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Linux / WSL.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">open your terminal</div>
        </div>

        <div class="lede" style="font-size:10pt; max-width:4.6in; margin-top:.2in;">If you're on WSL, follow this section, not the Windows one.</div>

        <div style="margin-top:.2in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 1 &nbsp;&middot;&nbsp; UNINSTALL THE CLI</div>
          ${term(false, [{ t: 'npm uninstall -g @anthropic-ai/claude-code' }])}
        </div>

        <div style="background:var(--paper-deep); border-radius:6px; padding:.09in .12in; margin-top:.1in; max-width:4.4in;">
          <div class="eyebrow" style="font-size:6.8pt; color:var(--navy); margin-bottom:.06in;">IF NPM FAILS ("npm: command not found", "not installed")</div>
          <div class="small" style="color:var(--ink); margin-bottom:.06in;">Your terminal might suggest <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">sudo apt install npm</span>. Ignore that. Delete the binary directly instead:</div>
          ${term(false, [{ t: 'rm $(which claude)' }], true)}
        </div>

        <div style="margin-top:.16in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 2 &nbsp;&middot;&nbsp; REMOVE THE CONFIG FOLDER</div>
          ${term(false, [{ t: 'rm -rf ~/.claude' }])}
        </div>

        <div style="margin-top:.14in; display:grid; grid-template-columns:1fr 1fr; gap:.12in; max-width:4.6in;">
          <div style="background:var(--paper-deep); border-radius:6px; padding:.09in .12in;">
            <div class="eyebrow" style="font-size:6.8pt; color:var(--ink-mute); margin-bottom:.06in;">OPTIONAL: DEMO FOLDERS</div>
            ${term(false, [{ t: 'rm -rf ~/claude-experiments' }], true)}
          </div>
          <div style="background:var(--paper-deep); border-radius:6px; padding:.09in .12in;">
            <div class="eyebrow" style="font-size:6.8pt; color:var(--ink-mute); margin-bottom:.06in;">OPTIONAL: REMOVE NODE</div>
            <div class="small" style="color:var(--ink-mute);">Depends on your distro. <span class="mono" style="font-size:.8em; background:var(--paper-deep); padding:1px 3px; border-radius:2px; border:1px solid var(--rule);">apt remove nodejs</span>, <span class="mono" style="font-size:.8em; background:var(--paper-deep); padding:1px 3px; border-radius:2px; border:1px solid var(--rule);">dnf remove nodejs</span>, or <span class="mono" style="font-size:.8em; background:var(--paper-deep); padding:1px 3px; border-radius:2px; border:1px solid var(--rule);">nvm uninstall --lts</span>. Skip if you use Node elsewhere.</div>
          </div>
        </div>
      </div>
      ${footer(5, "CH.8 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; LINUX / WSL", "/08#linux")}
    </section>
  `;
}

function pageCancelSubscription() {
  return `
    <section class="page">
      ${rail(5, '', 7)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 5 OF 7</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">One last thing.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">all OSes</div>
        </div>

        <div class="lede" style="font-size:10pt; max-width:4.6in; margin-top:.25in;">Cancel your Anthropic subscription. This part doesn't happen in the terminal.</div>

        <div style="margin-top:.22in; background:#fff; border-radius:12px; padding:.16in .2in; box-shadow:0 8px 20px -12px rgba(0,0,0,.2);">
          <div class="eyebrow" style="color:var(--navy); margin-bottom:.12in;">THREE STEPS</div>
          <div style="display:flex; flex-direction:column; gap:.12in;">
            ${[
              ['Open', '<span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">https://claude.ai</span> in any browser.'],
              ['Go to', 'your avatar (top right) &rarr; <strong>Settings</strong> &rarr; <strong>Plans</strong>.'],
              ['Cancel', 'or downgrade to free. You won\'t be charged from the next billing cycle.'],
            ].map(([label, desc], i) => `
              <div style="display:flex; gap:.14in; align-items:flex-start;">
                <div style="flex:0 0 auto; width:.26in; height:.26in; background:var(--orange); border-radius:50%; display:flex; align-items:center; justify-content:center; font-family:'Archivo'; font-weight:800; font-size:8pt; color:#fff;">${i + 1}</div>
                <div class="small" style="color:var(--ink); padding-top:.04in;"><strong>${label}:</strong> ${desc}</div>
              </div>`).join('')}
          </div>
        </div>

        <div style="margin-top:.2in; max-width:4.5in;">
          <div style="display:flex; flex-direction:column; gap:.08in;">
            <div style="background:var(--paper-deep); border-radius:6px; padding:.09in .12in;">
              <div class="small" style="color:var(--ink);"><strong>Free claude.ai web chat still works.</strong> You just lose Claude Code access when the current paid period ends.</div>
            </div>
            <div style="background:var(--paper-deep); border-radius:6px; padding:.09in .12in;">
              <div class="small" style="color:var(--ink);"><strong>This does NOT delete your Anthropic account.</strong> If you want to delete the account itself: Settings &rarr; Account &rarr; delete.</div>
            </div>
          </div>
        </div>

        <div style="margin-top:.2in; border-left:3px solid var(--orange); background:var(--paper-deep); border-radius:0 6px 6px 0; padding:.1in .14in; max-width:4.4in;">
          <div style="font-family:'Caveat'; font-size:16pt; line-height:1.2; color:var(--ink);">Done. Your machine is back to its pre-Claude state. No judgment. If you change your mind later, chapter 02 is right where you left it.</div>
        </div>
      </div>
      ${footer(6, "CH.8 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; CANCEL SUBSCRIPTION", "/08#cancel")}
    </section>
  `;
}

function pageWhatJustHappened() {
  return `
    <section class="page">
      ${rail(6, '', 7)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 6 OF 7</div>
          <div class="section-h" style="margin:.06in 0 .04in;">What just <span class="stroke-under">happened</span>.</div>
          <div class="annot ink" style="margin:-.04in 0 .35in; font-size:13pt; transform:rotate(-1deg);">(what you actually removed.)</div>
          <div class="body" style="max-width:3.4in;">
            <p>You removed, in this order:</p>
          </div>
          <div style="display:flex; flex-direction:column; gap:.1in; margin-top:.1in; max-width:3.4in;">
            ${[
              ['The Claude Code CLI', 'The <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">claude</span> command no longer exists on your machine.'],
              ['Your <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">~/.claude/</span> folder', 'Memory, plugins, MCPs, skills, settings. Gone.'],
              ['Demo folders (optional)', 'If you cleaned those up too, your filesystem is back where it was before chapter 02.'],
              ['Your Anthropic subscription (optional)', 'Billing relationship ended. The free claude.ai web chat still works.'],
            ].map(([title, desc], i) => `
              <div style="display:flex; gap:.1in; align-items:flex-start;">
                <div style="flex:0 0 auto; width:.26in; height:.26in; background:var(--orange); border-radius:50%; display:flex; align-items:center; justify-content:center; font-family:'Archivo'; font-weight:800; font-size:8pt; color:#fff;">${i + 1}</div>
                <div class="small" style="color:var(--ink); padding-top:.04in;"><strong>${title}</strong>: ${desc}</div>
              </div>`).join('')}
          </div>
          <div class="body" style="max-width:3.4in; margin-top:.18in;">
            <p>One thing this does NOT do: delete your Anthropic account. If you also want to delete the account, not just the subscription, go to claude.ai &rarr; Settings &rarr; Account &rarr; delete.</p>
          </div>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>WHAT STAYS</div>
            <div>Any files Claude wrote to your other folders. Those aren't tracked by Claude Code and weren't removed. They're just regular files.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>REINSTALL</div>
            <div>Chapter 02 is right where you left it. The whole process takes about ten minutes.</div>
          </div>
        </div>
      </div>
      ${footer(7, "CH.8 &nbsp;&middot;&nbsp; WHAT JUST HAPPENED", "/08#recap")}
    </section>
  `;
}

function pageEmergency() {
  const troubleRows = [
    [
      '<span class="mono" style="font-size:.8em;">claude --version</span> still works after uninstall',
      'Leftover binary somewhere.',
      'Run <span class="mono" style="font-size:.8em;">which claude</span> (Mac/Linux) or <span class="mono" style="font-size:.8em;">where claude</span> (Windows) to find it. Delete the file.',
    ],
    [
      '<span class="mono" style="font-size:.8em;">npm uninstall -g</span> says "not installed"',
      'npm doesn\'t know about it. Different install method.',
      'Use the <span class="mono" style="font-size:.8em;">which claude</span> + <span class="mono" style="font-size:.8em;">rm $(which claude)</span> fallback from step 1.',
    ],
    [
      'Removed <span class="mono" style="font-size:.8em;">~/.claude/</span> but Claude Code is still configured',
      'A project folder has its own <span class="mono" style="font-size:.8em;">.claude/</span> directory.',
      'Delete <span class="mono" style="font-size:.8em;">.claude/</span> from inside that project folder too.',
    ],
    [
      'Anthropic still charged you next month',
      'Cancellation didn\'t go through on their end.',
      'Email Anthropic support. Check Settings &rarr; Plans shows "Free."',
    ],
  ];
  return `
    <section class="page">
      ${rail(7, '', 7)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">GROUND RULES &nbsp;&middot;&nbsp; SECTION 7 OF 7</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">In case of emergency.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">the damn thing won't go away?</div>
        </div>

        <div class="lede" style="font-size:10pt; max-width:4.7in; margin-top:.2in;">Probably one of these.</div>

        <table class="dtable" style="margin-top:.14in;">
          <thead>
            <tr><th style="width:1.5in;">Symptom</th><th style="width:1.3in;">What it means</th><th>Fix</th></tr>
          </thead>
          <tbody>
            ${troubleRows.map(([s, m, f]) => `<tr><td>${s}</td><td>${m}</td><td>${f}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
      ${footer(8, "CH.8 &nbsp;&middot;&nbsp; IN CASE OF EMERGENCY", "/08#emergency")}
    </section>
  `;
}

function pageRecap() {
  const items = [
    'Start completely fresh with chapter 02 if you change your mind',
    'Move on with no clutter left on your machine',
    'Tell people "yeah, you can uninstall it in like 5 commands" with first-hand credibility',
  ];
  return `
    <section class="page">
      ${railDone(7)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">WHERE YOU ARE &nbsp;&middot;&nbsp; SECTION 7 OF 7</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; margin-top:.04in;">
          <div class="section-h">Now you can.</div>
        </div>
        <div class="recap-grid" style="margin-top:.18in;">
          ${items.map((text, i) => `
            <div class="recap-item">
              <div class="n">${i + 1}</div>
              <div class="small" style="color:var(--ink-soft);">${text}</div>
            </div>`).join('')}
        </div>
        <div style="position:absolute; bottom:0; left:0;">
          <div style="font-family:'Caveat'; font-size:16pt; color:var(--ink-soft);">Eight down. One more: the questions you came here with.</div>
        </div>
      </div>
      ${footer(9, "CH.8 &nbsp;&middot;&nbsp; NOW YOU CAN", "/08#all")}
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
          <div class="eyebrow" style="color:var(--ink-mute);">YOU FINISHED &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 8</div>
          <div style="display:flex; align-items:center; gap:.08in; color:var(--orange); font-family:'Caveat'; font-size:18pt;">
            <span>turn the page</span>
            <span style="font-size:26pt; line-height:1;">&rarr;</span>
          </div>
        </div>

        <div style="margin-top:.16in;">
          <div style="display:flex; align-items:center; gap:.06in;">
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; letter-spacing:.1em; color:var(--ink-soft);">WHERE YOU ARE</div>
            <div style="flex:1; height:8px; background:var(--paper-deep); border-radius:99px; position:relative; overflow:hidden;">
              <div style="position:absolute; left:0; top:0; bottom:0; width:89%; background:var(--orange);"></div>
            </div>
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; color:var(--orange);">8 / 9</div>
          </div>
        </div>

        <div style="margin-top:.2in; background:#fff; border-radius:14px; padding:.18in .22in; box-shadow:0 14px 30px -16px rgba(0,0,0,.25); position:relative;">
          <div style="display:flex; align-items:flex-start; gap:.2in;">
            <div>
              <div class="eyebrow" style="color:var(--orange);">UP NEXT &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 9</div>
              <div style="font-family:'Archivo'; font-weight:900; font-size:46pt; color:var(--orange); line-height:.9; margin:.02in 0;">09</div>
              <div class="ch-title" style="font-size:21pt; line-height:.95;">The questions<br/>you came here with.</div>
              <div class="lede" style="font-size:9.5pt; max-width:3.1in; margin-top:.08in;">Is my data safe? Will it replace me? Am I getting dependent? The honest answers, all in one place.</div>
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
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">YOU WILL GET</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Honest answers to the five questions most people are afraid to ask out loud.</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">NO LECTURES</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">No "embrace transformation." Just what's actually true and what it means for you.</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">DIFFICULTY</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">No new commands. Just the honest conversation the book has been building toward.</div>
            </div>
          </div>
        </div>

        <div style="position:absolute; bottom:0; left:0; right:0; display:flex; justify-content:space-between; align-items:flex-end; gap:.2in;">
          <div style="max-width:3in;">
            <div style="font-family:'Caveat'; font-size:18pt; color:var(--ink); line-height:1; white-space:nowrap;">see you on the next page</div>
            <div class="small" style="color:var(--ink-mute); margin-top:.04in;">honestly, <b style="color:var(--ink);">brandon</b>. still not an algorithm</div>
          </div>
          <div style="text-align:center; flex:0 0 auto;">
            <div class="qr"><div class="br"></div></div>
            <div class="small" style="color:var(--ink-mute); margin-top:.04in; font-family:'JetBrains Mono'; font-size:7pt;">repo &middot; ch.09</div>
          </div>
        </div>
      </div>

      ${footer(10, "UP NEXT &nbsp;&middot;&nbsp; QUESTIONS YOU CAME HERE WITH.", "/09-questions-you-came-here-with")}
    </section>
  `;
}

export function renderPages() {
  return [
    pageChapterOpener(),
    pageWhatGetsInstalled(),
    pageMacSteps(),
    pageWindowsSteps(),
    pageLinuxSteps(),
    pageCancelSubscription(),
    pageWhatJustHappened(),
    pageEmergency(),
    pageRecap(),
    pageNext(),
  ];
}
