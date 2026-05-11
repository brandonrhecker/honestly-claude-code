# Prompting tips

Hard-won tips for getting good output. Read once, internalize, refer back when something feels off.

---

## 1. Be specific

❌ "Make my code better"
✅ "Add error handling around the API call in `main.py` line 42. Catch network errors and retry up to 3 times with exponential backoff."

Vague prompts → vague output.

---

## 2. One change at a time

If you want three things changed, send three messages. Review each diff before moving on. Batched requests → batched mistakes.

---

## 3. Read the diffs

When Claude proposes a file edit, **scan it before approving**. Especially watch for:
- Files you didn't ask to be touched
- Imports/dependencies being added
- "Helpful" refactors you didn't request

---

## 4. `/clear` between unrelated tasks

Long conversations that drift from topic to topic hurt focus and burn tokens. New task → `/clear` → fresh start with the same CLAUDE.md context.

---

## 5. Paste the full error

Claude can't see your screen. If something broke, paste the *whole* error including the stack trace. "It's broken" isn't enough to debug.

---

## 6. Ask "what do you think?" before "do this"

Claude is sometimes too eager. When designing or making a tradeoff, ask for analysis first:

- "What are the tradeoffs of X vs Y?"
- "What are you worried about with this approach?"
- "Critique this design."

*Then* tell Claude to implement.

---

## 7. Save tricks in CLAUDE.md (or memory)

When a prompt works really well or Claude proposes a clever pattern, jot it down so future-you doesn't re-discover it.

---

## 8. Tell Claude what you've already tried

When debugging, say "I already restarted, cleared cache, and ran `npm install` — still broken." Saves a round of obvious suggestions.

---

## 9. Watch for "yes-mode"

If Claude agrees with everything you say even when you contradict yourself, it's in yes-mode. Call it out: "Stop agreeing reflexively — am I actually right here, or am I wrong?"

---

## 10. Use plan mode for risky work

For multi-step changes you want to approve before any edit happens, use plan mode (Shift+Tab to toggle, or `/plan`). Claude proposes a plan, you approve, then it executes.

---

> 🪞 Future-Brandon callout: my failure mode is asking for too much in one message. When I notice myself writing "and also, and then, and finally" — STOP, split into multiple messages.

---

**Last verified: 2026-05-11 with Claude Code 2.1.138**
