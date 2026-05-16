# 02 — Get the damn thing running

You're going to install Claude Code on your computer. After this
chapter, typing `claude` into a terminal opens a chat with the AI.

---

## before you start

You need a computer (Mac, Windows, or Linux), internet, and an
Anthropic account with a paid plan.

### what it actually costs

Anthropic gives you a few options. The honest breakdown:

| Plan | Cost | What you get |
|---|---|---|
| Free | $0 | Claude on the claude.ai website only. **No Claude Code.** |
| Pro | ~$20/month | Claude on the website + Claude Code, light usage. Fine for following this book and casual day-to-day use. |
| Max (5×) | ~$100/month | If you outgrow Pro and want more headroom. |
| Max (20×) | ~$200/month | Power-user / daily-driver tier. |
| API | pay-per-token | Per-call billing. Not the simple path for beginners. |

For this book, **Pro is plenty.** Upgrade later if you start hitting
limits.

> Prices as of May 2026. Anthropic updates them — always check
> [claude.ai/pricing](https://claude.ai/pricing) before you commit.

### setting up your Anthropic account

If you already have a Pro or higher account, skip ahead to **try this**
below.

If you have a free account, jump to step 4 to upgrade.

1. Open https://claude.ai in your browser.
2. Click **Sign up** (top right). Sign up with Google for the
   fastest path, or use email + password.
3. Verify your email if it asks.
4. Once you're logged in, click your avatar (top right) → **Settings**
   → **Plans** (or **Billing**).
5. Pick **Pro**. Add a credit card.
6. Done. The same account works for both the claude.ai chat website
   AND the Claude Code tool you're about to install.

---

## why bother

Without Claude Code on your computer, this whole book is theory.
After this chapter, the next six give you a working AI on your
machine.

---

## try this

Pick your OS. Follow that section. Skip the others.

### Mac

1. Open the **Terminal** app: press `Cmd+Space`, type `Terminal`,
   hit Enter.
2. Install Node.js (the runtime Claude Code is built on). Paste this
   in the terminal and press Enter:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
   ```
3. Close the Terminal window completely and reopen it. The install
   added something to your shell config that the new window will pick
   up.
4. Install the latest Node:
   ```bash
   nvm install --lts
   ```
5. Install Claude Code:
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```
6. Confirm it landed:
   ```bash
   claude --version
   ```
   You should see something like `2.1.138 (Claude Code)`.
7. Launch it:
   ```bash
   claude
   ```
   The first run opens your browser. Log in with your Anthropic
   account.

### Windows

1. Install Node.js for Windows from https://nodejs.org — click the
   big green button labeled "LTS" and run the installer with
   default options.
2. Open **Windows Terminal** or **PowerShell**: Windows key, type
   `Terminal`, hit Enter.
3. Install Claude Code:
   ```powershell
   npm install -g @anthropic-ai/claude-code
   ```
4. Confirm:
   ```powershell
   claude --version
   ```
5. Launch:
   ```powershell
   claude
   ```
   Follow the browser login prompt.

### Linux

You probably already know how to install Node. Then:

```bash
npm install -g @anthropic-ai/claude-code
claude
```

---

## what just happened

You installed two things:

- **Node.js** — the runtime Claude Code is built on. You don't need
  to understand it; just know it's required.
- **Claude Code** — the actual tool you'll use.

When you ran `claude` for the first time, it opened your browser,
asked you to authorize the install, and logged you into your
Anthropic account. It remembers the login from now on — you won't
have to do that again.

You're now in an interactive Claude session. The prompt is waiting
for you to type something.

Don't yet — we'll do that in the next chapter. For now, type `/exit`
to close the session cleanly.

---

## shit broke?

| Message | What it means | What to do |
|---|---|---|
| `claude: command not found` | Node + npm aren't on your PATH | Close and reopen the terminal. If still broken, the Node install didn't finish — re-run that step. |
| `EACCES: permission denied` on `npm install` | npm is trying to write to a system folder | On Mac, make sure you used the `nvm` install above (not Homebrew or the .pkg installer). Don't use `sudo`. |
| `nvm: command not found` after install | Your shell didn't reload | Close and reopen the terminal. New shells pick up the nvm config. |
| Browser login spins forever | Pop-up blocker, third-party cookies disabled, or the auth tab failed to open | Copy the URL the terminal printed and open it manually in a fresh browser tab. |
| `npm ERR! 403` or similar network error | Internet or proxy issue | Check your internet. If you're on a corporate network or VPN, you might be blocked from the npm registry — try a personal network. |
| Anything else | The internet is a big place | Copy the exact error message and paste it into chat at https://claude.ai with "what does this error mean and how do I fix it on \[your OS\]?" Yes, you can use Claude to debug your Claude install. |

---

## now you can

- Open a terminal and type `claude` to start a session
- See the interactive prompt
- Exit cleanly with `/exit`

That's the whole install. The rest of the book is built on top of this.

---

→ Next: [03 — Make it do something for you](../03-make-it-do-something/)

**Last verified: 2026-05-16 with Claude Code 2.1.138**
