const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {
  let numStr = n.toString();
  let max = -Infinity;

  for (let i = 0; i < numStr.length; i++) {
    let newNum = numStr.slice(0, i) + numStr.slice(i + 1);
    max = Math.max(max, +newNum);
  }

  return max;
}

module.exports = {
  deleteDigit
};
