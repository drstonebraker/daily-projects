Array.prototype.bubbleSort = function bubbleSort() {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (this[i] > this[j]) {
          let high = this[i];
          let low = this[j];
          this[i] = low;
          this[j] = high;
          swapped = true;
        }
      }
    }

  }
  return this;
};

String.prototype.substrings = function substrings() {
  const subs = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      subs.push(this.slice(i, j));
    }
  }
  return subs;
};









// 'cat' => ['c', 'ca', 'cat', 'a', 'at', 't']
