function getDNSStats(domains) {
  const result = {};

  domains.forEach(domain => {
    const parts = domain.split('.').reverse();
    let dns = '';
    parts.forEach(part => {
      dns = `${dns}.${part}`;
      result[dns] = (result[dns] || 0) + 1;
    });
  });

  return result;
}

module.exports = {
  getDNSStats
};
