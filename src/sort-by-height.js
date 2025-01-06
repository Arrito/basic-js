function sortByHeight(arr) {
  const heights = arr.filter(value => value !== -1).sort((a, b) => a - b);
  let index = 0;
  
  return arr.map(value => {
    if (value === -1) {
      return value;
    }
    return heights[index++];
  });
}

module.exports = {
  sortByHeight
};
