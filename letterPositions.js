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

const output = letterPositions("hello");
console.log(output);
assertArraysEqual(letterPositions("hello").e, [1]);
