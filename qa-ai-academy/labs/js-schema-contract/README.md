# JavaScript Schema Contract Lab — Optional Authentic-Runtime Guide

This is the optional authentic Node.js extension for Mission 18 ("Contract Enforcement"). The mandatory campaign uses the equivalent editable source and controlled harness embedded in the dossier's Field Kit.

## Objective

Reproduce a lenient-validator failure with Node's real test runner, then strengthen a validator until it accepts every valid response and rejects every invalid one under a documented response contract.

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
cd qa-ai-academy/labs/js-schema-contract
```

Read `contract.md` first, then inspect `validateResponse.js` and `schema.test.js`. This lab has no third-party package dependencies, so `npm install` is unnecessary.

The controlled cases use only synthetic responses. Do not paste real assistant output or production data.

## 3. Capture The Expected Failure

```bash
node --test
```

Expected initial result: seven cases run, one passes, and six fail because the starter validator only checks that `intent` is a string. Record which invalid responses the validator wrongly accepts.

Ask the AI assistant:

```text
Here is a response contract: [paste contract.md]. Write a validate(response) function returning { valid, errors } that enforces every rule, including type checks, the numeric range, the allowed intent values, and rejection of extra properties. Do not add rules that are not stated.
```

## 4. Repair And Verify

Edit `validateResponse.js` to enforce every rule in `contract.md`: the allowed `intent` values, a numeric `confidence` between 0 and 1, a boolean `requiresHuman`, and rejection of any extra property. Review AI-suggested code against the contract line by line before trusting it. Then rerun:

```bash
node --test
```

Completion result: all seven cases pass.

## 5. Debrief Evidence

Record:

- which invalid response the starter validator wrongly accepted first;
- the checks you added for types, ranges, and extra properties;
- how you reviewed AI-suggested validation code against the contract;
- why valid JSON is not the same as a valid contract.

## Troubleshooting

- `node` not recognized: restart the terminal and verify installation using the official Node installer guidance.
- Unsupported `--test`: upgrade to Node 18+ (Node 22 LTS recommended).
- A valid response now fails: your validator is stricter than the contract; remove rules that are not stated.

## Reset

Restore `validateResponse.js` to its lenient starter to return the lab to its original state:

```js
function validate(response) {
  const errors = [];
  if (typeof response !== 'object' || response === null) {
    return { valid: false, errors: ['response must be an object'] };
  }
  if (typeof response.intent !== 'string') {
    errors.push('intent must be a string');
  }
  return { valid: errors.length === 0, errors };
}

module.exports = { validate };
```

## Completion Criteria

- The first run reproduces the failure with six of seven cases failing.
- The strengthened validator enforces types, ranges, allowed values, and extra-property rejection.
- `node --test` reports all seven cases passing.
- Your debrief distinguishes parsing from contract validation.
