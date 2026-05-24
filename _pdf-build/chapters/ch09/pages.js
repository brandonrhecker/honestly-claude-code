/*
 * Chapter 09 — "The questions you came here with"
 *
 * 7 pages:
 *   1.  Chapter opener
 *   2.  The honest part: Is my data safe? (section 1 of 5)
 *   3.  The honest part: When it screws up (section 2 of 5)
 *   4.  The honest part: Will it replace me? (section 3 of 5)
 *   5.  The honest part: Getting dependent (section 4 of 5)
 *   6.  The honest part: Burning out (section 5 of 5)
 *   7.  Final page — recap + chapter-end background + sticker
 */

import { rail, railDone, footer, fearPage } from '../../shared/components.js';

export const chapterTitle = 'Honestly, Claude Code, ch.09';

function pageChapterOpener() {
  return `
    <section class="page">
      <img src="../../../assets/watercolor-gray.png" alt=""
           style="position:absolute; left:-.7in; width:8.2in; top:.6in; height:3.6in; z-index:1; pointer-events:none; mix-blend-mode:multiply; opacity:.92;"/>
      ${rail(1, '', 5)}
      <img src="../../../assets/stickers/drawing-or-writing.png" alt=""
           style="position:absolute; right:calc(-.37in - 10px); top:.4in; width:4.0in; z-index:2; object-fit:contain; pointer-events:none;" />
      <div style="position:absolute; left:.42in; top:1.05in; z-index:3; max-width:2.85in;">
        <div class="eyebrow">CHAPTER 9 <span class="dot-sep">&bull;</span> THE HONEST PART</div>
        <div class="ch-num">09</div>
        <div class="annot ink" style="position:absolute; left:1.5in; top:.42in; transform:rotate(-5deg); font-size:13pt; white-space:nowrap;">&larr; the real questions.</div>
        <div style="display:inline-block;">
          <div class="ch-title" style="position:relative; white-space:nowrap;">The questions<br/>you came here with.</div>
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
            <li><span class="chk">&#10003;</span>Is my data safe?</li>
            <li><span class="chk">&#10003;</span>When it screws up</li>
            <li><span class="chk">&#10003;</span>Will it replace me?</li>
            <li><span class="chk">&#10003;</span>Getting dependent</li>
            <li><span class="chk">&#10003;</span>Burning out</li>
          </ul>
        </div>
        <div class="lb b">
          <div class="lb-badge"><div class="ico">&#129488;</div></div>
          <h4>Honest questions</h4>
          <ol>
            <li><span class="num-step">1</span>What actually goes to Anthropic's servers</li>
            <li><span class="num-step">2</span>How hallucinations work and how to catch them</li>
            <li><span class="num-step">3</span>An honest look at job risk, dependency, and burnout</li>
          </ol>
        </div>
      </div>
      ${footer(1, "CH.9 &nbsp;&middot;&nbsp; QUESTIONS YOU CAME HERE WITH", "/09-questions-you-came-here-with")}
    </section>
  `;
}

function pageDataSafe() {
  return fearPage({
    pageNum: 2,
    sectionIndex: 1,
    eyebrow: 'THE HONEST PART',
    question: 'Is my data <em>safe</em>?',
    body: `
      <p>The honest answer is "yes, mostly, and here's where you should still pay attention." The marketing-y answer is "Anthropic is committed to your privacy." The internet-paranoid answer is "they're stealing your soul." Both of those are useless. Here's what actually happens.</p>
      <p><strong>What stays on your machine:</strong> the files in your project folder (unless Claude reads one to answer you), your <code>~/.claude/</code> folder, your session transcript, and any code Claude writes to disk. Claude Code can't reach the internet without your approval.</p>
      <p><strong>What leaves your machine:</strong> the prompt you typed, the contents of any files Claude needed to read, and Claude's output. It has to. The model lives on Anthropic's servers, not yours.</p>
      <p><strong>Does Anthropic train on your conversations?</strong> As of 2026: no, not by default for Pro, Max, and API users. Free claude.ai users are asked to opt in or out. Policies change. Read the current one at anthropic.com/legal/privacy before you assume.</p>
      <p><strong>The actual risk</strong> isn't Anthropic reading your files. It's what you paste in. Don't paste API keys, passwords, customer data, anything covered by NDA or HIPAA, or anything you'd regret having in a log somewhere.</p>
    `,
    tldr: ' Claude Code sends your prompts and relevant file contents to Anthropic. Paid plans don\'t train on them. The real risk is what you paste.',
    xrefLabel: 'FULL BREAKDOWN',
    xrefTitle: 'anthropic.com/legal/privacy',
    footerCrumb: "CH.9 &nbsp;&middot;&nbsp; IS MY DATA SAFE",
    footerSlug: "/09#data",
    railTotal: 5,
  });
}

