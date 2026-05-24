/*
 * Chapter 02 — "Get the damn thing running"
 *
 * 13 pages. Order matches renderPages() at the bottom:
 *   1.  Chapter opener (cover)
 *   2.  Ground rules: will my crappy old laptop handle this?
 *   3.  Ground rules: what it actually costs (pricing table)
 *   4.  Set up your Anthropic account (numbered steps)
 *   5.  What can Claude see on my machine? (fearPage template, trust beat)
 *   6.  Install — Mac
 *   7.  Install — Windows
 *   8.  Install — Linux / WSL
 *   9.  First launch: the three prompts (theme / login / trust)
 *   10. What just happened (debrief + marginalia)
 *   11. In case of emergency (troubleshooting table)
 *   12. Recap (chapter-on-one-page)
 *   13. Bridge to chapter 03
 *
 * This is a PROCEDURAL chapter, unlike ch01's conceptual pages. It introduces
 * three layout modules in styles.css: .steps (numbered steps), .cmd (terminal
 * command blocks), and .dtable (pricing / troubleshooting tables).
 *
 * Voice and lexicon rules: see /CLAUDE.md and feedback_brandon_banned_lexicon
 * memory. Zero em dashes anywhere. Design tokens + class catalog: /DESIGN.md.
 */

import { rail, railDone, footer, fearPage } from '../../shared/components.js';

export const chapterTitle = 'Honestly, Claude Code, ch.02';

/**
 * term(isPs, lines, small=false, fill=false) — renders a terminal
 * window with SVG background. Lines array of {t, out} objects.
 */
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

/**
 * Page 1 — Chapter opener (cover). Mirrors ch01's hero layout: watercolor
 * wash, "02" number, handwritten orange underline, "you are here", a sticker,
 * the KPI row (Difficulty / Time / Value), and two dark knowledge panels.
 */
function pageChapterOpener() {
  return `
    <section class="page">
      <img src="../../../assets/watercolor-gray.png" alt=""
           style="position:absolute; left:-.7in; width:8.2in; top:.6in; height:3.6in; z-index:1; pointer-events:none; mix-blend-mode:multiply; opacity:.92;"/>

      ${rail(1, '', 11)}

      <!-- Sticker: large, right side -->
      <img src="../../../assets/stickers/pointing-or-snake.png" alt=""
           style="position:absolute; right:-.37in; top:.4in; width:4.0in; z-index:2; object-fit:contain; pointer-events:none;" />

      <!-- Chapter title: left side -->
      <div style="position:absolute; left:.42in; top:1.05in; z-index:3; max-width:2.85in;">
        <div class="eyebrow">CHAPTER 2 <span class="dot-sep">&bull;</span> SETUP</div>
        <div class="ch-num">02</div>
        <div class="annot ink" style="position:absolute; left:1.5in; top:.42in; transform:rotate(-5deg); font-size:13pt; white-space:nowrap;">&larr; you are here</div>
        <div style="display:inline-block;">
          <div class="ch-title" style="position:relative; white-space:nowrap;">Get the damn<br/>thing running</div>
          <svg viewBox="0 0 220 14" preserveAspectRatio="none" style="display:block; width:2.6in; height:.18in; margin-top:.04in; margin-left:.05in;" aria-hidden="true">
            <path d="M 2 8 Q 28 2 60 6 T 130 5 Q 170 3 218 7" stroke="#d96033" stroke-width="6" stroke-linecap="round" fill="none" opacity=".88"/>
            <path d="M 8 11 Q 50 9 110 10 T 210 11" stroke="#d96033" stroke-width="2" stroke-linecap="round" fill="none" opacity=".55"/>
          </svg>
        </div>
      </div>

      <div class="lb-grid">
        <div class="lb">
          <div class="lb-badge">
            <div class="ico">&#128296;</div>
          </div>
          <h4>You'll do</h4>
          <ul>
            <li><span class="chk">&#10003;</span>Install Node, then Claude Code</li>
            <li><span class="chk">&#10003;</span>Log in to Anthropic</li>
          </ul>
        </div>
        <div class="lb b">
          <div class="lb-badge">
            <div class="ico">&#129488;</div>
          </div>
          <h4>Honest questions</h4>
          <ol>
            <li><span class="num-step">1</span>Will my old laptop handle it?</li>
            <li><span class="num-step">2</span>What does it actually cost?</li>
            <li><span class="num-step">3</span>What can Claude see?</li>
          </ol>
        </div>
      </div>

      ${footer(1, "CH.2 &nbsp;&middot;&nbsp; GET THE DAMN THING RUNNING", "/02-the-install")}
    </section>
  `;
}

