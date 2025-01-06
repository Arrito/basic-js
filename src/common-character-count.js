const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  
  arr1.forEach(char => {
    if (arr2.includes(char)) {
      count++;
      arr2.splice(arr2.indexOf(char), 1);
    }
  });

  return count;
}

module.exports = {
  getCommonCharacterCount
};