function pageWhenItScrewsUp() {
  return fearPage({
    pageNum: 3,
    sectionIndex: 2,
    eyebrow: 'THE HONEST PART',
    question: 'When it <em>screws up</em>?',
    body: `
      <p>Claude is going to confidently tell you something false. Sometimes spectacularly false. With perfect grammar and zero hesitation. This is the most important thing to know before you trust it with anything that matters.</p>
      <p><strong>What hallucinations look like:</strong> citations that don't exist, made-up commands, quotes attributed to people who never said them, confident wrong math, plausible-sounding biographical details that are wrong, filenames or paths that don't exist in your project.</p>
      <p><strong>Highest-risk topics:</strong> anything with legal or financial stakes, medical information (especially dosages), citations you'll publish, commands Claude wants to run on your computer, specific dates and numbers, anything you'll send to another human as fact.</p>
      <p><strong>Lower-risk:</strong> brainstorming, reformatting content, explaining concepts you already understand at a basic level, first drafts you'll edit anyway.</p>
      <p><strong>How to catch it:</strong> ask "how do you know that?" Verify the one or two claims your decision actually rests on. Read what it wrote, line by line, before you click yes.</p>
    `,
    tldr: ' Claude will confidently make things up. Read everything it wants to change. Verify anything that matters. The check is you.',
    xrefLabel: 'THE PATTERN',
    xrefTitle: 'If Claude states a fact, ask for the source. If it\'s vague or suspicious, it\'s probably made up.',
    footerCrumb: "CH.9 &nbsp;&middot;&nbsp; WHEN IT SCREWS UP",
    footerSlug: "/09#screwup",
    railTotal: 5,
  });
}

function pageWillItReplaceMe() {
  return fearPage({
    pageNum: 4,
    sectionIndex: 3,
    eyebrow: 'THE HONEST PART',
    question: 'Will it <em>replace me</em>?',
    body: `
      <p>The honest answer doesn't fit in a sentence. The doomers say the end times are here. The consultants say you'll be fine if you "embrace transformation." Neither knows your specific situation.</p>
      <p><strong>Direct-replacement risk:</strong> Some jobs are already being affected. Right now. Tier-1 customer service, copy editing, junior coding work, transcription, first-draft copywriting, basic graphic design, data entry, paralegal first-pass document review. If you're in one of these, the honest move is to climb up the value chain or pivot toward judgment, relationships, or physical presence.</p>
      <p><strong>Second-order risk (even if your job is "safe"):</strong> When some jobs disappear, those workers apply for the remaining ones. Hiring tightens everywhere. AI-augmented output becomes the new baseline. Even "safe" roles see pay compression as the broader job market loosens.</p>
      <p><strong>Where this leaves you:</strong> you understand what this thing is and isn't. You can use it. You can tell when its output is good and when it's wrong. You're not waiting for someone to translate "AI" for you. That's already most of the game.</p>
    `,
    tldr: ' Some roles are already affected. The people who do well are the ones who understand the tool well enough to use it and catch it.',
    xrefLabel: 'THE HONEST MOVE',
    xrefTitle: 'Climb the value chain. Or pivot toward judgment, relationships, or physical presence.',
    footerCrumb: "CH.9 &nbsp;&middot;&nbsp; WILL IT REPLACE ME",
    footerSlug: "/09#replace",
    railTotal: 5,
  });
}

