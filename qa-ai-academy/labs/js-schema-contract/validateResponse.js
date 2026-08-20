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
