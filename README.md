# QA-AI Academy

**Practical AI Tradecraft for Software Testers**

An experimental curriculum for learning practical AI workflows through RPG-style missions, software-testing habits, and small safe labs.

This repository is suitable for public distribution under the included MIT License. Commercial source PDFs are not distributed; see [Third-Party References and Trademarks](THIRD_PARTY_NOTICE.md) and the [source index](qa-ai-academy/sources.md).

Primary learner: a manual or software tester who wants practical AI workflows grounded in verification, evidence, and human ownership. Curious builders can still use the labs, but the campaign is tuned for QA judgment rather than pure coding speed.

The main artifact is:

- `qa-ai-academy/qa_ai_academy.html`

Open that file in a browser to use QA-AI Academy. It is a self-contained field kit for all 13 missions: curriculum references, editable case files, and dependency-free lab harnesses are embedded in the HTML. Progress, working files, field notes, and debrief answers are saved in local browser storage.

## Mandatory Campaign Path

The mandatory campaign requires only `qa-ai-academy/qa_ai_academy.html` and access to an AI chatbot:

1. Upload the dossier HTML to the chatbot for curriculum and case-file context.
2. Send the AI Handler Launch Order shown in the dossier.
3. Open the same HTML file in a browser for the interactive campaign, saved progress, Field Kit, and lab consoles.
4. Complete Missions 01-13 in order. Missions 01-04 establish the core judgment habits; Missions 05-12 use the embedded case files and dependency-free lab harnesses; Mission 13 consolidates the work into a personal playbook.

Completing the embedded versions satisfies the full campaign. Node.js, Python, Playwright, VS Code, and a local copy of this repository are not required.

Campaign style defaults to RPG-flavored handler briefings. Use Options -> Campaign style -> Manual if you want the more direct field-manual version.

## What It Teaches

- LLM basics, tokens, context windows, prompting, assumptions, and verification.
- Safe AI-assisted software testing workflows.
- Standards-grounded risk triage, repeatable AI-output evaluation, and source provenance.
- File-grounded AI workflows such as supplied context, selected-text edits, standing instructions, and comparison review.
- Dependency-free break/fix and classification practice, with optional authentic Node.js and Python repetition.
- Requirement-first privacy and bounded accessibility evidence, with optional authentic Playwright repetition.
- Threat-informed planner/reviewer patterns and reusable prompt journaling.
- Memory and documentation practices that keep AI aligned with objectives before, during, and after a session.

## Optional Authentic-Runtime Extensions

After completing an embedded lab, you may repeat it using its original runtime under `qa-ai-academy/labs`. These extensions provide practice with real commands, environment setup, and runtime output, but they are not required to complete the campaign.

- [Node Risk Triage guide](qa-ai-academy/labs/node-risk-triage/README.md): install/verify Node, capture the expected failure, repair, and run `node --test` to completion.
- [Python Claim Audit guide](qa-ai-academy/labs/python-claim-audit/README.md): install/verify Python, create a local `venv`, capture the expected failure, repair, and run `python -m unittest -v` to completion.
- [Playwright Reset Flow guide](qa-ai-academy/labs/playwright-reset-flow/README.md): install/verify Node, install packages and Chromium, capture the privacy failure, repair, and run `npm test` to completion.

The Node and Python extensions intentionally fail at first. The Playwright extension is also designed around an intentional privacy defect. They reproduce the learning loops in the standalone Field Kit using authentic runtimes; they are not examples of finished code.

When setup is confusing, ask the AI assistant for help using the local README and command output as context. The goal is not to browse randomly until something works; the goal is to practice asking for grounded setup help, then verifying the result.

VS Code task definitions are included in `.vscode/tasks.json` for running the lab commands from the editor.

## AI Testing Field Guide

`qa-ai-academy/sources/AI_TESTING_FIELD_GUIDE.md` is the Academy's compact operational reference. It distinguishes testing with generative AI from testing an AI-based system and includes risk-triage, evaluation-record, accessibility-evidence, and source-check cards. It links to the current official ISTQB, NIST, OWASP, W3C, and Playwright references used by the curriculum.

## Session Memory Protocol

Use `qa-ai-academy/AI_SESSION_MEMORY_PROTOCOL.md` when working with AI on the curriculum or on real testing tasks. It defines a pre-session brief, in-session evidence checkpoints, post-session handoff notes, and drift warning signs.

## Playthrough Reset Workflow

Use one chat for one QA-AI Academy playthrough. When you want to start over, click New Chat, paste in your standard starting prompt or campaign instructions, and begin again. Keep that reusable configuration prompt in a text file so every run can start from the same conditions.

For academy testing, this makes playthroughs easier to compare: no hidden carry-over from earlier hints or mistakes, better simulation of a first-time recruit experience, and cleaner evidence about how the academy behaves from a fresh start.

Suggested Mission Reset Prompt:

```text
Begin a fresh QA-AI Academy playthrough. Assume no prior missions, no prior knowledge from previous chats, and no carry-over state. Treat me as a brand-new learner unless stated otherwise.
```

For longer playthroughs, consider starting a fresh chat before the conversation becomes huge. Long sessions can gradually lose early context or hit conversation-length limits, so periodic resets are a better testing workflow than carrying one massive chat forever.

## Safety Rule

Use synthetic, public, or explicitly approved non-sensitive examples only. Do not paste real credentials, customer records, private code, or sensitive operational data into AI tools.