function pageGettingDependent() {
  return fearPage({
    pageNum: 5,
    sectionIndex: 4,
    eyebrow: 'THE HONEST PART',
    question: 'Am I getting <em>dependent</em>?',
    body: `
      <p>You reach for Claude before you've thought about the problem. You feel stuck without it. You can't remember how you used to start a draft. Congratulations: that's the slide.</p>
      <p><strong>What dependency looks like:</strong> reaching for Claude before you've thought about the problem, panic when it's down, forgetting how you used to do things you used to do, outsourcing things you actually wanted to do yourself.</p>
      <p><strong>The two kinds:</strong> healthy reliance (you use it because it's the right tool; you could do without; you just don't want to) versus unhealthy dependency (you can't do without; the skill has gone soft; the choice isn't yours anymore).</p>
      <p><strong>Skills that go soft first:</strong> writing your own first sentence, holding a thought long enough to develop it, sitting with the discomfort of not knowing, knowing when something is good without asking, trust in your own judgment.</p>
      <p><strong>The fix:</strong> pick three things that stay yours. Notice the reach before you open Claude. Let yourself be stuck for five minutes first. Practice the manual version once a week.</p>
    `,
    tldr: ' The slide is slow. Pick three things to keep manual, on purpose. The goal isn\'t using it less. It\'s staying capable of doing without it.',
    xrefLabel: 'THE RULE',
    xrefTitle: 'The choice stays yours. Don\'t outsource the parts of you that matter most.',
    footerCrumb: "CH.9 &nbsp;&middot;&nbsp; GETTING DEPENDENT",
    footerSlug: "/09#dependent",
    railTotal: 5,
  });
}

function pageBurningOut() {
  return fearPage({
    pageNum: 6,
    sectionIndex: 5,
    eyebrow: 'THE HONEST PART',
    question: 'What about <em>burning out</em>?',
    body: `
      <p>AI is everywhere now, whether you use it or not. Even if you never open Claude, the people around you are. The result is a kind of tiredness most of us don't have a name for yet.</p>
      <p><strong>What it looks like:</strong> constant verification exhausting your brain in a way that doing the work yourself doesn't. Decision fatigue from "do I take this, edit this, redo this, or scrap it?" multiplied across a day. Hollow-content fatigue from scrolling past posts that all sound like the same person wrote them, because they kind of did. Identity drag from finishing a piece of writing that doesn't feel like you wrote it.</p>
      <p><strong>The sameness problem:</strong> same tools, same prompts, same outputs. Emails sound the same. Decks look the same. Articles read the same. The technical word for this is mimetic behavior. The plain word for it is the blend. People who get pulled in stop standing out and stop standing for anything.</p>
      <p><strong>The fix:</strong> use it less on purpose. Stay weird on purpose. Pick the unusual word. Keep the sentence that wouldn't have been generated. Notice when your work could've been generated, and rewrite it. Take credit for your work. The model is a tool, not a co-author.</p>
    `,
    tldr: ' AI burnout is real. The antidote is weirdness, on purpose. The automated world rewards both speed and distinction. Only you can supply the second one.',
    xrefLabel: 'THE RULE',
    xrefTitle: 'The thing that makes you different is the thing that makes you valuable. Don\'t blend in just because everyone else is.',
    footerCrumb: "CH.9 &nbsp;&middot;&nbsp; BURNING OUT",
    footerSlug: "/09#burnout",
    railTotal: 5,
  });
}