/**
 * Page 2 — "Will my crappy old laptop handle this?"
 * Includes intro paragraph from README (chapter context).
 */
function pageWillMyLaptop() {
  return `
    <section class="page">
      ${rail(1, '', 11)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">GROUND RULES &nbsp;&middot;&nbsp; SECTION 1 OF 11</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Will my crappy old laptop handle this.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">probably, yes</div>
        </div>

        <div class="body" style="font-size:9.7pt; line-height:1.45; max-width:4.7in; margin-top:.25in;">
          <p>You're putting Claude Code on your machine. After this chapter, you type <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">claude</span> into a terminal and the AI answers.</p>
          <p>Probably, yes. Claude Code is a terminal app. The thinking happens on Anthropic's servers, not your computer. Your machine is just the keyboard and screen. If your laptop can run Chrome with a few tabs open without crying, it can run Claude Code.</p>
        </div>

        <div class="eyebrow" style="color:var(--ink-mute); margin-top:.2in;">REALISTIC BAR</div>
        <div style="display:flex; gap:.1in; flex-wrap:wrap; margin-top:.1in;">
          ${['Made in the last ~8 years', 'Mac, Windows 10/11, or Linux', '~2 GB free disk', 'A real internet connection (this is the bottleneck, not your CPU)']
            .map((t) => `<div style="background:var(--paper-deep); border-radius:99px; padding:.04in .14in; font-family:'Source Sans 3'; font-size:8pt; color:var(--ink-soft);"><b style="color:var(--orange);">&#10003;</b>&nbsp; ${t}</div>`)
            .join('')}
        </div>
      </div>
      ${footer(2, "CH.2 &nbsp;&middot;&nbsp; WILL MY LAPTOP HANDLE THIS", "/02#laptop")}
    </section>
  `;
}

/**
 * Page 3 — "What it actually costs"
 */
function pageWhatItCosts() {
  return `
    <section class="page">
      ${rail(2, '', 11)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">GROUND RULES &nbsp;&middot;&nbsp; SECTION 2 OF 11</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">What it actually <span class="stroke-under">costs</span>.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">about \$20/month</div>
        </div>

        <div class="body" style="font-size:9.7pt; line-height:1.45; max-width:4.7in; margin-top:.2in;">
          <p>Anthropic gives you a few options. The honest breakdown:</p>
        </div>

        <table class="dtable" style="margin-top:.08in;">
          <thead>
            <tr><th style="width:.9in;">Plan</th><th style="width:1.1in;">Cost</th><th>What you get</th></tr>
          </thead>
          <tbody>
            <tr><td>Free</td><td>\$0</td><td>Claude on the website only. <b style="color:var(--orange-deep);">No Claude Code.</b></td></tr>
            <tr class="hl"><td>Pro</td><td>~\$20/mo</td><td>Website + Claude Code, light use. Fine for this whole book.</td></tr>
            <tr><td>Max (5&times;)</td><td>~\$100/mo</td><td>When you outgrow Pro and want more headroom.</td></tr>
            <tr><td>Max (20&times;)</td><td>~\$200/mo</td><td>Power-user, daily-driver tier.</td></tr>
            <tr><td>API</td><td>pay-per-token</td><td>Per-call billing. Not the simple path for beginners.</td></tr>
          </tbody>
        </table>

        <div style="display:flex; align-items:center; gap:.14in; margin-top:.16in;">
          <div class="card" style="max-width:3.55in; background:var(--orange); color:#fff; padding:.12in .16in; box-shadow:0 6px 0 -4px rgba(0,0,0,.25);">
            <div style="font-family:'Archivo'; font-weight:800; font-size:7pt; letter-spacing:.16em; text-transform:uppercase;">THE HONEST PICK</div>
            <div style="font-family:'Caveat'; font-size:17pt; line-height:1.05; margin-top:.02in;">Pro, ~\$20/month. About the cost of a streaming subscription.</div>
          </div>
        </div>

        <div class="sticky tilt-r" style="bottom:.39in; right:.34in;">
          <b>CHECK FIRST</b>
          prices shift.<br/>claude.ai/pricing<br/>is the truth.
        </div>
      </div>
      ${footer(3, "CH.2 &nbsp;&middot;&nbsp; WHAT IT ACTUALLY COSTS", "/02#cost")}
    </section>
  `;
}

/**
 * Page 3 — "Set up your Anthropic account"
 * Numbered steps (.steps module). Skip-ahead note up top for readers who
 * already have a paid plan. Marginalia explains the one-account point.
 */
function pageAccount() {
  return `
    <section class="page">
      ${rail(3, '', 11)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 3 OF 11</div>
          <div class="section-h" style="margin:.06in 0 .04in;">Setting up your <span class="stroke-under">Anthropic account</span>.</div>
          <div class="annot ink" style="font-size:12.5pt; margin:-.02in 0 .35in; transform:rotate(-1deg);">(already on Pro or higher? skip to the install.)</div>

          <div class="steps">
            <div class="step">
              <div class="step-n">1</div>
              <div class="step-t">Open <span class="mono">claude.ai</span> in your browser and click <strong>Sign up</strong> (top right).</div>
            </div>
            <div class="step">
              <div class="step-n">2</div>
              <div class="step-t">Sign up with Google for the fastest path, or use email and a password. Verify your email if it asks.</div>
            </div>
            <div class="step">
              <div class="step-n">3</div>
              <div class="step-t">Once you're logged in, click your avatar (top right) &rarr; <strong>Settings</strong> &rarr; <strong>Plans</strong> (or <strong>Billing</strong>).</div>
            </div>
            <div class="step">
              <div class="step-n">4</div>
              <div class="step-t">Pick <strong>Pro</strong>. Add a credit card.</div>
            </div>
            <div class="step">
              <div class="step-n">5</div>
              <div class="step-t">Done. The <strong>same account</strong> works for both the claude.ai chat website and the Claude Code tool you're about to install.</div>
            </div>
          </div>
        </div>

        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>PLAIN ENGLISH</div>
            <div><span class="marg-term">account</span>: one login. It covers the website and the terminal tool both.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128176;</span>HEADS UP</div>
            <div>The <span class="marg-term">Free</span> plan won't run Claude Code. You need Pro or higher.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>ALSO HELPFUL</div>
            <div>What it costs: <span class="xref">section <b>1</b></span></div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#10551;</span>NO PANIC</div>
            <div style="font-style:italic;">You can cancel any time. Chapter 8 covers pulling the plug, billing included.</div>
          </div>
        </div>
      </div>
      ${footer(4, "CH.2 &nbsp;&middot;&nbsp; SET UP YOUR ACCOUNT", "/02#account")}
    </section>
  `;
}

/**
 * Page 4 — "What can Claude see on my machine?" (the trust beat)
 * Reuses the ch01 fearPage() template so the honest-anxiety pages look the
 * same across chapters. Cross-references chapter 09's long version.
 */
function pageWhatItCanSee() {
  return fearPage({
    pageNum: 5,
    sectionIndex: 4,
    eyebrow: 'BEFORE YOU INSTALL &nbsp;&middot;&nbsp; SECTION 4 OF 11',
    question: `What can Claude <em>see</em> on my machine?`,
    body: `
      <p>Short version: only the folder you launch it from. When you type <span class="mono" style="background:#fff; padding:0 4px; border-radius:3px; border:1px solid var(--rule);">claude</span> inside, say, your novel folder, that folder and its subfolders are Claude's whole world for that session. It can read those files, edit them, and run commands inside.</p>
      <p>It <strong>cannot</strong> see your other folders, touch other apps, or rummage through your hard drive on its own.</p>
    `,
    tldr: 'It sees the folder you start it in. Nothing above it, nothing beside it.',
    xrefLabel: 'MORE IN CHAPTER 09',
    xrefTitle: `<em>Is my data safe?</em> The long version.`,
    stickyBody: '<b>ONE FOLDER</b>think of it as<br/>a sandbox. that\'s<br/>the whole rule.',
    footerCrumb: "CH.2 &nbsp;&middot;&nbsp; BEFORE YOU INSTALL &nbsp;&rsaquo;&nbsp; WHAT IT CAN SEE",
    footerSlug: '/02#trust',
    railTotal: 11,
  });
}

/**
 * installPage(opts) — Shared renderer for the three OS install pages (Mac /
 * Windows / Linux). Each takes a list of step objects ({ t, cmds, out }) and
 * an optional intro note. Uses the term() function for all terminals.
 */
function installPage({ pageNum, sectionIndex, osLabel, tagline, note, steps, footerCrumb, footerSlug }) {
  const isPs = steps.some((s) => (s.cmds || []).some((c) => c.ps));

  const stepHtml = steps
    .map((s, i) => {
      const hasCmds = s.cmds && s.cmds.length > 0;
      const cmdLines = hasCmds
        ? s.cmds.map((c) => ({ t: c.text, ps: c.ps }))
        : [];
      const outLine = s.out ? { out: s.out } : null;
      const allLines = [...cmdLines, ...(outLine ? [outLine] : [])];
      const termHtml = hasCmds
        ? term(isPs, allLines, true, false)
        : '';
      return `
        <div class="step">
          <div class="step-n">${i + 1}</div>
          <div class="step-t">${s.t}</div>
          ${termHtml}
        </div>`;
    })
    .join('');
  const noteHtml = note
    ? `<div class="card" style="background:var(--lav-soft); padding:.06in .12in; margin-top:.04in;">
         <div class="small" style="color:var(--ink-soft);">${note}</div>
       </div>`
    : '';
  const stepsMarginTop = note ? '.18in' : '.32in';
  return `
    <section class="page">
      ${rail(sectionIndex, '', 11)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2; display:flex; flex-direction:column;">
        <div class="eyebrow" style="color:var(--ink-mute);">INSTALL &nbsp;&middot;&nbsp; SECTION ${sectionIndex} OF 11</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Install on <span class="stroke-under">${osLabel}</span>.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:18pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">${tagline}</div>
        </div>
        ${noteHtml}
        <div class="steps" style="margin-top:${stepsMarginTop};">
          ${stepHtml}
        </div>
      </div>
      ${footer(pageNum, footerCrumb, footerSlug)}
    </section>
  `;
}

/** Page 5 — Install on Mac. */
function pageInstallMac() {
  return installPage({
    pageNum: 6,
    sectionIndex: 5,
    osLabel: 'Mac',
    tagline: 'five steps',
    steps: [
      { t: `Open <strong>Terminal</strong>: press <span class="mono">Cmd+Space</span>, type <span class="mono">Terminal</span>, hit Enter.` },
      {
        t: `Install Node with NVM (a tool that installs Node for you). Paste this, then <strong>close the Terminal completely and reopen it</strong>.`,
        cmds: [{ text: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash` }],
      },
      { t: `Install the latest Node:`, cmds: [{ text: `nvm install --lts` }] },
      {
        t: `Install Claude Code. The <span class="mono">-g</span> flag means "global", so it works from any folder.`,
        cmds: [{ text: `npm install -g @anthropic-ai/claude-code` }],
      },
      {
        t: `Confirm it landed, then launch. First launch shows three prompts. <strong>Turn to page 8.</strong>`,
        cmds: [{ text: `claude --version` }, { text: `claude` }],
        out: `expect something like <b>2.1.138 (Claude Code)</b>`,
      },
    ],
    footerCrumb: "CH.2 &nbsp;&middot;&nbsp; INSTALL &nbsp;&rsaquo;&nbsp; MAC",
    footerSlug: '/02#mac',
  });
}

