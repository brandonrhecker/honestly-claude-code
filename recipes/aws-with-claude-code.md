# Recipe — Working with AWS through Claude Code

How to use Claude Code as your AWS pair programmer without losing the plot.

---

## TL;DR

1. **Console-first, then CLI/CDK** — do new things in the AWS console once so you know what each clicked button does. Then have Claude help you script the same thing.
2. **Verify before destroy** — for anything that changes shared state, have Claude read the current state first.
3. **Use Claude as your docs navigator** — AWS docs are vast and search is mediocre; Claude finds the right page faster.

---

## When you'll hit this

You're building something on AWS and want Claude Code as your collaborator. Could be Lambda, DynamoDB, S3, IAM, Bedrock, CloudFront — anything.

---

## The console-first pattern

For *any new AWS service or pattern you've never touched*, walk through it in the AWS console once. Click through the wizard. Read the inline help. See what fields exist.

Then ask Claude:

> "I just created an X in the AWS console. Show me the CLI command that would do the same thing, and explain each flag."

You'll retain the concept way better than if you'd jumped straight to CLI. And you'll catch obvious mistakes (wrong region, wrong IAM role) before they bite.

---

## Verify-before-destroy

Anything destructive: have Claude check current state first.

```bash
# Before: read the current state
aws dynamodb describe-table --table-name my-table

# Confirm it's what you expect.
# THEN run the destructive command.
aws dynamodb delete-table --table-name my-table
```

Claude can't see your AWS account between sessions. It's relying on whatever it last read. Stale assumptions destroy things.

---

## Claude as your AWS docs navigator

AWS docs are huge. Search is bad. Claude is great at:

- "Where in the docs does it say how to set X for service Y?"
- "What IAM permissions does Lambda need to write to DynamoDB?"
- "What's the difference between `s3:PutObject` and `s3:PutObjectAcl`?"

Ask. Then verify by clicking through to the actual docs page. Don't ship code based on Claude's recollection of an obscure permission.

---

## AWS CLI auth (where it lives)

If `aws` commands aren't working in Claude Code's terminal, auth is missing.

| File / var | What it has |
|---|---|
| `~/.aws/credentials` | access keys (per-profile) |
| `~/.aws/config` | default region, profile names |
| `AWS_PROFILE` env var | which profile to use this shell session |
| `AWS_REGION` env var | overrides the profile's default region |

Quick check that auth works:

```bash
aws sts get-caller-identity
```

If that returns your account/role, you're good. If not, run `aws configure` (or `aws sso login` if you're on SSO).

---

## Keep your per-service notes elsewhere

Claude-Holocron is about *using Claude Code*. AWS-specific service walkthroughs (S3, CloudFront, Lambda, API Gateway, DynamoDB step-by-steps) belong in their own repo — that way you can update them independently and share them without exposing your Claude Code preferences.

If you maintain a separate AWS-setup-guide repo, link it here once you do.

---

## Common gotchas

- **Wrong region** — `aws s3 ls` shows nothing? You're probably in a different region than your bucket. Check `AWS_REGION` or your profile's default.
- **Wrong profile** — Claude doesn't know your shell's `AWS_PROFILE`. Run `aws sts get-caller-identity` in a fresh terminal to confirm identity.
- **IAM permission errors look generic** — when AWS says "access denied," the message usually doesn't say *which* permission is missing. Ask Claude to read the relevant docs and propose the minimal IAM policy.
- **Claude suggests a CLI command with stale syntax** — verify against the actual AWS docs before running. The CLI changes occasionally.

---

> 🪞 About to run a CLI command Claude wrote that touches prod or shared state? Paste it back into chat and ask "what does this do, and what's the worst case if I'm wrong about the current state?" Five seconds, saves disasters.

---

## See also

- [recipes/build-a-lambda-with-claude.md](build-a-lambda-with-claude.md) — the iteration loop for Lambda specifically
- [best-practices/git-workflow.md](../best-practices/git-workflow.md) — committing AWS deploy scripts safely
- [best-practices/what-not-to-commit.md](../best-practices/what-not-to-commit.md) — keeping AWS secrets out of git

---

**Last verified: 2026-05-16 with Claude Code 2.1.138**
