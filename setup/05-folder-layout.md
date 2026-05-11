# 05 — Set up the folder layout

How I organize my home folder. This isn't required by Claude Code — it's the convention I follow.

---

## The layout

```
~/                              ← Linux home folder
├── CLAUDE.md                   ← instructions Claude reads on every project
├── PREREQUISITES.md            ← the original beginner walkthrough (kept for backup)
├── Claude-Holocron/            ← this knowledge base
├── projects/                   ← parent folder for all client/project work
│   ├── Insmed/                 ← one folder per client/project (local name = real name)
│   │   ├── CLAUDE.md
│   │   ├── .git/               ← each project is its own git repo
│   │   └── ...
│   └── (more projects here)
└── .claude/                    ← Claude Code's config + skills (hidden)
    ├── settings.json
    ├── skills/                 ← user-level skills
    └── projects/               ← per-project session data + memory
```

---

## Create the layout

```bash
mkdir -p ~/projects
# Each project gets its own folder under ~/projects/
mkdir -p ~/projects/<ClientOrProjectName>
```

> 🪞 One folder per project. **No monorepo.** Each gets its own `.git`, its own GitHub repo, its own CLAUDE.md. See [best-practices/project-organization.md](../best-practices/project-organization.md).

---

## Conventions

- `~/CLAUDE.md` — global instructions; loaded for *every* project
- `~/projects/X/CLAUDE.md` — project-specific; overrides global for that project
- `~/.claude/skills/` — reusable skills available from any project
- `~/Claude-Holocron/` — personal reference (this repo)

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
