[← back to the book](../README.md)

# 09: The questions you came here with

## Is my data safe?

The honest answer is "yes, mostly, and here's where you should still
pay attention." The marketing-y answer is "Anthropic is committed to
your privacy." The internet-paranoid answer is "they're stealing
your soul." Both of those are useless. Here's what actually happens.

---

### 1. what stays on your computer

When you launch Claude Code in a folder, this stuff never leaves
your machine:

- The files in that folder, unless Claude needs to read one to
  answer you
- Your `~/.claude/` folder (memory, plugins, MCPs, settings)
- Your session transcript (logged locally)
- Any code or text Claude writes to disk

Claude Code can't reach the internet on its own. It has to ask
permission to fetch a URL or run a command that touches the network.
You're the one who approves it.

---

### 2. what leaves your computer

When you type a prompt, three things go to Anthropic's servers:

- The prompt you typed
- The contents of any files Claude needed to read to answer it
- The output Claude generated

That's the deal. It has to. The model lives on their servers, not
yours. There's no "private mode" that processes locally.

---

### 3. does Anthropic train on your conversations?

Short version, as of 2026: no, not by default.

- **Pro and Max plans:** Anthropic does not train on your
  conversations.
- **API:** same.
- **Free claude.ai:** they ask you to opt in or out. If you opt in,
  your stuff might end up in training data. If you opt out, it
  doesn't.

Policies change. Read the current one at
https://anthropic.com/legal/privacy before you assume.

---

### 4. the actual risk

The risk isn't "Anthropic is reading my files." The risk is what
YOU paste into a conversation.

Treat Claude Code like talking to a competent contractor:

- Don't paste your API keys, passwords, or auth tokens. Anthropic
  isn't going to use them, but they're now sitting in a log
  somewhere.
- Don't paste your customer database. Same reason.
- Don't paste anything covered by NDA, HIPAA, or your employment
  contract without checking first.
- Your therapy journal, your unfinished manuscript, your private
  letters: also worth thinking twice about. Once it's in the
  conversation it's in their logs. Even if they don't train on it,
  it exists.

The same rule applies to MCPs (chapter 06). If you connect Claude
to your inbox, your inbox contents flow through Anthropic's
processing every time the MCP gets used.

---

### 5. where this leaves you

Claude Code is safer than most chatbot products on the "are they
training on me" question. It's NOT safe from your own
paste-without-thinking habits. That part is on you.

The rule:

- Anything sensitive: don't put it in a prompt
- Anything secret: don't put it in a prompt
- Anything you wouldn't email a contractor: don't put it in a prompt

That's most of it. The rest is just a tool.

---

## When it screws up

Claude is going to confidently tell you something false. Sometimes
spectacularly false. With perfect grammar. With zero hesitation.

This is the most important thing to know about AI before you trust
it with anything that matters.

---

### 1. what it actually looks like

The technical name is "hallucination." In practice it shows up
like this:

- **Citations that don't exist.** Author names, paper titles, page
  numbers, all fabricated, all rendered with the confident
  formatting of real citations.
- **Made-up tools or commands.** Claude will tell you to install
  something that doesn't exist, or run a command that isn't real.
  Sounds correct. Doesn't work.
- **Quotes attributed to people who never said them.** Often
  rendered with quotation marks and a fake date for extra
  credibility.
- **Confident wrong math.** Especially anything that needs many
  steps. The format looks correct. The number doesn't.
- **Plausible-sounding biographical detail.** A wrong birth year,
  a wrong company, a wrong job title. Delivered with the same
  confidence as the true ones.
- **Made-up filenames or paths.** Claude will reference a file
  that doesn't exist in your project because it "should" exist
  given the structure.

The pattern: anything Claude is uncertain about, it doesn't tell
you. It guesses confidently and moves on.

---

### 2. where it matters most

The cost of being wrong isn't equal across topics. Highest-risk,
the ones to never trust blindly:

- **Anything with legal or financial stakes.** Contracts, tax
  questions, regulations.
- **Medical information.** Especially dosages, interactions,
  specific advice.
- **Citations and sources for anything you'll publish.** Always
  verify.
