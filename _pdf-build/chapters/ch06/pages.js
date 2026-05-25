/*
 * Chapter 06 — "Plug it into your other apps"
 *
 * 12 pages:
 *   1.  Chapter opener
 *   2.  Concept: Intro / why bother (section 1 of 9)
 *   3.  Concept: So why bother with MCP (section 2 of 9)
 *   4.  Concept: What is MCP (section 3 of 9)
 *   5.  Setup: Register the MCP (section 4 of 9)
 *   6.  Setup: Launch + verify (section 5 of 9)
 *   7.  Setup: Ask Claude (section 6 of 9)
 *   8.  Concept: What just happened (section 7 of 9)
 *   9.  Tangent: Where to find more MCPs (section 8 of 9)
 *  10.  Ground rules: Remove it + emergency (section 9 of 9)
 *  11.  Recap
 *  12.  Bridge to chapter 07
 */

import { rail, railDone, footer } from '../../shared/components.js';

export const chapterTitle = 'Honestly, Claude Code, ch.06';

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
      ${rail(1, '', 9)}
      <img src="../../../assets/stickers/holding-up-puzzle.png" alt=""
           style="position:absolute; right:-.37in; top:.4in; width:4.0in; z-index:2; object-fit:contain; pointer-events:none;" />
      <div style="position:absolute; left:.42in; top:1.05in; z-index:3; max-width:2.85in;">
        <div class="eyebrow">CHAPTER 6 <span class="dot-sep">&bull;</span> CONNECTIONS</div>
        <div class="ch-num">06</div>
        <div class="annot ink" style="position:absolute; left:1.5in; top:.42in; transform:rotate(-5deg); font-size:13pt; white-space:nowrap;">&larr; your stuff. finally.</div>
        <div style="display:inline-block;">
          <div class="ch-title" style="position:relative; white-space:nowrap;">Plug it into<br/>your other apps.</div>
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
            <li><span class="chk">&#10003;</span>Register the Pocket Casts MCP</li>
            <li><span class="chk">&#10003;</span>Verify it works with /mcp</li>
            <li><span class="chk">&#10003;</span>Ask Claude to find podcast recommendations</li>
          </ul>
        </div>
        <div class="lb b">
          <div class="lb-badge"><div class="ico">&#129488;</div></div>
          <h4>Honest questions</h4>
          <ol>
            <li><span class="num-step">1</span>Is this harder than plugins?</li>
            <li><span class="num-step">2</span>Do I need a Pocket Casts account?</li>
            <li><span class="num-step">3</span>What else can I connect?</li>
          </ol>
        </div>
      </div>
      ${footer(1, "CH.6 &nbsp;&middot;&nbsp; PLUG IT INTO YOUR OTHER APPS", "/06-plug-it-in")}
    </section>
  `;
}

function pageIntro() {
  return `
    <section class="page">
      ${rail(1, '', 9)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 1 OF 9</div>
          <div class="section-h" style="margin:.06in 0 .04in;">Why bother plugging it into <span class="stroke-under">other apps</span>.</div>
          <div class="annot ink" style="margin:-.04in 0 .35in; font-size:13pt; transform:rotate(-1deg);">(one chapter from the finish line.)</div>
          <div class="body" style="max-width:3.4in;">
            <p>You've installed Claude Code, made it write a file, given it project context with CLAUDE.md, and bolted on a skill. Claude already has built-in web tools: it can fetch a URL or search the web on its own.</p>
            <p>What it CAN'T do natively: talk to specific apps and services. Your podcast app, your calendar, your notes app, your inbox. Claude doesn't know how to reach any of those unless you build it a bridge.</p>
            <p>MCP is that bridge.</p>
            <p>This chapter: we'll install the Pocket Casts MCP so Claude can recommend podcasts based on what you're learning. We'll point it at this book's repo URL and ask for episodes that'd help you keep going. Then we'll uninstall.</p>
          </div>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>PLAIN ENGLISH</div>
            <div><span class="marg-term">MCP</span>: Model Context Protocol. The standard for "let an AI assistant talk to outside apps." Anthropic created it. Lots of tools support it now.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>ALSO HELPFUL</div>
            <div>What MCP actually is: <span class="xref">section <b>3</b></span></div>
            <div style="margin-top:.04in;">Where to find more: <span class="xref">section <b>8</b></span></div>
          </div>
        </div>
      </div>
      ${footer(2, "CH.6 &nbsp;&middot;&nbsp; WHY BOTHER", "/06#why")}
    </section>
  `;
}

function pageWhyBother() {
  return `
    <section class="page">
      ${rail(2, '', 9)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 2 OF 9</div>
          <div class="section-h" style="margin:.06in 0 .04in;">So why bother with <span class="stroke-under">MCP</span>.</div>
          <div class="annot ink" style="margin:-.04in 0 .35in; font-size:13pt; transform:rotate(-1deg);">(generic vs. specific.)</div>
          <div class="body" style="max-width:3.4in;">
            <p>Claude can already fetch URLs and search the web with its built-in tools. So why bother with MCP?</p>
            <p>Built-in tools are generic. They know "the web" but not "your podcast app," "your calendar," "your inbox," "your CRM." Those are specific services with their own data and their own way of doing things.</p>
            <p>MCP gives Claude specific connections to specific services. An MCP server is a small program that knows how to translate between Claude and one particular service. Install the Pocket Casts MCP and Claude can search Pocket Casts' catalog. Install the Slack MCP and Claude can read your Slack messages. And so on.</p>
            <p>The win: stop being limited to what Claude was born knowing. Plug it into your stuff.</p>
          </div>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>ALSO HELPFUL</div>
            <div>What MCP actually is: <span class="xref">section <b>3</b></span></div>
            <div style="margin-top:.04in;">Where to find more: <span class="xref">section <b>8</b></span></div>
          </div>
        </div>
      </div>
      ${footer(3, "CH.6 &nbsp;&middot;&nbsp; WHY BOTHER", "/06#why")}
    </section>
  `;
}

function pageWhatIsMCP() {
  return `
    <section class="page">
      ${rail(3, '', 9)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 3 OF 9</div>
          <div class="section-h" style="margin:.06in 0 .04in;">First, a word about <span class="stroke-under">MCP</span>.</div>
          <div class="annot ink" style="margin:-.04in 0 .35in; font-size:13pt; transform:rotate(-1deg);">(three things to know.)</div>

          <div class="body" style="max-width:3.4in;">
            <p>MCP = Model Context Protocol. It's the standard for "let an AI assistant talk to outside apps." Anthropic created it. Lots of tools support it now.</p>
          </div>

          <div style="margin-top:.14in; max-width:3.4in;">
            <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.1in;">THE WAY IT WORKS</div>
            <div style="display:flex; flex-direction:column; gap:.08in;">
              ${[
                ['Someone writes a small program', '(an MCP server) that knows how to talk to one specific thing: an app, a database, a website, whatever.'],
                ['You register that server', 'with <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">claude mcp add</span>. Claude Code now has a bridge to that thing.'],
                ['Claude can reach it', 'from any folder, through natural conversation — not a slash command.'],
              ].map(([title, desc], i) => `
                <div style="display:flex; gap:.1in; align-items:flex-start;">
                  <div style="flex:0 0 auto; width:.26in; height:.26in; background:var(--orange); border-radius:50%; display:flex; align-items:center; justify-content:center; font-family:'Archivo'; font-weight:800; font-size:8pt; color:#fff;">${i + 1}</div>
                  <div class="small" style="color:var(--ink); padding-top:.04in;"><strong>${title}</strong> — ${desc}</div>
                </div>`).join('')}
            </div>
          </div>

          <div style="margin-top:.2in; display:flex; flex-direction:column; gap:.1in; max-width:3.4in;">
            <div class="eyebrow" style="color:var(--ink-mute);">A FEW HONEST NOTES</div>
            ${[
              ['MCPs are more technical to set up than skills.', 'This is the most technical chapter in the book. Take it slow.'],
              ['Many MCPs need an API key or login.', 'Some are open and free. We\'re using a free, no-login one today (Pocket Casts).'],
              ['An MCP only adds the connection.', 'Whether Claude uses it well depends on how you ask.'],
            ].map(([bold, desc]) => `
              <div style="background:var(--paper-deep); border-radius:6px; padding:.09in .12in;">
                <div class="small" style="color:var(--ink);"><strong>${bold}</strong> ${desc}</div>
              </div>`).join('')}
          </div>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>PLAIN ENGLISH</div>
            <div><span class="marg-term">MCP server</span>: a small program that translates between Claude and one specific service. You install the bridge; Claude uses it naturally.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128161;</span>VS. SKILLS</div>
            <div>Skills extend what Claude <em>knows how to do</em>. MCPs extend what Claude can <em>reach</em>. Both are useful. Different jobs.</div>
          </div>
        </div>
      </div>
      ${footer(4, "CH.6 &nbsp;&middot;&nbsp; WHAT IS MCP", "/06#mcp")}
    </section>
  `;
}

function pageRegisterMCP() {
  return `
    <section class="page">
      ${rail(4, '', 9)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 4 OF 9</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Register the Pocket Casts MCP.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:18pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">one command</div>
        </div>

        <div class="lede" style="font-size:10pt; max-width:4.6in; margin-top:.25in;">Open your terminal (same one from chapter 02). Paste this in and press Enter:</div>

        <div style="margin-top:.32in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 1 &nbsp;&middot;&nbsp; REGISTER THE MCP</div>
          ${term(false, [{ t: 'claude mcp add --transport http pocketcasts https://mcp.pocketcasts.com' }], false, false)}
          <div class="small" style="color:var(--ink-mute); margin-top:.1in; max-width:4.4in;">Reads as: "Register an MCP called <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">pocketcasts</span> that lives at <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">https://mcp.pocketcasts.com</span>. Use HTTP transport."</div>
        </div>

        <div style="background:var(--paper-deep); border-radius:8px; padding:.12in .16in; margin-top:.22in; max-width:4.4in;">
          <div class="eyebrow" style="font-size:7pt; color:var(--navy); margin-bottom:.08in;">WHAT'S HAPPENING HERE</div>
          <div style="display:flex; flex-direction:column; gap:.07in;">
            ${[
              ['No API key', 'no signup, no auth. Pocket Casts hosts the MCP for free.'],
              ['Nothing installs locally', 'the MCP just points at their hosted server.'],
              ['Works from any folder', 'registered once, available everywhere you launch Claude.'],
            ].map(([bold, desc]) => `
              <div style="display:flex; gap:.1in; align-items:flex-start;">
                <div style="flex:0 0 .08in; width:.08in; height:.08in; border-radius:50%; background:var(--orange); margin-top:.04in; flex-shrink:0;"></div>
                <div class="small" style="color:var(--ink);"><strong>${bold}</strong> — ${desc}</div>
              </div>`).join('')}
          </div>
        </div>

        <div style="margin-top:.2in;">
          <div class="sticky tilt-r">
            <b>SAME COMMAND</b>
            Mac, Linux,<br/>WSL, Windows —<br/>all the same.
          </div>
        </div>
      </div>
      ${footer(5, "CH.6 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; REGISTER THE MCP", "/06#register")}
    </section>
  `;
}

function pageLaunchAndVerify() {
  return `
    <section class="page">
      ${rail(5, '', 9)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 5 OF 9</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Launch it. Verify it.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">confirm the bridge is up</div>
        </div>

        <div style="margin-top:.2in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 2 &nbsp;&middot;&nbsp; LAUNCH CLAUDE CODE</div>
          ${term(false, [{ t: 'claude' }], false, false)}
          <div class="small" style="color:var(--ink-mute); margin-top:.22in;">First time in this folder, Claude asks if you trust it. Pick <strong style="color:var(--ink);">Yes, I trust this folder</strong> and press Enter.</div>
        </div>

        <div style="margin-top:.22in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 3 &nbsp;&middot;&nbsp; VERIFY THE CONNECTION</div>
          ${term(false, [{ t: '/mcp' }], false, false)}
          <div class="small" style="color:var(--ink-mute); margin-top:.1in; max-width:4.4in;">You should see <strong style="color:var(--ink);">pocketcasts</strong> in the list. Press <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">Esc</span> to exit the MCP view and get back to the chat prompt.</div>
          <div class="small" style="color:var(--ink-mute); margin-top:.08in; max-width:4.4in;">If you don't see <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">pocketcasts</span>, jump to "in case of emergency" on page 10.</div>
        </div>
      </div>
      ${footer(6, "CH.6 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; LAUNCH + VERIFY", "/06#launch")}
    </section>
  `;
}

function pageAskClaude() {
  return `
    <section class="page">
      ${rail(6, '', 9)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">SETUP &nbsp;&middot;&nbsp; SECTION 6 OF 9</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Ask Claude.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">the actual moment</div>
        </div>

        <div style="margin-top:.2in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.04in;">STEP 4 &nbsp;&middot;&nbsp; FETCH THE REPO AND ASK</div>
          ${claudePrompt('Fetch https://github.com/brandonrhecker/honestly-claude-code<br/>and use the Pocket Casts MCP to find 5 podcast episodes that<br/>would help me keep learning about the topics in this book.')}
          <div class="small" style="color:var(--ink-mute); margin-top:.08in; max-width:4.4in;">Yes, the URL is this book's own repo. Meta, but it makes the demo concrete since you already know what's in it. Watch Claude work:</div>
          <div style="display:flex; flex-direction:column; gap:.04in; margin-top:.08in; max-width:4.2in;">
            ${[
              'It uses built-in WebFetch to read the repo.',
              'It pulls out the main topics (Claude Code, AI for non-engineers, learning AI tools, etc.).',
              'It uses the Pocket Casts MCP to search podcasts on those topics.',
              'It returns a list of episodes with titles and where to listen.',
            ].map(t => `
              <div style="display:flex; gap:.1in; align-items:flex-start;">
                <div style="flex:0 0 .08in; width:.08in; height:.08in; border-radius:50%; background:var(--orange); margin-top:.06in; flex-shrink:0;"></div>
                <div class="small" style="color:var(--ink-soft);">${t}</div>
              </div>`).join('')}
          </div>
        </div>

        <div style="margin-top:.18in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">STEP 5 &nbsp;&middot;&nbsp; EXIT CLAUDE</div>
          ${term(false, [{ t: '/exit' }], false, false)}
          <div style="border-left:3px solid var(--orange); background:var(--paper-deep); border-radius:0 6px 6px 0; padding:.1in .14in; margin-top:.18in; max-width:4.4in;">
            <div style="font-family:'Caveat'; font-size:16pt; line-height:1.2; color:var(--ink);">You just had Claude combine its built-in web tools with a brand-new MCP connection to deliver something neither could do alone. That's the actual point of MCP.</div>
          </div>
        </div>
      </div>
      ${footer(7, "CH.6 &nbsp;&middot;&nbsp; SETUP &nbsp;&rsaquo;&nbsp; ASK CLAUDE", "/06#ask")}
    </section>
  `;
}

function pageWhatJustHappened() {
  return `
    <section class="page">
      ${rail(7, '', 9)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 7 OF 9</div>
          <div class="section-h" style="margin:.06in 0 .04in;">What just <span class="stroke-under">happened</span>.</div>
          <div class="annot ink" style="margin:-.04in 0 .35in; font-size:13pt; transform:rotate(-1deg);">(two tools. one prompt.)</div>

          <div class="body" style="max-width:3.4in;">
            <p>You did three things:</p>
          </div>
          <div style="display:flex; flex-direction:column; gap:.1in; margin-top:.1in; max-width:3.4in;">
            ${[
              ['Registered an MCP server', 'with <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">claude mcp add</span>. Claude Code now knows there\'s a bridge to Pocket Casts\' podcast catalog.'],
              ['Verified it', 'with <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">/mcp</span> inside Claude Code.'],
              ['Used two tools together', 'in one prompt: built-in WebFetch (to read the repo) AND the Pocket Casts MCP (to find related episodes).'],
            ].map(([bold, desc], i) => `
              <div style="display:flex; gap:.1in; align-items:flex-start;">
                <div style="flex:0 0 auto; width:.26in; height:.26in; background:var(--orange); border-radius:50%; display:flex; align-items:center; justify-content:center; font-family:'Archivo'; font-weight:800; font-size:8pt; color:#fff;">${i + 1}</div>
                <div class="small" style="color:var(--ink); padding-top:.04in;"><strong>${bold}</strong> — ${desc}</div>
              </div>`).join('')}
          </div>
          <div class="body" style="max-width:3.4in; margin-top:.18in;">
            <p>The pattern for any MCP is the same: register it with <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">claude mcp add</span>, verify with <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">/mcp</span>, then use it through natural conversation. You don't invoke MCPs with slash commands the way you invoke skills. Claude reaches for them when relevant.</p>
            <p>The Pocket Casts MCP we picked is unusually frictionless: free, no auth, hosted by Pocket Casts themselves. Most MCPs need an API key or an account login. That's just the trade. A service that knows about your data needs your permission to read it.</p>
          </div>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>PLAIN ENGLISH</div>
            <div><span class="marg-term">invoke</span>: MCPs aren't invoked by you. You describe what you want. Claude decides whether to reach for the MCP. Different from skills, which you trigger with a slash command.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>THE PATTERN</div>
            <div>Register &rarr; verify with /mcp &rarr; use in conversation. Same flow every time, any MCP.</div>
          </div>
        </div>
      </div>
      ${footer(8, "CH.6 &nbsp;&middot;&nbsp; WHAT JUST HAPPENED", "/06#recap")}
    </section>
  `;
}

function pageFindMore() {
  const rows = [
    ['<a href="https://github.com/modelcontextprotocol/servers" style="color:var(--navy);">modelcontextprotocol/servers</a>', 'Official MCP servers from the protocol team. Fetch, time, weather, filesystem, git, memory, and more.'],
    ['Search GitHub', 'Search for <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">awesome-mcp-servers</span>. Community-maintained lists across many categories.'],
    ['<a href="https://modelcontextprotocol.io" style="color:var(--navy);">modelcontextprotocol.io</a>', 'The official MCP docs.'],
  ];
  return `
    <section class="page">
      ${rail(8, '', 9)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">TANGENT &nbsp;&middot;&nbsp; SECTION 8 OF 9</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Where to find more MCPs.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">the ecosystem</div>
        </div>
        <div class="lede" style="font-size:10pt; max-width:4.7in; margin-top:.25in;">Now that you know the flow, you can browse what else is out there.</div>

        <table class="dtable" style="margin-top:.18in;">
          <thead><tr><th style="width:1.8in;">Where</th><th>What's there</th></tr></thead>
          <tbody>${rows.map(([w, d]) => `<tr><td>${w}</td><td>${d}</td></tr>`).join('')}</tbody>
        </table>

        <div class="body" style="max-width:4.6in; margin-top:.2in;">
          <p>When you install a new MCP, the pattern is the same as today: register the server with <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">claude mcp add</span>, confirm with <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">/mcp</span>, then use it.</p>
        </div>

        <div class="sticky tilt-r" style="bottom:.4in; right:.2in;">
          <b>HEADS UP</b>
          third-party MCPs<br/>aren't vetted by<br/>Anthropic. use judgment.
        </div>
      </div>
      ${footer(9, "CH.6 &nbsp;&middot;&nbsp; WHERE TO FIND MORE", "/06#more")}
    </section>
  `;
}

function pageRemoveAndEmergency() {
  const troubleRows = [
    ['<span class="mono">claude mcp add</span> says it can\'t find <span class="mono">claude</span>', 'Claude Code isn\'t on your PATH.', 'Close and reopen the terminal. Run <span class="mono">claude --version</span> to confirm.'],
    ['<span class="mono">/mcp</span> shows pocketcasts as "failed" or "disconnected"', 'The HTTP endpoint isn\'t responding.', 'Try again in a minute. If still down, <span class="mono">claude mcp remove pocketcasts</span> outside Claude and re-add.'],
    ['Claude says it can\'t find any podcasts', 'Maybe the topic search came up empty.', 'Try a more general topic, or ask Claude to "tell me what topics you extracted from the URL" so you can refine your ask.'],
    ['Claude lists shows but no specific episodes', 'Pocket Casts searches by topic then lists recent episodes from matching shows. Sometimes shows don\'t have recent matches.', 'Ask Claude to "list 3 recent episodes from [show name]" to drill down.'],
    ['You changed your mind', 'Easy.', '<span class="mono">claude mcp remove pocketcasts</span> and you\'re back to neutral.'],
  ];
  return `
    <section class="page">
      ${rail(9, '', 9)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">GROUND RULES &nbsp;&middot;&nbsp; SECTION 9 OF 9</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">How to remove it.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:20pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">and if it gets weird</div>
        </div>

        <div style="margin-top:.2in;">
          <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.08in;">WHEN YOU'RE DONE EXPERIMENTING</div>
          ${term(false, [{ t: 'claude mcp remove pocketcasts' }], false, false)}
          <div class="small" style="color:var(--ink-mute); margin-top:.08in; max-width:4.4in;">Claude Code forgets the MCP. Nothing else changes on your machine. Pocket Casts itself wasn't installed locally; the MCP just pointed at their hosted server. No <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">/reload</span> step, no cleanup. Cleaner than plugins.</div>
        </div>

        <div class="lede" style="font-size:10pt; max-width:4.7in; margin-top:.18in;">Welcome to your first MCP install. Things can go sideways. Probably one of these.</div>

        <table class="dtable" style="margin-top:.12in;">
          <thead>
            <tr><th style="width:1.5in;">Symptom</th><th style="width:1.3in;">What it means</th><th>Fix</th></tr>
          </thead>
          <tbody>
            ${troubleRows.map(([s, m, f]) => `<tr><td>${s}</td><td>${m}</td><td>${f}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
      ${footer(10, "CH.6 &nbsp;&middot;&nbsp; REMOVE + TROUBLESHOOTING", "/06#remove")}
    </section>
  `;
}

function pageRecap() {
  const items = [
    'Register an MCP server with <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">claude mcp add</span>',
    'Confirm it\'s working with <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">/mcp</span>',
    'Use built-in tools and MCPs together in one prompt',
    'Remove MCPs cleanly with <span class="mono" style="font-size:.85em; background:var(--paper-deep); padding:1px 4px; border-radius:3px; border:1px solid var(--rule);">claude mcp remove</span>',
    'Know where to find more MCPs when you need them',
  ];
  return `
    <section class="page">
      ${railDone(9)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">WHERE YOU ARE &nbsp;&middot;&nbsp; SECTION 9 OF 9</div>
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
          <div style="font-family:'Caveat'; font-size:16pt; color:var(--ink-soft);">Six chapters down. One short closing chapter to go.</div>
        </div>
      </div>
      ${footer(11, "CH.6 &nbsp;&middot;&nbsp; NOW YOU CAN", "/06#all")}
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
          <div class="eyebrow" style="color:var(--ink-mute);">YOU FINISHED &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 6</div>
          <div style="display:flex; align-items:center; gap:.08in; color:var(--orange); font-family:'Caveat'; font-size:18pt;">
            <span>turn the page</span>
            <span style="font-size:26pt; line-height:1;">&rarr;</span>
          </div>
        </div>

        <div style="margin-top:.16in;">
          <div style="display:flex; align-items:center; gap:.06in;">
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; letter-spacing:.1em; color:var(--ink-soft);">WHERE YOU ARE</div>
            <div style="flex:1; height:8px; background:var(--paper-deep); border-radius:99px; position:relative; overflow:hidden;">
              <div style="position:absolute; left:0; top:0; bottom:0; width:67%; background:var(--orange);"></div>
            </div>
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; color:var(--orange);">6 / 9</div>
          </div>
        </div>

        <div style="margin-top:.2in; background:#fff; border-radius:14px; padding:.18in .22in; box-shadow:0 14px 30px -16px rgba(0,0,0,.25); position:relative;">
          <div style="display:flex; align-items:flex-start; gap:.2in;">
            <div>
              <div class="eyebrow" style="color:var(--orange);">UP NEXT &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 7</div>
              <div style="font-family:'Archivo'; font-weight:900; font-size:46pt; color:var(--orange); line-height:.9; margin:.02in 0;">07</div>
              <div class="ch-title" style="font-size:21pt; line-height:.95;">You made it.<br/>Now what.</div>
              <div class="lede" style="font-size:9.5pt; max-width:3.1in; margin-top:.08in;">Where to go from here. What to build next. How to keep getting better at this.</div>
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
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">YOU WILL SEE</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">A clear picture of where your new skills can take you from here.</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">YOU WILL GET</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Honest advice on what to try next and how to keep learning without burning out.</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">DIFFICULTY</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">No new commands. Just perspective.</div>
            </div>
          </div>
        </div>

        <div style="position:absolute; bottom:0; left:0; right:0; display:flex; justify-content:space-between; align-items:flex-end; gap:.2in;">
          <div style="max-width:3in;">
            <div style="font-family:'Caveat'; font-size:18pt; color:var(--ink); line-height:1; white-space:nowrap;">see you on the next page</div>
            <div class="small" style="color:var(--ink-mute); margin-top:.04in;">honestly, <b style="color:var(--ink);">brandon</b>. still not an algorithm</div>
          </div>
          <div style="text-align:center; flex:0 0 auto;">
            <img src="../../../assets/qr/ch07.png" style="width:.9in; height:.9in; display:block;" alt="QR code" />
            <div class="small" style="color:var(--ink-mute); margin-top:.04in; font-family:'JetBrains Mono'; font-size:7pt;">repo &middot; ch.07</div>
          </div>
        </div>
      </div>

      ${footer(12, "UP NEXT &nbsp;&middot;&nbsp; YOU MADE IT. NOW WHAT.", "/07-you-made-it")}
    </section>
  `;
}

export function renderPages() {
  return [
    pageChapterOpener(),
    pageIntro(),
    pageWhyBother(),
    pageWhatIsMCP(),
    pageRegisterMCP(),
    pageLaunchAndVerify(),
    pageAskClaude(),
    pageWhatJustHappened(),
    pageFindMore(),
    pageRemoveAndEmergency(),
    pageRecap(),
    pageNext(),
  ];
}
