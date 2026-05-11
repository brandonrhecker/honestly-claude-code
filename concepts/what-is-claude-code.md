# What is Claude Code?

A terminal-based AI assistant from Anthropic. You run `claude` in a folder, and Claude can read files, edit them (with your approval), run shell commands (with your approval), search the web, call MCP servers, and follow detailed instructions.

---

## Mental model

Think of Claude Code as a junior engineer who:

- Already read everything in your project folder when the session started
- Will do whatever you ask, but **asks before doing anything risky** (running commands, editing files, installing software)
- Has no memory of yesterday — unless you wrote it down (in CLAUDE.md or via the memory system)
- Can be wrong; you're still the boss

---

## Where Claude Code runs

Anywhere you have a terminal:

| Surface | What it is |
|---|---|
| CLI (terminal) | The main experience. `claude` in a terminal. |
| Desktop app | Same CLI wrapped in a Mac/Windows window. |
| Web (claude.ai/code) | Browser version. |
| VS Code / JetBrains | IDE extensions that embed it. |

The one in `~/.nvm/versions/node/v20.x/bin/claude` is the CLI. That's the primary surface here.

---

## What Claude has access to

By default, only the current folder (where you ran `claude` from) and your home folder's CLAUDE.md / settings. It cannot reach outside your current project unless you point it there.

It can also:

- Call **tools** built into the CLI (Read, Edit, Bash, etc.)
- Call **MCP servers** you've configured (e.g., Atlassian, Notion, Gmail)
- Invoke **skills** stored in `~/.claude/skills/`
- Read its **memory** files for context from prior sessions

---

## Why the "approve every action" loop matters

Claude can run destructive commands (`rm -rf`, `git push --force`, etc.). Every shell command and file edit triggers a prompt by default. **Read the prompt** before approving — it's the safety net. You can also configure permissions in `settings.json` so trusted commands run without asking; see [daily-use/permissions.md](../daily-use/permissions.md).

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