- **Commands Claude wants to run on your computer.** Especially
  anything that deletes, installs, or moves files. Always read it
  line by line before clicking yes.
- **Specific dates, numbers, or named people.** Especially recent
  events.
- **Anything you'll send to another human as fact.** If you'd be
  embarrassed for it to be wrong, verify it first.

Lower-risk, where you can trust more freely:

- Brainstorming, drafting, summarizing
- Reformatting content (prose into a table, list into prose, etc.)
- Explaining a concept you already understand at a basic level
- Writing your own first draft of something you'll edit anyway

---

### 3. how to catch it

You don't need to be a fact-checking robot. Three habits cover
most of it:

**Ask "how do you know that?"** If Claude states a fact, ask for
the source. If the source it gives is vague ("a 2023 study") or
suspicious ("according to a Harvard paper"), it's probably made
up.

**Verify the load-bearing claim.** Most of what Claude says
doesn't matter. The one or two claims your decision actually
rests on: those, you check. Search for them. Read the actual
source.

**Read what it wrote.** When Claude proposes a file edit, read it
line by line before you click yes. Even when half of it might as
well be in Greek, look anyway. When Claude writes you a draft,
read every sentence. The check is YOU. Approving without reading
defeats the whole "human in the loop" point.

---

### 4. when to trust it more

Trust goes up when:

- You can verify the answer cheaply (try it and see if it works,
  search for the quote, check the date)
- You're using Claude to organize information you already gave it
  (summarize this file, reformat that data)
- The task has low stakes and you'd catch a mistake easily
- You can ask Claude to show its work and check the reasoning

Trust goes down when:

- The answer is one you can't easily verify
- Claude is generating facts, dates, names, or numbers from
  scratch
- The topic is technical and you don't have the expertise to spot
  a wrong answer
- You're using output without reading it

---

### 5. where this leaves you

Claude is good. It's also a confident liar when it doesn't know
something. Both are true at the same time.

The shift is small. Treat Claude like a smart contractor who
happens to make things up under pressure. You still hire them. You
still use what they give you. You don't take any of it as fact
without checking the things that matter.

That's the whole game. The people who do well with this tool are
the ones who never forget to check.

---

## Will it replace me?

The honest answer doesn't fit in a sentence, which is why every
short version you've seen is junk. The doomers say the end times
are here. The consultants say you'll be fine, but only if you
"embrace transformation." Neither of them knows your specific
situation.

---

### 1. the direct-replacement risk

Some jobs are already being replaced. Not "in five years." Right
now. Anyone telling you otherwise is selling something.

Roles getting hit first:

- **Tier-1 customer service:** chatbots handle the basic intake.
  Humans only get escalations.
- **Copy editing and proofreading:** first-pass cleanup is a Claude
  prompt away.
- **Junior coding work:** boilerplate, simple bug fixes, scaffolding.
- **Transcription and captioning:** Whisper and friends do it in
  real time.
- **First-draft copywriting:** marketing copy, blog filler, social
  posts.
- **Basic graphic design:** templates, banners, simple social assets.
- **Data entry and data labeling:** pattern-recognition tasks are
  core AI territory.
- **Paralegal first-pass document review:** the grunt work of legal
  research.

If you're in one of these, you're not paranoid. The honest move is
to either climb up the value chain in your current field (the
senior version is harder to replace), or pivot into something where
judgment, relationships, or physical presence matter more.

If you're not on the list, don't get smug. Section 2 is for you.

---

### 2. the second-order risk

This is the part nobody's writing about, and it's the one that
touches you whether you're on the list or not.

Three things press on you even if your job is "safe":

**Fewer total jobs means more competition for the ones left.** When
20% of marketing-copy jobs evaporate, those people don't vanish.
They apply for the other 80% of marketing jobs. Hiring tightens for
everyone in that field, not just the displaced. You're suddenly
competing with more people for the same role.

**AI-augmented output becomes the new baseline.** The senior dev
who writes 200 lines of code a day stops being "productive" when
the dev next to them writes 600 with Claude. Same for designers,
writers, analysts, paralegals, anyone whose output you can count.
The bar moves whether you adopt or not. Refusing to use the tools
doesn't keep the bar where it was. It just leaves you below it.

