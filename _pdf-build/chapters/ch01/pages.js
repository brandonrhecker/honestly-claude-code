/*
 * Chapter 01 — "So what the hell is Claude Code"
 *
 * 11 pages total. Order matches the exports in renderPages() at the bottom:
 *   1. Chapter opener (cover)
 *   2. Concept: What it actually is
 *   3. Tangent: The repo (skippable, lavender wash)
 *   4. Concept: What it's not
 *   5. Concept: Why anyone bothers
 *   6-9. Four "fear" pages (replace-me / data / makes-shit-up / burnout)
 *   10. Recap (chapter-on-one-page)
 *   11. Bridge to chapter 02
 *
 * Voice and lexicon rules: see /CLAUDE.md and feedback_brandon_banned_lexicon
 * memory. Zero em dashes anywhere. Design tokens + class catalog: /DESIGN.md.
 */

import { rail, railDone, footer, fearPage } from '../../shared/components.js';

export const chapterTitle = 'Honestly, Claude Code, ch.01';

/**
 * Page 1 — Chapter opener (cover). The hero page.
 * Layout: watercolor wash, "01" number, title with handwritten orange
 * underline, "you are here" annotation, sticker illustration, KPI row
 * (Difficulty / Time / Value), two dark knowledge panels with emoji badges.
 */
function pageChapterOpener() {
  return `
    <section class="page">
      <img src="../../../assets/watercolor-gray.png" alt=""
           style="position:absolute; left:-.7in; width:8.2in; top:.6in; height:3.6in; z-index:1; pointer-events:none; mix-blend-mode:multiply; opacity:.92;"/>

      ${rail(1)}

      <img src="../../../assets/stickers/panicked-hands-behind-head.png" alt=""
           style="position:absolute; right:-.37in; top:.4in; width:4.0in; z-index:2; object-fit:contain; pointer-events:none;" />

      <div style="position:absolute; left:.42in; top:1.05in; z-index:3; max-width:2.85in;">
        <div class="eyebrow">CHAPTER 1 <span class="dot-sep">&bull;</span> ORIENTATION</div>
        <div class="ch-num">01</div>
        <div class="annot ink" style="position:absolute; left:1.5in; top:.42in; transform:rotate(-5deg); font-size:13pt; white-space:nowrap;">&larr; you are here</div>
        <div style="display:inline-block;">
          <div class="ch-title" style="position:relative; white-space:nowrap;">So what the hell<br/>is Claude Code</div>
          <svg viewBox="0 0 220 14" preserveAspectRatio="none" style="display:block; width:2.6in; height:.18in; margin-top:.04in; margin-left:.05in;" aria-hidden="true">
            <path d="M 2 8 Q 28 2 60 6 T 130 5 Q 170 3 218 7" stroke="#d96033" stroke-width="6" stroke-linecap="round" fill="none" opacity=".88"/>
            <path d="M 8 11 Q 50 9 110 10 T 210 11" stroke="#d96033" stroke-width="2" stroke-linecap="round" fill="none" opacity=".55"/>
          </svg>
        </div>
      </div>

      <div class="lb-grid">
        <div class="lb">
          <div class="lb-badge">
            <div class="ico">&#127891;</div>
          </div>
          <h4>You'll learn</h4>
          <ul>
            <li><span class="chk">&#10003;</span>What it actually is</li>
            <li><span class="chk">&#10003;</span>What it isn't (and why)</li>
            <li><span class="chk">&#10003;</span>Why anyone bothers</li>
          </ul>
        </div>
        <div class="lb b">
          <div class="lb-badge">
            <div class="ico">&#129488;</div>
          </div>
          <h4>Honest questions</h4>
          <ol>
            <li><span class="num-step">1</span>Will it replace me?</li>
            <li><span class="num-step">2</span>Is my data safe?</li>
            <li><span class="num-step">3</span>What if it makes stuff up?</li>
            <li><span class="num-step">4</span>Am I going to burn out?</li>
          </ol>
        </div>
      </div>

      ${footer(1, "CH.1 &nbsp;&middot;&nbsp; SO WHAT THE HELL IS THIS", "/01-what-the-hell")}
    </section>
  `;
}

