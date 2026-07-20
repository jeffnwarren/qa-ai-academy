# Optional Authentic-Runtime Labs

These labs repeat selected Field Kit exercises using authentic local runtimes. They are optional extensions: completing the embedded harnesses in `qa_ai_academy.html` satisfies the mandatory 13-mission campaign.

The Node.js and Python labs intentionally contain small defects. Their first test runs are expected to fail so the learner can practice AI-assisted diagnosis, minimal fixes, and verification.

The Playwright extension requires local dependencies. It can still be reviewed as a static test-design exercise before installation.

## Prerequisites And Scope

- Node Risk Triage: Node.js with the built-in test runner.
- Python Claim Audit: Python 3; no third-party packages are currently required.
- Playwright Reset Flow: Node.js, npm dependencies, and Playwright-managed browser binaries.
- VS Code is optional; `.vscode/tasks.json` provides convenience commands.

Do not install any of these tools merely to finish the campaign. Use this track when authentic environment setup and command output are part of your learning goal.

## Labs

- [`node-risk-triage`](node-risk-triage/README.md)
  - Run: `node --test`
  - Purpose: debug a small severity-ranking utility with the built-in Node.js test runner.
- [`python-claim-audit`](python-claim-audit/README.md)
  - Setup: `py -m venv .venv`, then activate the environment.
  - Run: `python -m unittest`
  - Purpose: improve an evidence classifier that is too eager to treat claims as supported.
- [`playwright-reset-flow`](playwright-reset-flow/README.md)
  - Setup: `npm install`, then `npx playwright install chromium`.
  - Run: `npm test`.
  - Purpose: use Playwright to capture a privacy requirement and limited accessibility evidence in a synthetic browser flow.
  - Boundary: the accessibility-oriented check does not establish WCAG conformance; pair it with the manual checks in `../sources/AI_TESTING_FIELD_GUIDE.md`.

## AI Use Rule

Use the AI assistant as a partner for reading, diagnosis, variant generation, and test ideas. Keep ownership of the requirement, the patch, and the final verification result.

## Setup Help Rule

Each linked lab guide covers installation verification, setup, the expected initial failure, repair, final verification, troubleshooting, reset, and completion criteria. When an environment step fails, ask the AI assistant for help using the exact command, error output, operating system, and current lab README as context. Require a small next step and a verification command.

## Python Virtual Environment

Use a local virtual environment for Python labs:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip --version
python -m unittest
```

On macOS or Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip --version
python -m unittest
```

There are no third-party Python dependencies. Upgrading pip is optional and unnecessary for this lab; the `venv` is included to teach clean project isolation.
