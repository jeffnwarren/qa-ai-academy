const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const IMPL_PATH = path.join(__dirname, 'isValidPassword.js');

// Seeded defects; each string replacement removes or weakens one password rule.
const MUTANTS = [
  { name: 'weakens the length rule (12 to 8)', find: 's.length < 12', replace: 's.length < 8' },
  { name: 'drops the lowercase-letter rule', find: 'if (!/[a-z]/.test(s)) return false;', replace: '' },
  { name: 'drops the uppercase-letter rule', find: 'if (!/[A-Z]/.test(s)) return false;', replace: '' },
  { name: 'drops the digit rule', find: 'if (!/[0-9]/.test(s)) return false;', replace: '' },
];

function loadImplementation(source) {
  const sandbox = { module: { exports: {} } };
  sandbox.exports = sandbox.module.exports;
  vm.runInNewContext(source, sandbox);
  return sandbox.module.exports.isValidPassword;
}

function runMutationTesting(cases) {
  const implSource = fs.readFileSync(IMPL_PATH, 'utf8');
  const reference = loadImplementation(implSource);

  const disagreement = cases.find(([pw, expected]) => Boolean(reference(pw)) !== Boolean(expected));
  if (disagreement) {
    throw new Error(
      `Case ["${disagreement[0]}", ${disagreement[1]}] disagrees with the reference implementation. ` +
      'Fix the expected values before mutation testing.'
    );
  }

  return MUTANTS.map(mutant => {
    const mutatedSource = implSource.replace(mutant.find, mutant.replace);
    if (mutatedSource === implSource) {
      return { name: mutant.name, applied: false, killed: false };
    }
    const mutated = loadImplementation(mutatedSource);
    const killed = cases.some(([pw, expected]) => Boolean(mutated(pw)) !== Boolean(expected));
    return { name: mutant.name, applied: true, killed };
  });
}

module.exports = { MUTANTS, runMutationTesting };
