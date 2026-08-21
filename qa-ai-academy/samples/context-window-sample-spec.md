# Mission 01 · Activity C — Context-Window Sample Spec

A long, deliberately fake requirements spec for the Mission 01 Activity C
exercise ("Stress the context window"). Paste it into a chat, ask the AI to
summarize the final section (§12), then quiz it on a specific value planted near
the end and watch whether detail quality drops.

This document is entirely synthetic. It describes no real system, company, or
customer. Use only synthetic, public, or explicitly approved non-sensitive text
in the exercise.

## How to use it

1. Paste everything in the fenced block below into Claude.ai or ChatGPT.
2. Ask: "Summarize the last section only."
3. Then ask a planted-detail question and check the answer against the source:
   - "What is the exact lockout cooldown?" (§11.2 — **27 minutes**)
   - "How long are SMS codes valid and how many resends are allowed?"
     (§11.3 — **4 minutes, max 3 resends**)
   - "What time and timezone does the weekly digest use?"
     (§12.1 — **06:15, America/Winnipeg**)
4. Note whether the arbitrary, specific values stay accurate as context grows.

---

```
SOFTWARE REQUIREMENTS SPECIFICATION
Product: "Meadowlark" Account Recovery & Notifications Service (FICTIONAL)
Version: 0.9-draft • Status: synthetic sample for training only

1. Purpose
Meadowlark is a fictional self-service account-recovery and notifications
platform for the imaginary "Harbor Ledger" banking sandbox. This document is
entirely synthetic and describes no real system, company, or customer.

2. Scope
Meadowlark covers three capabilities: (a) password reset via email one-time
links, (b) multi-channel notifications (email, SMS, in-app), and (c) an admin
audit console. Payments, KYC, and core ledger functions are out of scope.

3. Definitions
- Recovery Token: a single-use, time-boxed credential used to reset a password.
- Quiet Hours: a per-user window during which only critical alerts are sent.
- Digest: a batched summary notification sent on a schedule.

4. User Roles
4.1 Member — an end user who can request recovery and manage notification
preferences.
4.2 Support Agent — read-only access to recovery events, no token values.
4.3 Auditor — read-only access to the immutable audit log.
4.4 Admin — can configure templates and thresholds but cannot read token values.

5. Password Recovery Requirements
5.1 A Member submits an email address to request recovery.
5.2 The system MUST return an identical response whether or not the address is
registered (no account enumeration).
5.3 A Recovery Token MUST be single-use and expire 20 minutes after issue.
5.4 A used or expired token MUST return a neutral "link no longer valid" message.
5.5 New password MUST be 12+ chars with upper, lower, and a digit.
5.6 On successful reset, all active sessions for that Member MUST be revoked.

6. Notification Channels
6.1 Email is the default channel and MUST always be available.
6.2 SMS is opt-in and MUST degrade gracefully to email on carrier failure.
6.3 In-app notifications MUST persist for 30 days, then auto-archive.

7. Notification Preferences
7.1 Members can mute non-critical categories individually.
7.2 Quiet Hours suppress all non-critical notifications.
7.3 Critical security alerts (e.g., password changed) MUST ignore Quiet Hours.

8. Rate Limiting & Abuse Controls
8.1 Recovery requests are limited per address and per source IP.
8.2 Repeated failures trigger a temporary cooldown (see §11).
8.3 All limiting MUST fail closed if the limiter service is unavailable.

9. Audit & Logging
9.1 Every recovery event MUST be written to an append-only audit log.
9.2 Token values MUST NEVER appear in logs, only opaque event IDs.
9.3 Audit entries MUST include actor, action, result, and UTC timestamp.

10. Accessibility & Localization
10.1 All recovery screens MUST meet keyboard-only operation.
10.2 Status messages MUST expose programmatic status semantics.
10.3 Templates MUST support at least English and Spanish at launch.

11. Security Thresholds (SPECIFIC VALUES)
11.1 Account lockout threshold: 5 failed recovery attempts within 15 minutes.
11.2 Lockout cooldown: exactly 27 minutes before the next attempt is allowed.
11.3 SMS one-time codes: 6 digits, valid for 4 minutes, max 3 resends.
11.4 Admins can raise (never lower) the lockout threshold, capped at 10.

12. Scheduled Digests (FINAL SECTION)
12.1 The weekly security digest is generated every Sunday at 06:15 in the
"America/Winnipeg" timezone, regardless of the Member's local timezone.
12.2 The digest batches up to 50 events; overflow rolls to the next digest.
12.3 If a Member has zero events, the digest is suppressed (no empty email).
12.4 Digest delivery failures retry twice, then raise an internal alert ticket
prefixed "MDL-DIGEST-".
```
