const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
  let count = 0;
  matrix.forEach(row => {
    row.forEach(item => {
      if (item === '^^') {
        count++;
      }
    });
  });
  return count;
}

module.exports = {
  countCats
};
