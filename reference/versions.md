# Versions

What I'm running, when, and what to update when something drifts.

---

## Current snapshot

**Last updated: 2026-05-11**

| Component | Version | Where it lives |
|---|---|---|
| Claude Code CLI | `2.1.138` | `~/.nvm/versions/node/v20.20.2/bin/claude` |
| Node.js | v20.20.2 | NVM (`~/.nvm/`) |
| npm | 10.8.2 | bundled with Node |
| Ubuntu | 26.04 LTS | WSL2 |
| `gh` CLI | install via `apt` | `/usr/bin/gh` |
| `git` | preinstalled on Ubuntu | `/usr/bin/git` |

Check anytime:
```bash
claude --version
node --version
npm --version
gh --version
git --version
lsb_release -d
```

---

## Claude model family (Claude 4.X)

The current family is Claude 4.X. Three tiers:

| Tier | Model | Model ID | When to use |
|---|---|---|---|
| Most capable | Opus 4.7 | `claude-opus-4-7` | Default for hard work. Also available as `claude-opus-4-7[1m]` for 1M-token context. |
| Mid | Sonnet 4.6 | `claude-sonnet-4-6` | Balanced cost/quality. Good default if Opus is overkill. |
| Fast/cheap | Haiku 4.5 | `claude-haiku-4-5-20251001` | Quick, simple tasks. Cheapest. |

**How to switch:** inside Claude Code, run `/model` to pick one for the session.

**Fast mode:** `/fast` toggles a faster Opus 4.6 variant (only available on Opus 4.6, not 4.7). Lower latency, same intelligence.

**Knowledge cutoff for the models above:** January 2026.

---

## How I update versions in this file

When I run an update (npm install -g claude-code@latest, switch Node, etc.):

1. Re-run the version-check commands above
2. Update the table
3. Bump "Last updated" to today
4. If a model changed, also update the README snapshot table

---

## Version history (manual log)

| Date | What changed |
|---|---|
| 2026-05-11 | Initial snapshot. Claude Code 2.1.138, Node 20.20.2, Opus 4.7 / Sonnet 4.6 / Haiku 4.5 are current. |

> 🪞 If a note in this KB says "as of Claude Code 2.1.x" and you're on 2.5+, check whether the command/flag still exists before trusting it.

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
