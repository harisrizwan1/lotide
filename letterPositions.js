const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  const result = {};
  sentence = sentence.split(" ").join("");

  for (let l = 0; l < sentence.length; l++) {
    if (result[sentence[l]]) {
      result[sentence[l]].push(l);
    } else {
      result[sentence[l]] = [l];
    }
  }
  return result;
};

module.exports = letterPositions;

// const output = letterPositions("hello");
// console.log(output);
// assertArraysEqual(letterPositions("hello").e, [1]);
