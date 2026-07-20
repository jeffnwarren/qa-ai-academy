# Node Risk Triage — Optional Authentic-Runtime Guide

This is the optional authentic Node.js extension for Mission 08. The mandatory campaign uses the equivalent editable source and controlled harness embedded in the dossier's Field Kit.

## Objective

Reproduce the intentional ranking failure with Node's real test runner, diagnose it from source and command evidence, apply the smallest fix, and verify the repair.

## 1. Install And Verify Node.js

Install a supported LTS release from the official Node.js download page:

<https://nodejs.org/en/download>

Current Playwright releases require a current Node line, so Node 22 LTS or newer is the recommended shared baseline for all Academy extensions. After installation, open a new terminal and verify:

```bash
node --version
npm --version
```

If either command is unavailable, restart the terminal and check the official installer or version-manager instructions for your operating system. Do not continue until `node --version` works.

## 2. Open The Lab

From the repository root:

```bash
cd qa-ai-academy/labs/node-risk-triage
```

Inspect `riskTriage.js` and `riskTriage.test.js` before editing. This lab has no third-party package dependencies, so `npm install` is unnecessary.

## 3. Capture The Expected Failure

```bash
node --test
```

Expected initial result: three tests run, two pass, and the severity-ordering test fails. Record the command, failing test name, expected order, and actual order.

Ask the AI assistant:

```text
Using this Node test output and the two supplied files, identify the likely root cause. Propose the smallest fix. Do not rewrite unrelated code. Explain how to verify the fix and mark any assumption.
```

## 4. Repair And Verify

Review the suggestion, reject unrelated changes, and update only the ranking logic. Then rerun:

```bash
node --test
```

Completion result: three tests pass and zero fail. Inspect the changed file and confirm closed risks are still excluded and unknown severities still appear after known severities.

## 5. Debrief Evidence

Record:

- the original failure;
- the root cause in your own words;
- what the AI got right, guessed, or missed;
- the exact change you accepted;
- the passing verification result;
- one remaining edge case the tests do not cover.

## Troubleshooting

- `node` not recognized: restart the terminal, verify installation, and check `PATH` using the official Node installer guidance.
- Wrong working directory: confirm `riskTriage.js` and `riskTriage.test.js` are visible in the current directory.
- Unsupported `--test`: install a current Node LTS release.
- Syntax error after editing: reset to the supplied source, reapply one small change, and rerun the command.

## Reset

Restore `riskTriage.js` from a clean repository copy or use source control to discard only your deliberate lab edit. Do not reset unrelated files.

## Completion Criteria

- Node and npm versions were recorded.
- The intentional 2-pass/1-fail starting result was captured.
- The diagnosis cited source and test output.
- The smallest reviewed repair was applied.
- The final run reported 3 passing and 0 failing tests.
- The debrief states what the command proved and what it did not prove.
