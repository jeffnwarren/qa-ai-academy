# Standalone Academy QA

This Playwright suite exercises the mandatory standalone path in
`qa_ai_academy.html` and validates the three optional authentic-runtime labs.
The optional-lab checks treat their initial failures as expected learning
evidence, verify minimal repairs in temporary isolation, and leave the supplied
starter files unchanged.

## Pre-session objective

```text
Objective: Automate mission accuracy and end-to-end gameplay verification.
Current evidence: qa_ai_academy.html, TEST_NOTES.md, and the existing optional
Playwright lab.
Relevant files: qa_ai_academy.html, qa/tests/academy.spec.js, and
qa/playwright.config.js.
Constraints: Preserve the six-part mission structure, use synthetic test input,
keep runtime labs optional, and do not break existing browser saves.
Verification: npm test from this directory.
Done means: All 13 missions are structurally checked, sequential completion and
persistence pass, campaign modes work, and embedded harness baselines are
verified.
```

## Install and run

From `qa-ai-academy/qa`:

```powershell
npm install
npx playwright install chromium
npm test
```

To watch the browser:

```powershell
npm run test:headed
```

Failure artifacts are written to `test-results`. The HTML report is written to
`playwright-report` and can be opened with `npm run report`.

## What the suite verifies

- First-run state has 13 missions, Mission 01 available, and later missions
  locked.
- Every mission has Objective, Concept, Hands-on exercise, Failure mode,
  Debrief, and Completion criteria sections.
- Mission titles, question counts, and Field Skill mappings match the current
  curriculum manifest in the spec.
- Every debrief response is required, including the fifth question in Missions
  04, 09, 11, and 13.
- All missions unlock and complete sequentially, award five points exactly
  once, reach 65 points, and persist after reload.
- Learner profile, Field Notes, and Manual campaign style persist.
- Embedded Node-, browser-, and Python-equivalent harnesses produce their
  documented intentional starting evidence.
- Optional authentic Node, Python, and Playwright labs produce their documented
  initial failures.
- Bounded repairs make every optional lab pass in temporary isolation without
  modifying the intentionally broken learner starters.
- Optional lab guides include setup, expected evidence, reset, completion, and
  synthetic-data boundaries.

The checks verify internal curriculum consistency and browser behavior. They do
not prove that every educational claim is universally or permanently true;
source currency still requires periodic human review of `sources.md` and
`sources/AI_TESTING_FIELD_GUIDE.md`.

## Post-session handoff

```text
Changed: Added a dedicated Playwright QA package and corrected the debrief gate
to require every rendered question.
Verified: `npm.cmd test` passed all 9 Playwright scenarios on 2026-07-23
(9 passed in 10.2 seconds). This included the complete 13-mission progression,
all three optional-lab starting failures, and all three isolated repair paths.
Expected failures: The embedded lab implementations intentionally report failed
cases, but the QA assertions around those documented baselines should pass.
Not changed: Mission content, save-key names, optional authentic-runtime labs,
and the RPG/Manual presentation choice.
Open risks or questions: Browser automation validates internal accuracy, not
the continuing currency of external standards and source claims.
Next best step: Run npm test after curriculum or gameplay changes.
Memory note: Keep this suite separate from intentionally failing lab specs.
```
