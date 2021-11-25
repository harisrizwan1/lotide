const eqArrays = function(one, two) {
  if (one.length !== two.length) {
    return false;
  }

  if (!Array.isArray(one) || !Array.isArray(two)) {
    return false;
  }

  for (let i = 0; i < one.length; i++) {
    if (one[i] !== two[i]) {
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