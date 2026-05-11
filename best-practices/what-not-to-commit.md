# What NOT to commit

Things that should never end up in a git repo. Set up `.gitignore` to enforce this *before* the first commit.

---

## Categories to keep out

### Secrets and credentials
- `.env`, `.env.local`, `.env.production`
- `credentials.json`, `service-account.json`
- API tokens, OAuth client secrets, private keys (`*.pem`, `*.key`)
- Any file with a real password, JWT, or API key in it

If you accidentally commit one: **rotate the secret immediately**. Assume the moment it hit GitHub, someone's scraper saw it.

### Personal/client data
- `.csv` / `.xlsx` files with real customer data, PII, PHI
- Database dumps
- Anything covered by NDA or HIPAA

### Generated stuff
- `node_modules/`, `__pycache__/`, `.venv/`, `venv/`
- Build artifacts: `dist/`, `build/`, `*.o`, `*.pyc`
- Coverage reports, logs

### Editor / OS junk
- `.DS_Store` (Mac), `Thumbs.db` (Windows), `desktop.ini`
- `*.swp`, `*~`, `.vscode/` (sometimes — depends on team)
- WSL-specific: `*:Zone.Identifier` files (Windows download metadata)

### Large binary files
- Videos, large images, big PDFs — git doesn't store these well
- Use Git LFS if you really need to track them, otherwise external storage

---

## A starter `.gitignore` for a Python/Node project

```gitignore
# Secrets
.env
.env.*
*.pem
*.key
credentials.json

# Python
__pycache__/
*.pyc
.venv/
venv/

# Node
node_modules/
npm-debug.log

# Build output
dist/
build/

# OS junk
.DS_Store
Thumbs.db
desktop.ini

# WSL Zone.Identifier files
*:Zone.Identifier

# Editor
*.swp
*~
.vscode/
.idea/

# Client data (project-specific — uncomment what applies)
# *.csv
# *.xlsx
# data/
```

---

## Allowlist `.gitignore` (alternative)

For a config-only repo like `~/.claude/`, ignore everything by default and *allowlist* what to track:

```gitignore
# Ignore everything
*

# Then allow specific things
!.gitignore
!settings.json
!skills/
!skills/**
```

This is what `~/.claude/`'s `.gitignore` does — it tracks `settings.json` and `skills/` and nothing else.

---

## How to verify before committing

```bash
git status              # what would be added?
git diff --cached       # exact content being committed
```

If anything looks wrong, `git restore --staged <file>` removes it from staging.

---

## If you already committed a secret

1. **Rotate the secret immediately** — that's the only fix that matters
2. Add it to `.gitignore` so it can't happen again
3. Optionally scrub it from history: `git filter-repo --invert-paths --path <file>` then `git push --force` (be careful — see [git-workflow.md](git-workflow.md))

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
