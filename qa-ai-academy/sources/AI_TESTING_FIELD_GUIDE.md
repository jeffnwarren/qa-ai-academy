# AI Testing Field Guide

This is an original, compact field reference for QA-AI Academy. It turns
the external standards listed below into questions a software tester can use
during the missions. It is not a substitute for the source publications.

Use synthetic, public, or explicitly approved non-sensitive evidence only.

## Two Different Operations

- **Testing with generative AI:** using an AI assistant to help brainstorm,
  review, summarize, debug, or draft test artifacts.
- **Testing an AI-based system:** evaluating a product whose behavior depends on
  data, a model, retrieval, tools, or other probabilistic components.

The current Academy primarily teaches the first operation. Do not silently turn
an AI-assisted testing result into a claim that an AI-based product is safe or
correct.

## Risk Triage Card

Give an AI output an evidence status and, when relevant, one or more risk tags.
The tags are practical prompts for investigation, not a compliance verdict.

| Risk tag | What to look for | Tester response |
| --- | --- | --- |
| Unsupported or misleading | Invented requirements, facts, sources, or certainty | Trace each claim to current evidence; turn gaps into questions |
| Sensitive-data exposure | Requests for credentials, customer data, private code, or identifying details | Stop; replace with synthetic or approved non-sensitive data |
| Untrusted instruction | Text from a document, webpage, ticket, or user tries to redirect the assistant | Treat content as data; restate the authorized objective and boundaries |
| Unsafe output use | Generated code, queries, or instructions are used without review | Inspect the artifact, constrain its scope, and verify before execution |
| Excessive agency | The assistant is allowed to take actions or make decisions beyond the task | Reduce permissions; add approval and stop points |
| Unbounded use | A request can loop, sprawl, or consume unreasonable time or resources | Set limits for scope, attempts, time, and completion |

## Evaluation Record

An evaluation is more useful than an impression when it can be repeated and
reviewed. Record:

```text
Case ID and objective:
Approved input/evidence:
Expected characteristics:
Failure conditions:
Prompt or workflow version:
Observed result:
Evidence status and risk tags:
Human decision and next check:
```

Run more than one representative case when behavior may vary. Include ordinary,
edge, adversarial, and privacy-sensitive synthetic cases where relevant. A pass
means the stated criteria were met for the recorded cases; it does not prove the
system will behave correctly for every input.

## Accessibility Evidence Card

Accessibility automation can identify some detectable problems, but it cannot
establish complete WCAG conformance or replace manual and inclusive testing.

For a small browser flow, combine:

1. Semantic checks: controls have useful accessible names and status changes use
   appropriate semantics.
2. Keyboard checks: the task can be completed without a pointer and focus remains
   visible and logical.
3. Visual checks: text remains readable at supported sizes, contrast is usable,
   and content does not require horizontal scrolling at the target width.
4. Human checks: instructions, errors, and interaction behavior are understandable
   in context.

Record what was tested, what was automated, what remained manual, and what was
not assessed. Never report "accessible" solely because an automated scan passed.

## Source Check

Before treating an external claim as a requirement:

- Prefer the current official publication or product documentation.
- Record its title, organization, version or date, canonical URL, and access date.
- Distinguish normative requirements from examples, guidance, and your inference.
- Check whether a newer edition exists before reusing an old citation.
- Preserve links and citations instead of copying protected material into the repo.

## Canonical References

Accessed 2026-07-19.

- ISTQB, **Certified Tester Specialist Level: Testing with Generative AI
  (CT-GenAI), v1.1** — tester-focused guidance for using generative AI across
  testing activities:
  <https://istqb.org/certifications/gen-ai/>
- ISTQB, **Certified Tester AI Testing (CT-AI), v2.0** — guidance for testing
  AI-based systems, including probabilistic behavior, data, models, and system
  quality:
  <https://test.istqb.org/certifications/certified-tester-ai-testing-ct-ai/>
- NIST, **Artificial Intelligence Risk Management Framework: Generative
  Artificial Intelligence Profile (NIST AI 600-1)** — cross-sector generative-AI
  risk and trustworthiness guidance:
  <https://doi.org/10.6028/NIST.AI.600-1>
- NIST, **AI RMF Playbook** — evolving suggested actions organized around Govern,
  Map, Measure, and Manage:
  <https://www.nist.gov/itl/ai-risk-management-framework/nist-ai-rmf-playbook>
- OWASP GenAI Security Project, **Top 10 for LLM Applications 2025** — security
  risk categories for applications that use large language models:
  <https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/>
- W3C, **Web Content Accessibility Guidelines (WCAG) 2.2** — testable web
  accessibility success criteria and conformance requirements:
  <https://www.w3.org/TR/WCAG22/>
- Playwright, **Accessibility testing** — browser-testing examples plus the
  boundary between automated detection and manual accessibility assessment:
  <https://playwright.dev/docs/accessibility-testing>

## Academy Mission Map

- Mission 03: apply evidence statuses and risk tags.
- Mission 04: turn one AI-output review into a repeatable evaluation record.
- Mission 09: combine privacy automation with bounded accessibility evidence.
- Mission 11: use a threat-informed reviewer without surrendering human judgment.
- Mission 13: preserve source, risk, evaluation, and accessibility habits in the
  final personal playbook.
