[← back to the book](../README.md)

# 08 — Pull the plug

You tried it. Maybe it's not for you. Maybe you're moving to a new
machine and want a clean install. Maybe you're switching tools.
Whatever the reason, getting Claude Code off your computer should
be as easy as putting it on.

No hard feelings. This chapter walks you through the full uninstall:
the CLI, the configs, the demo folders, the optional supporting
stuff. Take what you need, skip what you don't.

---

## first, a word about what gets installed

When you went through chapter 02 and the chapters after it, a few
things landed on your machine:

- **Claude Code itself**: the `claude` command, installed via npm.
- **Your `~/.claude/` folder**: holds your memory, installed
  plugins, MCP registrations, skills, and Claude Code settings.
- **Demo folders**: `~/claude-experiments/packing-list/`,
  `writing/`, `brainstorm/` (whatever you created in chapters 03-06).
- **Node.js** (if you didn't have it already): the runtime Claude
  Code is built on.
- **uv** (only if you went through chapter 06): Python tool runner.
- **An Anthropic subscription** (Pro, Max, etc.): billing relationship
  with Anthropic.

Removing those one at a time, in that order, leaves your machine
back at neutral.

---

## the actual steps — time to roll up your sleeves

1. Open your terminal (same one from chapter 02).

2. Uninstall the Claude Code CLI:
   ```bash
   npm uninstall -g @anthropic-ai/claude-code
   ```
   *Removes the `claude` command from your machine.*

3. Remove the Claude Code config folder.

   **Mac/Linux:**
   ```bash
   rm -rf ~/.claude
   ```

   **Windows (PowerShell):**
   ```powershell
   Remove-Item -Recurse -Force $env:USERPROFILE\.claude
   ```
   *That folder held your memory, installed plugins, MCP
   registrations, and skill files. Wiping it leaves no trace of
   your Claude Code usage.*

4. (Optional) Remove the demo folders you made along the way:
   ```bash
   rm -rf ~/claude-experiments
   ```
   *Holds the packing list (chapter 03), writing folder (chapter 04),
   and brainstorm folder (chapter 05). Skip if you want to keep any
   of that.*

5. (Optional) If you installed Node just for Claude Code and don't
   use it for anything else, remove it.

   **Mac (NVM-installed):**
   ```bash
   nvm uninstall --lts
   ```

   Then remove NVM itself:
   ```bash
   rm -rf ~/.nvm
   ```

   And remove the NVM lines from your shell config:
   ```bash
   # Edit ~/.bashrc or ~/.zshrc and delete the lines that mention nvm
   ```

   **Windows:** Settings → Apps → find Node.js → Uninstall.

   *Skip this entire step if you use Node for anything else
   (websites, other tools, etc.).*

6. (Optional) If you went through chapter 06 and installed uv,
   remove it:
   ```bash
   uv cache clean
   ```

   Then uninstall uv itself:
   ```bash
   uv self uninstall
   ```
   *Skip if you use uv for other Python tools.*

7. (Optional) Cancel your Anthropic subscription. Open
   https://claude.ai → click your avatar → **Settings** →
   **Plans** → cancel or downgrade to free.
   *You won't be charged from the next billing cycle. The free
   claude.ai web chat still works. You just lose Claude Code
   access.*

> Done. Your machine is back to its pre-Claude state. No judgment.
> If you change your mind later, chapter 02 is right where you left
> it.

---

## what just happened

You removed (in this order):

- **The Claude Code CLI.** The `claude` command no longer exists on
  your machine.
- **Your `~/.claude/` folder.** Memory, plugins, MCPs, skills,
  settings. Gone.
- **(Optionally) demo folders and supporting tools.** If you cleaned
  those up too, your filesystem is back to where it was before
  chapter 02.
- **(Optionally) your Anthropic subscription.** Billing relationship
  ended.

One thing this does NOT do: delete your Anthropic account itself.
If you also want to delete the account (not just the subscription):
https://claude.ai → Settings → Account → delete.

---

## in case of emergency

The damn thing won't go away cleanly? Probably one of these.

| Symptom | What it means | What to do |
|---|---|---|
| `claude --version` still works after uninstall | Either the uninstall didn't finish or there's a leftover binary somewhere | Run `which claude` (Mac/Linux) or `where claude` (Windows) to find it. Delete the file. |
| `npm uninstall -g` says "not installed" | npm doesn't know about it. Either it was already uninstalled, or it was installed via a different method | Try `which claude` to find where it lives, then delete manually. |
| You removed `~/.claude/` but Claude Code is still configured | You launched Claude Code in a project folder that had its own `.claude/` directory | Delete `.claude/` from inside that project folder too. |
| Anthropic still charged you next month | Cancellation didn't go through on their end | Email Anthropic support; double-check Settings → Plans shows "Free." |

---

## now you can

- Start completely fresh with chapter 02 if you change your mind
- Move on with no clutter on your machine
- Tell people "yeah, you can uninstall it in like 5 commands" with
  first-hand credibility

---

[← back to the book](../README.md)

**Last verified: 2026-05-16 with Claude Code 2.1.138**
