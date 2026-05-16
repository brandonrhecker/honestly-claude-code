# Recipe — Build a Lambda function with Claude Code

The iteration loop for writing, deploying, and debugging AWS Lambda functions with Claude as your pair.

---

## TL;DR

Loop: **edit → package → deploy → invoke → read logs → diagnose**. Wrap it in a shell script so each turn is one command. Lambda's fast feedback (10–30 sec to deploy) makes Claude Code unusually effective here.

---

## When you'll hit this

You want a Lambda function — an API handler, a scheduled job, an event responder. You want Claude to write the code, help you ship it, and help you debug when it breaks.

If you've never made a Lambda before, click through "Create function" in the AWS console once first — see [recipes/aws-with-claude-code.md](aws-with-claude-code.md) for why.

---

## The loop

1. **Edit code** — you or Claude
2. **Package** — zip + dependencies into `function.zip`
3. **Deploy** — `aws lambda update-function-code`
4. **Invoke** — with a test event or a real call
5. **Read logs** — CloudWatch
6. **Diagnose** → back to step 1

End-to-end this should take **under a minute**. If it's longer, your iteration loop is the bottleneck — fix that first.

---

## Wrap the loop in a deploy script

Don't run each step by hand. Make a `deploy.sh`:

```bash
#!/usr/bin/env bash
set -e

FUNCTION_NAME=my-function
PYTHON_VERSION=python3.12

cd "$(dirname "$0")"
rm -rf build && mkdir build
pip install -r requirements.txt --target build/ --quiet
cp -r src/* build/
cd build && zip -r -q ../function.zip . && cd ..

aws lambda update-function-code \
  --function-name "$FUNCTION_NAME" \
  --zip-file fileb://function.zip \
  --output text > /dev/null

echo "Deployed $FUNCTION_NAME"
```

Now your loop is: edit code → `./deploy.sh` → test → read logs. Three commands max.

Have Claude write this script for you on day one. Add features as you need them (env vars, layer attachment, alias publishing).

---

## Testing the deployed function

### Quick invoke from the CLI

```bash
aws lambda invoke \
  --function-name my-function \
  --payload '{"key": "value"}' \
  --cli-binary-format raw-in-base64-out \
  /tmp/out.json && cat /tmp/out.json
```

`--cli-binary-format raw-in-base64-out` is the one that trips up beginners — without it, the CLI tries to base64-decode your payload and fails.

### Reading logs

CloudWatch is where `print()` / `console.log()` lands:

```bash
aws logs tail /aws/lambda/my-function --follow
```

Run this in a separate terminal. Invoke the function — logs appear in near-realtime.

---

## Have Claude diagnose failures

When something breaks, hand Claude:

1. The full error output from the invoke
2. The relevant CloudWatch log lines
3. The function code that ran

Claude is excellent at Lambda error patterns. The error messages usually tell you exactly what's wrong if you know how to read them.

---

## Common stuck-points

| Symptom | Usually means |
|---|---|
| `Task timed out after N seconds` | Function exceeded its configured timeout. Bump it or fix the slow code. |
| `Unable to import module 'lambda_function'` | Wrong file name or missing dependency in the zip. Check the package contents. |
| `AccessDeniedException` calling another AWS service | Lambda's execution role is missing an IAM permission. |
| `Function code too large` | Package > 50 MB zipped, > 250 MB unzipped. Switch to a container image or a Lambda layer. |
| `Module not found` for a dep you `pip install`'d | You installed to your local Python, not the `build/` folder. Use `--target build/`. |
| Cold start kills latency | Pre-provision concurrency, or migrate to a service that doesn't go cold. |

---

## When to leave the Lambda console

The console is fine for one-off edits and quick metric checks. But for anything ongoing, edit code locally and deploy via script. Reasons:

- Code in the console isn't in git
- You can't review the diff before pushing
- You can't easily roll back
- Claude can't see what you typed into the console

Treat the console as read-only for code. The deploy script is your write path.

---

## Common gotchas

- **Region mismatch** — your deploy script targets the default region; you're testing in a different region. Set `AWS_REGION` explicitly.
- **Env var changes don't take effect** — `update-function-code` only updates *code*. To update env vars, use `update-function-configuration`. Two different commands.
- **Layers cached across deploys** — if you change dependencies but not code, the cached layer may stick around. Force-deploy by touching a code file.
- **`update-function-code` returns immediately** — but the function isn't ready until the update completes. Use `aws lambda wait function-updated --function-name X` if you need to chain commands.

---

> 🪞 First thing to do on any new Lambda project: write the deploy script and verify the loop end-to-end with a hello-world function. Don't write business logic until the iteration loop is < 60 seconds.

---

## See also

- [recipes/aws-with-claude-code.md](aws-with-claude-code.md) — the broader AWS workflow
- [best-practices/what-not-to-commit.md](../best-practices/what-not-to-commit.md) — never commit AWS credentials

---

**Last verified: 2026-05-16 with Claude Code 2.1.138**
