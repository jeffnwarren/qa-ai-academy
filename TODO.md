# QA-AI Academy TODO

Prioritized improvements and candidate teaching extensions. Keep mandatory
missions completable from `qa-ai-academy/qa_ai_academy.html`; advanced runtime
or product-specific work should remain optional.

## Next Experience Pass

- [x] Replace objective-list triangles with non-interactive bullets or
  checkmarks.
  - Learning reason: the current triangle resembles an expansion control and
    creates a false interaction cue.
  - Affected: objective and completion-criteria list styling in
    `qa-ai-academy/qa_ai_academy.html`.
  - Verify: inspect every mission at desktop and mobile widths and confirm the
    lists no longer imply expandable content.

- [x] Add a direct `Continue to next mission` action after mission completion.
  - Learning reason: reduce navigation friction and keep momentum through the
    sequential learning arc.
  - Affected: mission completion rendering and navigation logic in
    `qa-ai-academy/qa_ai_academy.html`.
  - Verify: complete Missions 01-13 in the Playwright suite and confirm the
    action opens only the newly unlocked mission; the final mission should show
    an appropriate campaign-complete action instead.

- [x] Explain what dice progression represents and remove misleading background
  bonus notes.
  - Learning reason: learners should not mistake decorative progression for a
    validated ability assessment or assume profile text calculates a score.
  - Affected: Field Skills cards and introductory dossier guidance in
    `qa-ai-academy/qa_ai_academy.html`.
  - Verify: confirm the dossier explicitly says dice represent curriculum
    progression and that no unsupported assessment claim remains.

- [x] Rename campaign styles from `RPG / Manual` to `Story / Direct`.
  - Learning reason: `Manual` can be confused with manual software testing;
    the new labels describe the actual presentation difference.
  - Affected: Options controls, saved-style migration/default handling,
    documentation, and automated selectors.
  - Verify: switch both modes, reload, and confirm Story includes narrative
    briefings while Direct omits them without losing progress.

- [x] Expand automated experience coverage.
  - Learning reason: protect learner work and usability beyond the existing
    happy-path progression checks.
  - Affected: `qa-ai-academy/qa/tests`.
  - Verify:
    - export/import round trip;
    - reset cancellation and confirmation;
    - legacy-save migration;
    - keyboard tab order and visible focus;
    - 320px viewport;
    - maximum text-size layout;
    - dark/light theme persistence.

## Candidate Optional Advanced Modules

- [x] Supervised coding-agent workflow with Codex and VS Code.
  - Teach: open a synthetic repository, provide a bounded objective, identify
    relevant files, ask for a plan, review proposed changes, run a small test,
    inspect the diff, and decide whether to commit.
  - Emphasize: workspace scope, approvals, terminal evidence, minimal edits,
    secrets boundaries, and human ownership of the final change.
  - Placement: optional extension after Missions 05-08; do not make Codex or
    VS Code mandatory for campaign completion.
  - Verify: a supplied synthetic defect is fixed, the relevant test passes, the
    diff stays in scope, and the learner records what the agent was not allowed
    to do.

- [x] Reusable instructions and skills.
  - Teach: distinguish a one-off prompt, reusable prompt recipe, repository
    instructions, and a packaged skill/workflow; show when each scope is
    appropriate.
  - Build on: Mission 07 Standing Orders and Mission 13 Tradecraft Journal.
  - Emphasize: narrow triggers, explicit inputs/outputs, safety boundaries,
    versioning, and a verification step.
  - Verify: the learner creates one small synthetic skill or instruction set,
    runs a matching case and a non-matching case, and explains when it should
    not activate.

- [x] Practical multi-agent task decomposition.
  - Teach: split a bounded task into planner, implementer, and reviewer roles;
    assign independent work; consolidate evidence; resolve conflicting advice.
  - Build on: Mission 11 Two-Agent Review.
  - Emphasize: shared-workspace collision risk, duplicated effort, authority
    limits, and the difference between independent review and repeated
    agreement.
  - Verify: agents produce separate artifacts or findings, the learner resolves
    at least one disagreement using evidence, and only a human-approved change
    is retained.

- [x] Tool, connector, and permission boundaries.
  - Teach: read versus write actions, least privilege, approval prompts,
    untrusted tool output, and prompt injection arriving through files or
    connected services.
  - Emphasize: no real credentials or customer systems; use a synthetic local
    inbox, issue list, or document set.
  - Verify: the learner identifies which steps are read-only, which require
    approval, which should be refused, and what audit evidence should be kept.

- [x] GitHub issue-to-PR quality loop.
  - Teach: turn a synthetic issue into acceptance criteria, reproduce the
    problem, make a bounded branch change, run tests, review the diff, and
    prepare a pull request with evidence and limitations.
  - Emphasize: do not publish, merge, resolve review comments, or alter CI
    settings without explicit human authorization.
  - Verify: use a local or dedicated synthetic repository; assert that the PR
    description names the root cause, tests, remaining risk, and human decision.

- [x] Multimodal UI review without overclaiming.
  - Teach: use screenshots alongside requirements and DOM/browser evidence to
    find visual inconsistencies, generate test ideas, and communicate defects.
  - Build on: Mission 09 Browser Recon.
  - Emphasize: a screenshot cannot prove behavior, accessibility conformance,
    responsive coverage, or hidden state.
  - Verify: compare two supplied screenshots, confirm at least one observation
    in the browser or DOM, and label unverified inferences.

- [x] Structured-data analysis for QA evidence.
  - Teach: summarize a synthetic defect CSV, identify patterns, challenge
    denominators and missing data, and turn findings into bounded follow-up
    tests.
  - Emphasize: correlation is not causation, generated charts can mislead, and
    source rows remain the evidence.
  - Verify: reproduce one reported metric independently and document one
    conclusion the dataset cannot support.

- [x] Model and tool selection exercise.
  - Teach: choose between chat, coding agent, browsing, retrieval, image
    analysis, and deterministic scripts based on evidence needs, cost, latency,
    privacy, and required authority.
  - Emphasize: product names and capabilities change; verify current official
    documentation before publishing provider-specific instructions.
  - Verify: the learner selects a tool for three synthetic cases, rejects an
    unsuitable high-authority option, and explains the tradeoff.

## Teaching Design Guardrails

- Keep product-specific modules optional and refresh them against current
  official documentation before release.
- Prefer one observable artifact and one verification command per module.
- Use synthetic, public, or explicitly approved non-sensitive examples only.
- Do not require real credentials, customer data, external publication, or
  permission changes.
- Preserve Objective, Concept, Hands-on exercise, Failure mode, Debrief, and
  Completion criteria for every full mission.
