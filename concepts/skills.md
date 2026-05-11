# Skills

A "skill" is a packaged mini-tool you invoke by typing `/skill-name` inside Claude Code. Each skill is a folder under `~/.claude/skills/`.

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

## User-level vs project-level

- **User-level skills:** `~/.claude/skills/` — available from any project
- **Project-level skills:** `~/projects/X/.claude/skills/` — only when in that project

For reusable stuff, user-level. For client-specific automation, project-level.

---

## Brandon's existing skills

- **`jira-bulk-stories`** (`~/.claude/skills/jira-bulk-stories/`) — bulk-create Jira stories with subtasks from an Excel workbook. Uses a per-project `jira_bulk_stories.toml` config.

Plus several built-ins (loop, schedule, simplify, review, security-review, init, etc.) that ship with Claude Code or come from installed plugins.

---

## See also

- [recipes/add-mcp-server.md](../recipes/add-mcp-server.md) — adding MCP servers (different from skills)
- [best-practices/when-to-use-what.md](../best-practices/when-to-use-what.md) — CLAUDE.md vs memory vs skill vs MCP

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
