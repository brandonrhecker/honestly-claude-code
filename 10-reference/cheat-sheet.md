[← back to the book](../README.md)

# Cheat sheet

The stuff you'll actually need to remember. The rest you can
google.

---

## Open and close Claude

| What you want | What you type |
|---|---|
| Start Claude in this folder | `claude` |
| Check it's installed | `claude --version` |
| Exit cleanly | `/exit` |
| Force quit (last resort) | `Ctrl+C` twice |

---

## Move around your computer

Type these in the terminal, NOT inside Claude.

| What you want | What you type |
|---|---|
| See where you are | `pwd` |
| List what's in this folder | `ls` |
| Step into a folder | `cd folder-name` |
| Go up one folder | `cd ..` |
| Go to your home folder | `cd ~` |
| Make a new folder | `mkdir folder-name` |

---

## Inside Claude (slash commands)

Type these at the Claude prompt.

| What you want | What you type |
|---|---|
| See what's available | `/help` |
| Change the theme | `/theme` |
| See current permissions | `/permissions` |
| See your connected apps | `/mcp` |
| Reload plugins | `/reload-plugins` |
| Exit | `/exit` |

---

## Plugins (bundles of skills)

| What you want | What you type |
|---|---|
| Register a marketplace | `/plugin marketplace add <owner/repo>` |
| Install a plugin | `/plugin install <name>@<marketplace>` |
| Uninstall a plugin | `/plugin uninstall <name>@<marketplace>` |
| Remove a marketplace | `/plugin marketplace remove <name>` |

Always run `/reload-plugins` after installing or removing.

---

## MCPs (connect Claude to other apps)

Run these in your terminal, NOT inside Claude.

| What you want | What you type |
|---|---|
| Add an HTTP MCP | `claude mcp add --transport http <name> <url>` |
| List your MCPs | `claude mcp list` |
| Remove an MCP | `claude mcp remove <name>` |

Then run `/mcp` inside Claude to confirm it's connected.

---

## When something's broken

| Symptom | First thing to try |
|---|---|
| `claude: command not found` | Close and reopen your terminal |
| A slash command does nothing | `/reload-plugins` |
| Permission error on install | Don't use `sudo`. See chapter 02. |
| Claude wrote in the wrong folder | `/exit`, `cd` to the right folder, `claude` again |
| MCP shows "failed" | Remove it, add it again |
| Anything else | Copy the error, ask Claude what it means |

---

## Two things to never forget

1. **Read what Claude wrote before you click yes.** Even when
   half of it might as well be in Greek. Look anyway.
2. **You can always `/exit` and start over.** Nothing is
   permanent.

---

[← back to the book](../README.md)

**Last verified: 2026-05-19 with Claude Code 2.1.138**
