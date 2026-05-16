# Skill install strategy

How to decide between dropping a skill folder in by hand vs installing via a plugin marketplace.

---

## TL;DR

**Default to plugin-marketplace install when available.** It's the more reversible path: `/plugin uninstall` cleans up disk files and registry entries together. Manual installs require remembering folder names and `rm -rf`.

Stay with manual install only when:

- The skill isn't published as a plugin (no `.claude-plugin/` in the source repo)
- You need to customize the skill's `SKILL.md` and want your edits to survive

---

## The reversibility principle

Most skills you try are experiments. You keep some, you toss most. The install path you pick shapes how easy "toss" is.

| Path | Install | Try | Uninstall |
|---|---|---|---|
| Plugin marketplace | 2 commands | namespaced as `marketplace:skill` | `/plugin uninstall` — clean, tracked |
| Manual folder copy | clone/curl into `~/.claude/skills/` | bare name | `rm -rf` — manual, risk of orphans |

When you're not sure you'll like a skill, the marketplace path lets you bail without leaving cruft.

---

## When to use each

### Use plugin-marketplace install when:

- The source repo has `.claude-plugin/marketplace.json` (look for it)
- You want version tracking
- You may want to update later (`/plugin` re-fetches the latest)
- You want clean reversibility

### Use manual install when:

- The source repo is **not** structured as a plugin marketplace (no `.claude-plugin/` folder)
- You plan to customize `SKILL.md` (marketplace install will overwrite your edits on update)
- You're authoring your own skill from scratch
- The plugin install bundles more than you want (some marketplaces expose "everything as one giant plugin")

---

## User scope vs project scope

When installing via `/plugin install`, Claude Code asks user vs project.

| Choose | When |
|---|---|
| **User** | General-purpose skills you want in every project (design, code review, agent tooling) |
| **Project** | Skills specific to one codebase that teammates should inherit via `git clone` (e.g., a project-specific validator) |

User scope is the safe default. Project scope is for things you'd genuinely want a teammate to get when they clone the repo.

---

## What about updates?

- **Plugin-managed:** the marketplace tracks versions. Each entry in `installed_plugins.json` has a `gitCommitSha` and `lastUpdated`. There's no `/plugin update` command yet — uninstall + reinstall is the current workflow if you want a newer version.
- **Manual:** updates are entirely on you. You have to remember where it came from, fetch the new version, replace files. No tracking, no diff.

---

## The customization trap

If you `rm -rf` a manually-installed skill you'd edited, your edits are gone forever (no git history).

If you customize a plugin-managed skill's files in `~/.claude/plugins/cache/`, the next plugin update (or reinstall) overwrites them.

**The clean pattern:** if you want a customized version of someone else's skill, treat it as a fork. Copy the folder into `~/.claude/skills/<your-custom-name>/` and maintain it yourself.

---

## Common gotchas

- **Installed via plugin, then customized** — your edits live in the plugin cache and will be wiped on reinstall. Make it standalone instead.
- **Forgot which install path you used** — check both `~/.claude/skills/` (standalone) and `~/.claude/plugins/installed_plugins.json` (plugin). The skill is in one of those two places.
- **Want both stability *and* updates** — pick one. Marketplaces give you updates but not edits. Standalone gives you edits but not updates.

---

> 🪞 New skill from a third-party repo? Check if the repo has a `.claude-plugin/` folder. If yes → plugin install. If no → manual.

---

## See also

- [concepts/plugins-and-marketplaces.md](../concepts/plugins-and-marketplaces.md) — the mental model
- [recipes/install-a-plugin.md](../recipes/install-a-plugin.md) — the install steps
- [recipes/uninstall-skill-or-plugin.md](../recipes/uninstall-skill-or-plugin.md) — the removal steps
- [concepts/skills.md](../concepts/skills.md) — what a skill is in general

---

**Last verified: 2026-05-16 with Claude Code 2.1.138**
