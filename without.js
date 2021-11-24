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

const without = function(source, itemsTORemove) {
  let goodStuff = [];
  for (let i of source) {
    for (let j of itemsTORemove) {
      if (i !== j) {
        goodStuff.push(i);
      }
    }
  }
  return goodStuff;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);