/** Page 6 — Install on Windows. */
function pageInstallWindows() {
  return installPage({
    pageNum: 7,
    sectionIndex: 6,
    osLabel: 'Windows',
    tagline: 'five steps',
    steps: [
      { t: `Open your browser, go to <span class="mono">nodejs.org</span>, and click the big green <strong>Get Node.js</strong> button. When the file downloads, open it and click <strong>Next</strong> through every screen without changing anything, then <strong>Install</strong>.` },
      { t: `Open <strong>Windows Terminal</strong>: press the <span class="mono">Windows</span> key, type <span class="mono">Terminal</span>, hit Enter. A dark window opens. Keep it open.` },
      {
        t: `Windows blocks scripts by default. Allow your own user to run them (one-time, standard dev setup). When it asks "Are you sure?", type <span class="mono">Y</span>.`,
        cmds: [{ text: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`, ps: true }],
      },
      {
        t: `Install Claude Code. The <span class="mono">-g</span> flag means "global", so it works from any folder.`,
        cmds: [{ text: `npm install -g @anthropic-ai/claude-code`, ps: true }],
      },
      {
        t: `Confirm, then launch. First launch shows three prompts. <strong>Turn to page 8.</strong>`,
        cmds: [{ text: `claude --version`, ps: true }, { text: `claude`, ps: true }],
      },
    ],
    footerCrumb: "CH.2 &nbsp;&middot;&nbsp; INSTALL &nbsp;&rsaquo;&nbsp; WINDOWS",
    footerSlug: '/02#windows',
  });
}

/** Page 7 — Install on Linux / WSL. */
function pageInstallLinux() {
  return installPage({
    pageNum: 8,
    sectionIndex: 7,
    osLabel: 'Linux',
    tagline: 'or WSL',
    note: `On <strong>WSL</strong>? Follow this section, not the Windows one. And the browser login won't auto-open, so you'll copy the URL and code by hand.`,
    steps: [
      {
        t: `Check if you already have Node. If it prints <span class="mono">v18</span> or higher, skip to step 3.`,
        cmds: [{ text: `node --version` }],
      },
      {
        t: `No Node? Install via NVM. <strong>Do not</strong> <span class="mono">sudo apt install npm</span> on Ubuntu, it's outdated and breaks Claude. Close and reopen the terminal between the two commands.`,
        cmds: [{ text: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash` }, { text: `nvm install --lts` }],
      },
      { t: `Install Claude Code:`, cmds: [{ text: `npm install -g @anthropic-ai/claude-code` }] },
      {
        t: `Launch. First launch shows three prompts. <strong>See the next page.</strong>`,
        cmds: [{ text: `claude` }],
      },
    ],
    footerCrumb: "CH.2 &nbsp;&middot;&nbsp; INSTALL &nbsp;&rsaquo;&nbsp; LINUX / WSL",
    footerSlug: '/02#linux',
  });
}

/**
 * Page 8 — "First launch: three prompts"
 * The theme/login/trust block, factored out of the per-OS pages so it's shown
 * once. Three numbered cards + the chapter's celebration beat as a sticky.
 */
function pageFirstRun() {
  return `
    <section class="page">
      ${rail(8, '', 11)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">FIRST LAUNCH &nbsp;&middot;&nbsp; SECTION 8 OF 11</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">The three <span class="stroke-under">prompts</span>.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:18pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">same on every OS</div>
        </div>
        <div class="lede" style="font-size:9.5pt; max-width:4.7in; margin-top:.25in;">The very first time you run <span class="mono">claude</span>, it walks you through three quick things. Then you're at the prompt.</div>

        <div class="steps" style="margin-top:.16in;">
          <div class="step">
            <div class="step-n">1</div>
            <div class="step-t"><strong>Pick a text theme.</strong> Arrow keys to highlight, Enter to select. Dark mode (the default) is fine. Change it later with <span class="mono">/theme</span>.</div>
          </div>
          <div class="step">
            <div class="step-n">2</div>
            <div class="step-t"><strong>Log in to Anthropic.</strong> Claude prints a long URL. Copy it into your browser, log in, and the browser shows an authorization code. Copy that code, switch back to the terminal, paste it in, hit Enter.</div>
          </div>
          <div class="step">
            <div class="step-n">3</div>
            <div class="step-t"><strong>Confirm the workspace.</strong> It shows the folder you launched in and asks if you trust it. Select <strong>"Yes, I trust this folder."</strong> This fires the first time you launch in any new folder, because Claude is about to read, edit, and run things there.</div>
          </div>
        </div>

        <div class="sticky tilt-r" style="bottom:.5in; right:.36in; max-width:1.9in;">
          <b>WELCOME</b>
          you're officially<br/>a nerd now. the<br/>hard part's behind you.
        </div>
      </div>
      ${footer(9, "CH.2 &nbsp;&middot;&nbsp; FIRST LAUNCH &nbsp;&rsaquo;&nbsp; THREE PROMPTS", "/02#first-run")}
    </section>
  `;
}

/**
 * Page 9 — "What just happened"
 * Body page with marginalia. Explains the two installs and how to exit a
 * session cleanly. Marginalia defines Node/npm and bridges to chapter 03.
 */
function pageWhatHappened() {
  return `
    <section class="page">
      ${rail(9, '', 11)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">DEBRIEF &nbsp;&middot;&nbsp; SECTION 9 OF 11</div>
          <div class="section-h" style="margin:.06in 0 .04in;">What just <span class="stroke-under">happened</span>.</div>
          <div class="annot ink" style="font-size:12.5pt; margin:-.02in 0 .35in; transform:rotate(-1deg);">(you installed two things, that's it.)</div>
          <div class="body" style="max-width:3.4in; font-size:10pt;">
            <p><strong>Node.js</strong>, the runtime Claude Code is built on. You don't need to understand it, just know it's required.</p>
            <p><strong>Claude Code</strong>, the actual tool. When you first ran <span class="mono">claude</span> it logged you into Anthropic. From now on it remembers you.</p>
            <p>You're in an interactive session now. The prompt is waiting. Don't type yet, that's the next chapter. For now, close it cleanly:</p>
          </div>
          <div class="cmd bare" style="max-width:3.4in; margin-top:.1in;"><span style="color:var(--code-mute);">claude&gt;</span><span>/exit</span></div>
        </div>

        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>PLAIN ENGLISH</div>
            <div><span class="marg-term">Node.js</span>: the engine Claude Code runs on. Install once, forget it.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>PLAIN ENGLISH</div>
            <div><span class="marg-term">npm</span>: came with Node. It's how you installed Claude.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>PLAIN ENGLISH</div>
            <div>A <span class="marg-term">session</span> is one open conversation. <span class="marg-term">/exit</span> ends it.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>UP NEXT</div>
            <div>Make it do something real. <span class="xref">ch. <b>03</b></span></div>
          </div>
        </div>
      </div>
      ${footer(10, "CH.2 &nbsp;&middot;&nbsp; WHAT JUST HAPPENED", "/02#recap")}
    </section>
  `;
}

/**
 * Page 10 — "In case of emergency"
 * Full-width troubleshooting table (.dtable). Varied warm opener up top.
 */
function pageEmergency() {
  return `
    <section class="page">
      ${rail(10, '', 11)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SECTION 10 OF 11</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">In case of <span class="stroke-under">emergency</span>.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:18pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">don't throw the laptop</div>
        </div>
        <div class="lede" style="font-size:9.5pt; max-width:4.7in; margin-top:.25in;">Didn't work? You didn't do anything wrong. We'll get through this together.</div>

        <table class="dtable">
          <thead>
            <tr><th style="width:1.5in;">It says</th><th style="width:1.2in;">What it means</th><th>What to do</th></tr>
          </thead>
          <tbody>
            <tr><td><span class="mono">command not found</span></td><td>Node isn't on your PATH</td><td>Close and reopen the terminal. Still broken? The Node install didn't finish, re-run that step.</td></tr>
            <tr><td><span class="mono">EACCES: denied</span></td><td>npm can't write where it's trying to</td><td>On Mac, use the NVM install above, not Homebrew or the <span class="mono">.pkg</span>. Don't use <span class="mono">sudo</span>.</td></tr>
            <tr><td><span class="mono">scripts is disabled</span> (Win)</td><td>You skipped the script-policy step</td><td>Run the <span class="mono">Set-ExecutionPolicy</span> command (Windows step 3), answer <span class="mono">Y</span>, then retry.</td></tr>
            <tr><td><span class="mono">nvm: command not found</span></td><td>Your shell didn't reload</td><td>Close and reopen the terminal. New shells pick up the nvm config.</td></tr>
            <tr><td>Login spins forever</td><td>Pop-up blocker or the tab failed to open</td><td>Copy the URL the terminal printed and open it manually in a fresh browser tab.</td></tr>
            <tr><td>Anything else</td><td>The internet is a big place</td><td>Paste the exact error into chat at claude.ai: "what does this mean on [your OS]?" Yes, use Claude to debug Claude.</td></tr>
          </tbody>
        </table>
      </div>
      ${footer(11, "CH.2 &nbsp;&middot;&nbsp; IN CASE OF EMERGENCY", "/02#help")}
    </section>
  `;
}

/**
 * Page 11 — Recap. "The whole chapter, on one page."
 * railDone() with a ✓ on the final dot. 2×3 grid of takeaways + lavender
 * one-thing-to-remember card and a QR placeholder.
 */
function pageRecap() {
  return `
    <section class="page">
      ${railDone(11)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div style="display:flex; align-items:baseline; justify-content:space-between;">
          <div>
            <div class="eyebrow" style="color:var(--ink-mute);">WHERE YOU ARE &nbsp;&middot;&nbsp; SECTION 11 OF 11</div>
            <div class="section-h" style="margin:.06in 0 .04in;">Now you <span class="stroke-under">can</span>.</div>
            <div class="annot ink" style="margin:-.04in 0 .2in; font-size:13pt; transform:rotate(-1deg);">(the rest of the book is built on top of this.)</div>
          </div>
          <div style="text-align:right; align-self:flex-start;">
            <div style="font-family:'Caveat'; color:var(--orange); font-size:30pt; line-height:.9;">tl;dr</div>
          </div>
        </div>

        <div class="recap-grid" style="margin-top:.1in;">
          <div class="recap-item">
            <div class="n">1</div>
            <div class="small" style="color:var(--ink-soft);"><strong style="color:var(--ink);">Open a terminal and type <span class="mono">claude</span></strong> to start a session.</div>
          </div>
          <div class="recap-item">
            <div class="n">2</div>
            <div class="small" style="color:var(--ink-soft);"><strong style="color:var(--ink);">See the interactive prompt.</strong></div>
          </div>
          <div class="recap-item">
            <div class="n">3</div>
            <div class="small" style="color:var(--ink-soft);"><strong style="color:var(--ink);">Exit cleanly with <span class="mono">/exit</span>.</strong></div>
          </div>
        </div>

        <div style="margin-top:.2in; display:grid; grid-template-columns:1fr .9in; gap:.18in; align-items:center;">
          <div>
            <div style="font-family:'Caveat'; font-size:20pt; color:var(--orange); line-height:1;">That's the whole install.</div>
            <div class="small" style="color:var(--ink-mute); margin-top:.06in;">The rest of the book is built on top of this.</div>
          </div>
          <div style="text-align:center;">
            <div class="qr"><div class="br"></div></div>
            <div class="small" style="color:var(--ink-mute); margin-top:.05in; font-family:'JetBrains Mono'; font-size:7pt;">scan: ch.02</div>
          </div>
        </div>
      </div>
      ${footer(12, "CH.2 &nbsp;&middot;&nbsp; THE WHOLE THING ON ONE PAGE", "/02#recap")}
    </section>
  `;
}

/**
 * Page 12 — Bridge to chapter 03. "You finished · Chapter 2."
 * Progress bar (2/9), big up-next card with "03" + chapter 3 title +
 * arms-up-yay sticker. Brandon's signature at the bottom.
 */
function pageNext() {
  return `
    <section class="page">
      <img src="../../../assets/orange-watercolor-page-stain-left.png" alt="" aria-hidden="true"
           style="position:absolute; left:0; bottom:0; width:3.2in; z-index:1; pointer-events:none; opacity:.9;" />
      <div class="wash lav" style="right:-.8in; top:-.8in; width:3.2in; height:2.4in; opacity:.55;"></div>

      <div style="position:absolute; left:.42in; right:.42in; top:.6in; bottom:.7in; z-index:2;">
        <div style="display:flex; align-items:center; justify-content:space-between;">
          <div class="eyebrow" style="color:var(--ink-mute);">YOU FINISHED &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 2</div>
          <div style="display:flex; align-items:center; gap:.08in; color:var(--orange); font-family:'Caveat'; font-size:18pt;">
            <span>turn the page</span>
            <span style="font-size:26pt; line-height:1;">&rarr;</span>
          </div>
        </div>

        <div style="margin-top:.16in;">
          <div style="display:flex; align-items:center; gap:.06in;">
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; letter-spacing:.1em; color:var(--ink-soft);">WHERE YOU ARE</div>
            <div style="flex:1; height:8px; background:var(--paper-deep); border-radius:99px; position:relative; overflow:hidden;">
              <div style="position:absolute; left:0; top:0; bottom:0; width:22%; background:var(--orange);"></div>
            </div>
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; color:var(--orange);">2 / 9</div>
          </div>
        </div>

        <div style="margin-top:.2in; background:#fff; border-radius:14px; padding:.18in .22in; box-shadow:0 14px 30px -16px rgba(0,0,0,.25); position:relative;">
          <div style="display:flex; align-items:flex-start; gap:.2in;">
            <div>
              <div class="eyebrow" style="color:var(--orange);">UP NEXT &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 3</div>
              <div style="font-family:'Archivo'; font-weight:900; font-size:46pt; color:var(--orange); line-height:.9; margin:.02in 0;">03</div>
              <div class="ch-title" style="font-size:21pt; line-height:.95;">Make it do<br/>something for you.</div>
              <div class="lede" style="font-size:9.5pt; max-width:3.1in; margin-top:.08in;">
                Your first real task. You point Claude at a folder and it writes you an actual file. No coding.
              </div>
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
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Hand Claude a plain-English task.</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">YOU WILL SEE</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">A real file appear on your machine.</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">DIFFICULTY</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Easier than the install. Promise.</div>
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
            <div class="small" style="color:var(--ink-mute); margin-top:.04in; font-family:'JetBrains Mono'; font-size:7pt;">repo &middot; ch.03</div>
          </div>
        </div>
      </div>

      ${footer(13, "UP NEXT &nbsp;&middot;&nbsp; MAKE IT DO SOMETHING", "/03-make-it-do-something")}
    </section>
  `;
}

export function renderPages() {
  return [
    pageChapterOpener(),
    pageWillMyLaptop(),
    pageWhatItCosts(),
    pageAccount(),
    pageWhatItCanSee(),
    pageInstallMac(),
    pageInstallWindows(),
    pageInstallLinux(),
    pageFirstRun(),
    pageWhatHappened(),
    pageEmergency(),
    pageRecap(),
    pageNext(),
  ];
}
