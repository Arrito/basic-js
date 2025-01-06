class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    let depth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        depth = Math.max(depth, 1 + this.calculateDepth(arr[i]));
      }
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
