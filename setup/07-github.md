# 07 — Set up GitHub (gh CLI + first push)

GitHub is where the remotes live. `gh` is GitHub's official CLI; it doubles as a git credential helper so pushes "just work" once you're logged in.

---

## Install `gh`

`sudo` won't run from inside a Claude Code session (no password prompt). Run this in your own terminal, or in a Claude Code prompt with the `!` prefix:

```bash
sudo apt update
sudo apt install -y gh
```

Confirm:
```bash
gh --version
```

---

## Authenticate (one-time)

```bash
gh auth login
```

Pick:
- **GitHub.com**
- **HTTPS** (not SSH — see below)
- **Yes** (authenticate Git with GitHub credentials)
- **Login with a web browser**

`gh` prints a one-time code and a URL. Open the URL in your Windows browser, paste the code, approve. Done.

Verify:
```bash
gh auth status    # should show "Logged in to github.com as <username>"
```

---

## Why HTTPS (not SSH)

- `gh` becomes the credential helper for git — pushes/pulls just work, no SSH key to manage
- Same auth covers all repos under your account
- Same flow works identically on a second machine

SSH is mainly worth it if you push from many machines/CI without a browser. Personal workflow → HTTPS.

---

## Create + push a repo in one command

From inside the local repo folder (after `git init` and at least one commit):

```bash
cd ~/projects/MyProject
gh repo create MyProject --private --source=. --remote=origin --push
```

This:
1. Creates an empty `MyProject` repo on GitHub
2. Adds it as remote `origin`
3. Pushes the current branch

For public, swap `--private` for `--public`.

---

## Rename a repo on GitHub

```bash
cd ~/projects/MyProject
gh repo rename NewName --yes
```

`gh` updates the local remote URL automatically. The *local folder name does not change*.

---

## Brandon-specific

- GitHub user: `brandonrhecker`
- Existing repos (all private):
  - `github.com/brandonrhecker/claude-dotfiles` ← `~/.claude/`
  - `github.com/brandonrhecker/Claude-Holocron` ← this KB
  - One private repo per client engagement, named with a Star Wars codename (e.g., `project-palpatine`)

> 🪞 Client engagement repos use Star Wars codenames so the client name isn't on GitHub. Personal infra repos use descriptive names. See [best-practices/project-organization.md](../best-practices/project-organization.md).

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
