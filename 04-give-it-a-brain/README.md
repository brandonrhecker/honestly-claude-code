[← back to the book](../README.md)

# 04 — Give it a brain

In chapter 03, you launched Claude in a folder and asked for a
packing list. It worked, but Claude went in blind. It didn't know
what the folder was for, what you preferred, or what rules to follow.

That's where CLAUDE.md comes in. CLAUDE.md is the magic file that
tells Claude WHAT a folder is, WHO you are, and HOW you want it to
behave inside that folder.

This chapter: you will create your first CLAUDE.md and watch Claude
actually follow it.

---

## quick check before we start

I'm assuming you've made it through chapters 02 and 03 (or got bored
and skipped — totally fair). Let's make sure together: you've got
Claude installed, you've launched it in a folder, and you've had it
write a file for its overlord (you). If all that's true, let's keep
going.

---

## why bother

Without CLAUDE.md, every time you launch Claude in a folder it's
starting fresh. You have to re-explain context every session.

With CLAUDE.md, Claude reads the file the moment you launch. It
acts like someone who's been working on the project with you for
weeks.

The difference between repeating yourself forever and having Claude
actually know what you're doing.

---

## first, a word about CLAUDE.md

It's just a `.md` file (you learned about those in chapter 03) with
a specific name: `CLAUDE.md` (uppercase, exactly).

**Where it lives:** in the root of whatever folder you launch Claude
from. One per project.

**What it contains:** anything you want Claude to know about the
project. Examples:

- What the project is for
- Your preferences (style, tone, length)
- Specific rules ("always save drafts as YYYY-MM-DD-slug.md")
- Tools or services this project uses
- Things to NEVER do

**How Claude reads it:** automatically, every time you launch in
that folder. You don't tell it to read it. It just does.

Think of it as the project's brain. Written by you, persistent
between sessions, always loaded.

---

## the actual steps — time to roll up your sleeves

For this chapter we'll set up a "personal writing" folder. You'll
write a CLAUDE.md that defines the project, then have Claude draft
something using your rules.

1. Open your terminal again (the same one from chapter 02).

2. Make a folder for your writing project and step into it:
   ```bash
   mkdir -p ~/claude-experiments/writing && cd ~/claude-experiments/writing
   ```

3. Launch Claude:
   ```bash
   claude
   ```

4. Ask Claude to write your CLAUDE.md for you. Paste this:

   ```
   Write a CLAUDE.md for this folder. This is where I'll keep my
   personal writing: short essays and journal entries. My style
   is conversational, mildly self-deprecating, around 400-600 words
   per piece. Save each piece as YYYY-MM-DD-slug.md. Approve the
   file when ready.
   ```

5. Claude will propose a CLAUDE.md file and ask permission. Read
   what it wrote. Approve when ready.

6. Now ask Claude to write something using those rules. Paste this:

   ```
   Write a short journal entry about how it feels to learn AI tools
   as a non-engineer in 2026. Follow the rules in CLAUDE.md.
   ```

7. Claude reads your CLAUDE.md, follows the rules (style, length,
   filename format), and writes the entry. Approve when ready.

8. Exit Claude:
   ```
   /exit
   ```

> You just gave Claude a brain for this folder. Every future session
> in this folder loads those rules automatically.

---

## what just happened

You did something subtle but important:

- You **created a project-level CLAUDE.md** that defines what this
  folder is for and how you want Claude to behave inside it
- Claude **automatically read it** when you ran the second prompt.
  You didn't have to tell it to.
- It **followed the rules**: the style, the length, the filename
  format
- This works for EVERY future session you launch in this folder

You can edit `CLAUDE.md` directly any time (it's just a text file).
Add new rules, remove old ones, refine the style description. Claude
picks up the changes the next time you launch.

---

## in case of emergency

CLAUDE.md not behaving the way you'd expect? Probably one of these.

| Symptom | What it means | What to do |
|---|---|---|
| Claude wrote something that ignores your CLAUDE.md | Either the file is misnamed (must be `CLAUDE.md` exactly, uppercase) or you launched Claude in a different folder | Run `ls` to see the file list. Check that `CLAUDE.md` is there. Confirm you're in the right folder with `pwd`. |
| You can't find CLAUDE.md after creating it | Probably saved in the wrong folder | Type `pwd` to see where Claude was working. That's where the file is. |
| Claude follows some rules but not others | Rules might be ambiguous, contradictory, or buried in long paragraphs | Open CLAUDE.md and rewrite the conflicting parts as a bulleted list. Shorter, more specific. |
| CLAUDE.md is too long and Claude seems to ignore parts | Lots of context means Claude has more to weigh | Trim to the essentials. Aim for 200-400 words. |

---

## now you can

- Create a CLAUDE.md in any folder to define what it's for
- Have Claude read project context automatically every session
- Edit CLAUDE.md to refine rules over time
- Know that "Claude doesn't remember" is half-true: it doesn't
  remember conversations, but a project's CLAUDE.md is forever

Four chapters down. Next: skills. We'll install someone else's
workflow and use it in this same folder.

---

→ Next: [05 — Bolt on a skill](../05-bolt-on-a-skill/)

**Last verified: 2026-05-16 with Claude Code 2.1.138**
