Array.prototype.myEach = function myEach(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function myMap(callback) {
  const mapped = [];

  // for (let i = 0; i < this.length; i++) {
  //   mapped.push(callback(this[i]));
  // }

  this.myEach(el => mapped.push(callback(el)));
  return mapped;
};

Array.prototype.myReduce = function myReduce(callback, initialVal) {
  initialVal = initialVal || this.shift();
  let memo = initialVal;
  this.myEach(el => {memo = callback(memo, el);});
  return memo;
};
