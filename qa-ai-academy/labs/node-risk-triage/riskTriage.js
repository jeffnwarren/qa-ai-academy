function rankRisks(items) {
  if (!Array.isArray(items)) return [];

  return items
    .filter(item => item && item.status !== 'closed')
    .sort((a, b) => String(a.severity).localeCompare(String(b.severity)))
    .map(item => ({
      id: item.id,
      severity: item.severity,
      title: item.title,
    }));
}

module.exports = { rankRisks };
