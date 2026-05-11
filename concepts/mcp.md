# MCP (Model Context Protocol)

MCP is Anthropic's way of giving Claude access to external systems — Jira, Notion, Gmail, Google Calendar, custom databases, anything you can wrap in a server. Each MCP server exposes "tools" that Claude can call.

---

## When you'd use one

When you want Claude to interact with a system that's not just files on disk:

- Read/create Jira tickets (Atlassian MCP)
- Search/edit Notion pages (Notion MCP)
- Send/read emails (Gmail MCP)
- Query a custom database (custom MCP)

If your work is just files, you don't need MCP.

---

## Where MCP is configured

Two places:

| Scope | File | Loaded when |
|---|---|---|
| User-level (global) | `~/.claude/settings.json` | Every project |
| Project-level | `~/projects/X/.claude/settings.json` | Only in that project |

Inside, you'll see something like:

```json
{
  "mcpServers": {
    "atlassian": {
      "command": "uvx",
      "args": ["mcp-atlassian"],
      "env": { "JIRA_URL": "...", "JIRA_USERNAME": "...", "JIRA_TOKEN": "..." }
    }
  }
}
```

---

## Check status inside a session

```
/mcp
```

Shows which MCP servers are running and whether they're healthy.

---

## Brandon's setup

- **`mcp-atlassian`** is configured per-project. Auth tokens live in env vars (per-client; see each client's CLAUDE.md).
- Claude.ai-hosted MCPs (Gmail, Calendar, Drive, Notion) appear as `mcp__claude_ai_*` tools when authenticated through claude.ai's auth flow.

---

## Adding a new MCP server

Step-by-step → [recipes/add-mcp-server.md](../recipes/add-mcp-server.md).

---

## MCP vs skill vs CLAUDE.md

- **MCP** — Claude can *call* external systems (read/write)
- **Skill** — Claude follows a packaged set of *instructions + scripts*
- **CLAUDE.md** — Claude *knows* things about the project

Often a workflow combines all three: CLAUDE.md describes the project, a skill orchestrates the workflow, and MCP tools do the actual reads/writes.

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
