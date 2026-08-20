const test = require('node:test');
const assert = require('node:assert/strict');
const { validate } = require('./validateResponse');

const cases = [
  ['valid full response', { intent: 'reset', confidence: 0.8, requiresHuman: false }, true],
  ['intent not in allowed set', { intent: 'delete', confidence: 0.8, requiresHuman: false }, false],
  ['missing confidence', { intent: 'reset', requiresHuman: false }, false],
  ['confidence wrong type', { intent: 'reset', confidence: 'high', requiresHuman: false }, false],
  ['confidence out of range', { intent: 'reset', confidence: 1.5, requiresHuman: false }, false],
  ['requiresHuman wrong type', { intent: 'reset', confidence: 0.8, requiresHuman: 'yes' }, false],
  ['extra property present', { intent: 'reset', confidence: 0.8, requiresHuman: false, foo: 1 }, false],
];

for (const [name, response, expected] of cases) {
  test(`contract: ${name}`, () => {
    const verdict = validate(response);
    assert.equal(typeof verdict, 'object');
    assert.equal(typeof verdict.valid, 'boolean');
    assert.equal(verdict.valid, expected, `expected valid=${expected} for ${name}`);
  });
}
