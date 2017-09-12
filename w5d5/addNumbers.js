const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, callback) {
  reader.question("What to sum? ", (res) => {
    sum += parseInt(res);
    console.log(sum);
    numsLeft--;
    if (numsLeft <= 0) {
      callback(sum);
      reader.close();
    }
    else {
      addNumbers(sum, numsLeft, callback);
    }
  });
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
