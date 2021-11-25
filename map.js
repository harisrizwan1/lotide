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


const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);