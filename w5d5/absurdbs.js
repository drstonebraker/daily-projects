const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSort(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSort(arr, 0, false, outerBubbleSort);
    }
    else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSort(true);
}

function innerBubbleSort(arr, i, madeAnySwaps, outerBubbleSort) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSort(arr, i + 1, madeAnySwaps, outerBubbleSort);
        // console.log('in outerBubbleSort');
    });
  }
  else {
    outerBubbleSort(madeAnySwaps);
    // reader.close();
  }
}


function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}? y or n? `, (res) => {
    if (res.match(/y(es)?/)) {
      callback(true);
    }
    else {
      callback(false);
    }

  });
}

// askIfGreaterThan(3, 5, (gt) => {
//   console.log(gt ? 'gt' : 'lt');
// });

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
