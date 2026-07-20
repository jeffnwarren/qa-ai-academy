import unittest

from claim_audit import classify_claim


class ClaimAuditTests(unittest.TestCase):
    def test_known_requirement_is_supported(self):
        self.assertEqual(
            classify_claim("Verify valid email sends a one-time reset link."),
            "supported",
        )

    def test_unknown_password_complexity_is_assumption(self):
        self.assertEqual(
            classify_claim("Verify password meets the required 12-character minimum."),
            "assumption",
        )

    def test_rate_limiting_is_assumption(self):
        self.assertEqual(
            classify_claim("Verify rate limiting after 5 attempts."),
            "assumption",
        )

    def test_account_enumeration_message_is_removed(self):
        self.assertEqual(
            classify_claim('Verify nonexistent email shows "account not found."'),
            "remove",
        )

    def test_sms_reset_is_removed(self):
        self.assertEqual(
            classify_claim("Verify SMS reset works when email fails."),
            "remove",
        )


if __name__ == "__main__":
    unittest.main()
