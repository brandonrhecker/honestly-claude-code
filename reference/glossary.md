# Glossary

Plain-English definitions for the jargon.

---

**Allowlist** — A list of things that *are* permitted (the opposite of a blocklist). Used in `settings.json` for permissions.

**Branch (git)** — A movable pointer to a sequence of commits. `main` is the default. Branches let you work on multiple things without them interfering.

**CLI** — "Command Line Interface." A tool you run by typing instead of clicking. `claude`, `git`, `gh` are all CLIs.

**Commit (git)** — A snapshot of all tracked files at a moment in time, plus a message describing what changed.

**Context window** — How much text the LLM can consider at once. Opus 4.7 standard = ~200K tokens; with `[1m]` = 1M tokens. Larger window = more of your project Claude can read at once.

**Dotfile** — A file or folder whose name starts with `.` (like `.bashrc`, `.gitignore`). Hidden by default. Usually configuration.

**Global install** — Software installed for the whole user account, available from any folder. The `-g` in `npm install -g` means global.

**Hook (Claude Code)** — A shell command that runs automatically on events (Claude stops, before/after a tool call, etc.). Configured in `settings.json`.

**LLM** — "Large Language Model." The AI doing the work — Claude is an LLM. Opus, Sonnet, Haiku are different LLM sizes.

**LTS** — "Long-Term Support." A release of a piece of software that gets bug fixes and security patches for years. Node 20 is the current LTS.

**main (git)** — The default branch name on new repos. Old default was `master`; now `main` is standard.

**MCP** — "Model Context Protocol." Anthropic's way to give Claude access to external systems (Jira, Notion, Gmail, etc.) via small servers that expose tools.

**Memory (Claude Code)** — Persistent notes Claude writes about you and your work, stored in `~/.claude/projects/-home-bhecker/memory/`. Loaded into future conversations.

**MCP server** — A program (often `uvx mcp-something`) that exposes a set of tools Claude can call. Configured in `settings.json`.

**npm** — "Node Package Manager." Comes with Node. Used to install Node-based tools like Claude Code (`npm install -g @anthropic-ai/claude-code`).

**NVM** — "Node Version Manager." Installs and switches between Node versions without needing root.

**Package** — A piece of installable software. `npm install <x>` installs a Node package; `apt install <x>` installs a Linux package.

**Permission mode** — How Claude Code asks (or doesn't ask) for approval on actions. Default prompts for risky calls; you can change it to `acceptedits`, `plan`, etc.

**PR / Pull request** — A proposed change to a GitHub repo, ready for review and merge.

**Remote (git)** — A copy of your repo hosted elsewhere (usually GitHub). `origin` is the default name for the primary remote.

**Repo / repository** — A folder of code tracked by git. Has a `.git/` subfolder with all the history.

**Scope (OAuth)** — A permission a token has. `gh` requests `repo`, `workflow`, `gist`, `read:org` by default.

**Shell** — The program that reads commands you type and runs them. Bash is the default on Ubuntu. Zsh is the default on Mac.

**Skill** — A packaged workflow under `~/.claude/skills/` you invoke with `/name`. See [concepts/skills.md](../concepts/skills.md).

**SSH key** — Cryptographic credential for authenticating to remote servers. Alternative to HTTPS+token for git pushes.

**Stage (git)** — Mark a file to be included in the next commit. `git add <file>` stages it.

**Terminal** — The text-based window you type commands into. On WSL, that's typically Bash inside Ubuntu.

**Token (API)** — A secret string that authenticates API requests. Like a password but app-specific. Treat as a credential.

**Token (LLM)** — A chunk of text, roughly 3-4 characters. LLMs measure context length in tokens. 200K tokens ≈ 150K words.

**`~`** — Shorthand for your home folder. `~/foo` is `/home/<username>/foo`. Lives in the terminal, not in code.

**WSL** — "Windows Subsystem for Linux." Lets you run a Linux environment inside Windows.

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
