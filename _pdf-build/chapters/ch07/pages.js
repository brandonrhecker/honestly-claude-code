/*
 * Chapter 07 — "You made it. Now what."
 *
 * 7 pages:
 *   1.  Chapter opener
 *   2.  Concept: What you can do now (section 1 of 4)
 *   3.  Concept: When someone says "AI" (section 2 of 4)
 *   4.  The honest part: Where to go from here (section 3 of 4)
 *   5.  The honest part: One last thing (section 4 of 4)
 *   6.  Recap
 *   7.  Bridge to chapter 08
 */

import { rail, railDone, footer } from '../../shared/components.js';

export const chapterTitle = 'Honestly, Claude Code, ch.07';

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
      ${rail(1, '', 4)}
      <img src="../../../assets/stickers/arms-up-yay.png" alt=""
           style="position:absolute; right:-.37in; top:.4in; width:4.0in; z-index:2; object-fit:contain; pointer-events:none;" />
      <div style="position:absolute; left:.42in; top:1.05in; z-index:3; max-width:2.85in;">
        <div class="eyebrow">CHAPTER 7 <span class="dot-sep">&bull;</span> CLOSING TIME</div>
        <div class="ch-num">07</div>
        <div class="annot ink" style="position:absolute; left:1.5in; top:.42in; transform:rotate(-5deg); font-size:13pt; white-space:nowrap;">&larr; you actually did it.</div>
        <div style="display:inline-block;">
          <div class="ch-title" style="position:relative; white-space:nowrap;">You made it.<br/>Now what.</div>
          <svg viewBox="0 0 220 14" preserveAspectRatio="none" style="display:block; width:2.6in; height:.18in; margin-top:.04in; margin-left:.05in;" aria-hidden="true">
            <path d="M 2 8 Q 28 2 60 6 T 130 5 Q 170 3 218 7" stroke="#d96033" stroke-width="6" stroke-linecap="round" fill="none" opacity=".88"/>
            <path d="M 8 11 Q 50 9 110 10 T 210 11" stroke="#d96033" stroke-width="2" stroke-linecap="round" fill="none" opacity=".55"/>
          </svg>
        </div>
      </div>
      <div class="lb-grid">
        <div class="lb">
          <div class="lb-badge"><div class="ico">&#128296;</div></div>
          <h4>You'll learn</h4>
          <ul>
            <li><span class="chk">&#10003;</span>Install Claude Code on any machine</li>
            <li><span class="chk">&#10003;</span>Make Claude do real work for you</li>
            <li><span class="chk">&#10003;</span>Teach it your project with CLAUDE.md</li>
            <li><span class="chk">&#10003;</span>Add skills and plug in apps via MCP</li>
          </ul>
        </div>
        <div class="lb b">
          <div class="lb-badge"><div class="ico">&#129488;</div></div>
          <h4>Honest questions</h4>
          <ol>
            <li><span class="num-step">1</span>Where to take it from here</li>
            <li><span class="num-step">2</span>Honest translations for when "AI" comes up</li>
            <li><span class="num-step">3</span>The one thing the book can't teach you</li>
          </ol>
        </div>
      </div>
      ${footer(1, "CH.7 &nbsp;&middot;&nbsp; YOU MADE IT. NOW WHAT.", "/07-you-made-it")}
    </section>
  `;
}

function pageWhatYouCanDo() {
  return `
    <section class="page">
      ${rail(1, '', 4)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 1 OF 4</div>
          <div class="section-h" style="margin:.06in 0 .04in;">What you can do <span class="stroke-under">now</span>.</div>
          <div class="body" style="max-width:3.4in; margin-top:.25in;">
            <p>You did it. That's all, folks. You made it through to the end. While people on LinkedIn are still "leveraging AI for synergistic outcomes," you actually know how the thing works.</p>
            <p>Here's what you can do that they can't:</p>
          </div>
          <div style="display:flex; flex-direction:column; gap:.12in; max-width:3.4in; margin-top:.16in;">
            ${[
              ['Install Claude Code', 'on any computer that lets you install things.'],
              ['Make Claude do real work', 'write files, organize folders, draft the thing you\'ve been procrastinating on.'],
              ['Teach Claude about a project', 'with CLAUDE.md, so you stop re-explaining yourself every session.'],
              ['Install other people\'s skills', 'with a couple of commands. Borrow what smarter people figured out.'],
              ['Plug Claude into outside apps', 'with MCP, when the built-in tools aren\'t enough.'],
            ].map(([title, desc]) => `
              <div style="display:flex; gap:.12in; align-items:flex-start;">
                <div style="flex:0 0 auto; width:.22in; height:.22in; background:var(--orange); border-radius:50%; display:flex; align-items:center; justify-content:center; margin-top:.03in; flex-shrink:0;">
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 5l2.5 2.5L8 3" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="small" style="color:var(--ink);"><strong>${title}.</strong> ${desc}</div>
              </div>`).join('')}
          </div>
          <div style="margin-top:.24in; border-left:3px solid var(--orange); background:var(--paper-deep); border-radius:0 6px 6px 0; padding:.1in .14in; max-width:3.3in;">
            <div style="font-family:'Caveat'; font-size:15pt; line-height:1.2; color:var(--ink);">While people on LinkedIn are still "leveraging AI for synergistic outcomes," you actually know how the thing works.</div>
          </div>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>WHAT THIS MEANS</div>
            <div>You can hold your own when "AI" comes up. Not because you memorized a definition. Because you've actually used it.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>NEXT UP</div>
            <div>Honest translations for when someone says "AI": <span class="xref">section <b>2</b></span></div>
          </div>
        </div>
      </div>
      ${footer(2, "CH.7 &nbsp;&middot;&nbsp; WHAT YOU CAN DO NOW", "/07#can")}
    </section>
  `;
}

function pageWhenSomeoneSaysAI() {
  return `
    <section class="page">
      ${rail(2, '', 4)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 2 OF 4</div>
          <div class="section-h" style="margin:.06in 0 .04in;">When someone says <span class="stroke-under">"AI."</span></div>
          <div class="annot ink" style="margin:-.04in 0 .35in; font-size:13pt; transform:rotate(-1deg);">(honest translations.)</div>
          <div class="body" style="max-width:3.4in;">
            <p>You can now hold your own. Some translations worth keeping:</p>
          </div>
          <div style="display:flex; flex-direction:column; gap:.14in; margin-top:.14in; max-width:3.4in;">
            <div style="background:var(--paper-deep); border-radius:8px; padding:.12in .14in;">
              <div class="eyebrow" style="font-size:7pt; color:var(--orange); margin-bottom:.07in;">"AI-POWERED"</div>
              <div class="small" style="color:var(--ink);">Usually means Claude, GPT, Gemini, Grok (or whatever the newest model is when you're reading this) wrapped around something. The "AI" part is the model. The rest is a product someone built on top of it.</div>
            </div>
            <div style="background:var(--paper-deep); border-radius:8px; padding:.12in .14in;">
              <div class="eyebrow" style="font-size:7pt; color:var(--orange); margin-bottom:.07in;">"WILL AI TAKE MY JOB?"</div>
              <div class="small" style="color:var(--ink);">Depends on whether you understand it. You're now in the camp that does. The people who get displaced first are the ones treating it like magic they don't need to understand.</div>
            </div>
          </div>
          <div style="margin-top:.22in; max-width:3.4in;">
            <div class="eyebrow" style="color:var(--ink-mute); margin-bottom:.1in;">WHAT SETS YOU APART NOW</div>
            <div class="body">
              <p>You know the difference between a prompt, a skill, an MCP, and a CLAUDE.md. You don't have to be the loudest person in the room about it. You just have to be the one who knows.</p>
            </div>
          </div>
        </div>
        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>PLAIN ENGLISH</div>
            <div><span class="marg-term">AI-powered</span>: a product with a language model doing some of the work. The model is rented from Anthropic, OpenAI, Google, or similar. The product is what you're actually using.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>NEXT UP</div>
            <div>Where to go from here: <span class="xref">section <b>3</b></span></div>
          </div>
        </div>
      </div>
      ${footer(3, "CH.7 &nbsp;&middot;&nbsp; WHEN SOMEONE SAYS \"AI\"", "/07#ai")}
    </section>
  `;
}

function pageWhereToGoFromHere() {
  return `
    <section class="page">
      ${rail(3, '', 4)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">THE HONEST PART &nbsp;&middot;&nbsp; SECTION 3 OF 4</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">Where to go from here.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:18pt; line-height:.9; transform:rotate(-2deg); white-space:nowrap;">keep going</div>
        </div>

        <div class="lede" style="font-size:10pt; max-width:4.6in; margin-top:.25in;">Remember those podcast recommendations from chapter 06? Go listen to one and keep learning. Or better yet, put what you've built to work:</div>

        ${claudePrompt('I want to build a simple personal-assistant website I can run on<br/>my own computer with Ted Lasso as the host. Help me brainstorm<br/>what would actually be useful, then help me build it and<br/>understand what you need along the way.')}

        <div class="small" style="color:var(--ink-mute); margin-top:.12in; max-width:4.4in;">You taught him to talk in chapter 04, and the brainstorming skill from chapter 05 will kick in. Time to put him to work.</div>

        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:.12in; margin-top:.22in; padding-top:.14in; border-top:1px dashed var(--rule);">
          <div>
            <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">CH.04 CALLBACK</div>
            <div class="small" style="color:var(--ink-soft); margin-top:.04in;">You wrote a CLAUDE.md for Ted Lasso's voice. That context is still there, waiting.</div>
          </div>
          <div>
            <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">CH.05 CALLBACK</div>
            <div class="small" style="color:var(--ink-soft); margin-top:.04in;">The brainstorming skill kicks in automatically when the prompt calls for it.</div>
          </div>
          <div>
            <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">THE POINT</div>
            <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Each chapter built on the last. Now you can build on all of them at once.</div>
          </div>
        </div>
      </div>
      ${footer(4, "CH.7 &nbsp;&middot;&nbsp; WHERE TO GO FROM HERE", "/07#next")}
    </section>
  `;
}

function pageOneLastThing() {
  return `
    <section class="page">
      ${rail(4, '', 4)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">THE HONEST PART &nbsp;&middot;&nbsp; SECTION 4 OF 4</div>
        <div class="section-h" style="margin:.06in 0 .25in;">One last thing.</div>

        <div class="body" style="max-width:4.5in;">
          <p>The part this book can't teach you is the part that ends up mattering most: knowing when NOT to use it.</p>
        </div>

        <div style="display:flex; flex-direction:column; gap:.1in; margin-top:.18in; max-width:4.4in;">
          ${[
            'When to write the email yourself, because the relationship is the point.',
            'When to do the work by hand, because the thinking is the point.',
            'When to close the terminal, because you\'re tired and the next move can wait.',
          ].map(text => `
            <div style="display:flex; gap:.14in; align-items:flex-start;">
              <div style="flex:0 0 .08in; width:.08in; height:.08in; border-radius:50%; background:var(--orange); margin-top:.06in; flex-shrink:0;"></div>
              <div class="body" style="font-style:italic; color:var(--ink-soft);">${text}</div>
            </div>`).join('')}
        </div>

        <div class="body" style="max-width:4.5in; margin-top:.2in;">
          <p>The tool is the tool. You're the one deciding what's worth your time. That's the actual skill, and you already had it before you opened this book.</p>
        </div>

        <div style="margin-top:.28in; text-align:center;">
          <div style="font-family:'Caveat'; font-size:30pt; color:var(--orange); line-height:1.1;">That's the book.</div>
          <div style="font-family:'Caveat'; font-size:30pt; color:var(--ink); line-height:1.1; margin-top:.06in;">Go play.</div>
        </div>
      </div>
      ${footer(5, "CH.7 &nbsp;&middot;&nbsp; ONE LAST THING", "/07#last")}
    </section>
  `;
}

function pageRecap() {
  const items = [
    'Install Claude Code on any computer that lets you install things',
    'Make Claude do real work for you: write files, organize folders, draft the thing you\'ve been procrastinating on',
    'Teach Claude about a project with CLAUDE.md, so you stop re-explaining yourself every session',
    'Install other people\'s skills with a couple of commands',
    'Plug Claude into outside apps with MCP, when the built-in tools aren\'t enough',
  ];
  return `
    <section class="page">
      ${railDone(4)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">WHERE YOU ARE &nbsp;&middot;&nbsp; SECTION 4 OF 4</div>
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
          <div style="font-family:'Caveat'; font-size:16pt; color:var(--ink-soft);">Seven chapters down. Two more when you need them.</div>
        </div>
      </div>
      ${footer(6, "CH.7 &nbsp;&middot;&nbsp; NOW YOU CAN", "/07#all")}
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
          <div class="eyebrow" style="color:var(--ink-mute);">YOU FINISHED &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 7</div>
          <div style="display:flex; align-items:center; gap:.08in; color:var(--orange); font-family:'Caveat'; font-size:18pt;">
            <span>turn the page</span>
            <span style="font-size:26pt; line-height:1;">&rarr;</span>
          </div>
        </div>

        <div style="margin-top:.16in;">
          <div style="display:flex; align-items:center; gap:.06in;">
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; letter-spacing:.1em; color:var(--ink-soft);">WHERE YOU ARE</div>
            <div style="flex:1; height:8px; background:var(--paper-deep); border-radius:99px; position:relative; overflow:hidden;">
              <div style="position:absolute; left:0; top:0; bottom:0; width:78%; background:var(--orange);"></div>
            </div>
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; color:var(--orange);">7 / 9</div>
          </div>
        </div>

        <div style="margin-top:.2in; background:#fff; border-radius:14px; padding:.18in .22in; box-shadow:0 14px 30px -16px rgba(0,0,0,.25); position:relative;">
          <div style="display:flex; align-items:flex-start; gap:.2in;">
            <div>
              <div class="eyebrow" style="color:var(--orange);">UP NEXT &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 8</div>
              <div style="font-family:'Archivo'; font-weight:900; font-size:46pt; color:var(--orange); line-height:.9; margin:.02in 0;">08</div>
              <div class="ch-title" style="font-size:21pt; line-height:.95;">Pull the plug.</div>
              <div class="lede" style="font-size:9.5pt; max-width:3.1in; margin-top:.08in;">Getting Claude Code off your computer should be as easy as putting it on. This chapter walks you through the full uninstall.</div>
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
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Uninstall the claude command and clean up your config folder.</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">ALL THREE OSES</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Mac, Windows, and Linux each get their own step-by-step section.</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">NO HARD FEELINGS</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Chapter 02 is still there if you change your mind.</div>
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
            <div class="small" style="color:var(--ink-mute); margin-top:.04in; font-family:'JetBrains Mono'; font-size:7pt;">repo &middot; ch.08</div>
          </div>
        </div>
      </div>

      ${footer(7, "UP NEXT &nbsp;&middot;&nbsp; PULL THE PLUG.", "/08-pull-the-plug")}
    </section>
  `;
}

export function renderPages() {
  return [
    pageChapterOpener(),
    pageWhatYouCanDo(),
    pageWhenSomeoneSaysAI(),
    pageWhereToGoFromHere(),
    pageOneLastThing(),
    pageRecap(),
    pageNext(),
  ];
}
