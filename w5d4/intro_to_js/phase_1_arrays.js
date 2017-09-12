Array.prototype.uniq = function uniq() {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (!result.includes(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.twoSum = function twoSum() {
  let zeroSumPositions = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++ ) {
      if (this[i] + this[j] === 0) {
        zeroSumPositions.push([i,j]);
      }
    }
  }
  return zeroSumPositions;
};

Array.prototype.transpose = function transpose() {
  let transposed = [];
  for (let i = 0; i < this[0].length; i++) {
    let row = [];
    for (let j = 0; j < this.length; j++) {
      row.push(this[j][i]);
    }
    transposed.push(row);
  }
  return transposed;
};