/**
 * Page 2 — "What it actually is"
 * Body page with marginalia. Defines terminal + Anthropic in the sidebar.
 * Lavender "Plain English" card for the term "terminal".
 */
function pageConceptWhatItIs() {
  return `
    <section class="page">
      ${rail(1)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 1 OF 9</div>
          <div class="section-h" style="margin:.06in 0 .04in;">What it <span class="stroke-under">actually</span> is.</div>
          <div class="annot ink" style="font-size:13pt; margin:-.04in 0 .4in; transform:rotate(-1deg);">(short version: you type, claude does things.)</div>
          <div class="body" style="max-width:3.4in;">
            <p>You're a little scared. Or skeptical. Or you've avoided this whole conversation for months because everyone around you sounds insufferable about AI. All reasonable.</p>
            <p>This chapter is so we're talking about the same thing before you install anything.</p>
            <p>Claude Code is a program you talk to in your computer's terminal and tell it to do things while looking like a hacker from TV. It can <strong>read</strong> your files, <strong>write</strong> new ones, <strong>run</strong> commands, and remember things between sessions.</p>
            <p>It's not a website. It's not a copilot in your sidebar. It runs in a terminal window. The same place a developer would run code.</p>
            <p>Underneath, it's <strong>Claude</strong> (the AI made by Anthropic) wired up to your computer in a useful way.</p>
          </div>

          <div class="card" style="margin-top:.16in; background:var(--lav-soft); border-radius:8px; padding:.12in .16in; max-width:3.4in;">
            <div class="card-title" style="margin-bottom:.06in;"><span class="ico">i</span>Plain English</div>
            <div class="small" style="color:var(--ink-soft);">A "<span class="mono" style="background:#fff; padding:1px 5px; border-radius:3px; border:1px solid var(--rule);">terminal</span>" is a text window. You type a sentence, the computer does something. Press <span class="mono" style="background:#fff; padding:1px 5px; border-radius:3px; border:1px solid var(--rule);">Enter</span> to send.</div>
          </div>
        </div>

        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>PLAIN ENGLISH</div>
            <div><span class="marg-term">terminal</span>: the text window. Also called "console" or "command line." Same thing.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128214;</span>PLAIN ENGLISH</div>
            <div><span class="marg-term">Anthropic</span>: the company that makes Claude.</div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>ALSO HELPFUL</div>
            <div>What it's <em>not</em>: <span class="xref">section <b>3</b></span></div>
            <div style="margin-top:.04in;">Why bother: <span class="xref">section <b>4</b></span></div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#10551;</span>RABBIT HOLE</div>
            <div style="font-style:italic;">The word "shell" comes from the fact it wraps the kernel. You will never need to care about this.</div>
          </div>
        </div>
      </div>
      ${footer(2, "CH.1 &nbsp;&middot;&nbsp; WHAT IT ACTUALLY IS", "/01")}
    </section>
  `;
}

/**
 * Page 3 — Tangent: "About where this book actually lives"
 * Skippable explainer about the GitHub repo. Lavender rail wash signals
 * the tangent character. Includes the "curious-leaner" sticker and a
 * QR-code card pointing to the repo URL.
 */
