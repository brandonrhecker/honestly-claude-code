# 03 — Install Node.js via NVM

Claude Code is a Node.js program. NVM ("Node Version Manager") is the easiest way to install + switch Node versions.

---

## Steps (run in the Ubuntu terminal)

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Reload your shell so NVM is available
source ~/.bashrc

# Install Node 20 (current LTS choice)
nvm install 20
nvm use 20
nvm alias default 20

# Confirm
node --version    # v20.x
npm --version     # 10.x
```

---

## If `nvm: command not found` after `source ~/.bashrc`

Close the terminal and open a fresh one. NVM sometimes needs a clean shell.

---

## Why NVM (and not `apt install nodejs`)

`apt` versions of Node are usually old. NVM lets you keep the current LTS and switch versions easily later if a project needs something different.

> 🪞 Current Node is v20.20.2 on this machine (as of 2026-05-11). If a project ever needs Node 22 or 24, `nvm install 22` + `nvm use 22` inside that project folder is the move — don't replace the default.

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
