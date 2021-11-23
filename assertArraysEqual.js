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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false