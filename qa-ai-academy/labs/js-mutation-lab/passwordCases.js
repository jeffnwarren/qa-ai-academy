// Each case is [password, expectedValid].
// The reference implementation requires 12+ chars with lower, upper, and digit.
// Strengthen these cases until every seeded mutant (defect) is caught.
const cases = [
  ['Abcdefghijk1', true],
  ['short', false],
];

module.exports = { cases };
