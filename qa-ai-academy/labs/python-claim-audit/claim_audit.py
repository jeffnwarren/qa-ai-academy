def classify_claim(claim):
    text = " ".join(str(claim).lower().split())

    if any(keyword in text for keyword in ["email", "reset", "expires", "confirmation", "password"]):
        return "supported"

    if any(keyword in text for keyword in ["rate limiting", "complexity", "mobile", "accessibility"]):
        return "assumption"

    return "remove"
