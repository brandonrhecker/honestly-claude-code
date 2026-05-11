# 06 — Set up Git

Git is the version-control tool. Ubuntu has it preinstalled. You just need to tell it who you are.

---

## Confirm it's installed

```bash
git --version    # should print something like git version 2.43.0
```

If missing: `sudo apt install -y git`.

---

## Set your identity (one-time, global)

```bash
git config --global user.name  "Brandon Hecker"
git config --global user.email "brandon.r.hecker@gmail.com"

# Make `main` the default branch name on new repos
git config --global init.defaultBranch main

# Verify
git config --global --list
```

This identity is what shows up as the "author" on every commit you make on this machine.

---

## Two-second mental model of git

- A **repo** is a folder with a `.git/` subfolder. The `.git/` folder is the history of every change.
- A **commit** is a snapshot of all tracked files at a moment in time, plus a message describing the change.
- A **branch** is a moving pointer to commits. `main` is the default.
- A **remote** is a copy of the repo somewhere else (usually GitHub).

The everyday loop:
```bash
git status              # what changed?
git add <files>         # stage them for the next commit
git commit -m "msg"     # snapshot them
git push                # send to the remote
```

---

## .gitignore basics

A `.gitignore` file lists patterns of files git should *never* track. Always create one before the first commit. See [best-practices/what-not-to-commit.md](../best-practices/what-not-to-commit.md) for what to put in it.

---

## Init a brand-new repo

```bash
cd ~/projects/MyProject
git init -q
git branch -M main
# (write .gitignore, README, etc.)
git add .
git commit -m "Initial commit"
```

Adding GitHub on top → [07-github.md](07-github.md).

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
