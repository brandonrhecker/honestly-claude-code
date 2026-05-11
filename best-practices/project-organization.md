# Project organization

How I lay out work across the machine. The decisions here, made once, save a lot of friction.

---

## Per-project repos, not a monorepo

Each project under `~/projects/` is its own independent git repo:

```
~/projects/AcmeCorp/.git/
~/projects/GlobexInc/.git/
```

`~/projects/` itself has no `.git`. It's just a parent folder.

**Why per-project:**
- Independent histories — one client's commits never mix with another's
- Independent GitHub repos — separate access, separate collaborators
- Easier to share or hand off a single project without exposing others
- Easier to set per-project CI, hooks, settings

---

## One CLAUDE.md per project

Every project gets a `CLAUDE.md` in its root, even if it starts almost empty. Add to it whenever you find yourself repeating context.

---

## .gitignore from day one

**Before the first commit**, create `.gitignore`. Easier to keep things out than to remove them later (especially anything sensitive).

See [what-not-to-commit.md](what-not-to-commit.md) for the patterns I use.

---

## Naming convention

| What | How to name |
|---|---|
| Local folder for a client project | Use the real client name: `~/projects/<ClientName>/` |
| GitHub repo for a client project | Use a **Star Wars codename**: `project-palpatine`, `project-vader`, etc. |
| Personal infra repo (this KB, dotfiles, etc.) | Descriptive name: `Claude-Holocron`, `claude-dotfiles` |

**Why codenames for client GitHub repos:** keeps the client's name off public-facing platforms. The local folder still uses the real name because all local paths reference it.

> 🪞 When you start a new engagement: pick the next Star Wars codename, create `~/projects/<RealName>/`, then `gh repo create project-<codename> --private --source=. --remote=origin --push`. Update [setup/07-github.md](../setup/07-github.md) with the mapping.

---

## What goes outside `~/projects/`

- `~/.claude/` — Claude Code config and skills (its own git repo: `claude-dotfiles`)
- `~/Claude-Holocron/` — this knowledge base (its own git repo)
- `~/CLAUDE.md` — global instructions, lives at home, committed in `claude-dotfiles`
- `~/PREREQUISITES.md` — original beginner walkthrough, also in `claude-dotfiles`

---

## When you start a new project, the loop

```bash
# 1. Create folder + git repo
mkdir -p ~/projects/MyClient
cd ~/projects/MyClient
git init -q
git branch -M main

# 2. Create the must-haves
touch CLAUDE.md          # even if empty for now
# (write .gitignore — see what-not-to-commit.md)

# 3. First commit
git add .
git commit -m "Initial commit: MyClient project skeleton"

# 4. Push to GitHub with a codename
gh repo create project-<codename> --private --source=. --remote=origin --push
```

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
