const test = require('node:test');
const assert = require('node:assert/strict');
const { rankRisks } = require('./riskTriage');

test('ranks open risks by severity from highest to lowest', () => {
  const ranked = rankRisks([
    { id: 'R-4', title: 'Tooltip copy is stale', severity: 'low', status: 'open' },
    { id: 'R-2', title: 'Reset token can be reused', severity: 'critical', status: 'open' },
    { id: 'R-3', title: 'Keyboard trap in modal', severity: 'medium', status: 'open' },
    { id: 'R-1', title: 'Rate limit missing', severity: 'high', status: 'open' },
  ]);

  assert.deepEqual(ranked.map(item => item.id), ['R-2', 'R-1', 'R-3', 'R-4']);
});

test('excludes closed risks before ranking', () => {
  const ranked = rankRisks([
    { id: 'R-1', title: 'Closed legacy issue', severity: 'critical', status: 'closed' },
    { id: 'R-2', title: 'Open medium issue', severity: 'medium', status: 'open' },
  ]);

  assert.deepEqual(ranked.map(item => item.id), ['R-2']);
});

test('places unknown severity after known severities', () => {
  const ranked = rankRisks([
    { id: 'R-1', title: 'Needs triage', severity: 'unknown', status: 'open' },
    { id: 'R-2', title: 'Known high issue', severity: 'high', status: 'open' },
  ]);

  assert.deepEqual(ranked.map(item => item.id), ['R-2', 'R-1']);
});
