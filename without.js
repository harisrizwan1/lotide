const assertArraysEqual = require("./assertArraysEqual");

const without = function(source, itemsToRemove) {
  let goodStuff = [];
  for (let i of source) {
    if (!itemsToRemove.includes(i)) {
      goodStuff.push(i);
    }
  }
  return goodStuff;
};

module.exports = without;

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
