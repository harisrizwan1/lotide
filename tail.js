const assertEqual = require("./assertEqual");

const tail = function(input) {
  let result = [];
  for (let i = 1; i < input.length; i++) {
    result.push(input[i]);
  }
  return result;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
console.log(tail([1]));
console.log(tail([]));
assertEqual(words.length, 3);