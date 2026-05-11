# When to use what: CLAUDE.md vs memory vs skill vs MCP

Claude Code has several ways to "remember" or "do" things. Easy to get them confused. Here's the decision tree.

---

## Quick table

| Need | Use |
|---|---|
| A rule that applies inside this specific project | **CLAUDE.md** in the project |
| A rule that applies everywhere | **`~/CLAUDE.md`** (global) |
| A fact about you, your preferences, your role | **Memory** (user/feedback type) |
| A correction you've given Claude that should stick | **Memory** (feedback type) |
| A repeating multi-step workflow with code/scripts | **Skill** |
| Access to an external system (Jira, Notion, Gmail) | **MCP server** |
| A one-off task | Just ask in chat |

---

## CLAUDE.md vs memory

The line that trips people up most often.

**CLAUDE.md** = facts *about the project*. Other collaborators benefit from it. It's committed in git. You'd write it even if you weren't using Claude.

**Memory** = facts *about you and how you collaborate with Claude*. Not useful to other humans. Stored in `~/.claude/projects/-home-bhecker/memory/`. Not in your project repos.

Examples:

| Statement | Goes in |
|---|---|
| "This project's prod DB is read-only" | CLAUDE.md (project) |
| "I prefer terse responses without trailing summaries" | Memory (feedback) |
| "Insmed uses Jira label casing X, Wave Exceptions uses Y" | CLAUDE.md (project, since others working in this repo need it) |
| "I'm a consultant doing CDW work" | Memory (user) |
| "Don't mock the DB in tests; we got burned last quarter" | CLAUDE.md if team-wide, memory if it's your personal habit |

When in doubt: would another teammate need to know this? CLAUDE.md. Just you and Claude? Memory.

---

## Skill vs script

**Skill** = a packaged workflow Claude can invoke with `/name`. Has a `SKILL.md` prompt.

**Plain script** = a Python/bash file you run yourself or ask Claude to run.

Make it a skill when:
- It's a multi-step workflow with judgment calls (not just a single script invocation)
- You'll use it from multiple projects
- The orchestration is worth packaging

If it's literally one `python foo.py`, just keep the script.

---

## MCP vs skill vs script

| Approach | Use when |
|---|---|
| **MCP** | You need *read/write access* to an external system (Jira API, Notion API, Gmail, etc.). MCP exposes the *capabilities*. |
| **Skill** | You have a *recurring workflow* that uses those capabilities in a specific way. Skill orchestrates; MCP provides the verbs. |
| **Plain script** | One-shot data processing on local files. No external system involved. |

Often layered: a `jira-bulk-stories` **skill** orchestrates the workflow, calling the `mcp-atlassian` **MCP server** for the Jira reads/writes, and reading from a local `.xlsx` via a plain **Python script** (`_xlsx_read.py`).

---

## Memory vs CLAUDE.md (one more time, because important)

**Memory is auto-managed by Claude.** You don't really "write" memory — you tell Claude things and it decides what to save. You can edit memory files, but the system is designed to be self-maintaining.

**CLAUDE.md is hand-maintained by you.** You write it. You edit it. You commit it.

If you find yourself thinking "I'll just tell Claude to remember this" — that's memory. If you find yourself thinking "I should write this down in the project" — that's CLAUDE.md.

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
