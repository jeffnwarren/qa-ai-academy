const test = require('node:test');
const assert = require('node:assert/strict');
const { cases } = require('./passwordCases');
const { runMutationTesting } = require('./mutation');

test('password cases agree with the reference implementation', () => {
  assert.doesNotThrow(() => runMutationTesting(cases));
});

test('every seeded mutant is killed by the password cases', () => {
  const results = runMutationTesting(cases);
  const survivors = results.filter(result => result.applied && !result.killed).map(result => result.name);
  assert.deepEqual(survivors, [], `Surviving mutants reveal weak cases: ${survivors.join('; ')}`);
});
