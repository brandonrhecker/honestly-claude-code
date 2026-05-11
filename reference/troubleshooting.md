# Troubleshooting

Common things that go wrong, and how to fix them.

---

## Claude Code

### `claude: command not found`

NVM-loaded Node isn't on PATH. Fixes:

```bash
# Reload shell
source ~/.bashrc

# Or check NVM is sourced
nvm --version
node --version
```

If NVM works but `claude` is missing → it wasn't installed for the active Node version:
```bash
npm install -g @anthropic-ai/claude-code
```

### Claude Code feels slow or laggy

- Run `/clear` to drop conversation history
- Switch to a smaller model with `/model` (try Sonnet 4.6 or Haiku 4.5 for simple tasks)
- Toggle fast mode with `/fast` (Opus 4.6 variant)

### Claude is "agreeing with everything"

It's in yes-mode. Push back: "Stop agreeing reflexively — give me your honest read."

### Wrong CLAUDE.md was loaded

Claude reads CLAUDE.md from the *folder you launched in*, walking up to home. Did you `cd` to the right project before running `claude`?

### Memory says X exists but X doesn't

Memory can go stale. The fix: tell Claude "ignore that memory, X was removed" — Claude will update it. Or edit the relevant file in `~/.claude/projects/-home-bhecker/memory/` directly.

---

## WSL

### `wsl --install` fails

Usually a virtualization issue. Check BIOS that Intel VT-x / AMD-V is enabled. Microsoft's troubleshooting: <https://learn.microsoft.com/en-us/windows/wsl/install>.

### Ubuntu won't open after install

```powershell
# In admin PowerShell
wsl --install -d Ubuntu
```

Or install "Ubuntu" from the Microsoft Store.

### Slow file access

You're probably operating on `/mnt/c/...` (Windows filesystem). Move work to `~/` (Linux native) — way faster.

---

## Node / npm

### `nvm: command not found` after install

Close and reopen the terminal. The NVM installer added a line to `~/.bashrc`; new shells will pick it up.

### `EACCES` errors on `npm install -g`

Don't `sudo npm install`. Use NVM — global installs go to NVM's user-owned folder, no sudo needed.

---

## Git / GitHub

### `Permission denied (publickey)` on push

You're trying SSH. Switch to HTTPS:
```bash
git remote set-url origin https://github.com/<user>/<repo>.git
```
And make sure `gh auth status` shows you're logged in.

### Push asks for username/password every time

`gh` should be the credential helper. Reconfigure:
```bash
gh auth setup-git
```

### Accidentally committed a secret

1. **Rotate the secret immediately.** Assume it's compromised.
2. Add to `.gitignore`.
3. Optionally scrub history with `git filter-repo` or BFG, then force-push.

### Wrong commit author name/email

```bash
git config --global user.name  "Brandon Hecker"
git config --global user.email "brandon.r.hecker@gmail.com"
```
Applies to *new* commits; old ones keep the old author.

---

## VS Code

### `code .` opens a Windows VS Code with broken paths

You launched it from Windows, not WSL. Open the Ubuntu terminal first, then `code .` — bottom-left should say "WSL: Ubuntu."

### VS Code can't find files in the project

Check the WSL extension is installed and you're connected (bottom-left status bar).

---

## `sudo` doesn't work inside Claude Code

It can't — there's no terminal attached for the password prompt. Run it yourself in the Claude prompt with `!`:

```
! sudo apt update && sudo apt install -y something
```

---

## When all else fails

1. Read the error carefully (it usually says what's wrong)
2. Restart the terminal
3. Paste the full error into Claude and ask "what does this mean?"
4. If still stuck: <https://github.com/anthropics/claude-code/issues>

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
