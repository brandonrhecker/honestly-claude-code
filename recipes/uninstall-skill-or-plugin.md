# Recipe — Uninstall a skill or plugin

Two removal flows, depending on how the skill was installed.

---

## TL;DR

- **Standalone skill** (lives in `~/.claude/skills/<name>/`): `rm -rf ~/.claude/skills/<name>`
- **Plugin-managed skill**: `/plugin uninstall <plugin-name>@<marketplace-name>`
- **Whole marketplace** (also removes its plugins): `/plugin marketplace remove <marketplace-name>`

---

## How to tell which kind you have

Look at how the skill appears in the available-skills list:

| Name format | Type | Uninstall with |
|---|---|---|
| `my-skill` | standalone | `rm -rf` |
| `marketplace-name:skill` | plugin-managed | `/plugin uninstall` |

If you're not sure, check `~/.claude/skills/` — anything in that folder is standalone. Everything else is plugin-managed.

---

## Removing a standalone skill

```bash
rm -rf ~/.claude/skills/<skill-name>
```

That's it. Standalone skills are just folders; deleting the folder removes the skill.

Verify:

```bash
ls ~/.claude/skills/
```

In a new Claude Code session, the skill will be gone from the available-skills list.

---

## Removing a plugin-managed skill

```bash
/plugin uninstall <plugin-name>@<marketplace-name>
```

Example:

```bash
/plugin uninstall frontend-design@claude-plugins-official
```

After uninstall, run `/reload-plugins` so the active session catches up.

---

## Removing an entire marketplace (nuclear option)

This unregisters the marketplace **and auto-uninstalls every plugin you installed from it**:

```bash
/plugin marketplace remove <marketplace-name>
```

Example:

```bash
/plugin marketplace remove context-engineering-marketplace
```

Useful when you decide you don't want anything from that source anymore.

---

## Where things live on disk (in case you need to nuke manually)

| Thing | Path | How to remove |
|---|---|---|
| Standalone skill | `~/.claude/skills/<name>/` | `rm -rf` |
| Plugin (cached files) | `~/.claude/plugins/cache/<marketplace>/<plugin>/<version>/` | `/plugin uninstall` (preferred) |
| Marketplace registry | `~/.claude/plugins/known_marketplaces.json` | `/plugin marketplace remove` |
| Installed-plugin records | `~/.claude/plugins/installed_plugins.json` | gets updated by `/plugin uninstall` |
| Marketplace contents | `~/.claude/plugins/marketplaces/<name>/` | gets cleaned by `/plugin marketplace remove` |

If something feels broken, inspect `installed_plugins.json` — it's the source of truth.

---

## Verifying it's gone

After uninstall:

```bash
ls ~/.claude/skills/                              # standalone — should not include it
cat ~/.claude/plugins/installed_plugins.json      # plugins — should not list it
```

In a new session, the skill should not appear in the available-skills list.

---

## Common gotchas

- **`/plugin uninstall` on a standalone skill** — won't work; standalone skills aren't tracked by the plugin system. Use `rm -rf`.
- **`rm -rf` on a plugin cache folder** — removes the files but leaves an orphan record in `installed_plugins.json`. Always prefer `/plugin uninstall`.
- **Forgot `/reload-plugins`** — uninstalled plugins may still appear in the active session until reload.
- **Customized a plugin file in the cache** — your edits are gone after uninstall. If you've customized something, keep it as a standalone skill instead.

---

> 🪞 If you ever can't remember whether a skill is standalone or plugin-managed: check `~/.claude/skills/` first. If it's there, it's standalone. If not, it came from a plugin.

---

## See also

- [recipes/install-a-plugin.md](install-a-plugin.md) — the install side
- [concepts/plugins-and-marketplaces.md](../concepts/plugins-and-marketplaces.md) — the mental model
- [best-practices/skill-install-strategy.md](../best-practices/skill-install-strategy.md) — choosing install path with reversibility in mind

---

**Last verified: 2026-05-16 with Claude Code 2.1.138**
