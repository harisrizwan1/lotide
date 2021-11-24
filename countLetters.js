const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤦🤦🤦 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(input) {
  const result = {};
  input = input.split(" ").join("");
  for (let letter of input) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
};

// tests
const output = countLetters("lighthouse in the house");
console.log(output);
assertEqual(output["h"], 4);