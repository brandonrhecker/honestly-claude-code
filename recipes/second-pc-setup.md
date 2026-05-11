# Recipe — Setting up a second PC

You already have one machine working (this one). Now you want a second machine with the same setup.

---

## Steps

### 1. Do the basic install

Follow [setup/01-wsl.md](../setup/01-wsl.md) through [setup/04-claude-code.md](../setup/04-claude-code.md) — install WSL, VS Code, Node, Claude Code.

### 2. Install + auth `gh`

```bash
sudo apt update && sudo apt install -y gh
gh auth login
```

Pick HTTPS + browser auth, same as the first machine. See [setup/07-github.md](../setup/07-github.md).

### 3. Set git identity

```bash
git config --global user.name  "Brandon Hecker"
git config --global user.email "brandon.r.hecker@gmail.com"
git config --global init.defaultBranch main
```

### 4. Clone your projects

```bash
mkdir -p ~/projects
cd ~/projects
gh repo clone brandonrhecker/project-palpatine Insmed
# repeat for each client engagement; remember to use the LOCAL folder name (real client name),
# not the codename
```

### 5. Clone the knowledge base

```bash
cd ~
gh repo clone brandonrhecker/Claude-Holocron
```

### 6. Restore `~/.claude/` (the tricky one)

**Problem:** Claude Code auto-creates `~/.claude/` on first run, so you can't just `git clone` into it.

**Two ways to handle it:**

#### Option A: Run Claude Code once, then init-and-pull

```bash
# Run claude once to let it create ~/.claude/
claude
# (let it create the folder; exit immediately)
/exit

# Now turn that folder into the git repo
cd ~/.claude
git init -q
git branch -M main
git remote add origin https://github.com/brandonrhecker/claude-dotfiles.git
git fetch
git reset --hard origin/main

# Any auth/session files Claude created stay (they're not tracked by the allowlist .gitignore)
```

#### Option B: Clone first, then run Claude Code

```bash
# Clone the dotfiles repo into ~/.claude before Claude Code runs
gh repo clone brandonrhecker/claude-dotfiles ~/.claude

# Now run claude — it'll add its session/auth files into the existing folder
claude
```

Either works. **Option A** is safer if Claude Code already ran on the new machine. **Option B** is cleaner on a truly fresh machine.

### 7. Verify

```bash
# Versions match?
claude --version

# CLAUDE.md is in place?
cat ~/CLAUDE.md

# Skills are there?
ls ~/.claude/skills/

# Memory is there?
ls ~/.claude/projects/-home-bhecker/memory/
```

If memory isn't there: that's expected. Memory is per-machine — it's not in the `claude-dotfiles` repo. Decide whether to copy it manually or let it rebuild from new conversations.

---

## Things that are NOT synced via git

These stay machine-specific and won't appear on the second PC automatically:

- Auth tokens and session state in `~/.claude/` (regenerated on first login)
- `~/.gitconfig` (set it manually with step 3)
- Memory files in `~/.claude/projects/-home-bhecker/memory/` (start fresh, or `scp` from machine 1 if you really want them)
- Anything in `~/projects/X/.claude/settings.local.json` (machine-local on purpose)
- Environment variables (MCP auth tokens, Jira tokens, etc.) — set them per-machine

---

> 🪞 If the new machine has a different Linux username (not `bhecker`), the memory folder path changes: `~/.claude/projects/-home-<username>/memory/`. The codebase doesn't actually rely on this path being constant; Claude figures it out from `$HOME`.

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
