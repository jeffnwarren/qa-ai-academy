# Assistant response contract

The AI assistant must return a JSON object that satisfies every rule:

- intent: string, one of "reset", "status", or "cancel".
- confidence: number, between 0 and 1 inclusive.
- requiresHuman: boolean.
- No additional properties are allowed.

`validateResponse.js` must export `validate(response)` returning
`{ valid: boolean, errors: string[] }`. `valid` is true only when every rule
holds.

The starter validator only checks that intent is a string, so it wrongly accepts
several invalid responses. Strengthen it until every controlled case passes.
Treat AI-suggested validation code as a draft to review against this contract.
