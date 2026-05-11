# Memory

Claude Code has a persistent memory system. It writes small markdown files to remember things across sessions, so the next conversation already knows context from the last one.

---

## Where memory lives

```
~/.claude/projects/-home-bhecker/memory/
├── MEMORY.md                       ← index (always loaded into context)
├── feedback_xlsx_helper.md         ← individual memory files
├── feedback_cdw_label_casing.md
├── project_git_setup.md
└── ...
```

`MEMORY.md` is the table of contents. Each line is one pointer like:

```markdown
- [Short title](filename.md) — one-line hook so future-Claude knows when this is relevant
```

The individual files hold the actual content with frontmatter (name, description, type).

---

## Four types of memory

| Type | What it's for | Example |
|---|---|---|
| **user** | Who you are, role, preferences | "Brandon is a consultant doing Jira/CDW work" |
| **feedback** | Corrections + validated approaches | "Use the xlsx helper, not heredoc Python" |
| **project** | Ongoing initiatives, decisions | "Per-project repos, not a monorepo" |
| **reference** | Pointers to external systems | "Insmed Jira lives at insmed.atlassian.net" |

---

## What I (Claude) save vs what I don't

**Save:**
- Things you explicitly tell me to remember
- Corrections you give me (so I don't repeat the mistake)
- Validated non-obvious approaches you confirmed
- Project context that's not derivable from the code

**Don't save:**
- Code patterns / file paths / architecture (derivable from the repo)
- Git history / blame info (use `git log`)
- Anything already in CLAUDE.md
- Ephemeral task state

---

## Memory vs CLAUDE.md

| Use CLAUDE.md when... | Use memory when... |
|---|---|
| The fact applies to a specific project/folder | The fact applies broadly (your role, preferences, cross-project decisions) |
| You want it visible + editable + committable | It's about *how to collaborate with you*, not project content |
| Other collaborators need it too | It's just for you and Claude |

Rough rule: CLAUDE.md = the project's brain. Memory = your shared history with Claude.

---

## Asking Claude to update memory

- "Remember that X" → Claude writes a memory entry
- "Forget X" → Claude removes the relevant entry
- "What do you remember about Y?" → Claude reads memory and tells you

You can also edit memory files directly with VS Code if you want.

---

## See also

- [concepts/claude-md.md](claude-md.md)
- [best-practices/when-to-use-what.md](../best-practices/when-to-use-what.md)

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
