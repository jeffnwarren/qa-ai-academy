# JavaScript Mutation Lab — Optional Authentic-Runtime Guide

This is the optional authentic Node.js extension for Mission 16 ("Coverage Mirage"). The mandatory campaign uses the equivalent editable source and controlled harness embedded in the dossier's Field Kit.

## Objective

Reproduce a weak-test-suite failure with Node's real test runner, read which seeded defects (mutants) survive, strengthen the test cases until every mutant is caught, and verify the result.

## 1. Install And Verify Node.js

Install a supported LTS release from the official Node.js download page:

<https://nodejs.org/en/download>

Node 22 LTS or newer is the recommended shared baseline for all Academy extensions. After installation, open a new terminal and verify:

```bash
node --version
```

Do not continue until `node --version` works.

## 2. Open The Lab

From the repository root:

```bash
cd qa-ai-academy/labs/js-mutation-lab
```

Inspect `isValidPassword.js`, `passwordCases.js`, and `mutation.js` before editing. This lab has no third-party package dependencies, so `npm install` is unnecessary.

The password rule is 12+ characters with a lowercase letter, an uppercase letter, and a digit. Use only the supplied synthetic passwords. Do not paste real credentials or production password data.

## 3. Capture The Expected Failure

```bash
node --test
```

Expected initial result: the baseline agreement test passes, but the mutation test fails because all four seeded mutants survive. Record the surviving mutant names printed by the assertion.

Ask the AI assistant:

```text
Here is a password rule: 12+ characters with a lowercase letter, an uppercase letter, and a digit. Suggest boundary and negative test cases as [password, expectedValid] pairs. For each, explain which part of the rule it exercises. Do not assume rules that are not stated.
```

## 4. Repair And Verify

Do not edit `isValidPassword.js`. Add cases to `passwordCases.js` that would fail if a specific rule were removed or weakened — for example a valid-format password that is too short, and passwords missing the lowercase, uppercase, or digit requirement. Verify each suggested case against the stated rule before adopting it. Then rerun:

```bash
node --test
```

Completion result: both tests pass and every seeded mutant is killed.

## 5. Debrief Evidence

Record:

- which mutant survived first;
- the case you added to kill it;
- how you verified an AI-suggested case against the rule;
- why line coverage is a weaker signal than mutation kill rate.

## Troubleshooting

- `node` not recognized: restart the terminal and verify installation using the official Node installer guidance.
- "disagrees with the reference implementation": a new case has the wrong expected value; correct it against the stated rule before rerunning.
- Unsupported `--test`: upgrade to Node 18+ (Node 22 LTS recommended).

## Reset

Restore the two starter cases in `passwordCases.js` to return the lab to its original weak-suite state:

```js
const cases = [
  ['Abcdefghijk1', true],
  ['short', false],
];
```

## Completion Criteria

- The first run reproduces the failure with all four seeded mutants surviving.
- Strengthened synthetic cases kill every seeded mutant.
- `node --test` reports both tests passing.
- Your debrief distinguishes passing tests from strong tests.