function pageFinal() {
  return `
    <section class="page">
      <img src="../../../assets/orange-watercolor-page-stain-left.png" alt="" aria-hidden="true"
           style="position:absolute; left:0; bottom:0; width:3.2in; z-index:1; pointer-events:none; opacity:.9;" />
      <div class="wash lav" style="right:-.8in; top:-.8in; width:3.2in; height:2.4in; opacity:.55;"></div>

      <div style="position:absolute; left:.42in; right:.42in; top:.6in; bottom:.7in; z-index:2;">
        <div style="display:flex; align-items:center; justify-content:space-between;">
          <div class="eyebrow" style="color:var(--ink-mute);">YOU FINISHED &nbsp;<span class="dot-sep">&bull;</span>&nbsp; CHAPTER 9</div>
          <div style="display:flex; align-items:center; gap:.08in; color:var(--orange); font-family:'Caveat'; font-size:18pt;">
            <span>that's the book</span>
            <span style="font-size:26pt; line-height:1;">&rarr;</span>
          </div>
        </div>

        <div style="margin-top:.16in;">
          <div style="display:flex; align-items:center; gap:.06in;">
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; letter-spacing:.1em; color:var(--ink-soft);">WHERE YOU ARE</div>
            <div style="flex:1; height:8px; background:var(--paper-deep); border-radius:99px; position:relative; overflow:hidden;">
              <div style="position:absolute; left:0; top:0; bottom:0; width:100%; background:var(--orange);"></div>
            </div>
            <div style="font-family:'Archivo'; font-weight:800; font-size:8pt; color:var(--orange);">9 / 9</div>
          </div>
        </div>

        <div style="margin-top:.24in;">
          <div style="display:flex; flex-direction:column; gap:.12in; max-width:4.6in;">
            <div class="eyebrow" style="color:var(--ink-mute);">THE QUESTIONS, ANSWERED</div>
            ${[
              ['Is my data safe?', 'Mostly yes. Paid plans don\'t train on your conversations. The real risk is what you paste in.'],
              ['When it screws up?', 'Verify anything that matters. Read what it writes before you approve it. The check is you.'],
              ['Will it replace me?', 'Some roles are already affected. The people who do well understand the tool well enough to use it and catch it.'],
              ['Getting dependent?', 'Pick three things to keep manual. Stay capable of doing without it. The choice stays yours.'],
              ['Burning out?', 'Stay weird on purpose. The tool handles speed. Only you can supply distinction.'],
            ].map(([q, a]) => `
              <div style="display:flex; gap:.14in; align-items:flex-start; padding:.1in .12in; background:var(--paper-deep); border-radius:6px;">
                <div style="flex:0 0 auto; font-family:'Caveat'; font-size:14pt; color:var(--orange); line-height:1.1; padding-top:.02in;">${q}</div>
                <div style="width:1px; background:var(--rule); align-self:stretch; margin: 0 .02in;"></div>
                <div class="small" style="color:var(--ink-soft);">${a}</div>
              </div>`).join('')}
          </div>
        </div>

        <div style="position:absolute; bottom:0; left:0; right:0; display:flex; justify-content:space-between; align-items:flex-end; gap:.2in;">
          <div style="max-width:3.4in;">
            <div style="font-family:'Caveat'; font-size:20pt; color:var(--orange); line-height:1;">That's the book. Go play.</div>
            <div class="small" style="color:var(--ink-mute); margin-top:.06in;">honestly, <b style="color:var(--ink);">brandon</b>. still not an algorithm.</div>
          </div>
          <div style="text-align:center; flex:0 0 auto;">
            <div style="width:1.25in; height:1.25in; border-radius:50%; overflow:hidden; display:flex; align-items:center; justify-content:center;">
              <img src="../../../assets/stickers/zen-arm-up.png" alt="" style="width:240%; height:240%; object-fit:contain; display:block;" />
            </div>
          </div>
        </div>
      </div>

      ${footer(7, "CH.9 &nbsp;&middot;&nbsp; QUESTIONS ANSWERED", "/09#done")}
    </section>
  `;
}

export function renderPages() {
  return [
    pageChapterOpener(),
    pageDataSafe(),
    pageWhenItScrewsUp(),
    pageWillItReplaceMe(),
    pageGettingDependent(),
    pageBurningOut(),
    pageFinal(),
  ];
}
