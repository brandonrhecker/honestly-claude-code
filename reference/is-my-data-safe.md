[← back to the book](../README.md)

# Is my data safe?

The honest answer is "yes, mostly, and here's where you should still
pay attention." The marketing-y answer is "Anthropic is committed to
your privacy." The internet-paranoid answer is "they're stealing
your soul." Both of those are useless. Here's what actually happens.

---

## 1. what stays on your computer

When you launch Claude Code in a folder, this stuff never leaves
your machine:

- The files in that folder, unless Claude needs to read one to
  answer you
- Your `~/.claude/` folder (memory, plugins, MCPs, settings)
- Your session transcript (logged locally)
- Any code or text Claude writes to disk

Claude Code can't reach the internet on its own. It has to ask
permission to fetch a URL or run a command that touches the network.
You're the one who approves it.

---

## 2. what leaves your computer

When you type a prompt, three things go to Anthropic's servers:

- The prompt you typed
- The contents of any files Claude needed to read to answer it
- The output Claude generated

That's the deal. It has to. The model lives on their servers, not
yours. There's no "private mode" that processes locally.

---

## 3. does Anthropic train on your conversations?

Short version, as of 2026: no, not by default.

- **Pro and Max plans:** Anthropic does not train on your
  conversations.
- **API:** same.
- **Free claude.ai:** they ask you to opt in or out. If you opt in,
  your stuff might end up in training data. If you opt out, it
  doesn't.

Policies change. Read the current one at
https://anthropic.com/legal/privacy before you assume.

---

## 4. the actual risk

The risk isn't "Anthropic is reading my files." The risk is what
YOU paste into a conversation.

Treat Claude Code like talking to a competent contractor:

- Don't paste your API keys, passwords, or auth tokens. Anthropic
  isn't going to use them, but they're now sitting in a log
  somewhere.
- Don't paste your customer database. Same reason.
- Don't paste anything covered by NDA, HIPAA, or your employment
  contract without checking first.
- Your therapy journal, your unfinished manuscript, your private
  letters: also worth thinking twice about. Once it's in the
  conversation it's in their logs. Even if they don't train on it,
  it exists.

The same rule applies to MCPs (chapter 06). If you connect Claude
to your inbox, your inbox contents flow through Anthropic's
processing every time the MCP gets used.

---

## 5. where this leaves you

Claude Code is safer than most chatbot products on the "are they
training on me" question. It's NOT safe from your own
paste-without-thinking habits. That part is on you.

The rule:

- Anything sensitive: don't put it in a prompt
- Anything secret: don't put it in a prompt
- Anything you wouldn't email a contractor: don't put it in a prompt

That's most of it. The rest is just a tool.

---

[← back to the book](../README.md)

**Last verified: 2026-05-18 with Claude Code 2.1.138**
