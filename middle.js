const assertArraysEqual = require("./assertArraysEqual");

const middle = function(input) {
  const mid = Math.floor(input.length / 2);
  const result = [];
  
  if (input.length > 2) {
    if (input.length % 2 === 0) {
      result.push(input[mid - 1]);
      result.push(input[mid]);
    } else {
      result.push(input[mid]);
    }
  }
  return result;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);