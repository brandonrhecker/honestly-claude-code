# CLAUDE.md hygiene

How to keep `CLAUDE.md` files useful and not bloated.

---

## Start small

A brand-new project gets a CLAUDE.md that's mostly empty. Add a line whenever you catch yourself re-explaining something to Claude.

Bad: writing 200 lines upfront covering every possible scenario.
Good: 20 lines that grew from real friction.

---

## Add only when you've repeated yourself

The trigger for adding to CLAUDE.md is: **"I just told Claude this for the second time."** Until then, no need.

---

## Short, declarative sentences

CLAUDE.md is read by an LLM, not a person. Optimize for clarity, not prose:

✅ "Production DB is read-only. Never write to it."
❌ "It would be a really bad idea to write to the production database, since we've had issues in the past with..."

---

## Use headers

LLMs (and you) navigate headers well. Group related rules:

```markdown
## Environment
- Python 3.12 (not 3.14)
- Node 20 via NVM

## Conventions
- Lower-case branch names
- Squash-merge on PRs
```

---

## Don't put secrets in CLAUDE.md

`CLAUDE.md` is tracked in git. Anything you write there ends up on GitHub. Secrets go in env vars; CLAUDE.md *describes* which env vars to read.

---

## Periodic pruning

Every month or two, re-read your CLAUDE.md files and delete:
- Rules that no longer apply
- Things now obvious from the code
- Duplicates between project-level and global

Stale CLAUDE.md is worse than no CLAUDE.md — it teaches Claude wrong things.

---

## Layering

| Level | Put things that apply... |
|---|---|
| `~/CLAUDE.md` | Across every project (your role, dev env, shared tools) |
| `~/projects/X/CLAUDE.md` | Only inside project X |
| `~/projects/X/sub/CLAUDE.md` | Only inside a specific subfolder of X |

Don't duplicate. Lower levels override higher.

---

## When to use memory instead

If the fact is about *you* (your role, your preferences) or about *how you and Claude work together*, that's memory, not CLAUDE.md. See [concepts/memory.md](../concepts/memory.md) and [when-to-use-what.md](when-to-use-what.md).

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
