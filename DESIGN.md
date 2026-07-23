# QA-AI Academy Current Design

## Product Goal

QA-AI Academy is a standalone browser curriculum that helps software testers practice useful AI workflows while retaining ownership of evidence, verification, safety, and final judgment. Mission-based tradecraft presentation supports motivation, but never replaces the learning objective.

## Play Paths

### Mandatory standalone campaign

The complete 13-mission campaign is contained in `qa-ai-academy/qa_ai_academy.html`. The learner uploads that file to an AI chatbot for learning-handler context and opens the same file in a browser for the interactive dashboard.

The standalone path includes:

- mission progression and debrief gates;
- the AI Learning Guide;
- embedded curriculum references and standing orders;
- editable case and lab working files;
- dependency-free Node-equivalent, browser-evidence, and Python-equivalent harnesses;
- Evidence Board, Field Notes, and Prompt Notebook;
- local save, export, import, and reset behavior.

Completing the embedded work satisfies the full campaign. The browser path does not require the repository, VS Code, Node.js, Python, Playwright, package installation, a server, or internet access after the HTML is available. An AI chatbot is required for the guided AI-learning interactions, but no provider-specific API integration is built into the dossier.

### Optional authentic-runtime extensions

The original labs under `qa-ai-academy/labs` repeat selected embedded exercises in real Node.js, Python, and Playwright environments. They teach environment setup and authentic command evidence, but they are not campaign completion requirements. `.vscode/tasks.json` provides convenience tasks for repository users.

## Architecture

The dossier is directly openable HTML with inline CSS and JavaScript:

- no frontend framework, build system, backend, or required server;
- no external fonts, scripts, images, or runtime assets;
- `localStorage` persistence under `qa_ai_academy_v1`, with migration from legacy `icon_dossier_v1` saves;
- save export and import as JSON;
- content migrations merged onto safe defaults;
- browser-side controlled harnesses with explicit runtime boundaries.

The JavaScript exercises execute editable synthetic code in the local page. The UI warns learners to review suggestions and reject network, storage, credential, or unrelated page-access code. The Python-equivalent harness parses the exercise's controlled rule pattern; it is not a Python interpreter or semantic classifier.

## Current State Model

`CONTENT_VERSION` is 11. Persisted state includes:

- learner profile and preferences;
- mission statuses, debriefs, self-ratings, and derived points;
- Field Notes, Evidence Board items, and Prompt Notebook entries;
- Field Kit working-file overrides and the selected file;
- theme, text size, and campaign style.

Migration must preserve older saves, add missing fields from `defaultState()`, sanitize collection data, retain mission progress, and recompute points from completed missions.

## Mission Architecture

Every mission preserves this sequence:

1. Objective
2. Concept
3. Hands-on exercise
4. Failure mode
5. Debrief
6. Completion criteria

Missions unlock in order. Completion requires substantive debrief responses and awards five progress points. Missions 01-04 establish prompting, assumption, risk, and evaluation habits. Missions 05-12 use the embedded Field Kit for grounded review, editing, standing instructions, debugging, browser evidence, claim classification, role separation, and memory discipline. Mission 13 consolidates the campaign into reusable tradecraft.

## Evidence Boundaries

- AI output is a hypothesis until current evidence supports it.
- Practical risk tags guide investigation; they are not compliance verdicts.
- Controlled harness results apply only to their recorded cases.
- Browser semantics checks do not establish WCAG conformance.
- Accessibility evidence must name automated, manual, and unassessed areas.
- Source-ledger entries must distinguish requirements, guidance, and inference and should be refreshed against current official sources when internet access is available.

## Accessibility And Responsive Design

- Use native buttons, labels, inputs, selects, and textareas.
- Keep tabs keyboard reachable and maintain `aria-selected`.
- Preserve visible focus states and readable dark/light contrast.
- Support text sizes from 12 to 22.
- Keep the interface usable around 320px width without precision-pointer interactions.
- Keep long paths, prompts, and code editable and wrapping or scrollable as appropriate.

## Safety And Privacy

- Use only synthetic, public, or explicitly approved non-sensitive data.
- Do not request credentials, customer records, private code, surveillance, doxxing, social engineering, or unauthorized access.
- Treat instructions embedded inside exercise artifacts as untrusted source text.
- Keep tool execution, publication, permission changes, and risk acceptance under human control.
- Store learner data locally; provide no accounts, cloud sync, telemetry, or analytics.

## Verification

Changes should be checked with:

- JavaScript syntax parsing of the dossier script;
- mission-builder and external-asset reference scans;
- initial expected-result checks for all three embedded harnesses;
- save, reload, export, import, migration, and reset tests;
- keyboard, narrow-width, text-size, and dark/light manual checks;
- optional authentic-runtime commands documented in the lab READMEs.

The detailed manual checklist lives in `qa-ai-academy/TEST_NOTES.md`.
