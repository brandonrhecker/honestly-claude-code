# Permissions (approving actions)

Claude Code asks for permission before any "real" action — running a shell command, editing a file, calling an MCP tool. You see a prompt like:

```
Claude wants to run: rm -rf ./build
[1] Allow once   [2] Allow always   [3] Deny
```

---

## The three answers

| Choice | Effect |
|---|---|
| **Allow once** | This single invocation runs; future calls re-prompt |
| **Allow always** | Add to allowlist in `settings.json`; never prompted again for this exact command pattern |
| **Deny** | Skip this call. Claude continues without it. |

---

## Read the prompt every time

I know it's tempting to bash through. **Don't.** The prompt shows the *exact* command — if Claude misread your intent, the prompt is where you catch it. A `rm` or `git push --force` you didn't expect is a real risk.

---

## "Allow always" — what gets allowlisted

When you pick "Allow always," Claude Code adds a permission rule to your `settings.json`. The rule is usually a pattern, not just the literal command (e.g., `Bash(git status:*)` allows all `git status` invocations).

Edit or remove rules later:
```
/config
```
Or edit `~/.claude/settings.json` directly.

---

## Cleaning up permissions

Over time, allowlists grow. The `/fewer-permission-prompts` skill scans your transcripts and proposes additions for common safe commands you're answering yes to repeatedly. Run it occasionally.

---

## User vs project settings

| Path | Scope |
|---|---|
| `~/.claude/settings.json` | All projects (your global rules) |
| `~/projects/X/.claude/settings.json` | That project only |
| `~/projects/X/.claude/settings.local.json` | That project, gitignored (machine-local) |

Project-level overrides global. Local overrides project.

> 🪞 Don't put secrets in `settings.json` — it's tracked by git. Use `settings.local.json` for anything machine-specific.

---

## Permission modes (more advanced)

You can set a session-wide mode (e.g., to bypass all prompts for a known-safe session):
- **Default** — prompt for every risky action
- **Acceptedits** — auto-approve file edits but prompt for shell commands
- **Plan** — read-only mode, no actions until you approve a plan
- **Bypass permissions** — dangerous; don't use casually

Configure via `/config` or in `settings.json`.

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
