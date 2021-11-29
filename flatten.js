const assertArraysEqual = require("./assertArraysEqual");

const flatten = function(input) {
  const result = [];
  for (let i of input) {
    if (!Array.isArray(i)) {
      result.push(i);
    } else {
      for (let j of flatten(i)) {
        result.push(j);
      }
    }
  }
  return result;
};

module.exports = flatten;

// assertArraysEqual(flatten([1, 2, [[3], 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);