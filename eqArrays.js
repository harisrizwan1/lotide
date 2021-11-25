const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤦🤦🤦 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(one, two) {
  let length = 0;
  if (one.length < two.length) {
    length = two.length;
  } else {
    length = one.length;
  }
  for (let i = 0; i < length; i++) {
    if (one[i] !== two[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false