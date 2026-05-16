# Skills

A "skill" is a packaged mini-tool you invoke by typing `/skill-name` inside Claude Code. Standalone skills live in `~/.claude/skills/`; plugin-bundled skills live elsewhere (see [Two install paths](#two-install-paths) below).

---

## When to make a skill

Make a skill when you find yourself doing the **same multi-step task in three or more projects** — or when a task needs specific code (a Python script, a config schema) that Claude couldn't just figure out on its own.

If you only do it once or twice, don't bother — just ask Claude to do it inline.

---

## Folder layout

```
~/.claude/skills/my-skill/
├── SKILL.md            ← instructions Claude reads when /my-skill is invoked (required)
├── README.md           ← human-readable docs (optional but recommended)
├── any_script.py       ← code the skill calls (optional)
└── example_config.toml ← per-project config template (optional)
```

The only required file is `SKILL.md`. Everything else depends on the skill.

---

## How invocation works

1. You type `/my-skill` (or sometimes Claude infers it from your message)
2. Claude reads `SKILL.md`
3. Claude follows the instructions in there, calling whatever scripts the skill provides

The `SKILL.md` should be written *to Claude*, not to a human — it's a prompt, not docs.

---

## Two install paths

A skill can land on disk two different ways:

| Path | Lives at | Install with | Uninstall with |
|---|---|---|---|
| **Standalone** | `~/.claude/skills/<name>/` | drop the folder there (clone/curl) | `rm -rf` |
| **Plugin-managed** | `~/.claude/plugins/cache/<marketplace>/<plugin>/<version>/` | `/plugin install <plugin>@<marketplace>` | `/plugin uninstall` |

Both work the same once loaded — Claude can invoke either via `/skill-name`. Plugin-managed skills get namespaced names like `marketplace:skill` in the available-skills list; standalone skills appear with their bare name.

Plugin-managed is usually the better choice for skills you didn't author yourself — it has clean uninstall and version tracking. See [best-practices/skill-install-strategy.md](../best-practices/skill-install-strategy.md).

---

## User-level vs project-level

- **User-level skills:** `~/.claude/skills/` — available from any project
- **Project-level skills:** `~/projects/X/.claude/skills/` — only when in that project

For reusable stuff, user-level. For client-specific automation, project-level.

---

## Brandon's current skills

**Standalone (in `~/.claude/skills/`):**

- `jira-bulk-stories` — bulk-create Jira stories with subtasks from an Excel workbook. Uses a per-project `jira_bulk_stories.toml` config.
- `brainstorming` — design-first workflow for substantial new work. Customized from the `obra/superpowers` source (softened the strict gate).

**Plugin-managed:**

- `frontend-design:frontend-design` — distinctive UI/UX code with anti-AI-slop guardrails (from `claude-plugins-official`)
- `ui-ux-pro-max:ui-ux-pro-max` — preset library of styles, palettes, fonts, stacks (from `ui-ux-pro-max-skill`)
- `context-engineering:*` — 14 skills on agent/context engineering (from `context-engineering-marketplace`)

Plus several built-ins (loop, schedule, simplify, review, security-review, init, etc.) that ship with Claude Code.

---

## See also

- [concepts/plugins-and-marketplaces.md](plugins-and-marketplaces.md) — what plugins and marketplaces are
- [recipes/install-a-plugin.md](../recipes/install-a-plugin.md) — installing a plugin
- [recipes/uninstall-skill-or-plugin.md](../recipes/uninstall-skill-or-plugin.md) — removing skills cleanly
- [best-practices/skill-install-strategy.md](../best-practices/skill-install-strategy.md) — manual vs plugin install
- [recipes/add-mcp-server.md](../recipes/add-mcp-server.md) — adding MCP servers (different from skills)
- [best-practices/when-to-use-what.md](../best-practices/when-to-use-what.md) — CLAUDE.md vs memory vs skill vs MCP

---

**Last verified: 2026-05-16 with Claude Code 2.1.138**