**Even "safe" roles face pay compression.** When the broader job
market loosens, employers get the upper hand everywhere. Nurses,
plumbers, teachers, in-person salespeople (roles AI can't touch)
still feel it. Your wages crawl slower. Your raise is smaller.
Nobody fires you. The math just gets quietly harder.

None of these is a guarantee. All three are pressure. The truthful
answer to "will AI affect my job" is yes, probably, even if it
doesn't replace you outright.

---

### 3. where this leaves you

The LinkedIn posts keep telling you to "future-proof your career"
with a 12-step framework. That's not how this works.

Where it actually leaves you is here: you understand what this
thing is and what it isn't. You can use it. You can tell when its
output is good and when it's bullshit. You're not waiting for
someone to translate "AI" for you, because you ARE the person
doing the translating.

That's already most of the game. You're in that camp by reading
this book. The work now is to stay there. Keep using it. Pay
attention to what changes. Most people won't, and that's the gap
that keeps you ahead.

Nobody can take that from you. The only way to lose it is to look
away.

---

## Getting dependent

You reach for Claude before you've thought about the problem.
You feel stuck without it. You can't remember how you used to
start a draft.

Congratulations. You're a power user. That's the polite word for
dependent.

---

### 1. what dependency actually looks like

The slide is slow, which is what makes it hard to catch. Things
to watch for:

- You reach for Claude before you've thought about the problem
- You feel stuck starting anything without it
- You panic a little when it's down
- You stop remembering how you used to do things you used to do
- Your first instinct for any small task is "ask the model"
- Tasks you used to enjoy now feel slow without help
- You catch yourself outsourcing things you actually wanted to
  do yourself

One or two of these is normal. Five or more is the slide.

---

### 2. the two kinds of dependency

The line between "useful tool I rely on" and "thing I can't
function without" matters. Both look the same from the outside.
They feel different from the inside.

- **Healthy reliance.** You use the tool because it's the right
  tool for the job. You could do it without. You just don't want
  to.
- **Unhealthy dependency.** You can't do it without. The skill
  has gone soft. The choice isn't yours anymore.

The first is the same as relying on Google or a calculator. The
second is the trap.

---

### 3. what goes soft if you outsource everything

This is the honest list. The skills most people lose first when
they hand too much to AI:

- Writing your own first sentence
- Holding a thought long enough to develop it
- Sitting with the discomfort of not knowing
- Rereading your own work and catching what's off
- Knowing when something is good without asking
- Patience for a hard problem
- Trust in your own judgment

These don't disappear overnight. They go soft slowly. That's
what makes them hard to notice.

---

### 4. what to do about it

The fix is the same as for any tool you use a lot. Keep some
things manual on purpose.

**Pick three things that stay yours.** Things you do without AI,
every time. Maybe it's the first draft of anything important.
Maybe it's messages to people you love. Maybe it's the journal
you keep. The list is yours. The point is having one.

**Notice the reach.** Before you open Claude, ask: do I actually
need it for this, or am I just reaching? Most of the time it's
just a reach.

**Sit with the not-knowing.** The instinct to ask the second
you're stuck is the dependency forming. Let yourself be stuck
for five minutes first. Sometimes the thinking that happens in
those five minutes is the part you needed.

**Practice the manual version.** If you haven't written a
paragraph from scratch in three months, that's a skill that's
already gone soft. Do one a week. Not because there's an
emergency. So the emergency stays survivable.

---

### 5. where this leaves you

You're going to use AI. That's fine. The honest goal isn't "use
it less." It's "stay capable of doing without it."

The people who do well over the long run aren't the most
dependent on the tool. They're the ones who can put it down when
they want to and pick it back up when it helps. The choice stays
theirs.

Don't outsource the parts of you that matter most.

---

## Burning out in an automated world

Open LinkedIn. The posts blur into each other. Open the latest
pitch deck or marketing page your team shared. You've seen this
template before.

AI is everywhere now, whether you use it or not. Even if you
never open Claude, the people around you are. The result is a
kind of tiredness most of us don't have a name for yet.

---

### 1. what burnout looks like now

Some of it comes from using AI directly. Some of it comes from
existing near it. Both are real:

- **Constant verification.** You finish a Claude session and
  your brain has been quietly cross-checking everything it said
  for an hour. Exhausting in a way that doing the work yourself
  isn't.
- **Decision fatigue.** Every output is "do I take this, edit
  this, redo this, or scrap it?" Multiplied across a day, it
  compounds.
- **The dread of falling behind.** A coworker writes the report
  in 20 minutes that used to take you an afternoon. You don't
  know whether you can sustain matching them. Even if you could,
  you're not sure you want to.
- **Hollow-content fatigue.** You scroll past ten LinkedIn posts
  in a row. None of them stick. They all sound like the same
  person wrote them, because they kind of did.
- **Identity drag.** You finish a piece of writing and it
  doesn't feel like you wrote it. Even when you did. The doubt
  costs energy.
- **Always-on availability of help.** When you could solve any
  problem in 30 seconds, you stop letting problems sit. The
  thinking that happens between question and answer never gets
  a chance to happen.

These don't recover the way normal tiredness does. A weekend off
doesn't reset them. That's the tell.

---

### 2. the sameness problem

Here's the part nobody's writing about yet. The biggest cost of
an AI-soaked world isn't burnout from using it. It's the slow
merge into everyone else.

Same tools. Same prompts. Same outputs. The emails sound the
same. The decks look the same. The articles read the same. The
pitches are the same pitch with a different logo on it.

The technical word for this is **mimetic behavior**: people
copying each other (and the model copying everyone) until the
outputs converge. The plain word for it is **the blend**. Either
way, it's already happening.

People who get pulled into the blend stop standing out. They
also stop standing for anything. Both costs are real. Neither is
on a dashboard yet.

---

### 3. what to do about it

The fix isn't a productivity hack. It's permission, plus
weirdness.

**Use it less, on purpose.** Pick one or two tasks a week to do
without AI. Not to prove anything. To remember what the work
feels like in your own hands.

**Stay weird, on purpose.** Pick the unusual word. Keep the
sentence that wouldn't have been generated. Defend the structure
that doesn't fit the template. The friction is the point.

**Notice when your work could've been generated, and rewrite
it.** If a paragraph reads like the model could've written it,
it's already lost. Make it yours again.

**Don't use it when you're tired.** Tired brains can't verify
output or hold a distinct voice. You'll either approve garbage
or let the blend take you.

**Take credit for your work.** The collaboration is real. The
output is yours. The model is a tool, not a co-author. The
identity drag dissolves when you name it.

**Let problems sit again.** Not every question needs an answer
in 90 seconds. Some of your best thinking happens between
asking and being given the answer, if you let it.

---

### 4. the system part

Some of this isn't on you. If your boss rolled out AI tools
with a "now you can do more" expectation attached, you're
feeling a squeeze you didn't agree to. If everyone in your job
is using the same tools to ship the same things, you're
competing against people running the same playbook.

A few questions worth asking:

- Has my expected output gone up since AI was introduced? By
  how much?
- Am I being measured on AI-assisted volume without my workflow
  being redesigned for it?
- Is everyone on my team starting to sound the same?
- Is anyone tracking whether the people on my team are okay?

If the answers point at trouble, you're not paranoid. You're
early. Write it down. The first people to put words on this
stuff are the ones who shape the conversation later.

---

### 5. where this leaves you

The automated world rewards two opposite things at the same
time. Speed: AI handles that. Distinction: only you can. The
people who do well over the long run aren't the fastest.
They're the ones who stayed recognizable.

You don't have to use AI every day. You don't have to use it
for everything. You're allowed to like it for some things, hate
it for others, and walk away when you need to.

The thing that makes you different is the thing that makes you
valuable. Don't blend in just because everyone else is.

---

→ Next: [Cheat sheet](../reference/cheat-sheet.md)

**Last verified: 2026-05-19 with Claude Code 2.1.138**
