[← back to the book](../README.md)

# 06: Plug it into your other apps

You've installed Claude Code. You've made it write a file for you.
You've given it project context with CLAUDE.md. You've bolted on a
skill. Claude already has built-in web tools: it can fetch a URL or
search the web on its own.

What it CAN'T do natively: talk to specific apps and services. Your
podcast app, your calendar, your notes app, your inbox. Claude
doesn't know how to reach any of those unless you build it a bridge.

MCP is that bridge.

This chapter: we'll install the Pocket Casts MCP so Claude can
recommend podcasts based on what you're learning. We'll point it at
this book's repo URL and ask for episodes that'd help you keep
going. Then we'll uninstall.

---

## quick check before we start

One chapter from the finish line. Before we plug Claude into the
outside world, make sure:

- You've installed Claude Code.
- You've used the plugin system at least once (chapter 05 covered this).
- You've got internet that actually works on your machine.

---

## why bother plugging it into other apps

Claude can already fetch URLs and search the web with its built-in
tools. So why bother with MCP?

Built-in tools are generic. They know "the web" but not "your
podcast app," "your calendar," "your inbox," "your CRM." Those are
specific services with their own data and their own way of doing
things.

MCP gives Claude specific connections to specific services. An MCP
server is a small program that knows how to translate between
Claude and one particular service. Install the Pocket Casts MCP and
Claude can search Pocket Casts' catalog. Install the Slack MCP and
Claude can read your Slack messages. And so on.

The win: stop being limited to what Claude was born knowing. Plug
it into your stuff.

---

## first, a word about MCP

MCP = Model Context Protocol. It's the standard for "let an AI
assistant talk to outside apps." Anthropic created it. Lots of
tools support it now.

The way it works:

- Someone writes a small program (an **MCP server**) that knows how
  to talk to one specific thing: an app, a database, a website,
  whatever.
- You tell Claude Code about that server with `claude mcp add`.
- Claude can now reach that thing from any folder.

A few honest notes:

- MCPs are more technical to set up than skills. This is the most
  technical chapter in the book. Take it slow.
- Many MCPs need an API key or login. Some are open and free. We're
  using a free, no-login one today (Pocket Casts).
- An MCP only adds the connection. Whether Claude uses it well
  depends on how you ask.

---

## the actual steps: time to roll up your sleeves

1. Open your terminal (same one from chapter 02).

2. Register the Pocket Casts MCP. Paste this:
   ```
   claude mcp add --transport http pocketcasts https://mcp.pocketcasts.com
   ```
   *Reads as: "Register an MCP called `pocketcasts` that lives at
   `https://mcp.pocketcasts.com`. Use HTTP transport." No API key,
   no signup, no auth. Pocket Casts hosts the MCP for free.*

3. Launch Claude Code:
   ```bash
   claude
   ```
   *First time in this folder, Claude Code asks "Is this a folder
   you trust?" Pick **"Yes, I trust this folder"** + Enter.*

4. Confirm the MCP is wired up. Type this inside Claude:
   ```
   /mcp
   ```
   *You should see `pocketcasts` in the list. Press `Esc` to exit
   the MCP view and get back to the chat prompt. If you don't see
   `pocketcasts`, jump to "in case of emergency" below.*

5. Now ask Claude to read this book and recommend podcasts. Paste:
   ```
   Fetch https://github.com/brandonrhecker/claude-code-for-humans
   and use the Pocket Casts MCP to find 5 podcast episodes that
   would help me keep learning about the topics in this book.
   ```
   *Yes, the URL is this book's own repo. Meta, I know, but it
   makes the demo concrete since you already know what's in it.*

6. Watch Claude work:
   - It uses built-in WebFetch to read the repo.
   - It pulls out the main topics (Claude Code, AI for non-engineers,
     learning AI tools, etc.).
   - It uses the Pocket Casts MCP to search podcasts on those topics.
   - It returns a list of episodes with titles and where to listen.

7. Exit when you're done:
   ```
   /exit
   ```

> You just had Claude combine its built-in web tools with a brand-new
> MCP connection to deliver something neither could do alone. That's
> the actual point of MCP.

---

## what just happened

You did three things:

- **Registered an MCP server** with `claude mcp add`. Claude Code
  now knows there's a bridge to Pocket Casts' podcast catalog.
- **Verified it** with `/mcp` inside Claude Code.
- **Used two tools together** in one prompt: built-in WebFetch (to
  read the repo) AND the Pocket Casts MCP (to find related episodes).

The pattern for any MCP is the same: register it with `claude mcp
add`, verify with `/mcp`, then use it through natural conversation.
You don't invoke MCPs with slash commands the way you invoke skills.
Claude reaches for them when relevant.

The Pocket Casts MCP we picked is unusually frictionless: free, no
auth, hosted by Pocket Casts themselves. Most MCPs need an API key
or an account login. That's just the trade. A service that knows
about your data needs your permission to read it.

---

## where to find more MCPs

| Where | What's there |
|---|---|
| https://github.com/modelcontextprotocol/servers | Official MCP servers from the protocol team. Fetch, time, weather, filesystem, git, memory, and more. |
| Search GitHub for `awesome-mcp-servers` | Community-maintained lists across many categories. |
| https://modelcontextprotocol.io | The official MCP docs. |

When you install a new MCP, the pattern is the same as today:
register the server with `claude mcp add`, confirm with `/mcp`, then
use it.

---

## how to remove it (when you're done experimenting)

```bash
claude mcp remove pocketcasts
```
*Claude Code forgets the MCP. Nothing else changes on your machine.
Pocket Casts itself wasn't installed locally; the MCP just pointed
at their hosted server.*

That's it. No `/reload` step, no cleanup. Cleaner than plugins.

---

## in case of emergency

Welcome to your first MCP install. Things can go sideways. Probably
one of these.

| Symptom | What it means | What to do |
|---|---|---|
| `claude mcp add` says it can't find `claude` | Claude Code isn't on your PATH | Close and reopen the terminal. Run `claude --version` to confirm. |
| `/mcp` shows pocketcasts as "failed" or "disconnected" | The HTTP endpoint isn't responding | Try again in a minute. If still down, `claude mcp remove pocketcasts` outside Claude and re-add. |
| Claude says it can't find any podcasts | Maybe the topic search came up empty | Try a more general topic, or ask Claude to "tell me what topics you extracted from the URL" so you can refine your ask. |
| Claude lists shows but no specific episodes | Pocket Casts searches by topic then lists recent episodes from matching shows. Sometimes shows don't have recent matches | Ask Claude to "list 3 recent episodes from [show name]" to drill down. |
| You changed your mind | Easy | `claude mcp remove pocketcasts` and you're back to neutral. |

---

## now you can

- Register an MCP server with `claude mcp add`
- Confirm it's working with `/mcp`
- Use built-in tools and MCPs together in one prompt
- Remove MCPs cleanly with `claude mcp remove`
- Know where to find more MCPs when you need them

Six chapters down. One short closing chapter to go.

---

→ Next: [07: You made it. Now what.](../07-you-made-it/)

**Last verified: 2026-05-16 with Claude Code 2.1.138**
