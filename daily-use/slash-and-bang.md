# Slash (`/`) and bang (`!`) commands

Two special prefixes inside a Claude Code session.

---

## Slash `/` — Claude Code commands and skills

Lines that start with `/` are special instructions to Claude Code itself (or to skills).

### Built-ins (always available)

| Command | What it does |
|---|---|
| `/help` | Show all commands |
| `/clear` | Drop conversation history; same project |
| `/exit` | Quit Claude Code |
| `/config` | Show / edit settings |
| `/model` | Pick which Claude model to use |
| `/fast` | Toggle fast mode (Opus 4.6) |
| `/mcp` | Show MCP server status |
| `/resume` | Resume previous session |

### Skills (you or Claude installed them)

Skills look like commands too. Brandon's list:

| Skill | What it does |
|---|---|
| `/jira-bulk-stories` | Bulk-create Jira stories from an Excel workbook |
| `/init` | Generate a `CLAUDE.md` for a new project |
| `/review` | Review a pull request |
| `/security-review` | Security review of pending changes |
| `/simplify` | Review changed code for reuse & quality, then fix |
| `/loop <interval> <cmd>` | Run something on a recurring schedule |
| `/schedule` | Manage scheduled remote agents |
| `/update-config` | Edit `settings.json` (permissions, env vars, hooks) |
| `/keybindings-help` | Customize keyboard shortcuts |
| `/fewer-permission-prompts` | Add common Bash/MCP tools to allowlist |
| `/claude-api` | Build/debug Claude API apps |

Run `/help` inside a session to see the full live list (it may include extras from plugins).

---

## Bang `!` — run a shell command

Lines that start with `!` run as a shell command in the current folder, and the output flows back into the conversation so Claude can see it.

```
! ls -la
! sudo apt update && sudo apt install -y gh
! gh auth status
```

Use it when:
- You need to run something interactive (a `sudo` password prompt, an OAuth login)
- You want the output of a command in the conversation so Claude can act on it
- You don't want to leave the Claude session

---

## Why `sudo` only works via `!` from inside Claude

When Claude tries to run `sudo` via its own Bash tool, there's no terminal attached to enter the password. Claude prompts you to type the command yourself, and `!` is the cleanest way — it runs in your real terminal, output streams back into the chat.

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