function pageTangentRepo() {
  return `
    <section class="page">
      ${rail(2, 'lav')}

      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div style="display:flex; align-items:baseline; gap:.16in;">
          <div class="eyebrow" style="color:#7a6680;">TANGENT <span class="dot-sep" style="color:#7a6680;">&#10551;</span> SKIPPABLE</div>
          <div class="small" style="color:var(--ink-mute);">(it's fine to skip this, meet you on the next page)</div>
        </div>

        <div style="margin:.12in 0 .22in;">
          <div class="ch-title" style="font-size:24pt; line-height:.95; color:var(--ink);">About where this<br/>book actually <em>lives</em>.</div>
        </div>

        <div style="display:grid; grid-template-columns:1.5in 1fr; gap:.22in;">
          <div style="height:1.7in; display:flex; align-items:center; justify-content:center; overflow:hidden;">
            <img src="../../../assets/stickers/curious-leaner.png" alt="" style="width:220%; height:220%; object-fit:contain; display:block;" />
          </div>
          <div class="body" style="font-size:10pt; line-height:1.5; color:var(--ink-soft);">
            <p>The PDF in your hands is a <strong>snapshot</strong>. The real version of this book lives on the internet, in what engineers call a "repo." If you've heard "git repo" thrown around and felt left out, congrats, it's a folder. Engineers have a special word for folder. That's the whole mystery.</p>
            <p>By the time you're reading this, the online version has probably gotten newer.</p>
          </div>
        </div>

        <div style="margin-top:.2in; display:grid; grid-template-columns:1fr .9in; gap:.18in; align-items:center;">
          <div class="card" style="background:var(--lav-soft); padding:.14in .18in;">
            <div class="card-title" style="margin-bottom:.04in; color:var(--navy);"><span class="ico" style="background:var(--navy);">&#127760;</span>READ THE LATEST</div>
            <div style="font-family:'JetBrains Mono',monospace; font-size:9.5pt; color:var(--ink); margin-bottom:.04in;">github.com/brandonrhecker/honestly-claude-code</div>
            <div class="small" style="color:var(--ink-soft);">No account. No software. Pretend it's just a webpage. It is.</div>
          </div>
          <div style="text-align:center;">
            <img src="../../../assets/qr/repo.png" style="width:.9in; height:.9in; display:block;" alt="QR code" />
            <div class="small" style="color:var(--ink-mute); margin-top:.05in; font-family:'JetBrains Mono'; font-size:7pt;">scan: repo</div>
          </div>
        </div>

        <div class="sticky tilt-r" style="bottom:.85in; right:.4in;">
          <b>NO PANIC</b>
          you don't need git<br/>to read the book.
        </div>
      </div>

      ${footer(3, "CH.1 &nbsp;&middot;&nbsp; TANGENT &nbsp;&rsaquo;&nbsp; THE REPO", "/01#repo")}
    </section>
  `;
}

/**
 * Page 4 — "What it's not"
 * 2x2 grid of "not X" cards with small orange × badges. Each card flags
 * an assumption to drop (not a chatbot / not autonomous / not for engineers
 * only / not magic).
 */
function pageWhatItsNot() {
  return `
    <section class="page">
      ${rail(3)}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 3 OF 9</div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:.18in; margin-top:.04in;">
          <div class="section-h">What it's <span class="stroke-under">not</span>.</div>
          <div style="font-family:'Caveat'; color:var(--orange); font-size:22pt; line-height:.9; transform:rotate(-2deg);">four things, mostly</div>
        </div>
        <div class="lede" style="font-size:10pt; max-width:4.6in; margin-top:.25in;">It helps to name what this isn't before naming what it is. Otherwise you'll keep importing baggage from the last AI thing you saw.</div>

        <div class="notlist">
          <div class="not-item">
            <div class="x">&times;</div>
            <div class="lbl">Not a chatbot.</div>
            <div class="desc">A chatbot just talks. This does things. Edits files, runs commands, looks at git.</div>
          </div>
          <div class="not-item">
            <div class="x">&times;</div>
            <div class="lbl">Not autonomous.</div>
            <div class="desc">It asks permission before doing anything destructive. You're the human in the loop.</div>
          </div>
          <div class="not-item">
            <div class="x">&times;</div>
            <div class="lbl">Not for engineers only.</div>
            <div class="desc">You don't need to know how to code. You do need to be willing to type into a terminal. There's a difference.</div>
          </div>
          <div class="not-item">
            <div class="x">&times;</div>
            <div class="lbl">Not magic.</div>
            <div class="desc">It will get things wrong. Sometimes spectacularly. We'll cover how to catch it.</div>
          </div>
        </div>

        <div class="sticky" style="bottom:1in; left:.3in;">
          <b>TAKEAWAY</b>
          if it scares you,<br/>good. that's<br/>useful skepticism.
        </div>
      </div>
      ${footer(4, "CH.1 &nbsp;&middot;&nbsp; WHAT IT'S NOT", "/01#not")}
    </section>
  `;
}

