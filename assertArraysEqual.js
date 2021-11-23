const eqArrays = function(one, two) {
  for (let i = 0; i < one.length; i++) {
    if (!(one[i] === two[i])) {
      console.log(`🤦🤦🤦 Assertion Failed: ${one} !== ${two}`);
      return 0;
    }
  }
  console.log(`👌👌👌 Assertion Passed: ${one} === ${two}`);
};

eqArrays([1, 2, 3], [1, 2, 3]); // => should PASS
eqArrays([1, 2, 3], [3, 2, 1]); // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false