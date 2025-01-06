const { NotImplementedError } = require('../extensions/index.js');

function minesweeper(matrix) {
  const result = [];
  const directions = [
    [-1, -1], [-1, 0], [-1, 1], 
    [0, -1],          [0, 1], 
    [1, -1], [1, 0], [1, 1]
  ];

  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        result[i][j] = 1;
      } else {
        result[i][j] = directions.reduce((count, [dx, dy]) => {
          const ni = i + dx;
          const nj = j + dy;
          if (ni >= 0 && ni < matrix.length && nj >= 0 && nj < matrix[i].length && matrix[ni][nj]) {
            return count + 1;
          }
          return count;
        }, 0);
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