/**
 * Page 5 — "Why anyone bothers"
 * Body page with marginalia + orange one-liner card. The marginalia gives
 * concrete examples with chapter cross-references.
 */
function pageWhyBother() {
  return `
    <section class="page">
      ${rail(4)}
      <div class="body-wrap">
        <div>
          <div class="eyebrow" style="color:var(--ink-mute);">CONCEPT &nbsp;&middot;&nbsp; SECTION 4 OF 9</div>
          <div class="section-h" style="margin:.06in 0 .04in;">Why anyone <span class="stroke-under">bothers</span>.</div>
          <div class="annot ink" style="font-size:13pt; margin:-.04in 0 .4in; transform:rotate(-1deg);">(it's not about the hype.)</div>
          <div class="body" style="max-width:3.4in;">
            <p>You can hand off the tedious stuff. The "I have this file, can you rename it and update the references" stuff. The "organize my downloads folder by date" stuff. The "write me a checklist for the trip I'm planning" stuff.</p>
            <p>It's not going to replace you. It's going to handle the work that's <strong>beneath</strong> you so you can do the work that <strong>isn't</strong>.</p>
          </div>

          <div class="card" style="margin-top:.16in; background:var(--orange); color:#fff; border-radius:10px; padding:.14in .18in; max-width:3.4in; box-shadow:0 6px 0 -4px rgba(0,0,0,.25);">
            <div style="font-family:'Archivo',sans-serif; font-weight:800; font-size:7.5pt; letter-spacing:.18em; text-transform:uppercase; margin-bottom:.04in;">THE ONE-LINER</div>
            <div style="font-family:'Caveat',cursive; font-size:18pt; line-height:1.05;">Boring work, gone. Real work, still yours.</div>
          </div>
        </div>

        <div class="marg">
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128161;</span>FOR EXAMPLE</div>
            <div>Rename 200 photos by date. <span class="xref">ch. <b>03</b></span></div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128161;</span>FOR EXAMPLE</div>
            <div>Draft a checklist from a half-baked idea. <span class="xref">ch. <b>04</b></span></div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl"><span class="ico">&#128161;</span>FOR EXAMPLE</div>
            <div>Organize a folder you've been avoiding. <span class="xref">ch. <b>03</b></span></div>
          </div>
          <div class="marg-block">
            <div class="marg-lbl navy"><span class="ico">&#8599;</span>BUT WAIT</div>
            <div>The next 4 sections are the honest ones. Read them.</div>
          </div>
        </div>
      </div>
      ${footer(5, "CH.1 &nbsp;&middot;&nbsp; WHY ANYONE BOTHERS", "/01#why")}
    </section>
  `;
}

/** Page 6 — Fear #1: "Am I going to lose my job?" Uses fearPage() template. */
function pageFearReplace() {
  return fearPage({
    pageNum: 6,
    sectionIndex: 5,
    eyebrow: 'BUT WAIT &nbsp;&middot;&nbsp; SECTION 5 OF 9',
    question: `Am I going to <em>lose my job</em>?`,
    body: `
      <p>Honest answer: maybe parts of it, probably not the whole thing.</p>
      <p>The people who lean hardest into AI tools tend to climb faster, not get replaced. The people who refuse to touch it tend to get left behind. Neither's a great option.</p>
      <p>What works best: learn enough to know what it's <strong>good at</strong> and what it <strong>isn't</strong>, then use it where it actually helps. Ignore the hype where it doesn't.</p>
    `,
    tldr: 'Refusing to engage is its own risk. So is going all-in. The middle path is boring and it works.',
    xrefLabel: 'MORE IN CHAPTER 09',
    xrefTitle: `<em>Will it replace me?</em> The long version.`,
    stickyBody: '<b>HEADS UP</b>this is the<br/>least cheerful<br/>part of the book.',
    footerCrumb: "CH.1 &nbsp;&middot;&nbsp; BUT WAIT &nbsp;&rsaquo;&nbsp; WILL IT REPLACE ME",
    footerSlug: '/01#replace',
  });
}

