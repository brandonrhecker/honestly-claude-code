# Claude-Holocron

Brandon's personal Claude Code knowledge base. Everything I need to (re)set up Claude Code from scratch, plus the daily-use stuff I want at hand.

> **What is a holocron?** Star Wars artifact that stores knowledge for the user. Fitting.

---

## Where do I start?

| If you want to... | Go to |
|---|---|
| Set up a fresh Windows machine from zero | [setup/](setup/) — do files 01 → 07 in order |
| Set up a *second* machine when you already have one working | [recipes/second-pc-setup.md](recipes/second-pc-setup.md) |
| Remember what a CLAUDE.md / skill / MCP / memory is | [concepts/](concepts/) |
| Look up a `/command` or remember how `!` works | [daily-use/](daily-use/) |
| Find best practices for project layout, git, what not to commit | [best-practices/](best-practices/) |
| Look up the current model version or where a file lives | [reference/](reference/) |
| Do something I've done before (update CLI, add MCP, etc.) | [recipes/](recipes/) |

---

## Today's version snapshot (2026-05-11)

| Thing | Version |
|---|---|
| Claude Code CLI | `2.1.138` |
| Most-capable model | Opus 4.7 (`claude-opus-4-7`) |
| Mid-tier model | Sonnet 4.6 (`claude-sonnet-4-6`) |
| Fast/cheap model | Haiku 4.5 (`claude-haiku-4-5-20251001`) |
| Node.js | v20.20.2 (via NVM) |
| npm | 10.8.2 |
| OS | Ubuntu 26.04 LTS on WSL2 |

Full details and history → [reference/versions.md](reference/versions.md). Update that file when something changes so I always know what version a note applies to.

---

## Map of this repo

```
Claude-Holocron/
├── README.md             ← you are here
├── setup/                ← numbered, do in order on a fresh machine
├── concepts/             ← read once, refer back rarely
├── daily-use/            ← the stuff I'll re-read often
├── best-practices/       ← how I want to work
├── reference/            ← lookup tables
└── recipes/              ← small how-tos for recurring tasks
```

---

## Conventions in this KB

- Every page ends with **Last verified: YYYY-MM-DD with Claude Code X.X.X**. If the date is old and something doesn't work, suspect a version drift first.
- Code blocks I should *run* are in bash blocks. Code blocks I should *read* are inline.
- "Future Brandon" callouts (`> 🪞`) are reminders for me specifically — not generic advice.
