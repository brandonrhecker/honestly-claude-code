# 01 — Install WSL with Ubuntu

WSL = "Windows Subsystem for Linux." Lets you run a real Linux environment inside Windows. Claude Code runs in there.

---

## Steps

1. Click **Start**, type "PowerShell", right-click **Windows PowerShell**, choose **Run as administrator**.
2. In the blue PowerShell window, run:
   ```powershell
   wsl --install -d Ubuntu
   ```
   The `-d Ubuntu` form is foolproof on every Windows version.
3. **Restart the computer** when it finishes.
4. After restart, Ubuntu opens automatically and asks for a Linux username + password. Pick something simple (lowercase, no spaces). Write the password down.

---

## If Ubuntu doesn't open after restart

Older Windows builds sometimes install just the feature, not the distro. Pick one:

- **PowerShell (admin):** `wsl --install -d Ubuntu` again
- **Microsoft Store:** search "Ubuntu", install, launch once to set username/password

---

## How to open Ubuntu later

Type "Ubuntu" in the Start menu. Or open Windows Terminal and pick the Ubuntu profile.

---

## If `wsl --install` fails

Errors mentioning Hyper-V or virtualization usually mean BIOS virtualization is off. Microsoft's full troubleshooting: <https://learn.microsoft.com/en-us/windows/wsl/install>.

> 🪞 The "username" you set here becomes part of every path on this machine (`/home/<username>/`). Pick one you can live with. Brandon's is `bhecker`.

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