/** Page 7 — Fear #2: "Is my data safe?" Uses fearPage() template. */
function pageFearData() {
  return fearPage({
    pageNum: 7,
    sectionIndex: 6,
    eyebrow: 'BUT WAIT &nbsp;&middot;&nbsp; SECTION 6 OF 9',
    question: `Is my <em>data safe</em>?`,
    body: `
      <p>Short version: your <strong>conversations</strong> go to Anthropic's servers to get processed. <strong>Files</strong> Claude reads stay on your computer unless you explicitly ask it to share them somewhere.</p>
      <p>By default it <strong>can't access the internet</strong>. That's important. If you don't give it the wifi keys, it can't phone home with your stuff.</p>
    `,
    tldr: 'Conversations leave. Files stay. The thing has to ask you before it goes online.',
    xrefLabel: 'MORE IN CHAPTER 09',
    xrefTitle: `<em>Is my data safe?</em> The long version.`,
    footerCrumb: "CH.1 &nbsp;&middot;&nbsp; BUT WAIT &nbsp;&rsaquo;&nbsp; IS MY DATA SAFE",
    footerSlug: '/01#data',
  });
}

/** Page 8 — Fear #3: "What if it just makes shit up?" Uses fearPage() template. */
function pageFearLies() {
  return fearPage({
    pageNum: 8,
    sectionIndex: 7,
    eyebrow: 'BUT WAIT &nbsp;&middot;&nbsp; SECTION 7 OF 9',
    question: `What if it just <em>makes shit up</em>?`,
    body: `
      <p>It does, sometimes. <strong>Confidently. With zero hedging.</strong> That's the most important thing about it to remember.</p>
      <p>The fix isn't to never use it. The fix is to never <strong>trust it blindly</strong>. Especially on facts, names, dates, code, or anything that matters.</p>
      <p>You're the human. You're the check.</p>
    `,
    tldr: 'Yes, it lies. Confidently. Your job is to check. That part hasn’t changed.',
    xrefLabel: 'MORE IN CHAPTER 09',
    xrefTitle: `<em>When it screws up.</em> The long version.`,
    stickyBody: '<b>TRUE STORY</b>it will cite a<br/>book that does<br/>not exist.',
    footerCrumb: "CH.1 &nbsp;&middot;&nbsp; BUT WAIT &nbsp;&rsaquo;&nbsp; IT MAKES STUFF UP",
    footerSlug: '/01#lies',
  });
}

/** Page 9 — Fear #4: "About burnout." Uses fearPage() template. */
function pageFearBurnout() {
  return fearPage({
    pageNum: 9,
    sectionIndex: 8,
    eyebrow: 'THE HONEST PART &nbsp;&middot;&nbsp; SECTION 8 OF 9',
    question: `About <em>burnout</em>.`,
    body: `
      <p>Using AI is going to take mental energy you weren't spending before. Some days it'll save you hours. Some days it'll waste an hour and you'll feel dumb. That's normal.</p>
      <p>If you start to feel burned out, <strong>stop</strong>. Use it less. Letting a tool run you is the same trap as the old job, just with a new tool.</p>
    `,
    tldr: 'It will save you time some days and cost you time others. If it starts owning you, walk away for a while.',
    xrefLabel: 'MORE IN CHAPTER 09',
    xrefTitle: `<em>Burning out in an automated world.</em> The long version.`,
    footerCrumb: "CH.1 &nbsp;&middot;&nbsp; THE HONEST PART &nbsp;&rsaquo;&nbsp; BURNOUT",
    footerSlug: '/01#burnout',
  });
}

