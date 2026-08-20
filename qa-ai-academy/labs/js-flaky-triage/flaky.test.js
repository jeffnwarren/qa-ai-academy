const test = require('node:test');
const assert = require('node:assert/strict');
const { RetryQueue } = require('./retryQueue');

// BUG: one shared queue leaks state between tests, so each case depends on the
// order and results of the ones before it. Each test passes in isolation but
// the suite is order-dependent and flaky. Stabilize it without changing
// retryQueue.js.
const queue = new RetryQueue();

test('adds a single job', () => {
  queue.add('job-1');
  assert.equal(queue.size, 1);
});

test('adds two more jobs', () => {
  queue.add('job-2');
  queue.add('job-3');
  assert.equal(queue.size, 2);
});

test('drains only its own queued job', () => {
  queue.add('job-4');
  assert.equal(queue.drain(), 1);
});
