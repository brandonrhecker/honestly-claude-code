# Recipe — Install a plugin

How to install a plugin from a marketplace, in three commands.

---

## TL;DR

```bash
/plugin marketplace add <user>/<repo>           # one-time: register the marketplace
/plugin install <plugin>@<marketplace-name>     # install the plugin
/reload-plugins                                  # activate without restart
```

---

## When you'll hit this

You found a useful skill on GitHub (in a repo with a `.claude-plugin/` folder) and want it available in Claude Code.

If the repo does **not** have `.claude-plugin/`, you're dealing with a standalone skill — see [concepts/skills.md](../concepts/skills.md), and just copy the folder into `~/.claude/skills/`.

---

## Step 1 — Add the marketplace

A marketplace is a GitHub repo containing one or more plugins. Register it once:

```bash
/plugin marketplace add <github-user>/<repo>
```

Example:

```bash
/plugin marketplace add anthropics/claude-plugins-official
```

Expected output:

```
Successfully added marketplace: claude-plugins-official
```

The name on the right (`claude-plugins-official`) is the **marketplace name** you'll use in step 2. Sometimes it matches the repo name; sometimes the repo's `marketplace.json` overrides it.

---

## Step 2 — Install the plugin

Pick which plugin from the marketplace you want, and install it:

```bash
/plugin install <plugin-name>@<marketplace-name>
```

Examples:

```bash
/plugin install frontend-design@claude-plugins-official
/plugin install context-engineering@context-engineering-marketplace
```

Expected output:

```
✓ Installed <plugin-name>. Run /reload-plugins to apply.
```

---

## Step 3 — Reload

Claude Code doesn't pick up newly installed plugins until you reload:

```bash
/reload-plugins
```

Expected output (numbers will vary):

```
Reloaded: 2 plugins · 0 skills · 6 agents · 0 hooks · 0 plugin MCP servers · 0 plugin LSP servers
```

The "0 skills" line refers to **standalone** skills only. Plugin-bundled skills count under the "plugins" number.

---

## Step 4 — Verify it loaded

In any session, the new skill should appear in Claude's available-skills list with a namespaced name like `<plugin>:<skill>`.

If it's missing: run `/reload-plugins` again, then `/plugin list` to confirm it's actually installed.

---

## User scope vs project scope

When you install, Claude Code may ask whether to install for **you** (user scope) or **this project** (project scope).

| Scope | Lives at | Available from |
|---|---|---|
| User (default) | `~/.claude/plugins/cache/` | every project on this machine |
| Project | `<project>/.claude/plugins/cache/` | only that project; can be git-committed |

For general-purpose skills (design tools, agent helpers), use **user**. For project-specific automation that teammates should inherit via `git clone`, use **project**.

---

## Common gotchas

- **`/plugin` not recognized** — your Claude Code version is too old. Update with `npm install -g @anthropic-ai/claude-code`.
- **Plugin shows up but the skill isn't invokable** — you forgot `/reload-plugins`. Run it.
- **Marketplace name doesn't match the repo name** — that's fine; the repo's `marketplace.json` can name itself anything. Use whatever appeared in the "Successfully added" output.
- **Wanted only one skill from a bundle, but the plugin is "all or nothing"** — true, plugins install as one unit. There's no per-skill picker yet.

---

## See also

- [concepts/plugins-and-marketplaces.md](../concepts/plugins-and-marketplaces.md) — the mental model
- [recipes/uninstall-skill-or-plugin.md](uninstall-skill-or-plugin.md) — undoing this
- [best-practices/skill-install-strategy.md](../best-practices/skill-install-strategy.md) — when to use plugins vs standalone skills

---

**Last verified: 2026-05-16 with Claude Code 2.1.138**
