# Source Index

Public source and provenance index. This file records how references inform the learning RPG without reproducing protected book content. Commercial books and game rulebooks are not distributed with this repository.

## AI Learning Sources

- Chip Huyen, *AI Engineering: Building Applications with Foundation Models*
  - Use for application design, evaluation, deployment, data handling, and reliability themes.
- Chip Huyen, *Designing Machine Learning Systems*
  - Use for ML system thinking, data quality, monitoring, and production failure modes.
- Jay Alammar and Maarten Grootendorst, *Hands-On Large Language Models*
  - Use for beginner-friendly LLM concepts, tokens, embeddings, prompting, and model behavior explanations.
- *Software Testing with Generative AI*
  - Use for test-engineering workflows, AI-assisted test design, review habits, and tester productivity ideas.

## Standards And Living References

- `sources/AI_TESTING_FIELD_GUIDE.md`
  - Original Academy field reference for evidence status, AI risk triage, repeatable evaluation, accessibility evidence, and source checking.
  - Includes canonical links and an access date so changing web guidance can be checked before reuse.
- ISTQB Certified Tester Specialist Level: Testing with Generative AI (CT-GenAI), v1.1
  - Canonical page: <https://istqb.org/certifications/gen-ai/>
  - Use for tester-focused GenAI workflows, output evaluation, risk, privacy, and adoption themes.
- ISTQB Certified Tester AI Testing (CT-AI), v2.0
  - Canonical page: <https://test.istqb.org/certifications/certified-tester-ai-testing-ct-ai/>
  - Use when distinguishing AI-assisted testing from testing an AI-based system.
- NIST AI 600-1, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile
  - Canonical page: <https://doi.org/10.6028/NIST.AI.600-1>
  - Use for risk, trustworthiness, evaluation, human oversight, privacy, and documentation themes.
- NIST AI RMF Playbook
  - Canonical page: <https://www.nist.gov/itl/ai-risk-management-framework/nist-ai-rmf-playbook>
  - Use as a living reference for Govern, Map, Measure, and Manage practices; verify its current revision before use.
- OWASP Top 10 for LLM Applications 2025
  - Canonical page: <https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/>
  - Use for threat-informed exercises involving misleading output, sensitive information, untrusted instructions, unsafe output handling, excessive agency, and resource limits.
- W3C Web Content Accessibility Guidelines (WCAG) 2.2
  - Canonical page: <https://www.w3.org/TR/WCAG22/>
  - Use for testable accessibility criteria and for distinguishing conformance claims from partial evidence.
- Playwright accessibility testing guidance
  - Canonical page: <https://playwright.dev/docs/accessibility-testing>
  - Use for browser automation examples and the limits of automated accessibility detection.

Access date for the living references above: 2026-07-19. Prefer canonical links over copied snapshots unless a stable, redistributable version is needed for an offline exercise.

## Mission Mapping

Primary learner persona: a manual or software tester learning practical AI workflows. The curriculum favors verification, evidence, and human ownership over coding speed alone.

- Mission 01, "First Contact"
  - AI concepts: LLM basics, tokens, context windows, automation bias.
  - RPG function: recruit briefing and first field exercise.
- Mission 02, "The Briefing Room"
  - AI concepts: prompt anatomy, constraints, output format, assumptions, privacy boundaries.
  - RPG function: mission planning and controlled engagement.
- Mission 03, "Pattern Recognition"
  - AI concepts: hallucination, incomplete output, evidence status, sensitive-data exposure, untrusted instructions, unsafe output handling, verification.
  - RPG function: intelligence analysis under uncertainty.
- Mission 04, "Fabricated Evidence"
  - AI concepts: traceability, requirement comparison, evaluation cases, failure criteria, repeatability, safe workflow integration.
  - RPG function: final d4 audit mission and evidence control.
- Mission 05, "Embedded Field Kit"
  - AI concepts: supplied-file context, file-grounded prompting, claim verification.
  - RPG function: first d6 workbench mission.
- Mission 06, "Inline Edit Duel"
  - AI concepts: selected-text editing, variant generation, diff review, human editorial control.
  - RPG function: creative editing drill.
- Mission 07, "Standing Orders"
  - AI concepts: custom instructions, reusable project rules, assumptions, scope constraints.
  - RPG function: doctrine and operating procedure.
- Mission 08, "Node Break/Fix"
  - AI concepts: debugging from controlled test output, minimal fixes, verification loops; optional authentic Node.js repetition.
  - RPG function: first break/fix field lab.
- Mission 09, "Browser Recon"
  - AI concepts: browser evidence, requirement-first assertions, privacy checks, bounded accessibility evidence, manual-review limits; optional authentic Playwright repetition.
  - RPG function: executable evidence mission.
- Mission 10, "Python Evidence Scanner"
  - AI concepts: controlled classifier cases, keyword overfitting, evidence classification, runtime boundaries; optional authentic Python repetition.
  - RPG function: analysis utility repair.
- Mission 11, "Two-Agent Review"
  - AI concepts: planner/reviewer role separation, threat-informed critique, untrusted instructions, excessive agency, human ownership.
  - RPG function: command-cell review exercise.
- Mission 12, "Memory Protocol"
  - AI concepts: session memory, pre-session briefs, in-session checkpoints, post-session handoffs, documentation as source of truth.
  - RPG function: command memory discipline and objective control.
- Mission 13, "Tradecraft Journal"
  - AI concepts: prompt recipes, personal checklist, source provenance, risk tags, evaluation records, stop rules.
  - RPG function: d12 capstone and personal playbook.

## Lab Mapping

The dossier embeds the mandatory campaign versions of these exercises. The directories below are optional authentic-runtime extensions.

- `labs/node-risk-triage`
  - Supports Mission 08 with an intentionally broken Node.js risk-ranking utility.
- `labs/playwright-reset-flow`
  - Supports Mission 09 with an intentionally broken synthetic password-reset browser flow.
- `labs/python-claim-audit`
  - Supports Mission 10 with an intentionally naive Python evidence classifier.

## Memory And Documentation Mapping

- `AI_SESSION_MEMORY_PROTOCOL.md`
  - Supports Mission 12 with reusable pre-session, in-session, and post-session templates.
- `../AGENTS.md`
  - Gives AI assistants standing rules for safe, objective-aligned work in this repo.
- Embedded `case/standing-orders.md`
  - Gives learners a portable instruction artifact for Missions 05-07 without requiring repository access.

## Public Distribution Note

Commercial PDFs are intentionally excluded by `.gitignore` and must not be added to commits, release archives, issues, or pull requests. Keep only citations, lawful links, and original notes that do not reproduce protected content. The project license applies to original repository content, not to third-party publications, standards, product names, or trademarks referenced here.

For every future source, record the title, author or organization, edition/version, publication date, canonical URL, access date, redistribution status, and mission mapping. Do not treat a file's presence in this folder as permission to redistribute it.
