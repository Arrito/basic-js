const { NotImplementedError } = require('../extensions/index.js');

function encodeLine(str) {
  let result = '';
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += count > 1 ? count + str[i - 1] : str[i - 1];
      count = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
