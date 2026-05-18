[← back to the book](../README.md)

# When it screws up

Claude is going to confidently tell you something false. Sometimes
spectacularly false. With perfect grammar. With zero hesitation.

This is the most important thing to know about AI before you trust
it with anything that matters.

---

## 1. what it actually looks like

The technical name is "hallucination." In practice it shows up
like this:

- **Citations that don't exist.** Author names, paper titles, page
  numbers, all fabricated, all rendered with the confident
  formatting of real citations.
- **Code that imports libraries that aren't real.** The library
  name sounds plausible. The function signature looks right. It
  doesn't exist on the package registry.
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

## 2. where it matters most

The cost of being wrong isn't equal across topics. Highest-risk,
the ones to never trust blindly:

- **Anything with legal or financial stakes.** Contracts, tax
  questions, regulations.
- **Medical information.** Especially dosages, interactions,
  specific advice.
- **Citations and sources for anything you'll publish.** Always
  verify.
- **Code that touches production systems.** Always read it line
  by line before clicking yes.
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

## 3. how to catch it

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

## 4. when to trust it more

Trust goes up when:

- You can verify the answer cheaply (run the code, search for the
  quote, check the date)
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

## 5. where this leaves you

Claude is good. It's also a confident liar when it doesn't know
something. Both are true at the same time.

The shift is small. Treat Claude like a smart contractor who
happens to make things up under pressure. You still hire them. You
still use what they give you. You don't take any of it as fact
without checking the things that matter.

That's the whole game. The people who do well with this tool are
the ones who never forgot to check.

---

[← back to the book](../README.md)

**Last verified: 2026-05-18 with Claude Code 2.1.138**
