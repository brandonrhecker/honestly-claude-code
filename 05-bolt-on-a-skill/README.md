[← back to the book](../README.md)

# 05 — Bolt on a skill

You've installed Claude Code. You've had it write a file for you.
You've taught it about your project.

This chapter: we'll install superpowers (the #1 community Claude
Code plugin, by Jesse Vincent), use its brainstorming skill on a
weekend meal-prep routine you'll actually stick with, then we'll
uninstall the whole thing. That last part is also a skill worth
having.

---

## quick check before we start

Five chapters in. If you skipped some, that's between you and your
conscience. Quick check before we touch the marketplace:

- You've installed Claude Code.
- You've launched Claude Code in a folder.
- You've written at least one CLAUDE.md (chapter 04 covered this).

---

## why bother bolting on skills

You just taught Claude about your project with CLAUDE.md (That's
project context). Skills are a different layer: pre-built and
reusable workflows that work in ANY project.

Think of it this way:

- **CLAUDE.md** = what your project is
- **Skills** = techniques anyone can use
- **Both** can be active at once

A skill is a pre-built mini-instruction set you install once and
trigger with a slash command (`/skill-name`). Like keyboard
shortcuts for whole multi-step processes.

The win: when someone smart has already designed how to do something
well, you install their work and use it across all your projects.

---

## first, a word about skills and marketplaces

Two concepts to know up front:

**A marketplace** is a place that lists plugins. Usually a GitHub
repo. You register a marketplace with Claude Code once, then you
can install any plugin it contains.

**A plugin** is a bundle of skills. Some plugins contain a single
skill. Many contain a dozen or more bundled together. When you
install a plugin, you get all its skills at once.

So the install flow is:

1. Register the marketplace (one time).
2. Install the plugin from it.
3. Reload so Claude Code picks up the new skills.

We'll do all three in the next section.

---

## the actual steps — time to roll up your sleeves

We're installing **superpowers**, the most-installed Claude Code
plugin in the community. It bundles ~20 skills including
brainstorming, debugging, TDD, and collaboration workflows. We'll
use brainstorming to plan your meal-prep routine.

1. Open your terminal again (the same one from chapter 02).

2. Make a folder for this exercise and step into it. Pick your OS.

   **Mac, Linux, or WSL:**
   ```bash
   mkdir -p ~/claude-experiments/brainstorm
   cd ~/claude-experiments/brainstorm
   ```

   **Windows (PowerShell):**
   ```powershell
   mkdir ~\claude-experiments\brainstorm
   cd ~\claude-experiments\brainstorm
   ```

   *Same pattern as chapters 03 and 04. Fresh folder so the
   brainstorm doesn't collide with the writing folder from
   chapter 04.*

3. Launch Claude Code:
   ```bash
   claude
   ```
   *First time in this folder, Claude Code asks "Is this a folder
   you trust?" Pick **"Yes, I trust this folder"** + Enter.*

4. Register Jesse Vincent's superpowers marketplace:
   ```
   /plugin marketplace add obra/superpowers
   ```
   *Tells Claude Code "here's a new place where plugins live." No
   plugins installed yet, just the source registered.*

5. Install the superpowers plugin from that marketplace:
   ```
   /plugin install superpowers@superpowers-dev
   ```
   *Notice the name became `superpowers-dev` after the previous step.
   That's what the marketplace declares itself as in its config.
   Confusing, normal.*

6. Claude Code will ask where to install superpowers. Pick **"Install
   for you (user scope)"**.
   *That makes the plugin available from any folder you launch Claude
   in. The other options install it just for this project or share
   it with teammates via the project's git repo. For personal use,
   "Install for you" is right.*

7. Reload plugins so Claude Code picks up what you just installed:
   ```
   /reload-plugins
   ```
   *Activates everything without restarting your session.*

8. Now invoke the brainstorming skill on your meal-prep idea. Paste
   this:

   ```
   /brainstorming

   Help me brainstorm a weekend meal-prep routine I'll actually stick
   with. Ask me 3 clarifying questions max. Then propose one approach
   in a few bullets. Skip writing a separate design doc.
   ```
   *The "3 clarifying questions max" guardrail keeps this conversation
   short. Without it, brainstorming will happily go on for 20 turns.*

