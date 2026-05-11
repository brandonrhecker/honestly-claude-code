# File locations — where things live

A cheat sheet for "where the heck is..."

---

## Home folder layout

```
~/                                  ← /home/bhecker on this machine
├── CLAUDE.md                       ← always-loaded instructions
├── PREREQUISITES.md                ← original beginner walkthrough
├── Claude-Holocron/                ← this knowledge base
├── projects/                       ← all client/project work
│   └── <ProjectName>/              ← one folder per project, each its own git repo
└── .claude/                        ← Claude Code config (hidden, see below)
```

---

## Inside `~/.claude/`

```
~/.claude/
├── settings.json                   ← global Claude Code settings (permissions, env, MCPs)
├── settings.local.json             ← machine-local overrides, gitignored
├── keybindings.json                ← keyboard customization (optional)
├── skills/                         ← user-level skills
│   └── jira-bulk-stories/
│       ├── SKILL.md
│       ├── README.md
│       └── ...
└── projects/                       ← per-conversation state + memory
    └── -home-bhecker/
        └── memory/
            ├── MEMORY.md           ← memory index (always loaded)
            └── *.md                ← individual memory entries
```

---

## Claude Code binary

```
~/.nvm/versions/node/v20.20.2/bin/claude
```

Where `v20.20.2` matches your active Node version. `which claude` confirms.

---

## NVM and Node

```
~/.nvm/                             ← NVM install root
~/.nvm/versions/node/v20.20.2/      ← active Node version
~/.bashrc                           ← where NVM is sourced (auto-added by NVM installer)
```

---

## Git

```
~/.gitconfig                        ← global git config (user.name, user.email, etc.)
~/projects/<X>/.git/                ← per-project git data
```

---

## `gh` CLI

```
/usr/bin/gh                         ← binary (installed via apt)
~/.config/gh/                       ← auth + config
~/.config/gh/hosts.yml              ← logged-in accounts
```

---

## WSL specifics

| Path on Linux | Equivalent in Windows |
|---|---|
| `/home/bhecker/` | `\\wsl$\Ubuntu\home\bhecker\` (in File Explorer) |
| `/mnt/c/Users/Brandon/` | `C:\Users\Brandon\` (your Windows home) |

You can `cd /mnt/c/...` from Linux to access Windows files, but prefer keeping work in `~/` (Linux native) for speed and to avoid permission weirdness.

---

## Find things quickly

```bash
# Where is the claude binary?
which claude

# Which CLAUDE.md files exist on this machine?
find ~ -name 'CLAUDE.md' -not -path '*/node_modules/*' 2>/dev/null

# What's in my memory?
ls ~/.claude/projects/-home-bhecker/memory/

# Which skills do I have?
ls ~/.claude/skills/
```

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
