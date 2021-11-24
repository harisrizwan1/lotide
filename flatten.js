const eqArrays = function(one, two) {
  for (let i = 0; i < one.length; i++) {
    if (!(one[i] === two[i])) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(one, two) {
  if (eqArrays(one, two)) {
    console.log(`👌👌👌 Assertion Passed: ${one} === ${two}`);
  } else {
    console.log(`🤦🤦🤦 Assertion Failed: ${one} !== ${two}`);
  }
};

const flatten = function(input) {
  const result = [];
  for (let i of input) {
    if (!Array.isArray(i)) {
      result.push(i);
    } else {
      for (let j of i) {
        result.push(j);
      }
    }
  }
  return result;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);