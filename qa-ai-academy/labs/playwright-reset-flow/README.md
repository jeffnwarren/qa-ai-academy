# Playwright Reset Flow — Optional Authentic-Runtime Guide

This is the optional authentic Playwright extension for Mission 09. The mandatory campaign uses the equivalent synthetic flow and dependency-free evidence harness embedded in the dossier's Field Kit.

## Objective

Install an authentic Playwright test environment, reproduce a synthetic account-enumeration failure, connect the assertion to its privacy requirement, and report accessibility evidence without claiming full conformance.

Synthetic requirement:

> The password reset confirmation page must not reveal whether an email address exists.

## 1. Install And Verify Node.js

Install a current Node.js LTS release from <https://nodejs.org/en/download>. Current Playwright documentation lists supported current Node lines; Node 22 LTS or newer is the recommended Academy baseline.

Open a new terminal and verify:

```bash
node --version
npm --version
```

Official Playwright installation guidance: <https://playwright.dev/docs/intro>.

## 2. Open The Lab And Install Packages

From the repository root:

```bash
cd qa-ai-academy/labs/playwright-reset-flow
npm install
npx playwright --version
```

`npm install` installs the package declared in this lab's `package.json`. Playwright browser binaries are a separate installation.

Install the one browser needed by this lab:

```bash
npx playwright install chromium
```

On a supported Linux environment that also needs browser system libraries, use:

```bash
npx playwright install --with-deps chromium
```

That command may request elevated operating-system permission. Review the requested packages and use only a machine where you are authorized to install them. Browser-management guidance: <https://playwright.dev/docs/browsers>.

## 3. Inspect Before Running

Read:

- `index.html` — the synthetic reset form and intentional privacy defect;
- `tests/reset-flow.spec.js` — the semantic-surface and privacy checks;
- `../../sources/AI_TESTING_FIELD_GUIDE.md` — the Accessibility Evidence Card.

Do not use real accounts or addresses. The supplied `.test` addresses are synthetic.

## 4. Capture The Expected Failure

```bash
npm test
```

Expected initial result: two tests run; the named-controls/status test passes and the privacy test fails because the unknown-address response says no account was found.

Ask the AI assistant:

```text
Using the synthetic requirement, app source, Playwright spec, and exact failure output, explain the relationship between the behavior and assertion. Propose the smallest app or test improvement. Keep the case deterministic and synthetic, and do not claim that the semantic check proves WCAG conformance.
```

## 5. Repair And Verify

Review the suggestion. The smallest product repair should make known and unknown addresses receive the same neutral confirmation without exposing account existence. Rerun:

```bash
npm test
```

Completion result: two tests pass and zero fail.

Optional observation commands:

```bash
npx playwright test --headed
npx playwright test --ui
```

These modes open browser interfaces and are not required for completion.

## 6. Manual Accessibility Evidence

After automation passes, perform and record:

- one keyboard-only check, including visible and logical focus;
- one visual check at a supported text size or narrow viewport;
- one comprehension check of the instruction and confirmation message;
- what was automated, what remained manual, and what was not assessed.

Do not report the page as accessible or WCAG conformant solely because the automated semantic check passed.

## Troubleshooting

- Executable missing: rerun `npx playwright install chromium`.
- Missing Linux libraries: on an authorized supported system, run `npx playwright install --with-deps chromium`.
- Network or proxy blocks downloads: follow the official proxy guidance in <https://playwright.dev/docs/browsers>; do not paste private proxy credentials into AI chat.
- Unsupported operating system: compare the current requirements in <https://playwright.dev/docs/intro>; use the embedded campaign harness if the authentic environment is unsupported.
- Test cannot find a file: run from the directory containing `package.json`.
- Stale package/browser mismatch: run `npm install`, then reinstall Chromium for the installed Playwright version.

## Reset

Restore only `index.html` or the spec from a clean repository copy if you want the intentional failure again. Generated `node_modules`, test results, and reports are local tooling artifacts and are not campaign evidence by themselves.

## Completion Criteria

- Node, npm, and Playwright versions were recorded.
- The Playwright package and Chromium binary were installed.
- The intentional 1-pass/1-fail starting result was captured.
- The repair stayed tied to the privacy requirement.
- The final run reported 2 passing and 0 failing tests.
- Manual accessibility evidence and unassessed boundaries were recorded.
