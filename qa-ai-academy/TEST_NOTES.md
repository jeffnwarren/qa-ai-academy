# QA-AI Academy Test Notes

Maintainer manual test checklist for `qa_ai_academy.html`.

## Automated Standalone Gameplay QA

- Run `npm install` and `npx playwright install chromium` once from `qa/`.
- Run `npm test` from `qa/` before release or after curriculum, gameplay, or
  optional-lab changes.
- See `qa/README.md` for scope, expected embedded-lab baselines, and failure artifacts.
- Keep the manual checks below for source currency, visual judgment, keyboard behavior,
  responsive layout, and other areas the automated suite does not claim to prove.

## Documentation Consistency

- Confirm `README.md` labels the single-HTML Missions 01-13 route mandatory and the repository runtime labs optional.
- Confirm `DESIGN.md`, `CONSTITUTION.md`, `sources.md`, and all lab READMEs use the same mandatory-versus-optional distinction.
- Confirm Mission 05 is named "Embedded Field Kit" everywhere it is mapped.
- Confirm documentation points to `AGENTS.md` and embedded `case/standing-orders.md`; no document requires a nonexistent `.github/copilot-instructions.md`.
- Confirm documented local paths exist and `CONTENT_VERSION` matches the dossier script.

## First-Run Smoke

- Open the HTML file in a browser with no existing `qa_ai_academy_v1` or legacy `icon_dossier_v1` local storage.
- Seed a valid legacy `icon_dossier_v1` save, reload, and confirm it migrates to `qa_ai_academy_v1` without losing progress.
- Confirm Dossier tab loads by default.
- Confirm clearance shows `d4`, points show `0`, Mission 01 is enabled, and Missions 02-13 are locked.
- Confirm Options drawer opens and closes.
- Confirm Field Kit opens, lists embedded case and lab files, and displays `case/README.md` by default.
- Confirm Campaign style defaults to Story, can switch to Direct, migrates older RPG/Manual saves, and updates mission briefings when a mission is open.

## Save And Restore

- Edit display name/call sign, current role, experience/background, and field notes.
- Reload the page and confirm values persist.
- Change text size and theme, then reload and confirm preferences persist.
- Export save data and confirm a dated `.json` file downloads.
- Import the exported file in a fresh browser profile or after reset and confirm values restore.
- Import invalid JSON and confirm an error message appears without corrupting current progress.
- Edit an embedded Field Kit file, reload, and confirm the working copy persists; reset it and confirm the original returns.

## Mission Progression

- Open Mission 01 and confirm the completion button starts disabled.
- Confirm debrief text alone and activity attestations alone cannot enable completion.
- Confirm each activity checkbox persists and is never checked merely by opening a mission.
- Confirm Missions 08-10 record the latest harness observation, while learner-led activities remain learner-attested.
- Confirm Mission 13 requires three Prompt Notebook entries and two linked source-ledger records.
- Enter short text under 12 characters in each debrief and confirm completion remains disabled.
- Enter useful answers in all debrief fields and confirm completion becomes enabled.
- Complete Mission 01 and confirm points increase to `5` and Mission 02 unlocks.
- Repeat for Missions 02-13.
- Confirm Mission 05 appears after the d4 intro arc and the roster continues through d12.
- Confirm completing a mission twice does not double-award points.
- Confirm a completed mission remains readable after reload.
- Confirm mission completion offers a direct route to the newly unlocked
  mission and Mission 13 returns to the dossier.

## Optional Advanced Modules

- Confirm all eight modules remain available without changing mission locks or
  points.
- Confirm every module preserves Objective, Concept, Hands-on exercise, Failure
  mode, Debrief, and Completion criteria.
- Confirm module reflections and completion persist after reload.
- Confirm Codex-specific guidance links to current official documentation while
  teaching a transferable workflow first.

## Learning And Safety Content

- Confirm every mission follows this structure: Objective, Concept, Hands-on Exercise, Failure Mode, Debrief, Completion Criteria.
- Confirm each mission has attribute tags tied to its learning behavior.
- Confirm prompts and activities tell the player to use synthetic, public, or approved non-sensitive data.
- Confirm no mission asks for real hacking, surveillance, credential theft, doxxing, or manipulation of real people.
- Confirm hallucination, assumptions, verification, and human ownership are reinforced across the arc.
- Confirm Mission 03 classifies five packets and applies practical risk tags without presenting them as compliance verdicts.
- Confirm Mission 04 creates an evaluation record and asks for either two-run comparison or a documented comparison procedure.
- Confirm Missions 05-12 can be completed with the embedded Field Kit and clearly label VS Code, Node.js, Python, and Playwright as optional extension tooling.
- Confirm break/fix labs are labeled as intentionally failing before repair.
- Confirm first-play guidance recommends Missions 01-04 before the embedded workbench missions.
- Confirm the optional Python extension guidance recommends `venv` and tells the learner to ask AI for setup help using command output.
- Confirm Mission 12 covers pre-session, in-session, and post-session memory/documentation workflow.
- Confirm Mission 11 treats embedded instructions as untrusted source text and keeps tool use, publication, and risk acceptance under human control.
- Confirm Mission 13 remains the final Tradecraft Journal capstone and includes a two-source provenance ledger.
- Confirm `AI_SESSION_MEMORY_PROTOCOL.md` gives reusable prompts and handoff templates.
- Confirm `sources/AI_TESTING_FIELD_GUIDE.md` includes canonical ISTQB, NIST, OWASP, W3C, and Playwright references with an access date.

## Embedded Lab Harnesses

