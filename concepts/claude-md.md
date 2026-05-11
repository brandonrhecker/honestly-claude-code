# CLAUDE.md files

A `CLAUDE.md` file is a plain markdown file that Claude reads automatically at the start of every session. It's how you tell Claude things you don't want to repeat each time.

---

## Where to put them

| Path | When Claude reads it |
|---|---|
| `~/CLAUDE.md` | Every session, every project — global instructions |
| `~/projects/X/CLAUDE.md` | Only when working inside `~/projects/X/` |
| `~/projects/X/sub/CLAUDE.md` | Only when working inside `~/projects/X/sub/` |

Claude walks **from the current folder up to your home folder**, picking up every `CLAUDE.md` it finds. Deeper files override broader ones.

---

## Naming matters

The file must be named exactly `CLAUDE.md`:
- ✅ `CLAUDE.md`
- ❌ `claude.md`
- ❌ `CLAUDE.MD`
- ❌ `Claude.md`

---

## What to put in it

Stuff you'd otherwise re-type every time:

- Project-specific conventions ("this project uses Python 3.12, not 3.14")
- Where files live ("client deliverables go in `./deliverables/`")
- Aliases ("when I say 'deploy' I mean run `./deploy.sh`")
- Known gotchas ("the prod DB is read-only — never write")
- Links to important external resources

---

## What NOT to put in it

- Secrets, credentials, API keys — these get committed to git. Use env vars instead and *describe* them in CLAUDE.md.
- Information that lives in code or git history (Claude can find it)
- Long lists of features you're planning (use a plan or task list)

---

## Style

- Start small. Add things only when you find yourself repeating them.
- Use short, declarative sentences. Headers help.
- It's read by an LLM, not a person — clarity > literary style.

---

## Brandon's existing CLAUDE.md files

| Path | Purpose |
|---|---|
| `~/CLAUDE.md` | Global: WSL env, installed tools, project folder pattern |
| `~/projects/<ClientName>/CLAUDE.md` | Per-client: Jira details, env vars, skill usage |

---

## See also

- [best-practices/claude-md-hygiene.md](../best-practices/claude-md-hygiene.md) — how to keep them clean
- [concepts/memory.md](memory.md) — when to use memory instead of CLAUDE.md

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
