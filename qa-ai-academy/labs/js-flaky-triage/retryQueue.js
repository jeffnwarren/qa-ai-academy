// Synthetic retry queue. This implementation is correct; the flakiness lives in
// how the test file shares one instance across cases.
class RetryQueue {
  constructor() {
    this.items = [];
  }

  add(id) {
    this.items.push(id);
    return this.items.length;
  }

  drain() {
    const count = this.items.length;
    this.items = [];
    return count;
  }

  get size() {
    return this.items.length;
  }
}

module.exports = { RetryQueue };