- In the Field Kit, run the Node-equivalent harness and confirm the initial code passes 2/3 checks and fails severity ordering.
- Run the browser evidence harness and confirm three inspected DOM-semantics checks pass while both privacy checks fail (`3/5`).
- Temporarily remove the reset label, button name, and result-region live/status semantics one at a time; confirm the corresponding semantic check fails, then restore the markup.
- Run the Python-equivalent harness and confirm the initial rules pass 2/5 controlled cases.
- Confirm each harness reports its boundary and never presents itself as a complete Node, Python, Playwright, accessibility, or semantic-analysis runtime.
- Confirm editable JavaScript runs only in a temporary `sandbox="allow-scripts"` opaque-origin frame and that the frame is removed after result, error, or timeout.
- Try synthetic probes for `parent.document`, `localStorage`, and `fetch`; confirm they cannot reach Academy data or complete a network result.
- Try a syntax error, missing export, thrown error, cyclic return value, and infinite loop; confirm controlled messages and a usable interface afterward.

## Optional Authentic-Runtime Extensions

- Confirm every lab README labels its runtime exercise optional and points back to the mandatory embedded equivalent.
- Confirm each optional guide covers official installation links, version checks, working directory, expected initial result, repair loop, final result, troubleshooting, reset, and completion criteria.
- Confirm the Playwright guide includes the separate `npx playwright install chromium` browser step and authorized Linux `--with-deps` boundary.
- Run `node --test` in `labs/node-risk-triage` and confirm the first run fails with a ranking-related assertion.
- Run `python -m unittest` in `labs/python-claim-audit` and confirm the first run fails because unsupported claims are classified too broadly.
- Inspect `labs/playwright-reset-flow` and confirm its README says `npm install` is required before `npm test`.
- Inspect the Playwright spec and confirm it contains a passing named-controls/status check plus the intentionally failing privacy check.
- If Playwright dependencies are installed, run `npm test` in `labs/playwright-reset-flow` and confirm the semantics check passes while the privacy check exposes the synthetic leak.
- Confirm Mission 09 and the Playwright README state that limited automation does not establish WCAG conformance and require at least one manual accessibility check.
- Confirm `.vscode/tasks.json` includes tasks for the Node, Python, and Playwright labs.

## Accessibility And Layout

- Navigate tabs, Options, mission cards, debrief fields, and completion buttons using only the keyboard.
- Confirm Left/Right/Home/End move focus through tabs and Enter/Space activates the focused tab.
- Confirm mission and optional-module headings receive focus on entry and the launcher receives focus on return.
- Confirm Escape closes Options, returns focus, and `aria-expanded` stays accurate.
- Confirm the skip link becomes visible on focus and reaches the main landmark.
- With reduced motion enabled, confirm nonessential transitions and completion effects are minimized.
- Inspect ordinary saved/copied/result messages with a screen reader; reserve urgent announcement behavior for errors.
- Confirm visible focus states appear on mission cards and controls.
- Confirm labels are associated with dossier identity inputs.
- Confirm tab `aria-selected` state changes as tabs are selected.
- Check layout at narrow mobile width around 320px.
- Check text size extremes from 12 to 22.
- Check dark and light themes for readable contrast.
- Check the complete workflow at 200% browser zoom; this is a human usability check, not a WCAG-conformance claim.

## Evidence, Onboarding, And Reports

- Confirm first use shows **Begin Mission 01**, returning progress shows the first incomplete unlocked mission, and campaign completion offers review.
- From Dossier, activate **How to use an AI coach** and confirm Field Kit opens, its tab state updates, and **AI Coach Choices** receives focus.
- Seed a completed campaign, activate **Review completed campaign**, and confirm the visible semantic roster heading receives focus before Mission 01 in the Tab order.
- Confirm copied mission briefings include curriculum content and safety boundaries but exclude profile, notes, debriefs, evidence, and unselected files.
- Confirm mission/status/case Evidence Board filters work and lab-result prefills remain editable before submission.
- Try saving Supported evidence without Evidence and then without Source; confirm the live validation message, focus, and invalid state identify the first missing field without clearing the form. Confirm an Unverified draft remains allowed.
- In Mission 13, confirm only records with mission `m13`, exact case `source-ledger`, and nonempty title, Source, Evidence, and Next check qualify; two qualifying records and three Prompt Notebook entries are required.
- Use **Add source-ledger evidence** from Mission 13 and confirm Mission 13 and `source-ledger` are prefilled while status remains Unverified.
- Export the printable learning report, open it locally, print-preview it, and confirm attestation, observation, and non-certification wording is accurate.
- Confirm every mandatory, optional, and unassigned evidence entry includes title, mission, case/lab, status, claim, evidence, source, human decision, next check, and updated time.
- Enter HTML-like learner text and confirm the report displays it as text rather than markup.
- Confirm the offline Mission 01 segmentation demo works with the external comparison site unavailable and labels its result approximate.

## GitHub Pages Version Check

- Canonical repository file: `qa-ai-academy/qa_ai_academy.html`.
- Canonical project URL: `https://jeffnwarren.github.io/qa-ai-academy/qa-ai-academy/qa_ai_academy.html`.
- Confirm both root landing-page actions use `qa-ai-academy/qa_ai_academy.html` with matching path casing.
- After deployment, open Options and confirm **Academy content version 13** appears. Use a private window or cache-busting query if comparing deployments, but first verify the served URL and page source.
- Confirm the separate `labs/playwright-reset-flow/index.html` remains an optional lab rather than a duplicate Academy deployment.

## Reset

- Use Reset dossier and cancel the confirmation. Confirm data remains.
- Use Reset dossier and accept the confirmation. Confirm progress, notes, debriefs, and preferences reset.
