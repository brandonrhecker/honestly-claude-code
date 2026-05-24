/*
 * Chapter 05 — "Bolt on a skill"
 *
 * 11 pages:
 *   1.  Chapter opener
 *   2.  Concept: Why bother (section 1 of 9)
 *   3.  Concept: Skills + marketplaces (section 2 of 9)
 *   4.  Setup: Make folder + launch (section 3 of 9)
 *   5.  Setup: Register + install (section 4 of 9)
 *   6.  Setup: Reload + brainstorm (section 5 of 9)
 *   7.  Concept: What just happened (section 6 of 9)
 *   8.  Reference: Where to find more (section 7 of 9)
 *   9.  Setup: How to uninstall (section 8 of 9)
 *  10.  Recap (section 9 of 9)
 *  11.  Bridge to chapter 06
 */

import { rail, railDone, footer } from '../../shared/components.js';

export const chapterTitle = 'Honestly, Claude Code, ch.05';

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
      <img src="../../../assets/stickers/arm-raised-wrench.png" alt=""
           style="position:absolute; right:-.37in; top:.4in; width:4.0in; z-index:2; object-fit:contain; pointer-events:none;" />
      <div style="position:absolute; left:.42in; top:1.05in; z-index:3; max-width:2.85in;">
        <div class="eyebrow">CHAPTER 5 <span class="dot-sep">&bull;</span> POWER-UPS</div>
        <div class="ch-num">05</div>
        <div class="annot ink" style="position:absolute; left:1.5in; top:.42in; transform:rotate(-5deg); font-size:13pt; white-space:nowrap;">&larr; superpowers, specifically</div>
        <div style="display:inline-block;">
          <div class="ch-title" style="position:relative; white-space:nowrap;">Bolt on a<br/>skill.</div>
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
            <li><span class="chk">&#10003;</span>Register a plugin marketplace</li>
            <li><span class="chk">&#10003;</span>Install the superpowers plugin</li>
            <li><span class="chk">&#10003;</span>Use a brainstorming skill on a real problem</li>
          </ul>
        </div>
        <div class="lb b">
          <div class="lb-badge"><div class="ico">&#129488;</div></div>
          <h4>Honest questions</h4>
          <ol>
            <li><span class="num-step">1</span>Is this safe to install?</li>
            <li><span class="num-step">2</span>Do I have to keep it?</li>
            <li><span class="num-step">3</span>What else can I get?</li>
          </ol>
        </div>
      </div>
      ${footer(1, "CH.5 &nbsp;&middot;&nbsp; BOLT ON A SKILL", "/05-bolt-on-a-skill")}
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
          <div class="section-h" style="margin:.06in 0 .04in;">Why bother <span class="stroke-under">bolting on</span> skills.</div>
          <div class="annot ink" style="margin:-.04in 0 .35in; font-size:13pt; transform:rotate(-1deg);">(someone already built this.)</div>
          <div class="body" style="max-width:3.4in;">
            <p>You've installed Claude Code, made it write a file, and taught it about your project.</p>
            <p>This chapter: we'll install superpowers (the #1 community Claude Code plugin, by Jesse Vincent), use its brainstorming skill on a weekend meal-prep routine you'll actually stick with, then we'll uninstall the whole thing. That last part is also a skill worth having.</p>
            <p>You just taught Claude about your project with CLAUDE.md. That's project context. Skills are a different layer: pre-built and reusable workflows that work in ANY project.</p>
          </div>
          <div style="margin-top:.1in; max-width:3.4in; display:flex; flex-direction:column; gap:.06in;">
            ${[
              ['CLAUDE.md', 'what your project is'],
              ['Skills', 'techniques anyone can use'],
              ['Both', 'can be active at once'],
            ].map(([label, desc]) => `
              <div style="display:flex; gap:.1in; align-items:baseline;">
                <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; color:var(--orange); min-width:.8in;">${label}</div>
                <div class="small" style="color:var(--ink-soft);">= ${desc}</div>
              </div>`).join('')}
          </div>
          <div class="body" style="max-width:3.4in; margin-top:.14in;">
            <p>A skill is a pre-built mini-instruction set you install once and trigger with a slash command (<span class="mono">/skill-name</span>). Like keyboard shortcuts for whole multi-step processes.</p>
            <p>The win: when someone smart has already designed how to do something well, you install their work and use it across all your projects.</p>
          </div>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128161;</span>IS THIS SAFE</div>
            <div>Plugins run inside Claude Code. They can't access your machine, install software, or phone home. They're just instruction sets.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>ALSO HELPFUL</div>
            <div>How to uninstall: <span class="xref">section <b>8</b></span></div>
            <div style="margin-top:.04in;">What else is out there: <span class="xref">section <b>7</b></span></div>
          </div>
        </div>
      </div>
      ${footer(2, "CH.5 &nbsp;&middot;&nbsp; WHY BOTHER", "/05#why")}
    </section>
  `;
}

function pageSkillsAndMarketplaces() {
  return `
    <section class="page">
      ${rail(2)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 2 OF 9</div>
          <div class="section-h" style="margin:.06in 0 .04in;">First, a word about skills and <span class="stroke-under">marketplaces</span>.</div>
          <div class="annot ink" style="margin:-.04in 0 .35in; font-size:13pt; transform:rotate(-1deg);">(two concepts. then you're done.)</div>

          <div style="display:flex; flex-direction:column; gap:.14in; max-width:3.4in;">
            <div style="background:var(--paper-deep); border-radius:8px; padding:.12in .16in;">
              <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.06in;">MARKETPLACE</div>
              <div class="body" style="font-size:9.5pt;">A place that lists plugins. Usually a GitHub repo. You register a marketplace with Claude Code once, then you can install any plugin it contains.</div>
            </div>
            <div style="background:var(--paper-deep); border-radius:8px; padding:.12in .16in;">
              <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.06in;">PLUGIN</div>
              <div class="body" style="font-size:9.5pt;">A bundle of skills. Some plugins contain a single skill. Many contain a dozen or more bundled together. When you install a plugin, you get all its skills at once.</div>
            </div>
          </div>

          <div style="margin-top:.2in; max-width:3.4in;">
            <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.1in;">THE INSTALL FLOW &nbsp;&middot;&nbsp; EVERY TIME</div>
            <div style="display:flex; flex-direction:column; gap:.08in;">
              ${[
                ['Register the marketplace', '(one time).'],
                ['Install the plugin from it.', ''],
                ['Reload so Claude Code picks up the new skills.', ''],
              ].map(([title, desc], i) => `
                <div style="display:flex; gap:.1in; align-items:flex-start;">
                  <div style="flex:0 0 auto; width:.26in; height:.26in; background:var(--orange); border-radius:50%; display:flex; align-items:center; justify-content:center; font-family:'Archivo'; font-weight:800; font-size:8pt; color:#fff;">${i + 1}</div>
                  <div class="small" style="color:var(--ink); padding-top:.04in;"><strong>${title}</strong> — ${desc}</div>
                </div>`).join('')}
            </div>
          </div>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128161;</span>WHY RELOAD</div>
            <div>Claude Code doesn't scan for new plugins automatically. The reload command tells it to pick up whatever changed.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128161;</span>ONE MARKETPLACE</div>
            <div>You only need to register a marketplace once. After that, you can install any plugin from it anytime.</div>
          </div>
        </div>
      </div>
      ${footer(3, "CH.5 &nbsp;&middot;&nbsp; SKILLS + MARKETPLACES", "/05#model")}
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
          <div class="section-h">Make the folder.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:18pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">same pattern as before</div>
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

        <div style="margin-top:.18in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 2 &nbsp;&middot;&nbsp; MAKE YOUR FOLDER</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:.18in; align-items:stretch;">
            <div style="display:flex; flex-direction:column; padding-bottom:20px;">
              <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.04in;">MAC / LINUX / WSL</div>
              ${term(false, [
                { t: 'mkdir -p ~/claude-experiments/brainstorm' },
              ], true, true)}
            </div>
            <div style="display:flex; flex-direction:column; padding-bottom:20px;">
              <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.04in;">WINDOWS</div>
              ${term(true, [
                { t: 'mkdir ~\\claude-experiments\\brainstorm -Force' },
              ], true, true)}
            </div>
          </div>

          <div class="small" style="color:var(--ink-mute); margin-top:.12in; margin-bottom:.12in;">Then enter the folder in the same terminal window:</div>

          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 3 &nbsp;&middot;&nbsp; ENTER IT</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:.18in; align-items:stretch;">
            <div style="display:flex; flex-direction:column; padding-bottom:20px;">
              <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.04in;">MAC / LINUX / WSL</div>
              ${term(false, [
                { t: 'cd ~/claude-experiments/brainstorm' },
              ], true, true)}
            </div>
            <div style="display:flex; flex-direction:column; padding-bottom:20px;">
              <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.04in;">WINDOWS</div>
              ${term(true, [
                { t: 'cd ~\\claude-experiments\\brainstorm' },
              ], true, true)}
            </div>
          </div>
        </div>

        <div style="margin-top:.18in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 4 &nbsp;&middot;&nbsp; LAUNCH CLAUDE CODE</div>
          ${term(false, [{ t: 'claude' }], false, false)}
          <div class="small" style="color:var(--ink-mute); margin-top:.22in;">First time in this folder, Claude asks if you trust it. Pick <strong style="color:var(--ink);">Yes, I trust this folder</strong> and press Enter.</div>
        </div>
      </div>
      ${footer(4, "CH.5 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; MAKE YOUR FOLDER", "/05#folder")}
    </section>
  `;
}

function pageRegisterAndInstall() {
  return `
    <section class="page">
      ${rail(4)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 4 OF 9</div>
          <div class="section-h">Register it. Install the skill.</div>

        <div style="margin-top:.2in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 4 &nbsp;&middot;&nbsp; REGISTER THE MARKETPLACE</div>
          ${term(false, [{ t: '/plugin marketplace add obra/superpowers' }], false, false)}
          <div class="small" style="color:var(--ink-mute); margin-top:.06in;">Tells Claude Code where to look for plugins. Nothing installs yet.</div>
        </div>

        <div style="margin-top:.18in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 5 &nbsp;&middot;&nbsp; INSTALL SUPERPOWERS</div>
          ${term(false, [{ t: '/plugin install superpowers@superpowers-dev' }], false, false)}
          <div class="small" style="color:var(--ink-mute); margin-top:.06in;">The name became <span class="mono">superpowers-dev</span> — that's what the marketplace declares itself as. Confusing, normal.</div>
        </div>

        <div style="margin-top:.18in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 6 &nbsp;&middot;&nbsp; PICK WHERE TO INSTALL IT</div>
          <div style="background:var(--paper-deep); border-radius:8px; padding:.1in .14in; margin-top:.1in;">
            <div class="small" style="color:var(--ink-mute); margin-bottom:.08in;">Claude Code will ask. Pick the first option:</div>
            <div style="display:flex; flex-direction:column; gap:.07in;">
              <div style="display:flex; align-items:center; gap:.1in;">
                <div style="width:.14in; height:.14in; border-radius:50%; background:var(--orange); flex-shrink:0;"></div>
                <div class="small" style="color:var(--ink);"><strong>Install for you (user scope)</strong> &mdash; available in every folder you launch Claude from &larr; pick this</div>
              </div>
              <div style="display:flex; align-items:center; gap:.1in; opacity:.45;">
                <div style="width:.14in; height:.14in; border-radius:50%; border:1.5px solid var(--rule); flex-shrink:0;"></div>
                <div class="small" style="color:var(--ink-mute);">Install for this project only</div>
              </div>
              <div style="display:flex; align-items:center; gap:.1in; opacity:.45;">
                <div style="width:.14in; height:.14in; border-radius:50%; border:1.5px solid var(--rule); flex-shrink:0;"></div>
                <div class="small" style="color:var(--ink-mute);">Install for teammates (shared via git)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${footer(5, "CH.5 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; REGISTER + INSTALL", "/05#install")}
    </section>
  `;
}

function pageReloadAndBrainstorm() {
  return `
    <section class="page">
      ${rail(5)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 5 OF 9</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Reload. Then brainstorm.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">the actual moment</div>
        </div>

        <div style="margin-top:.2in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 7 &nbsp;&middot;&nbsp; ACTIVATE THE NEW SKILLS</div>
          ${term(false, [{ t: '/reload-plugins' }], false, false)}
          <div class="small" style="color:var(--ink-mute); margin-top:.06in;">Tells Claude Code to pick up the plugin you just installed. Do this after every install.</div>
        </div>

        <div style="margin-top:.18in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.04in;">STEP 8 &nbsp;&middot;&nbsp; INVOKE THE BRAINSTORMING SKILL</div>
          ${claudePrompt('/brainstorming<br/><br/>Help me brainstorm a weekend meal-prep routine I\'ll actually stick with. Ask me 3 clarifying questions max. Then propose one approach in a few bullets. Skip writing a separate design doc.')}
          <div class="small" style="color:var(--ink-mute); margin-top:.08in;">The "3 questions max" guardrail keeps this from turning into a 20-turn conversation. Answer the questions naturally &mdash; your schedule, what you usually eat, what's gone wrong before.</div>
        </div>
      </div>
      ${footer(6, "CH.5 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; RELOAD + BRAINSTORM", "/05#brainstorm")}
    </section>
  `;
}

function pageWhatJustHappened() {
  return `
    <section class="page">
      ${rail(6)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 6 OF 9</div>
          <div class="section-h" style="margin:.06in 0 .04in;">What just <span class="stroke-under">happened</span>.</div>
          <div class="annot ink" style="margin:-.04in 0 .35in; font-size:13pt; transform:rotate(-1deg);">(you installed a superpower.)</div>

          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 9 &nbsp;&middot;&nbsp; EXIT CLAUDE</div>
          ${term(false, [{ t: '/exit' }], false, false)}

          <div style="border-left:3px solid var(--orange); background:var(--paper-deep); border-radius:0 6px 6px 0; padding:.1in .14in; margin-top:.18in; max-width:3.4in;">
            <div style="font-family:'Caveat'; font-size:16pt; line-height:1.2; color:var(--ink);">You just installed someone else's workflow, used it for something in your actual life, and you can uninstall it whenever you want. That's the move.</div>
          </div>

          <div class="body" style="max-width:3.4in; margin-top:.18in;">
            <p>Four things happened in sequence:</p>
          </div>
          <div style="display:flex; flex-direction:column; gap:.1in; margin-top:.1in; max-width:3.4in;">
            ${[
              ['You registered a marketplace', 'Claude Code now knows where Jesse Vincent\'s plugins live.'],
              ['You installed superpowers', '~20 skills became available: brainstorming, debugging, TDD, and more.'],
              ['You reloaded', 'activated the new skills without restarting your session.'],
              ['You invoked a skill', 'with a scoped prompt to keep it short. The skill walked you through a structured brainstorm.'],
            ].map(([bold, desc], i) => `
              <div style="display:flex; gap:.1in; align-items:flex-start;">
                <div style="flex:0 0 auto; width:.26in; height:.26in; background:var(--orange); border-radius:50%; display:flex; align-items:center; justify-content:center; font-family:'Archivo'; font-weight:800; font-size:8pt; color:#fff;">${i + 1}</div>
                <div class="small" style="color:var(--ink); padding-top:.04in;"><strong>${bold}</strong> — ${desc}</div>
              </div>`).join('')}
          </div>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>PLAIN ENGLISH</div>
            <div><span class="marg-term">invoke</span>: to call a skill by typing its slash command. Same idea as running a function — you trigger a pre-written workflow.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>THE PATTERN</div>
            <div>Register marketplace &rarr; install plugin &rarr; reload &rarr; invoke. Same flow every time, any plugin.</div>
          </div>
        </div>
      </div>
      ${footer(7, "CH.5 &nbsp;&middot;&nbsp; WHAT JUST HAPPENED", "/05#recap")}
    </section>
  `;
}

function pageFindMore() {
  const rows = [
    ['<a href="https://github.com/anthropics/claude-plugins-official" style="color:var(--navy);">anthropics/claude-plugins-official</a>', 'Anthropic\'s official marketplace. Usually pre-registered. Browse the <span class="mono">plugins/</span> folder to see the list.'],
    ['<a href="https://github.com/obra/superpowers" style="color:var(--navy);">obra/superpowers</a>', 'The plugin you just installed. Browse the skills inside to see what else came along for the ride.'],
    ['Search GitHub', 'Search for repos containing <span class="mono">.claude-plugin/marketplace.json</span>. The ecosystem is decentralized.'],
  ];
  return `
    <section class="page">
      ${rail(7)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">TANGENT &nbsp;&middot;&nbsp; SECTION 7 OF 9</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Where to find more skills.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">the ecosystem</div>
        </div>
        <div class="lede" style="font-size:10pt; max-width:4.7in; margin-top:.25in;">Now that you know the flow, you can browse what else is out there.</div>

        <table class="dtable" style="margin-top:.18in;">
          <thead><tr><th style="width:1.8in;">Where</th><th>What's there</th></tr></thead>
          <tbody>${rows.map(([w, d]) => `<tr><td>${w}</td><td>${d}</td></tr>`).join('')}</tbody>
        </table>

        <div class="body" style="max-width:4.6in; margin-top:.2in;">
          <p>When you find one worth trying, it's the same flow every time: <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">/plugin marketplace add</span> &rarr; <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">/plugin install</span> &rarr; <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">/reload-plugins</span>.</p>
        </div>

        <div class="sticky tilt-r" style="bottom:.4in; right:.2in;">
          <b>HEADS UP</b>
          third-party plugins<br/>aren't vetted by<br/>Anthropic. use judgment.
        </div>
      </div>
      ${footer(8, "CH.5 &nbsp;&middot;&nbsp; WHERE TO FIND MORE", "/05#more")}
    </section>
  `;
}

function pageUninstall() {
  const troubleRows = [
    ['<span class="mono">/plugin marketplace add</span> says "not found"', 'Repo name is misspelled or doesn\'t exist.', 'Re-paste exactly: <span class="mono">/plugin marketplace add obra/superpowers</span>'],
    ['Install said success but <span class="mono">/brainstorming</span> doesn\'t work', 'You skipped the reload.', 'Run <span class="mono">/reload-plugins</span>'],
    ['Brainstorming won\'t stop asking questions', 'The skill pulls toward thoroughness.', 'Answer them, or say "let\'s wrap up." It\'ll comply.'],
    ['Brainstorming wants to write a design doc', 'The guardrail is a suggestion, not a hard stop.', 'Tell it: "skip the design doc, just summarize in bullets."'],
  ];
  return `
    <section class="page">
      ${rail(8)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">GROUND RULES &nbsp;&middot;&nbsp; SECTION 8 OF 9</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">How to uninstall.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">when you're done</div>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:.18in; margin-top:.18in; align-items:start;">
          <div>
            <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.1in;">OPTION A &nbsp;&middot;&nbsp; REMOVE THE PLUGIN</div>
            <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.06in;">STEP 1</div>
            ${term(false, [{ t: '/plugin uninstall superpowers@superpowers-dev' }], true, false)}
            <div class="small" style="color:var(--ink-mute); margin:.08in 0 .06in;">Then reload:</div>
            <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.06in;">STEP 2</div>
            ${term(false, [{ t: '/reload-plugins' }], true, false)}
            <div class="small" style="color:var(--ink-soft); margin-top:.06in;">Skills gone. Marketplace stays registered.</div>
          </div>
          <div>
            <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.1in;">OPTION B &nbsp;&middot;&nbsp; REMOVE EVERYTHING</div>
            <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.06in;">STEP 1</div>
            ${term(false, [{ t: '/plugin marketplace remove superpowers-dev' }], true, false)}
            <div class="small" style="color:var(--ink-mute); margin:.08in 0 .06in;">Then reload:</div>
            <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.06in;">STEP 2</div>
            ${term(false, [{ t: '/reload-plugins' }], true, false)}
            <div class="small" style="color:var(--ink-soft); margin-top:.06in;">Marketplace and all plugins gone. Total reset.</div>
          </div>
        </div>

        <div class="body" style="max-width:4.6in; margin-top:.16in;">
          <p>This is a normal part of trying new things. Don't keep stuff installed if you don't actually use it.</p>
        </div>

        <div class="lede" style="font-size:10pt; max-width:4.7in; margin-top:.18in;">Install didn't go smoothly? You're not the first. Probably one of these.</div>

        <table class="dtable" style="margin-top:.12in;">
          <thead>
            <tr><th style="width:1.5in;">Symptom</th><th style="width:1.4in;">What it means</th><th>Fix</th></tr>
          </thead>
          <tbody>
            ${troubleRows.map(([s, m, f]) => `<tr><td>${s}</td><td>${m}</td><td>${f}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
      ${footer(9, "CH.5 &nbsp;&middot;&nbsp; HOW TO UNINSTALL", "/05#uninstall")}
    </section>
  `;
}

function pageRecap() {
  const items = [
    'Add any marketplace to Claude Code.',
    'Install plugins from a marketplace.',
    'Invoke skills with <span class="mono">/skill-name</span>.',
    'Uninstall plugins or whole marketplaces cleanly.',
    'Browse the ecosystem to find more skills.',
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
          <div style="font-family:'Caveat'; font-size:16pt; color:var(--ink-soft);">Five chapters down. Next: MCP, the thing that lets Claude talk to other apps you already use.</div>
        </div>
      </div>
      ${footer(10, "CH.5 &nbsp;&middot;&nbsp; NOW YOU CAN", "/05#all")}
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
          <div class="eyebrow" style="color:var(--ink-mute);">YOU FINISHED &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 5</div>
          <div style="display:flex; align-items:center; gap:.08in; color:var(--orange); font-family:'Caveat'; font-size:18pt;">
            <span>turn the page</span>
            <span style="font-size:26pt; line-height:1;">&rarr;</span>
          </div>
        </div>

        <div style="margin-top:.16in;">
          <div style="display:flex; align-items:center; gap:.06in;">
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; letter-spacing:.1em; color:var(--ink-soft);">WHERE YOU ARE</div>
            <div style="flex:1; height:8px; background:var(--paper-deep); border-radius:99px; position:relative; overflow:hidden;">
              <div style="position:absolute; left:0; top:0; bottom:0; width:56%; background:var(--orange);"></div>
            </div>
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; color:var(--orange);">5 / 9</div>
          </div>
        </div>

        <div style="margin-top:.2in; background:#fff; border-radius:14px; padding:.18in .22in; box-shadow:0 14px 30px -16px rgba(0,0,0,.25); position:relative;">
          <div style="display:flex; align-items:flex-start; gap:.2in;">
            <div>
              <div class="eyebrow" style="color:var(--orange);">UP NEXT &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 6</div>
              <div style="font-family:'Archivo'; font-weight:900; font-size:46pt; color:var(--orange); line-height:.9; margin:.02in 0;">06</div>
              <div class="ch-title" style="font-size:21pt; line-height:.95;">Plug it into<br/>your other apps.</div>
              <div class="lede" style="font-size:9.5pt; max-width:3.1in; margin-top:.08in;">Connect Claude to tools you already use. One command installs a real MCP server.</div>
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
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Add an MCP server and use it to pull data from an app you already have.</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">YOU WILL SEE</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Claude reading from a real external source mid-conversation.</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">DIFFICULTY</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">One command. Slightly more moving parts than this chapter.</div>
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
            <div class="small" style="color:var(--ink-mute); margin-top:.04in; font-family:'JetBrains Mono'; font-size:7pt;">repo &middot; ch.06</div>
          </div>
        </div>
      </div>

      ${footer(11, "UP NEXT &nbsp;&middot;&nbsp; PLUG IT INTO YOUR OTHER APPS", "/06-plug-it-in")}
    </section>
  `;
}

export function renderPages() {
  return [
    pageChapterOpener(),
    pageWhyBother(),
    pageSkillsAndMarketplaces(),
    pageMakeFolder(),
    pageRegisterAndInstall(),
    pageReloadAndBrainstorm(),
    pageWhatJustHappened(),
    pageFindMore(),
    pageUninstall(),
    pageRecap(),
    pageNext(),
  ];
}
