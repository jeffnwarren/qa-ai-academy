const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { spawnSync } = require('node:child_process');

const labsRoot = path.join(__dirname, '..', '..', 'labs');
const nodeLab = path.join(labsRoot, 'node-risk-triage');
const pythonLab = path.join(labsRoot, 'python-claim-audit');
const browserLab = path.join(labsRoot, 'playwright-reset-flow');

function combinedOutput(result) {
  return `${result.stdout || ''}\n${result.stderr || ''}`;
}

function findPython() {
  const candidates = process.platform === 'win32'
    ? [['python', []], ['py', ['-3']]]
    : [['python3', []], ['python', []]];

  for (const [command, prefix] of candidates) {
    const result = spawnSync(command, [...prefix, '--version'], { encoding: 'utf8' });
    if (result.status === 0) return { command, prefix };
  }
  throw new Error('Python 3 is required to verify the optional Python lab.');
}

function withTempDir(prefix, action) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  try {
    return action(directory);
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
}

test('Node lab reproduces its failure and passes after the bounded ranking repair', () => {
  const initial = spawnSync(process.execPath, ['--test'], {
    cwd: nodeLab,
    encoding: 'utf8',
  });
  const initialOutput = combinedOutput(initial);

  expect(initial.status).toBe(1);
  expect(initialOutput).toMatch(/tests 3/);
  expect(initialOutput).toMatch(/pass 2/);
  expect(initialOutput).toMatch(/fail 1/);
  expect(initialOutput).toContain('ranks open risks by severity from highest to lowest');

  withTempDir('qa-academy-node-', directory => {
    const starter = fs.readFileSync(path.join(nodeLab, 'riskTriage.js'), 'utf8');
    const repaired = starter.replace(
      ".sort((a, b) => String(a.severity).localeCompare(String(b.severity)))",
      `.sort((a, b) => {
      const order = { critical: 0, high: 1, medium: 2, low: 3 };
      return (order[a.severity] ?? 99) - (order[b.severity] ?? 99);
    })`
    );

    expect(repaired).not.toBe(starter);
    fs.writeFileSync(path.join(directory, 'riskTriage.js'), repaired);
    fs.copyFileSync(
      path.join(nodeLab, 'riskTriage.test.js'),
      path.join(directory, 'riskTriage.test.js')
    );

    const final = spawnSync(process.execPath, ['--test'], {
      cwd: directory,
      encoding: 'utf8',
    });
    const finalOutput = combinedOutput(final);
    expect(final.status, finalOutput).toBe(0);
    expect(finalOutput).toMatch(/pass 3/);
    expect(finalOutput).toMatch(/fail 0/);
  });
});

test('Python lab reproduces its failures and passes after the bounded evidence repair', () => {
  const python = findPython();
  const initial = spawnSync(
    python.command,
    [...python.prefix, '-m', 'unittest', '-v'],
    { cwd: pythonLab, encoding: 'utf8' }
  );
  const initialOutput = combinedOutput(initial);

  expect(initial.status).toBe(1);
  expect(initialOutput).toContain('Ran 5 tests');
  expect(initialOutput).toContain('failures=3');
  expect(initialOutput).toContain('test_known_requirement_is_supported');

  withTempDir('qa-academy-python-', directory => {
    const repaired = `def classify_claim(claim):
    text = " ".join(str(claim).lower().split())

    if any(phrase in text for phrase in ["account not found", "sms reset"]):
        return "remove"

    if any(keyword in text for keyword in [
        "rate limiting", "complexity", "minimum", "mobile", "accessibility"
    ]):
        return "assumption"

    if "valid email" in text and "one-time reset link" in text:
        return "supported"

    return "remove"
`;
    fs.writeFileSync(path.join(directory, 'claim_audit.py'), repaired);
    fs.copyFileSync(
      path.join(pythonLab, 'test_claim_audit.py'),
      path.join(directory, 'test_claim_audit.py')
    );

    const final = spawnSync(
      python.command,
      [...python.prefix, '-m', 'unittest', '-v'],
      { cwd: directory, encoding: 'utf8' }
    );
    const finalOutput = combinedOutput(final);
    expect(final.status, finalOutput).toBe(0);
    expect(finalOutput).toContain('Ran 5 tests');
    expect(finalOutput).toContain('OK');
  });
});

test('Playwright lab exposes the privacy defect and a neutral-message repair resolves it', async ({ page }) => {
  const appPath = path.join(browserLab, 'index.html');
  await page.goto(pathToFileURL(appPath).href);

  await expect(page.getByRole('textbox', { name: 'Account email' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Send reset link' })).toBeVisible();
  await expect(page.getByRole('status')).toBeAttached();

  await page.getByLabel('Account email').fill('unknown@example.test');
  await page.getByRole('button', { name: 'Send reset link' }).click();
  await expect(page.getByRole('status')).toContainText('No account found');

  const starter = fs.readFileSync(appPath, 'utf8');
  const repaired = starter.replace(
    "result.textContent = 'No account found for ' + email + '.';",
    "result.textContent = 'If the email is registered, a reset link will be sent.';"
  );
  expect(repaired).not.toBe(starter);

  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'qa-academy-browser-'));
  try {
    const repairedPath = path.join(directory, 'index.html');
    fs.writeFileSync(repairedPath, repaired);
    await page.goto(pathToFileURL(repairedPath).href);

    const messages = [];
    for (const email of ['unknown@example.test', 'agent@example.test']) {
      await page.getByLabel('Account email').fill(email);
      await page.getByRole('button', { name: 'Send reset link' }).click();
      messages.push(await page.getByRole('status').textContent());
    }

    expect(messages).toEqual([
      'If the email is registered, a reset link will be sent.',
      'If the email is registered, a reset link will be sent.',
    ]);
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

test('optional lab guides state setup, expected evidence, reset, and safety boundaries', () => {
  const guides = [
    {
      path: path.join(nodeLab, 'README.md'),
      expected: ['Optional Authentic-Runtime Guide', '2-pass/1-fail', '3 passing and 0 failing'],
    },
    {
      path: path.join(pythonLab, 'README.md'),
      expected: ['Optional Authentic-Runtime Guide', '2-pass/3-fail', '5 passing and 0 failing'],
    },
    {
      path: path.join(browserLab, 'README.md'),
      expected: ['Optional Authentic-Runtime Guide', '1-pass/1-fail', '2 passing and 0 failing'],
    },
  ];

  for (const guide of guides) {
    const text = fs.readFileSync(guide.path, 'utf8');
    for (const phrase of guide.expected) expect(text).toContain(phrase);
    expect(text).toMatch(/synthetic/i);
    expect(text).toMatch(/## Reset/);
    expect(text).toMatch(/## Completion Criteria/);
  }
});
