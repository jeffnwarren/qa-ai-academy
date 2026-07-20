# AI Session Memory Protocol

Use this protocol when you want an AI assistant to stay aligned with the real objective instead of wandering into plausible but unhelpful work.

Memory is useful, but current evidence is stronger. Treat memory as a starting map. Treat repo files, command output, tests, requirements, and current user decisions as the source of truth.

## Pre-Session Brief

Write this before asking for help:

```text
Objective:
Current evidence:
Relevant files or docs:
Constraints and safety boundaries:
Verification command or review method:
Done means:
```

Good pre-session briefs are short, concrete, and reviewable.

Example:

```text
Objective: Add one curriculum mission about AI memory and documentation.
Current evidence: qa_ai_academy.html has Missions 01-13; sources.md maps mission concepts.
Relevant files or docs: qa_ai_academy.html, README.md, TEST_NOTES.md, sources.md.
Constraints and safety boundaries: Use synthetic examples only. Do not remove existing missions. Preserve save migration.
Verification command or review method: Parse the dossier script, check JSON files, review mission roster references.
Done means: New mission appears in the roster, docs mention it, and syntax checks pass.
```

## In-Session Anchors

Use these prompts when the work starts to sprawl:

```text
Restate the current objective in one sentence.
List the evidence you are using right now.
Name assumptions that might be wrong.
Name the next verification step before continuing.
```

For code or docs work:

```text
Before editing, identify the files you plan to touch, why each one matters, and how we will verify the result.
```

For debugging:

```text
Use the command output and the relevant files as evidence. Separate confirmed facts from likely causes and guesses.
```

For long sessions:

```text
Give a checkpoint: completed work, remaining work, risks, and the next action.
```

## Post-Session Capture

End with a handoff note:

```text
Changed:
Verified:
Expected failures:
Not changed:
Open risks or questions:
Next best step:
Memory note for future sessions:
```

Keep this grounded in files and command results. If a fact comes from memory or an older note, mark it as possibly stale until refreshed.

## Documentation That Keeps AI On Track

Use source-controlled docs for durable project truth:

- `README.md`: what the project is and how to start.
- `TEST_NOTES.md`: what must be manually checked.
- `sources.md`: what source material informs each mission.
- `AGENTS.md`: repository standing rules for AI assistants.
- Embedded `case/standing-orders.md`: portable learner-facing rules inside the standalone dossier.
- Lab READMEs: local setup, expected failures, and verification commands.
- Commit messages or handoff notes: what changed and why.

## Drift Warning Signs

Stop and restate the mission when:

- The AI starts solving a different problem.
- The answer no longer names current file or command evidence.
- The assistant treats assumptions as facts.
- The proposed change is larger than the objective requires.
- The work sounds complete but no verification step has run.
- The assistant keeps reusing stale memory after current files contradict it.

## Objective Lock Prompt

Use this when accuracy matters:

```text
Your priority is to stay true to this objective: [objective].
Use only these current evidence sources unless you ask first: [files, docs, command outputs].
If memory or prior context conflicts with current evidence, prefer current evidence.
Before finalizing, report what was changed, what was verified, and what remains uncertain.
```
