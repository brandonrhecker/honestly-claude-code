# Git workflow

How I work with git day-to-day. Solo workflow — no PRs, no code review unless I add one later.

---

## Commit early, commit often

Smaller commits are easier to:
- Understand later (good messages, narrow scope)
- Roll back if needed
- Cherry-pick to another branch

Rule of thumb: when you've finished one logical change, commit.

---

## Write good commit messages

The pattern I use:

```
<type>: <what changed, in present tense>

<optional longer description of why>
```

Types I use: `feat`, `fix`, `refactor`, `docs`, `chore`, `wip` (last resort).

Examples:
- `feat: add jira-bulk-stories skill for CDW workbook intake`
- `fix: handle empty rows in xlsx helper`
- `docs: update Insmed CLAUDE.md with new env var`

Focus on the **why**, not the what. The diff already shows the what.

---

## Stage specific files, not `.`

```bash
git add CLAUDE.md README.md          # explicit
git add .                            # avoid — picks up everything new
```

`git add .` is how `.env` and `credentials.json` accidentally end up on GitHub. Be deliberate.

---

## Push regularly

After a meaningful commit (or end of a work session), `git push`. Don't accumulate 20 local commits before pushing — you lose the off-machine backup that's most of the point of GitHub.

---

## Branch when changes are risky

For a solo workflow, working directly on `main` is fine for most edits. Branch when:
- You're trying an experiment that might not pan out
- You want to keep `main` deployable while you work
- You're doing a multi-day refactor

```bash
git checkout -b refactor/skill-runner
# work, commit
git checkout main
git merge refactor/skill-runner
git push
```

---

## Never `--force` push on `main`

`git push --force` rewrites history on the remote. If a collaborator (or future-you on another machine) had already pulled the old version, you've now created a mess. On a branch nobody else uses, `--force-with-lease` is fine for cleanup.

---

## Use Claude for commits — but read the message

When Claude offers to commit for you, read the message before approving. Usually fine; occasionally captures the wrong "why."

---

## Tag releases (optional)

If a repo reaches a "good state" you might want to revert to:

```bash
git tag v0.1.0 -m "First working version"
git push --tags
```

For this KB, probably overkill. For the Insmed skill code, useful.

---

## Recovering from mistakes

| Scenario | Move |
|---|---|
| Committed the wrong thing locally (not pushed) | `git reset HEAD~1` (keeps changes) or `git reset --hard HEAD~1` (discards) |
| Committed a secret and pushed | Rotate the secret immediately. Then `git filter-repo` or BFG to scrub, then force-push. The leaked value is now public — assume it's compromised. |
| Wrong branch | `git stash` → switch branches → `git stash pop` |
| Want to undo last commit but keep changes staged | `git reset --soft HEAD~1` |

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
