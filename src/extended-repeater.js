const { NotImplementedError } = require('../extensions/index.js');

function repeater(str, options) {
  let result = str;

  if (options.addition !== undefined) {
    let addition = Array(options.additionRepeatTimes || 1).fill(String(options.addition)).join(options.additionSeparator || '|');
    result += addition;
  }

  return Array(options.repeatTimes || 1).fill(result).join(options.separator || '+');
}

module.exports = {
  repeater
};
