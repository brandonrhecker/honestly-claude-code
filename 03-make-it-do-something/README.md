[← back to the book](../README.md)

# 03 — Make it do something for you

You installed Claude Code. Now you'll have it do an actual thing.
Not a hello-world, not a placeholder. Something you might actually
want.

This chapter has Claude write you a packing list. Why packing?
Because everyone's made one, it needs zero setup, and you'll end
up with a real file you can use.

---

## before you start

You need Claude Code installed and working (chapter 02). That's it.

---

## why bother

Until you watch Claude do something useful on your actual computer,
the whole thing is theoretical. This is the "oh, it's real" moment.

It's also the smallest possible demo of the loop: you ask, Claude
proposes, you approve, Claude writes. Every more-complex thing in
the rest of the book is just this with more sophistication.

---

## first, a word about .md files

You're about to have Claude make a `.md` file. If these have ever
intimidated you, you're not alone. They tripped me up too when I
started.

**What it is:** Markdown. Plain text with simple formatting baked in:
`#` for headers, `-` for bullets, `**bold**` for bold. Readable as
plain text; renders pretty when a viewer interprets it.

**Do you need to install anything?** No. The default text editor on
your computer (TextEdit on Mac, Notepad on Windows) opens it fine.
You'll see raw markdown characters mixed in with the text. Still
readable, just not pretty.

**Want it to look nice?** Install **VS Code** (free,
[code.visualstudio.com](https://code.visualstudio.com)). Open the
`.md` file in it, then hit `Cmd+Shift+V` (Mac) or `Ctrl+Shift+V`
(Windows) for a rendered preview side-by-side. That's the easiest
free path.

| Opened in | What you see |
|---|---|
| Notepad / TextEdit (default) | Raw: `#` and `-` mixed with text |
| VS Code + preview | Pretty rendered |
| GitHub if you upload it | Pretty rendered automatically |
| Obsidian / Bear / Notion | Pretty rendered |

**Heads up:** this whole book is written in Markdown. Every chapter,
every bullet, every table. (If you're reading this on GitHub, you're
literally seeing it render right now.)

---

## the actual steps — time to roll up your sleeves

1. Open your terminal again. The same one from chapter 02. Not
   Notepad, not your browser, not your email: the terminal app.

   - **Mac:** `Cmd+Space`, type `Terminal`, hit Enter.
   - **Windows:** Windows key, type `Terminal` (or `PowerShell`), hit
     Enter.
   - **Linux:** you already know.

2. Make a folder for this and step into it. Paste this into the
   terminal and hit Enter:
   ```bash
   mkdir -p ~/claude-experiments/packing-list && cd ~/claude-experiments/packing-list
   ```
   *(In English: `~` is your home folder. `mkdir -p` creates a folder
   called `claude-experiments` (where all your Claude tinkering will
   live) and inside it one called `packing-list`. `cd` moves you into
   it. The `&&` between them just means "then do the next thing.")*

3. Launch Claude:
   ```bash
   claude
   ```

4. When you see the prompt, paste this (or change it for a trip
   you're actually planning):

   ```
   Write me a packing list for a 4-day trip to a warm climate.
   Essentials only: clothes, toiletries, electronics, paperwork.
   Save it as packing-list.md in this folder.
   ```

5. Claude will show you what it's about to write and ask for
   permission. **Read it.** Then approve.

6. The file lands at `~/claude-experiments/packing-list/packing-list.md`.
   Open it however you'd open any other file on your computer.

7. Exit Claude when you're done:
   ```
   /exit
   ```

> You just had Claude write a real file on your real computer. That's
> the whole game.

---

## what just happened

You did five things in sequence:

- **Launched Claude in a specific folder.** Claude can only see and
  write to the folder you launched from (and subfolders).
- **Gave it a real prompt**, not a test. An actual thing.
- It **proposed an action** (writing a file) and waited for your okay.
- You **approved**, and it did the thing.
- The file exists. On your disk. Yours to edit, delete, or send.

The "ask permission before writing" step is core to how Claude Code
works. It's not autonomous. You're always the human in the loop.
That's a feature, not a bug.

---

## in case of emergency

Did Claude get weird on you? It happens. Not your fault. Let's fix it.

| Message | What it means | What to do |
|---|---|---|
| `claude: command not found` | The install didn't take | Re-run chapter 02 from your OS section |
| Claude wrote the file in the wrong place | You launched from the wrong folder | `/exit`, `cd` to the folder you want, launch `claude` again |
| Claude refused to write | It might have hit a permission setting | Run `/permissions` inside Claude to see what's allowed |
| Claude wrote something weird or wrong | The model is good but not magic | Try the prompt again with more specific details. Tell it exactly what to fix. |
| You can't find the file | Probably in a different folder than you think | Type `pwd` after exiting Claude. That's the folder it was working in |

---

## now you can

- Launch Claude in a folder and have it write files there
- Read a Claude action proposal and decide whether to approve
- Find and use the files Claude creates on your disk
- Trust that Claude isn't going to do something destructive without
  asking first

Three chapters down. The next one teaches Claude **where it is** and
**what your project is about**. A much bigger shift than it sounds.

---

→ Next: [04 — Give it a brain](../04-give-it-a-brain/)

**Last verified: 2026-05-16 with Claude Code 2.1.138**
