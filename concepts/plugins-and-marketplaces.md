# Plugins & marketplaces

Plugins are bundles of skills you install with a single command instead of dropping files into `~/.claude/skills/` by hand. A marketplace is a registry of plugins — like an app store.

---

## TL;DR

- **Marketplace** = a registry pointing at one or more plugins (usually a GitHub repo). You *add* it once.
- **Plugin** = a bundle you *install* from a registered marketplace. Often contains multiple skills.
- **Skill** = the actual unit Claude invokes (`/skill-name`). Inside a plugin, skills get namespaced as `pluginname:skillname`.

The hierarchy: **marketplace → plugin → skill(s)**.

---

## Why plugins exist

Before plugins, every skill was a folder in `~/.claude/skills/`. That worked fine but had two problems:

- **No version tracking** — once you copied a skill in, you didn't know where it came from or whether it was up to date.
- **No clean uninstall** — you had to remember the folder name and `rm -rf` it.

Plugins solve both: install/uninstall via slash commands, with the marketplace as the source of truth for versions.

---

## The two layers

### Marketplaces

A marketplace is a GitHub repo with a `.claude-plugin/marketplace.json` file. That file lists the plugins the marketplace offers.

You register one with:

```bash
/plugin marketplace add <github-user>/<repo>
```

You only do this once per marketplace. After that, Claude Code knows about every plugin inside it.

### Plugins

A plugin lives inside a marketplace. You install one with:

```bash
/plugin install <plugin-name>@<marketplace-name>
```

Each plugin can contain 1 or many skills. Some plugins are a single skill. Some bundle 14+ skills.

---

## Where things live on disk

| Thing | Path |
|---|---|
| Registered marketplaces | `~/.claude/plugins/known_marketplaces.json` |
| Marketplace contents (cloned repos) | `~/.claude/plugins/marketplaces/<marketplace-name>/` |
| Installed-plugin records | `~/.claude/plugins/installed_plugins.json` |
| Actual installed plugin files | `~/.claude/plugins/cache/<marketplace>/<plugin>/<version>/` |
| Plugin catalog cache | `~/.claude/plugins/plugin-catalog-cache.json` |

`installed_plugins.json` is the source of truth for what's installed. When something feels broken, look there first.

---

## The official Anthropic marketplace

- **Marketplace name:** `claude-plugins-official`
- **Source:** <https://github.com/anthropics/claude-plugins-official>
- **Contents:** first-party plugins — language servers (TypeScript, Go, Rust, etc.), `frontend-design`, `code-review`, `commit-commands`, `pr-review-toolkit`, and more.

Often already registered automatically on a fresh Claude Code install.

---

## How to tell if a skill came from a plugin

When Claude lists available skills, plugin-managed ones show up with a `marketplace:skill` style name:

| Name in the skill list | Means |
|---|---|
| `my-skill` | standalone — lives in `~/.claude/skills/my-skill/` |
| `frontend-design:frontend-design` | plugin-managed — installed via `/plugin install` |
| `context-engineering:memory-systems` | plugin-managed (one of many skills in the `context-engineering` plugin) |

---

## See also

- [concepts/skills.md](skills.md) — what a skill is (both standalone and plugin-managed)
- [recipes/install-a-plugin.md](../recipes/install-a-plugin.md) — step-by-step install
- [recipes/uninstall-skill-or-plugin.md](../recipes/uninstall-skill-or-plugin.md) — removing things cleanly
- [best-practices/skill-install-strategy.md](../best-practices/skill-install-strategy.md) — when to manual vs marketplace

---

**Last verified: 2026-05-16 with Claude Code 2.1.138**
