# Python Claim Audit — Optional Authentic-Runtime Guide

This is the optional authentic Python extension for Mission 10. The mandatory campaign uses equivalent editable rules and controlled cases embedded in the dossier's Field Kit.

## Objective

Run the intentionally naive classifier with Python's real `unittest` runner, explain why familiar words are not evidence, apply a bounded rule repair, and document the remaining human-review limit.

## 1. Install And Verify Python

Install a current Python 3 release using the official platform guidance:

- Windows: <https://docs.python.org/3/using/windows.html>
- macOS and Unix: <https://docs.python.org/3/using/index.html>

Python 3.10 or newer is the recommended Academy baseline. Verify one of these command forms:

```powershell
py --version
python --version
```

On macOS or Linux, `python3 --version` may be the available form. Use the working Python 3 command consistently in the remaining steps.

## 2. Open The Lab And Create Isolation

From the repository root:

```bash
cd qa-ai-academy/labs/python-claim-audit
```

Windows PowerShell:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip --version
```

macOS or Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip --version
```

No third-party packages are required. Upgrading pip is optional and is not needed to run this lab. Python's official virtual-environment tutorial is <https://docs.python.org/3/tutorial/venv.html>.

## 3. Capture The Expected Failure

Inspect `claim_audit.py` and `test_claim_audit.py`, then run:

```bash
python -m unittest -v
```

Expected initial result: five tests run, two pass, and three fail. The failures show unsupported claims being classified as supported.

Ask the AI assistant:

```text
Explain what each unittest protects before proposing a change. Separate the supplied requirements from assumptions and removal cases. Propose the smallest rule change that satisfies these cases, and state what this keyword classifier still cannot know.
```

## 4. Repair And Verify

Review the proposed ordering and keywords carefully. Apply a bounded change to `claim_audit.py`, then rerun:

```bash
python -m unittest -v
```

Completion result: five tests pass and zero fail. Passing these examples does not make the utility a semantic classifier or prove it can classify arbitrary requirements.

## 5. Debrief Evidence

Record the initial failures, the evidence rule each test protects, the accepted change, final command output, and one claim that would still require human interpretation.

## Troubleshooting

- `python`, `python3`, or `py` unavailable: use the platform-specific official installation guide and reopen the terminal.
- PowerShell blocks activation: you may run `.\.venv\Scripts\python.exe -m unittest -v` without activating the environment; do not weaken machine-wide policy merely for this lab.
- `venv` unavailable on Linux: consult your Python distributor's official package guidance for the environment module.
- Import error: run the command from the directory containing both Python files.
- Confusing failure: copy the exact command and traceback into the AI chat and request one small diagnostic step.

## Reset And Exit

Restore only `claim_audit.py` from a clean repository copy if you want the intentional failure again. Leave the environment with:

```bash
deactivate
```

The local `.venv` is ignored project tooling and can be removed later when it is no longer needed.

## Completion Criteria

- The Python 3 version was recorded.
- A local `.venv` was created or its interpreter was invoked directly.
- The intentional 2-pass/3-fail result was captured.
- The AI explanation was reviewed before editing.
- The final run reported 5 passing and 0 failing tests.
- The debrief names the classifier's human-review boundary.
