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
      <p style="margin-bottom:.1in;">The honest answer is "yes, mostly, and here's where you should still pay attention." Here's what actually happens.</p>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:.07in;">
        <div style="background:var(--paper-deep); padding:.09in .11in; border-radius:6px; border-top:2px solid var(--orange);">
          <div style="font-family:'Archivo',sans-serif; font-weight:800; font-size:6.5pt; letter-spacing:.12em; text-transform:uppercase; color:var(--orange); margin-bottom:.04in;">STAYS ON YOUR MACHINE</div>
          <div style="font-family:'Source Sans 3',sans-serif; font-size:9.5pt; line-height:1.4; color:var(--ink-soft);">Your project files, <span style="font-family:'JetBrains Mono'; font-size:.82em; background:var(--rule); padding:1px 3px; border-radius:3px;">~/.claude/</span> folder, session transcript, code Claude writes to disk. Claude can't reach the internet without your approval.</div>
        </div>
        <div style="background:var(--paper-deep); padding:.09in .11in; border-radius:6px; border-top:2px solid var(--ink-mute);">
          <div style="font-family:'Archivo',sans-serif; font-weight:800; font-size:6.5pt; letter-spacing:.12em; text-transform:uppercase; color:var(--ink-mute); margin-bottom:.04in;">LEAVES YOUR MACHINE</div>
          <div style="font-family:'Source Sans 3',sans-serif; font-size:9.5pt; line-height:1.4; color:var(--ink-soft);">Your prompt, the contents of any files Claude needed to read, and Claude's output. It has to. The model lives on Anthropic's servers, not yours.</div>
        </div>
        <div style="background:var(--paper-deep); padding:.09in .11in; border-radius:6px; border-top:2px solid var(--ink-mute);">
          <div style="font-family:'Archivo',sans-serif; font-weight:800; font-size:6.5pt; letter-spacing:.12em; text-transform:uppercase; color:var(--ink-mute); margin-bottom:.04in;">TRAINING ON YOUR CHATS?</div>
          <div style="font-family:'Source Sans 3',sans-serif; font-size:9.5pt; line-height:1.4; color:var(--ink-soft);">No, not by default for Pro, Max, and API users. Free users are asked to opt in or out. Policies change. Check anthropic.com/legal/privacy before you assume.</div>
        </div>
        <div style="background:var(--paper-deep); padding:.09in .11in; border-radius:6px; border-top:2px solid var(--orange);">
          <div style="font-family:'Archivo',sans-serif; font-weight:800; font-size:6.5pt; letter-spacing:.12em; text-transform:uppercase; color:var(--orange); margin-bottom:.04in;">THE ACTUAL RISK</div>
          <div style="font-family:'Source Sans 3',sans-serif; font-size:9.5pt; line-height:1.4; color:var(--ink-soft);">What you paste in. Don't paste API keys, passwords, customer data, anything covered by NDA or HIPAA, or anything you'd regret having in a log.</div>
        </div>
      </div>
    `,
    compact: true,
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
      <p style="margin-bottom:.07in;">Claude is going to confidently tell you something false. Sometimes spectacularly false. With perfect grammar and zero hesitation. This is the most important thing to know before you trust it with anything that matters.</p>
      <p style="margin-bottom:.07in;"><strong>What hallucinations look like:</strong> citations that don't exist, made-up commands, quotes attributed to people who never said them, confident wrong math, plausible-sounding biographical details that are wrong, filenames or paths that don't exist in your project.</p>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:.07in; margin-bottom:.07in;">
        <div style="background:var(--paper-deep); padding:.09in .11in; border-radius:6px; border-top:2px solid var(--orange);">
          <div style="font-family:'Archivo',sans-serif; font-weight:800; font-size:6.5pt; letter-spacing:.12em; text-transform:uppercase; color:var(--orange); margin-bottom:.04in;">HIGH RISK</div>
          <div style="font-family:'Source Sans 3',sans-serif; font-size:9.5pt; line-height:1.4; color:var(--ink-soft);">Legal or financial stakes, medical info (dosages especially), citations you'll publish, commands Claude wants to run, specific dates and numbers, anything you'll send to another human as fact.</div>
        </div>
        <div style="background:var(--paper-deep); padding:.09in .11in; border-radius:6px; border-top:2px solid var(--ink-mute);">
          <div style="font-family:'Archivo',sans-serif; font-weight:800; font-size:6.5pt; letter-spacing:.12em; text-transform:uppercase; color:var(--ink-mute); margin-bottom:.04in;">LOWER RISK</div>
          <div style="font-family:'Source Sans 3',sans-serif; font-size:9.5pt; line-height:1.4; color:var(--ink-soft);">Brainstorming, reformatting content, explaining concepts you already understand, first drafts you'll edit anyway.</div>
        </div>
      </div>
      <p style="margin-bottom:0;"><strong>How to catch it:</strong> ask "how do you know that?" Verify the one or two claims your decision actually rests on. Read what it wrote, line by line, before you click yes.</p>
    `,
    compact: true,
    tldr: ' Claude will confidently make things up. Read everything it wants to change. Verify anything that matters. The check is you.',
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
      <p style="margin-bottom:.05in;">The honest answer doesn't fit in a sentence. The doomers say the end times are here. The consultants say you'll be fine if you "embrace transformation." Neither knows your specific situation.</p>
      <p style="margin-bottom:.05in;"><strong>Direct-replacement risk:</strong> Some jobs are already being affected. Right now. Tier-1 customer service, copy editing, junior coding work, transcription, first-draft copywriting, basic graphic design, data entry, paralegal first-pass document review. If you're in one of these, the honest move is to climb up the value chain or pivot toward judgment, relationships, or physical presence.</p>
      <p style="margin-bottom:.15in;"><strong>Second-order risk (even if your job is "safe"):</strong> When some jobs disappear, those workers apply for the remaining ones. Hiring tightens everywhere. AI-augmented output becomes the new baseline. Even "safe" roles see pay compression as the broader job market loosens.</p>
      <div style="padding:.09in .14in; border-left:3px solid var(--orange); background:var(--paper-deep); border-radius:0 6px 6px 0;">
        <div style="font-family:'Caveat',cursive; font-weight:700; font-size:19pt; line-height:1.15; color:var(--ink);">You're not waiting for someone to translate "AI" for you. <span style="color:var(--orange);">That's already most of the game.</span></div>
      </div>
    `,
    compact: true,
    tldr: ' Some roles are already affected. The people who do well are the ones who understand the tool well enough to use it and catch it.',
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
      <p style="margin-bottom:.05in;">You reach for Claude before you've thought about the problem. You feel stuck without it. You can't remember how you used to start a draft. Congratulations: that's the slide.</p>
      <p style="margin-bottom:.05in;"><strong>What dependency looks like:</strong> reaching for Claude before you've thought about the problem, panic when it's down, forgetting how you used to do things you used to do, outsourcing things you actually wanted to do yourself.</p>
      <p style="margin-bottom:.05in;"><strong>The two kinds:</strong> healthy reliance (you use it because it's the right tool; you could do without; you just don't want to) versus unhealthy dependency (you can't do without; the skill has gone soft; the choice isn't yours anymore).</p>
      <p style="margin-bottom:.1in;"><strong>Skills that go soft first:</strong> writing your own first sentence, holding a thought long enough to develop it, sitting with the discomfort of not knowing, knowing when something is good without asking, trust in your own judgment.</p>
      <div style="padding:.09in .14in; border-left:3px solid var(--orange); background:var(--paper-deep); border-radius:0 6px 6px 0;">
        <div style="font-family:'Caveat',cursive; font-weight:700; font-size:19pt; line-height:1.15; color:var(--ink);">Pick three things that stay yours. Notice the reach. <span style="color:var(--orange);">The choice stays yours.</span></div>
      </div>
    `,
    compact: true,
    tldr: ' The slide is slow. Pick three things to keep manual, on purpose. The goal isn\'t using it less. It\'s staying capable of doing without it.',
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
      <p style="margin-bottom:.05in;">AI is everywhere now, whether you use it or not. Even if you never open Claude, the people around you are. The result is a kind of tiredness most of us don't have a name for yet.</p>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:.05in; margin-bottom:.05in;">
        <div style="background:var(--paper-deep); padding:.07in .09in; border-radius:6px; border-top:2px solid var(--orange);">
          <div style="font-family:'Archivo',sans-serif; font-weight:800; font-size:6.5pt; letter-spacing:.12em; text-transform:uppercase; color:var(--orange); margin-bottom:.03in;">VERIFICATION FATIGUE</div>
          <div style="font-family:'Source Sans 3',sans-serif; font-size:9.5pt; line-height:1.4; color:var(--ink-soft);">Constant fact-checking exhausts your brain in a way doing the work yourself doesn't.</div>
        </div>
        <div style="background:var(--paper-deep); padding:.07in .09in; border-radius:6px; border-top:2px solid var(--ink-mute);">
          <div style="font-family:'Archivo',sans-serif; font-weight:800; font-size:6.5pt; letter-spacing:.12em; text-transform:uppercase; color:var(--ink-mute); margin-bottom:.03in;">DECISION FATIGUE</div>
          <div style="font-family:'Source Sans 3',sans-serif; font-size:9.5pt; line-height:1.4; color:var(--ink-soft);">"Take it, edit it, redo it, or scrap it?" Multiplied across a full day.</div>
        </div>
        <div style="background:var(--paper-deep); padding:.07in .09in; border-radius:6px; border-top:2px solid var(--ink-mute);">
          <div style="font-family:'Archivo',sans-serif; font-weight:800; font-size:6.5pt; letter-spacing:.12em; text-transform:uppercase; color:var(--ink-mute); margin-bottom:.03in;">HOLLOW-CONTENT FATIGUE</div>
          <div style="font-family:'Source Sans 3',sans-serif; font-size:9.5pt; line-height:1.4; color:var(--ink-soft);">Scrolling past posts that all sound like the same person wrote them. Because they kind of did.</div>
        </div>
        <div style="background:var(--paper-deep); padding:.07in .09in; border-radius:6px; border-top:2px solid var(--orange);">
          <div style="font-family:'Archivo',sans-serif; font-weight:800; font-size:6.5pt; letter-spacing:.12em; text-transform:uppercase; color:var(--orange); margin-bottom:.03in;">IDENTITY DRAG</div>
          <div style="font-family:'Source Sans 3',sans-serif; font-size:9.5pt; line-height:1.4; color:var(--ink-soft);">Finishing a piece of writing that doesn't feel like you wrote it.</div>
        </div>
      </div>
      <p style="margin-bottom:.07in;"><strong>The sameness problem:</strong> same tools, same prompts, same outputs. Emails sound the same. Decks look the same. Articles read the same. People who get pulled in stop standing out and stop standing for anything.</p>
      <div style="padding:.07in .14in; border-left:3px solid var(--orange); background:var(--paper-deep); border-radius:0 6px 6px 0;">
        <div style="font-family:'Caveat',cursive; font-weight:700; font-size:19pt; line-height:1.15; color:var(--ink);">Stay weird on purpose. <span style="color:var(--orange);">The model is a tool, not a co-author.</span></div>
      </div>
    `,
    compact: true,
    tldr: ' AI burnout is real. The antidote is weirdness, on purpose. The automated world rewards both speed and distinction. Only you can supply the second one.',
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