/**
 * Page 10 — Recap. "The whole chapter, on one page."
 * railDone() with a ✓ on the final dot. 2×3 grid of numbered takeaways.
 * Lavender "one thing to remember" card + QR placeholder.
 */
function pageRecap() {
  return `
    <section class="page">
      ${railDone()}
      <div style="position:absolute; left:.42in; right:.42in; top:1in; bottom:.7in; z-index:2;">
        <div style="display:flex; align-items:baseline; justify-content:space-between;">
          <div>
            <div class="eyebrow" style="color:var(--ink-mute);">WHERE YOU ARE &nbsp;&middot;&nbsp; SECTION 9 OF 9</div>
            <div class="section-h" style="margin:.06in 0 .04in;">Now you <span class="stroke-under">get it</span>.</div>
            <div class="annot ink" style="margin:-.04in 0 .2in; font-size:13pt; transform:rotate(-1deg);">(if you're still here, you've got the gist.)</div>
          </div>
          <div style="text-align:right; align-self:flex-start;">
            <div style="font-family:'Caveat'; color:var(--orange); font-size:30pt; line-height:.9;">tl;dr</div>
          </div>
        </div>

        <div class="recap-grid" style="margin-top:.1in;">
          <div class="recap-item">
            <div class="n">1</div>
            <div class="small" style="color:var(--ink-soft);"><strong style="color:var(--ink);">Claude Code is an AI that runs in your terminal</strong> and does real work on your files.</div>
          </div>
          <div class="recap-item">
            <div class="n">2</div>
            <div class="small" style="color:var(--ink-soft);"><strong style="color:var(--ink);">It's not magic, it's not your replacement,</strong> and it's not safe to trust blindly.</div>
          </div>
          <div class="recap-item">
            <div class="n">3</div>
            <div class="small" style="color:var(--ink-soft);"><strong style="color:var(--ink);">It can save you real time on real tasks.</strong></div>
          </div>
          <div class="recap-item">
            <div class="n">4</div>
            <div class="small" style="color:var(--ink-soft);"><strong style="color:var(--ink);">Your fears are legitimate; the answers are nuanced.</strong></div>
          </div>
        </div>

        <div style="margin-top:.2in; display:grid; grid-template-columns:1fr .9in; gap:.18in; align-items:center;">
          <div>
            <div style="font-family:'Caveat'; font-size:26pt; color:var(--orange); line-height:1;">Ready?</div>
            <div class="small" style="color:var(--ink-mute); margin-top:.06in;">Chapter 2 installs the thing. One page at a time.</div>
          </div>
          <div style="text-align:center;">
            <img src="../../../assets/qr/ch01.png" style="width:.9in; height:.9in; display:block;" alt="QR code" />
            <div class="small" style="color:var(--ink-mute); margin-top:.05in; font-family:'JetBrains Mono'; font-size:7pt;">scan: ch.01</div>
          </div>
        </div>
      </div>
      ${footer(10, "CH.1 &nbsp;&middot;&nbsp; THE WHOLE THING ON ONE PAGE", "/01#recap")}
    </section>
  `;
}

/**
 * Page 11 — Bridge to chapter 2. "You finished · Chapter 1."
 * Progress bar (1/9), big up-next card with "02" + chapter 2 title +
 * zen-arm-up sticker in a circular emblem. Brandon's signature at the
 * bottom: "honestly, brandon. still not an algorithm".
 */
