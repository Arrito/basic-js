const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || isNaN(sampleActivity) || sampleActivity <= 0 || sampleActivity >= MODERN_ACTIVITY) {
    return false;
  }
  const activity = parseFloat(sampleActivity);
  return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / (0.693 / HALF_LIFE_PERIOD));
}

module.exports = {
  dateSample
};
