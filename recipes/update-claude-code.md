# Recipe — Update Claude Code

When a new version drops, or when something feels stuck and you want to rule out version drift.

---

## Update

```bash
npm install -g @anthropic-ai/claude-code@latest
```

The `-g` ensures it replaces your global install.

---

## Verify

```bash
claude --version
```

You should see a higher version than before.

---

## After updating

1. **Update [`reference/versions.md`](../reference/versions.md)** in this KB:
   - Bump the version in the table
   - Add a row to the version history
2. **Restart any active Claude session** (`/exit` then `claude`) to load the new binary

---

## If the update breaks something

Roll back to a specific version:

```bash
npm install -g @anthropic-ai/claude-code@2.1.138
```

(Replace `2.1.138` with whatever was working.)

---

## Update Node itself (rare)

Only do this if a new Claude Code version requires a newer Node. The release notes will say.

```bash
nvm install 22           # install Node 22 (or whatever version)
nvm use 22
nvm alias default 22

# Re-install Claude Code under the new Node
npm install -g @anthropic-ai/claude-code
```

> 🪞 Switching Node versions creates a new bin directory. The old `~/.nvm/versions/node/v20.x/bin/claude` still exists but isn't on PATH anymore. If `which claude` shows the old path, rehash your shell or open a new terminal.

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
