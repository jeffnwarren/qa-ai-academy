function isValidPassword(pw) {
  const s = String(pw);
  if (s.length < 12) return false;
  if (!/[a-z]/.test(s)) return false;
  if (!/[A-Z]/.test(s)) return false;
  if (!/[0-9]/.test(s)) return false;
  return true;
}

module.exports = { isValidPassword };
