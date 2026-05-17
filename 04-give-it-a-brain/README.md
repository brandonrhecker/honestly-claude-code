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

Before we start, I'm assuming you completed chapters 02 and 03 or
got bored reading. Let's run a quick check that:

- You've installed Claude Code.
- You've successfully launched Claude Code in a folder.
- You've demanded Claude Code to write an `.md` file for its new overlord (you).

---

## why bother with CLAUDE.md

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

Think of it as the project's brain, or its little BELIEVE sign.
Written by you, persistent between sessions, always loaded.

---

## the actual steps — time to roll up your sleeves

For this chapter we'll set up a "personal writing" folder. You'll
write a CLAUDE.md that defines the project, then have Claude draft
something using your rules.

1. Open your terminal again (the same one from chapter 02).

2. Make a folder for your writing project and step into it. Pick
   your OS.

   **Mac, Linux, or WSL:**
   ```bash
   mkdir -p ~/claude-experiments/writing
   cd ~/claude-experiments/writing
   ```

   **Windows (PowerShell):**
   ```powershell
   mkdir ~\claude-experiments\writing
   cd ~\claude-experiments\writing
   ```

3. Launch Claude:
   ```bash
   claude
   ```
   *First time in this folder, Claude Code asks "Is this a folder
   you trust?" Pick **"Yes, I trust this folder"** + Enter.*

4. Ask Claude to write your CLAUDE.md for you. Paste this:

   ```
   Write a CLAUDE.md for this folder. This is where I'll keep my
   personal writing: short essays and journal entries. My writing
   voice is Ted Lasso: relentlessly warm, folksy wisdom, finds the
   good in everyone, with occasional mustache-based confidence.
   Around 400-600 words per piece. Save each piece as
   YYYY-MM-DD-slug.md. Approve the file when ready.
   ```

5. Claude will propose a CLAUDE.md file and ask permission. Read
   what it wrote. Approve when ready.

6. Now ask Claude to write something using those rules. Paste this:

   ```
   Write a pep talk for someone who's scared to start using AI.
   Follow the rules in CLAUDE.md.
   ```

7. Claude reads your CLAUDE.md, follows the rules (style, length,
   filename format), and writes the entry. Approve when ready.

8. Find your new file in `~/claude-experiments/writing/`. The
   filename follows the `YYYY-MM-DD-slug.md` pattern (so something
   like `2026-05-16-the-first-step.md`).

   - **Mac:** Open Finder, press `Cmd+Shift+G`, paste
     `~/claude-experiments/writing/`, hit Enter.
   - **Windows:** Open File Explorer, click your username in the
     left sidebar, then `claude-experiments` → `writing`.

   Double-click the new file to open it. Same Notepad/TextEdit/VS
   Code notes from chapter 03 apply.

9. Exit Claude:
   ```
   /exit
   ```

> BELIEVE. You just gave Claude a brain for this folder. Every future
> session loads those rules automatically.

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

Be a goldfish. CLAUDE.md not behaving? Don't dwell on it. Here's how to fix it.

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

You can do this. Onward.

Four chapters down. Next: skills. We'll install someone else's
workflow and use it in this same folder.

---

→ Next: [05 — Bolt on a skill](../05-bolt-on-a-skill/)

**Last verified: 2026-05-16 with Claude Code 2.1.138**
