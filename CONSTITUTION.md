# QA-AI Academy Constitution

## Mission

QA-AI Academy is a practical AI learning experience for software testers. It helps learners build useful habits for working with AI: asking better questions, checking assumptions, gathering evidence, verifying outputs, and reflecting on what belongs under human judgment.

The Academy can use light operative language for atmosphere, but it is not game-first. The product succeeds when a tester leaves with a repeatable AI-assisted workflow they can use responsibly on real testing work.

## Operating Principles

### Curiosity

The learner should feel invited to investigate. Features should encourage asking better questions, trying safer variants, and noticing what the AI did not say.

### Evidence

Claims should be tied to something observable: requirements, files, command output, tests, browser behavior, examples, or documented assumptions.

### Verification

The experience should repeatedly ask, "How would you check that?" AI output is useful only after the learner decides what evidence would confirm, challenge, or limit it.

### Reflection

The Academy should help learners turn one-off exercises into reusable habits. Debriefs, notes, and handoffs matter because they preserve judgment.

## Hard Constraints

- The main app remains a standalone HTML file.
- No frontend framework.
- No build system.
- No backend.
- Browser-only runtime.
- LocalStorage-only persistence.
- Existing local saves must migrate automatically when state changes.
- Original runtime labs remain available as optional extensions unless a requested change explicitly alters them.
- The browser learning path must not require Node, Python, Playwright, VS Code, or dependency installation.
- Learners must use only synthetic, public, or explicitly approved non-sensitive data.

## Product Boundaries

- Professional and useful beats goofy or over-the-top.
- Academy progression supports motivation, but it must not distract from practical learning.
- AI is a thinking partner, not an authority.
- Embedded Field Kit labs are part of the mandatory campaign; authentic local-runtime labs are optional extensions.
- The learner owns scope, safety, final judgment, and verification.

## Won't Build

- No accounts or login.
- No cloud sync.
- No telemetry or analytics.
- No server-side storage.
- No real customer, credential, production, or private-data workflows.
- No required AI provider integration.
- No hidden dependency on internet access for core app behavior.
- No game mechanics that obscure the learning objective.
