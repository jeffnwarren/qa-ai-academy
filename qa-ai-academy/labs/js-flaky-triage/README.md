# JavaScript Flaky-Test Triage Lab — Optional Authentic-Runtime Guide

This is the optional authentic Node.js extension for Mission 14 ("Two Rolls, Two Answers"). It gives the mission's nondeterminism concept a hands-on target: an order-dependent test suite you must diagnose and stabilize.

## Objective

Reproduce an unreliable test suite with Node's real test runner, find why the result depends on test order and shared state, and stabilize the tests so every case is independent — without changing the implementation.

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
cd qa-ai-academy/labs/js-flaky-triage
```

Inspect `retryQueue.js` and `flaky.test.js` before editing. This lab has no third-party package dependencies, so `npm install` is unnecessary. The retry queue uses only synthetic job identifiers.

## 3. Capture The Expected Failure

```bash
node --test
```

Expected initial result: three tests run, one passes, and two fail. The first case passes, but later cases see leftover state from earlier ones. Confirm the failing counts and note that each test would pass on its own.

Ask the AI assistant:

```text
Here is a Node test file and the module it tests. The suite is order-dependent: each test passes alone but the suite fails. Identify the shared-state root cause and propose the smallest change that makes each test independent. Do not change retryQueue.js.
```

## 4. Repair And Verify

The implementation is correct; the flakiness is in the test. Give each test its own `RetryQueue` instance (for example, construct one inside each test, or reset it before each test) so no state leaks between cases. Do not edit `retryQueue.js`. Then rerun:

```bash
node --test
```

Completion result: three tests pass and zero fail, repeatably across runs.

## 5. Debrief Evidence

Record:

- why each test passed alone but the suite failed;
- the shared-state root cause in your own words;
- the smallest change that isolated the tests;
- one other common cause of flakiness (timing, randomness, external order) to watch for.

## Troubleshooting

- `node` not recognized: restart the terminal and verify installation using the official Node installer guidance.
- Unsupported `--test`: upgrade to Node 18+ (Node 22 LTS recommended).
- Tests still fail after the change: confirm no state is created at module load and shared across tests.

## Reset

Restore the shared-instance version by moving the queue back to module scope:

```js
const queue = new RetryQueue();
```

placed above the tests, with each test using that single `queue`.

## Completion Criteria

- The first run reproduces the order-dependent failure (1 pass, 2 fail).
- Each test is isolated so no state leaks between cases.
- `node --test` reports all three tests passing across repeated runs.
- Your debrief explains why one run is not proof of reliable behavior.