function pageNext() {
  return `
    <section class="page">
      <img src="../../../assets/orange-watercolor-page-stain-left.png" alt="" aria-hidden="true"
           style="position:absolute; left:0; bottom:0; width:3.2in; z-index:1; pointer-events:none; opacity:.9;" />
      <div class="wash lav" style="right:-.8in; top:-.8in; width:3.2in; height:2.4in; opacity:.55;"></div>

      <div style="position:absolute; left:.42in; right:.42in; top:.6in; bottom:.7in; z-index:2;">
        <div style="display:flex; align-items:center; justify-content:space-between;">
          <div class="eyebrow" style="color:var(--ink-mute);">YOU FINISHED &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 1</div>
          <div style="display:flex; align-items:center; gap:.08in; color:var(--orange); font-family:'Caveat'; font-size:18pt;">
            <span>turn the page</span>
            <span style="font-size:26pt; line-height:1;">&rarr;</span>
          </div>
        </div>

        <div style="margin-top:.16in;">
          <div style="display:flex; align-items:center; gap:.06in;">
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; letter-spacing:.1em; color:var(--ink-soft);">WHERE YOU ARE</div>
            <div style="flex:1; height:8px; background:var(--paper-deep); border-radius:99px; position:relative; overflow:hidden;">
              <div style="position:absolute; left:0; top:0; bottom:0; width:11%; background:var(--orange);"></div>
            </div>
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; color:var(--orange);">1 / 9</div>
          </div>
        </div>

        <div style="margin-top:.2in; background:#fff; border-radius:14px; padding:.18in .22in; box-shadow:0 14px 30px -16px rgba(0,0,0,.25); position:relative;">
          <div style="display:flex; align-items:flex-start; gap:.2in;">
            <div>
              <div class="eyebrow" style="color:var(--orange);">UP NEXT &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 2</div>
              <div style="font-family:'Archivo'; font-weight:900; font-size:46pt; color:var(--orange); line-height:.9; margin:.02in 0;">02</div>
              <div class="ch-title" style="font-size:21pt; line-height:.95;">Get the damn<br/>thing running.</div>
              <div class="lede" style="font-size:9.5pt; max-width:3.1in; margin-top:.08in;">
                Install Claude Code on your machine. We do Mac, Windows, and Linux. Pick one, skip the rest.
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
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Install Claude on your actual machine.</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">YOU WILL SEE</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Claude say hello back in plain English.</div>
            </div>
            <div>
              <div class="eyebrow" style="font-size:6.8pt; color:var(--navy);">DIFFICULTY</div>
              <div class="small" style="color:var(--ink-soft); margin-top:.04in;">Still easy. Promise.</div>
            </div>
          </div>
        </div>

        <div style="position:absolute; bottom:0; left:0; right:0; display:flex; justify-content:space-between; align-items:flex-end; gap:.2in;">
          <div style="max-width:3in;">
            <div style="font-family:'Caveat'; font-size:18pt; color:var(--ink); line-height:1; white-space:nowrap;">see you on the next page</div>
            <div class="small" style="color:var(--ink-mute); margin-top:.04in;">honestly, <b style="color:var(--ink);">brandon</b>. still not an algorithm</div>
          </div>
          <div style="text-align:center; flex:0 0 auto;">
            <img src="../../../assets/qr/ch02.png" style="width:.9in; height:.9in; display:block;" alt="QR code" />
            <div class="small" style="color:var(--ink-mute); margin-top:.04in; font-family:'JetBrains Mono'; font-size:7pt;">repo &middot; ch.02</div>
          </div>
        </div>
      </div>

      ${footer(11, "UP NEXT &nbsp;&middot;&nbsp; GET THE DAMN THING RUNNING", "/02-the-install")}
    </section>
  `;
}

export function renderPages() {
  return [
    pageChapterOpener(),
    pageConceptWhatItIs(),
    pageTangentRepo(),
    pageWhatItsNot(),
    pageWhyBother(),
    pageFearReplace(),
    pageFearData(),
    pageFearLies(),
    pageFearBurnout(),
    pageRecap(),
    pageNext(),
  ];
}
