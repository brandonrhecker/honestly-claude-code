# Recipe — Add an MCP server

How to wire up a new MCP server so Claude can talk to an external system.

---

## Decide the scope: user-level or project-level?

| Scope | File to edit | When |
|---|---|---|
| User-level (global) | `~/.claude/settings.json` | The MCP is useful across every project |
| Project-level | `~/projects/X/.claude/settings.json` | Only this project needs it (and you want the config in the project's git repo) |

For client-specific Jira credentials, **project-level** — auth tokens differ per client. For something like Notion that's the same across all your work, **user-level**.

---

## Pattern

Open the appropriate `settings.json` and add an entry under `mcpServers`:

```json
{
  "mcpServers": {
    "atlassian": {
      "command": "uvx",
      "args": ["mcp-atlassian"],
      "env": {
        "JIRA_URL": "https://example.atlassian.net",
        "JIRA_USERNAME": "you@example.com",
        "JIRA_TOKEN": "${JIRA_TOKEN}"
      }
    }
  }
}
```

Key fields:
- `command` — the binary that runs the MCP server (often `uvx`, `npx`, or `python`)
- `args` — arguments passed to it
- `env` — environment variables the server needs

---

## Two ways to handle secrets

### Option A: env vars (recommended)

Put the actual token in your shell env (e.g., in `~/.bashrc`):
```bash
export JIRA_TOKEN='your-real-token-here'
```

Then reference it as `${JIRA_TOKEN}` in `settings.json`. The config can be committed safely; the secret stays out.

### Option B: settings.local.json

Put MCP entries with literal secrets in `settings.local.json` (gitignored). Less flexible but simpler if you don't want to mess with env vars.

---

## After editing settings.json

1. Restart Claude Code (`/exit`, then `claude` again)
2. Run `/mcp` to verify the server is running and healthy

---

## How to find MCP servers worth adding

- Anthropic's MCP directory: <https://docs.anthropic.com/en/docs/agents-and-tools/mcp>
- Community list: <https://github.com/modelcontextprotocol/servers>
- Claude.ai built-ins (Gmail, Calendar, Drive, Notion) — these auth through claude.ai's flow and show up automatically when authenticated

---

## Common MCPs

| MCP | Use |
|---|---|
| `mcp-atlassian` | Jira + Confluence read/write |
| Notion | Read/write Notion pages |
| Gmail | Read/send email |
| Google Calendar | Read/create events |
| Google Drive | Read/write Drive files |
| Custom (Python/TS) | Any internal API you wrap in an MCP server |

---

## Brandon's current MCPs

- `mcp-atlassian` — per-project, Jira auth varies by client
- Claude.ai-authenticated: Gmail, Calendar, Drive, Notion (appear as `mcp__claude_ai_*` tools)

---

> 🪞 If `/mcp` shows a server as failing: read the error. Most failures are missing env vars or the binary not on PATH. Run the `command` + `args` from your shell manually to see the actual error message.

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