9. Claude asks you 3 questions about your situation (your schedule,
   what you usually eat, what's gone wrong before). Answer naturally.

10. After the questions, Claude proposes one meal-prep approach. Read
    it. If it works, great. If not, push back: "make it simpler" or
    "I don't have time for that, what else."

11. When you're satisfied (or done experimenting), exit:
    ```
    /exit
    ```

> You just installed someone else's workflow, used it for something
> in your actual life, and you can uninstall it whenever you want.
> That's leverage.

---

## what just happened

You did four things, in sequence:

- **Registered a marketplace.** Claude Code now knows where Jesse
  Vincent's plugins live.
- **Installed the superpowers plugin.** ~20 skills became available
  including brainstorming, TDD workflows, debugging patterns, and more.
- **Reloaded** so the new skills became active in your session.
- **Invoked the brainstorming skill** with a scoped prompt to keep
  it short. Claude followed the skill's instructions to walk you
  through a structured brainstorm.

The pattern is the same for every plugin: register marketplace →
install plugin → reload → invoke skill. Once you've done it, you've
done it.

---

## where to find more skills

Now that you know the flow, you can browse what else is out there.

| Where | What's there |
|---|---|
| https://github.com/anthropics/claude-plugins-official | Anthropic's official marketplace. Often pre-registered on a fresh Claude Code install. Browse the `plugins/` folder to see the list. |
| https://github.com/obra/superpowers | The plugin you just installed. Browse the skills inside to see what else came along for the ride. |
| Third-party marketplaces on GitHub | Search GitHub for repos with `.claude-plugin/marketplace.json`. The ecosystem is decentralized. |

When you find one worth trying, it's the same flow: `/plugin
marketplace add` → `/plugin install` → `/reload-plugins`.

---

## how to uninstall (when you're done experimenting)

Skills you didn't end up loving are easy to remove. Two levels:

**Remove just the plugin** (keeps the marketplace registered):

```
/plugin uninstall superpowers@superpowers-dev
```

Then reload so Claude Code picks up the removal:

```
/reload-plugins
```

*All ~20 superpowers skills are gone. The marketplace stays registered
in case you want to install something else from it later.*

**Remove the whole marketplace** (also removes any plugins you
installed from it):

```
/plugin marketplace remove superpowers-dev
```

Then reload:

```
/reload-plugins
```

*Total reset. Claude Code forgets the marketplace exists.*

This is a normal part of trying new things. Don't keep stuff
installed if you don't actually use it.

---

## in case of emergency

Install didn't go smoothly? You're not the first. Probably one of
these.

| Symptom | What it means | What to do |
|---|---|---|
| `/plugin marketplace add` says "not found" | The repo name is misspelled or doesn't exist | Re-paste the exact command: `/plugin marketplace add obra/superpowers` |
| Install said "success" but `/brainstorming` doesn't work | You forgot to reload | Run `/reload-plugins` |
| Brainstorming asks more than 3 questions | The skill's own instructions are pulling it toward thoroughness | That's fine. Answer them, or tell Claude "let's wrap up." |
| Brainstorming wants to write a design doc | The skill prefers to formalize. The guardrail in the prompt is a suggestion, not a hard stop | Tell it: "skip the design doc, just summarize in bullets." |
| You want to start over with brainstorming | Just exit and re-run | `/exit`, launch `claude` again, repaste the brainstorming prompt |

---

## now you can

- Add any marketplace to Claude Code.
- Install plugins from a marketplace.
- Invoke skills with `/skill-name`.
- Uninstall plugins or whole marketplaces cleanly.
- Browse the ecosystem to find more skills.

Five chapters down. Next: MCP, the thing that lets Claude talk to
other apps you already use.

---

→ Next: [06 — Plug it into your other apps](../06-plug-it-in/)

**Last verified: 2026-05-16 with Claude Code 2.1.138**
