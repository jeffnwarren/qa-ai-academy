# Changelog

All notable changes to QA-AI Academy are recorded here. The standalone app
tracks its data-model revision in `CONTENT_VERSION` inside
`qa-ai-academy/qa_ai_academy.html`; older browser saves migrate forward onto
safe defaults.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed

- Reconciled the QA suite and documentation with the expanded curriculum:
  18 missions, 13 optional advanced modules, `CONTENT_VERSION` 14, and a
  90-point mandatory campaign. Updated `qa/tests/academy.spec.js`, `DESIGN.md`,
  `TEST_NOTES.md`, `qa/README.md`, `sources.md`, and
  `sources/AI_TESTING_FIELD_GUIDE.md`.
- Dropped the Jekyll site layer in favor of plain static pages. Restored
  `README.md` (previously renamed to `README.md.old`), removed `_config.yml`,
  `_layouts/default.html`, and `about.md`, and added a `.nojekyll` marker so
  GitHub Pages serves `index.html` and `readme.html` verbatim.

### Added

- Optional authentic-runtime labs that mirror embedded exercises:
  `labs/js-mutation-lab` (Mission 16 mutation coverage),
  `labs/js-schema-contract` (Mission 18 response-contract validation), and
  `labs/js-flaky-triage` (Mission 14 flaky-test diagnosis).
- A Test Design Toolkit reference card (equivalence partitioning, boundary
  values, and decision tables) in `sources/AI_TESTING_FIELD_GUIDE.md`.

## [Content version 14] - 2026-08-07

### Added

- Missions 14-18, extending the d12 mastery arc: "Two Rolls, Two Answers"
  (nondeterministic output), "The Oracle Trap" (the oracle problem),
  "Coverage Mirage" (mutation testing), "Red Team Recon" (prompt-injection
  probing), and "Contract Enforcement" (response-contract validation).
- Advanced modules a9-a13: Golden Eval Set, Test Data and PII Boundaries,
  Hallucinated Dependencies, Reproducible Bug Reports, and When Not to Use AI.
- Embedded mutation and schema-contract lab consoles in the Field Kit.

### Changed

- Mandatory campaign grew from 13 to 18 missions (65 to 90 points); optional
  advanced modules grew from 8 to 13.

## [Content version 13] - 2026-07-23

### Added

- Optional Advanced Field Modules (a1-a8) for coding-agent, reusable-workflow,
  multi-agent review, tool/permission, issue-to-PR, multimodal-evidence,
  data-analysis, and model-selection workflows.
- Dedicated Playwright QA package under `qa/` and optional authentic-runtime
  labs under `qa-ai-academy/labs`.

### Changed

- Improved mission progression, gameplay QA coverage, and lab hardening.

## [Content version 11-12] - 2026-07-21

### Added

- GitHub Pages landing page and campaign launch screen.

## [Initial release] - 2026-07-19

### Added

- 13-mission mandatory campaign in a single standalone
  `qa-ai-academy/qa_ai_academy.html`, with embedded curriculum references,
  editable Field Kit files, dependency-free harnesses, Evidence Board, Field
  Notes, and Prompt Notebook. Local save, export, import, and reset; migration
  from the legacy `icon_dossier_v1` save key.
