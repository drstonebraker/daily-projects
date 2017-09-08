function range(start, end) {
  if (start === end) {
    return [end];
  }
  return [start].concat(range(start + 1, end));
}

function sumRec(array) {
  if (array.length === 1) {
    return array[0];
  }

  return array.shift() + sumRec(array);
}

// function exponent(base, exp) {
//   if (exp === 0) {
//     return 1;
//   }
//
//   return base * exponent(base, exp - 1);
// }

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    return Math.pow(exponent(base, exp / 2), 2);
  } else {
    return base * Math.pow(exponent(base, (exp - 1) / 2), 2);
  }

}

function fibonacci(n) {
  if (n <= 2) {
    return [0, 1].slice(0, n);
  }

  const prev = fibonacci(n - 1);
  const last = prev[prev.length - 1];
  const penult = prev[prev.length - 2];

  return prev.concat(last + penult);
}

function bsearch(array, target, left, right) {
  left = left || 0;
  right = right || array.length;

  const mid = left + Math.floor((right - left) / 2);
  if (array[mid] === target) {
    return mid;
  } else if (left >= right) {
    return - 1;
  }

  if (target < array[mid]) {
    right = mid;
  } else if (target > array[mid]) {
    left = mid + 1;
  }
  return bsearch(array, target, left, right);
}


function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);

  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return merged.concat(left).concat(right);
}

// function subsets(array) {
//   const starter = [[], [array[0]]];
//
//   if (array.length <= 1) {
//     return starter.slice(0, array.length + 1);
//   }
//
//   array.slice(1).forEach((el1) => {
//     return starter.push(starter.map((starterEl) => starterEl.push(el1)));
//   });
//   return starter;
// }


function subsets(array) {

  let result = [[]];

  if (array.length === 0) {
    return [[]];
  }

  array.forEach((el) => {
    const newSubset = result.map((subset) => {
      return subset.concat([el]);
    });
    result = result.concat(newSubset);
  });

  return result;
}
