[← back to the book](../README.md)

# 06 — Plug it into your other apps

You've installed Claude Code. You've made it write a file for you.
You've given it project context with CLAUDE.md. You've bolted on a
skill. Claude can do a lot inside the folder you launched it from.

What it can't do yet: reach outside that folder. Want it to read a
webpage, check your email, or look at your calendar? It's blind to
all of that.

MCP fixes that.

This chapter: we'll install uv (a small Python tool we need), then
add the fetch MCP so Claude can pull URLs. We'll point it at a real
webpage (Ted Lasso's Wikipedia page, because why not), get a
summary, then uninstall the whole thing when we're done.

---

## quick check before we start

Six chapters down, one to go. Before we plug Claude into the outside
world, make sure:

- You've installed Claude Code.
- You've used `/plugin install` at least once (chapter 05 covered this).
- You've got internet that works on your machine.

---

## why bother plugging it into other apps

Skills extend what Claude knows how to DO. MCPs extend where Claude
can REACH.

Without MCP, Claude only sees the folder you launched it from. With
MCP, Claude can read webpages, query databases, check your calendar,
read your email, whatever the MCP server exposes. The MCP server
acts as a bridge between Claude and the outside thing.

The win: stop copy-pasting things into Claude. Let it go fetch what
it needs.

---

## first, a word about MCP

MCP = Model Context Protocol. It's the standard for "let an AI
assistant talk to outside apps." Anthropic created it. Lots of tools
support it now.

The way it works:

- Someone writes a small program (an **MCP server**) that knows how
  to talk to a specific thing: a website, your calendar, a database,
  whatever.
- You tell Claude Code "here's an MCP server, use it when relevant."
- Claude can now reach that thing from any folder.

Heads up: this is the most technical chapter in the book. Take it
slow. The payoff is real.

---

## the actual steps — time to roll up your sleeves

We're installing two things:

1. **uv**, a Python tool runner we need because the fetch MCP is
   written in Python. Quick install.
2. **fetch MCP**, the actual thing that lets Claude read webpages.

Then we point Claude at Ted Lasso's Wikipedia page (callback to
chapter 04, because why not) and have it summarize.

1. Open your terminal (same one from chapter 02).

2. Install uv. Paste this:
   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   ```
   *Drops a single binary at `~/.local/bin/uv` (or the equivalent on
   Windows) and adds one line to your shell config. Doesn't touch
   system Python or any system folders. Fully reversible.*

3. Close and reopen your terminal so the new uv install shows up.
   Then verify:
   ```bash
   uv --version
   ```
   *You should see something like `uv 0.4.x`. If "command not
   found," close and reopen the terminal again. Sometimes it takes
   a fresh window.*

4. Tell Claude Code about the fetch MCP. Paste this:
   ```bash
   claude mcp add fetch -- uvx mcp-server-fetch
   ```
   *Reads as: "register an MCP called `fetch`. When you need it, run
   `uvx mcp-server-fetch`." The first time Claude actually uses it,
   `uvx` downloads the package on its own. No extra setup ritual.*

5. Launch Claude Code:
   ```bash
   claude
   ```

6. Tell Claude to fetch the Ted Lasso Wikipedia page. Paste this:
   ```
   Fetch https://en.wikipedia.org/wiki/Ted_Lasso and summarize the
   show in 3-5 sentences.
   ```

7. Claude will use the fetch MCP to pull the page, read it, and
   summarize. You'll see it call the MCP tool, then write the
   summary.

8. Exit when you're done:
   ```
   /exit
   ```

> Claude just reached out to the internet and brought back something
> useful. That's what MCP unlocks across every app you connect it to.

---

## what just happened

You did three things:

- **Installed uv**, Python's modern package runner. It can now spin
  up any Python tool on demand without polluting your system.
- **Registered the fetch MCP** with Claude Code using `claude mcp
  add`. Claude Code now knows the bridge exists.
- **Used it** by asking Claude to fetch a URL. Claude called the
  MCP server, got the webpage as readable text, and summarized it.

The pattern for any MCP is the same: install the underlying tool if
needed, register it with `claude mcp add`, then use natural language.
You don't have to "invoke" MCPs explicitly the way you invoke skills
with `/skill-name`. Claude reaches for them when relevant.

---

## where to find more MCPs

| Where | What's there |
|---|---|
| https://github.com/modelcontextprotocol/servers | Official MCP servers. Includes fetch, time, weather, filesystem, git, memory, and more. |
| Search GitHub for `awesome-mcp-servers` | Community-maintained lists of MCP servers across many categories. |
| https://modelcontextprotocol.io | The official MCP docs. |

When you install a new MCP, it's the same pattern every time:
install the runtime (if needed) → `claude mcp add` → use it.

---

## how to remove it (when you're done experimenting)

Two levels.

**Remove just the fetch MCP** (keeps uv installed for next time):
```bash
claude mcp remove fetch
```
*Claude Code forgets the fetch MCP. uv stays on your machine for
any other MCPs you want to install later.*

**Remove uv too** (full reset):
```bash
uv cache clean       # removes any cached MCP packages
uv self uninstall    # removes uv itself
```
*Works on Mac, Windows, and Linux. uv knows where its own files
live on each OS.*

---

## in case of emergency

First time plugging Claude into the outside world has friction. Not
your fault. Probably one of these.

| Symptom | What it means | What to do |
|---|---|---|
| `uv: command not found` | uv installed but PATH didn't update | Close and reopen the terminal completely. If still broken, re-run the install command. |
| `claude mcp add` says it can't find `claude` | Same root cause as the install chapter (Claude Code not on PATH) | Close and reopen the terminal. Run `claude --version` to confirm Claude Code itself works. |
| Claude says it can't reach the URL | The fetch MCP isn't actually wired up | Outside Claude, run `claude mcp list` to see what's registered. If `fetch` isn't there, redo step 4. |
| Claude fetched the page but the summary is wrong or incomplete | The page is long and fetch truncated it | Ask Claude to "fetch in chunks" or pick a shorter page. |
| You want to start over | Easy | `claude mcp remove fetch`, then redo step 4. |

---

## now you can

- Install MCP servers with `claude mcp add`
- Let Claude reach outside the launch folder to apps and websites
- List your registered MCPs with `claude mcp list`
- Remove MCPs cleanly with `claude mcp remove`
- Know where to find more MCPs when you need them

Six chapters down. One to go: making Claude remember things across
sessions. The last big lock.

---

→ Next: [07 — Make it stop forgetting](../07-stop-forgetting/)

**Last verified: 2026-05-16 with Claude Code 2.1.138**
