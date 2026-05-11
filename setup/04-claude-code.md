# 04 — Install and log in to Claude Code

---

## Install

```bash
npm install -g @anthropic-ai/claude-code

# Confirm
claude --version    # should print something like 2.1.x (Claude Code)
```

The `-g` means "global" — installs it for all folders, not just the current one.

---

## First login

```bash
claude
```

The first run opens a browser prompt to log in to your Anthropic account. Follow it.

After login, you're in an interactive Claude Code session.

---

## Exit a session

- Type `/exit`
- Or press `Ctrl+C` twice

---

## Update later

```bash
npm install -g @anthropic-ai/claude-code@latest
```

Also see [recipes/update-claude-code.md](../recipes/update-claude-code.md).

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
