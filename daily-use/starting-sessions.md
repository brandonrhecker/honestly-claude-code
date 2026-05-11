# Starting (and ending) sessions

---

## Start a session

```bash
cd ~/projects/<ProjectName>    # always cd in first
claude                         # opens the interactive prompt
```

Why `cd` first: Claude only sees the folder you launch it from (plus the path up to home for CLAUDE.md). Launching from the right folder loads the right context.

---

## End a session

- `/exit` — clean exit
- `Ctrl+C` twice — force exit
- Closing the terminal also works but is less graceful

---

## Within a session

| You want to... | Do |
|---|---|
| Start a fresh conversation, same project | `/clear` |
| Resume a previous conversation | `claude --resume` from the same folder |
| Check what model you're using | `/model` |
| Show all commands | `/help` |
| Run a shell command without leaving Claude | `! <command>` |

---

## When to `/clear` vs start over

`/clear` keeps you in the same project (same CLAUDE.md, same memory) but drops the conversation history. Use it whenever you're switching to a totally unrelated task. Long, mixed-topic conversations hurt Claude's focus and burn tokens.

---

## When to restart with `claude` vs `/clear`

Functionally similar. `/clear` is faster (no reloading). Restart only if Claude is acting weird or you changed `CLAUDE.md` mid-session.

---

> 🪞 Habit to build: one task per conversation. If you finish helping the Insmed Jira workflow and now want to write a script for something else, `/clear` first.

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
