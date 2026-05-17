[← back to the book](../README.md)

# 02 — Get the damn thing running

You're going to install Claude Code on your computer. After this
chapter, typing `claude` into a terminal opens a chat with the AI.

---

## quick check before we start

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

**Pro is what most people use.** Budget **~$20/month**. About the
cost of a streaming subscription.

> Prices as of May 2026. Anthropic updates them. Always check
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

## why bother installing Claude Code

Without Claude Code on your computer, this whole book is theory.
After this chapter, the next six give you a working AI on your
machine.

---

## the actual steps — time to roll up your sleeves

Pick your OS. Follow that section. Skip the others.

### Mac

1. Open the **Terminal** app: press `Cmd+Space`, type `Terminal`,
   hit Enter.
2. Install Node.js using NVM (Node Version Manager). NVM handles
   installing Node for you. Paste this in the terminal and press
   Enter:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
   ```
3. Close the Terminal window completely and reopen it. The install
   added something to your shell config that the new window will pick
   up.
4. Install the latest Node:
   ```bash
   nvm install --lts
   ```
5. Install Claude Code using npm (Node Package Manager, which came
   with Node). The `-g` flag means "global" so Claude is available
   from any folder:
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
   First run, Claude Code walks you through three things.

   **Pick a text theme.** Use arrow keys to highlight, Enter to
   select. Dark mode (the default) is fine. You can change it later
   with `/theme` inside Claude.

   **Log in to Anthropic.** A few small steps:
   1. Claude Code prints a long URL in your terminal.
   2. Copy it.
   3. Paste it into your browser. (Your browser might auto-open;
      if not, paste it in yourself.)
   4. Log in to your Anthropic account in the browser.
   5. The browser shows an authorization code (a long string of
      letters and numbers). Copy it.
   6. Switch back to your terminal. Claude Code is waiting for that
      code. Paste it in, hit Enter.

   **Confirm the workspace.** Claude Code shows the folder you
   launched in and asks if you trust it. For this first launch
   you're in your home folder. Use arrow keys to select **"Yes, I
   trust this folder"** and hit Enter. *This prompt shows up the
   first time you launch Claude in any new folder. It's a one-time
   security check per folder, because Claude is about to be able to
   read, edit, and run things there.*

   You're at the Claude prompt.

> Congrats. You're officially a nerd now. The hardest part is behind you.

### Windows

1. Install Node.js for Windows from https://nodejs.org. Click the
   big green button labeled "LTS" and run the installer with
   default options.
2. Open **Windows Terminal**:
   - Press your `Windows` key (the one with the Windows logo on
     your keyboard).
   - Type `Terminal`.
   - Hit Enter.

   A dark window opens. That's your terminal. Keep it open.
3. By default, Windows blocks PowerShell scripts (a security
   setting). Allow your own user to run local scripts. This is a
   one-time fix and matches the standard developer Windows setup:
   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```
   *When it asks "Are you sure?", type `Y` and hit Enter. The
   `-Scope CurrentUser` part means this only affects you, not the
   whole machine. No admin needed.*
4. Install Claude Code. The `-g` flag means "global" so Claude is
   available from any folder:
   ```powershell
   npm install -g @anthropic-ai/claude-code
   ```
5. Confirm:
   ```powershell
   claude --version
   ```
6. Launch:
   ```powershell
   claude
   ```
   First run, Claude Code walks you through three things.

   **Pick a text theme.** Use arrow keys to highlight, Enter to
   select. Dark mode (the default) is fine. You can change it later
   with `/theme` inside Claude.

   **Log in to Anthropic.** A few small steps:
   1. Claude Code prints a long URL in your terminal.
   2. Copy it.
   3. Paste it into your browser. (Your browser might auto-open;
      if not, paste it in yourself.)
   4. Log in to your Anthropic account in the browser.
   5. The browser shows an authorization code (a long string of
      letters and numbers). Copy it.
   6. Switch back to your terminal. Claude Code is waiting for that
      code. Paste it in, hit Enter.

   **Confirm the workspace.** Claude Code shows the folder you
   launched in and asks if you trust it. For this first launch
   you're in your home folder. Use arrow keys to select **"Yes, I
   trust this folder"** and hit Enter. *This prompt shows up the
   first time you launch Claude in any new folder. It's a one-time
   security check per folder, because Claude is about to be able to
   read, edit, and run things there.*

   You're at the Claude prompt.

> Congrats. You're officially a nerd now. The hardest part is behind you.

### Linux

If you're on WSL, follow this section, not the Windows one above.

1. Check if you have Node already:
   ```bash
   node --version
   ```
   If it prints a version (anything `v18` or higher), skip to step 3.
   If it prints `command not found`, do step 2 first.

2. Install Node via NVM (Node Version Manager). DO NOT
   `sudo apt install npm` on Ubuntu — that gets an outdated
   version that breaks Claude Code. Use the same NVM flow as the
   Mac section above:

   Install NVM:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
   ```

   Close and reopen your terminal, then install Node:
   ```bash
   nvm install --lts
   ```

3. Install Claude Code:
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```

4. Launch:
   ```bash
   claude
   ```
   First run prompts you for a theme (Dark mode default is fine),
   then walks you through Anthropic login:

   1. Copy the URL it prints into your browser.
   2. Log in to your Anthropic account.
   3. The browser shows an authorization code. Copy it.
   4. Paste the code back into your terminal where Claude Code is
      waiting, hit Enter.

   Then Claude Code asks if you trust the folder you launched in.
   Select "Yes, I trust this folder" (arrow keys + Enter). One-time
   per folder.

On WSL the browser won't auto-open since WSL can't reach your
Windows browser directly. That's why the URL and code are
copy/paste.

> NERD.

---

## what just happened

You installed two things:

- **Node.js**, the runtime Claude Code is built on. You don't need
  to understand it; just know it's required.
- **Claude Code**, the actual tool you'll use.

When you first ran `claude`, it opened your browser to log you into
Anthropic. From now on it remembers you. No need to do that again.

You're now in an interactive Claude session. The prompt is waiting
for you to type something.

Don't yet. We'll do that in the next chapter. For now, type `/exit`
to close the session cleanly.

---

## in case of emergency

Didn't work? You didn't do anything wrong. Don't throw anything yet. We'll get through this together.

| Message | What it means | What to do |
|---|---|---|
| `claude: command not found` | Node + npm aren't on your PATH | Close and reopen the terminal. If still broken, the Node install didn't finish. Re-run that step. |
| `EACCES: permission denied` on `npm install` | `EACCES` is "access denied". npm is trying to write to a system folder it doesn't have permission for | On Mac, make sure you used the NVM install above (not Homebrew or the `.pkg` installer). Don't use `sudo`. |
| `running scripts is disabled on this system` (Windows) | You skipped the execution-policy step (Windows step 3) | Run `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` and answer `Y`. Then re-run the command. |
| `nvm: command not found` after install | Your shell didn't reload | Close and reopen the terminal. New shells pick up the nvm config. |
| Browser login spins forever | Pop-up blocker, third-party cookies disabled, or the auth tab failed to open | Copy the URL the terminal printed and open it manually in a fresh browser tab. |
| `npm ERR! 403` or similar network error | Internet or proxy issue | Check your internet. If you're on a corporate network or VPN, you might be blocked from the npm registry. Try a personal network. |
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
