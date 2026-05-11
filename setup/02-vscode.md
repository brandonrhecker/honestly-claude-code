# 02 — Install VS Code

Free editor from Microsoft. Best editor for WSL work because Microsoft built the integration.

---

## Steps

1. Download: <https://code.visualstudio.com/>
2. Run the installer with default options.
3. Open VS Code once.
4. Click the **Extensions** icon on the left (4 squares).
5. Install these two extensions (both by Microsoft):
   - **WSL**
   - **Remote Development**

---

## Open a Linux folder from VS Code

From an Ubuntu terminal:
```bash
code .
```

That `.` means "this folder." VS Code opens, connected to WSL. Bottom-left of the window should say `WSL: Ubuntu`.

---

## Why this matters

When you `code .` from inside WSL, VS Code edits the Linux files natively. If you instead open the Linux folder from Windows Explorer, you'll get a slower network-share view and weird permission issues. Always launch VS Code from inside the Ubuntu terminal.

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
