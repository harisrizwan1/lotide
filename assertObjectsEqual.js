const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect; // <= used to help display objects to the console more clearly
  if (eqObjects(actual, expected)) {
    console.log(`👌👌👌 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🤦🤦🤦 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); // => false

// const check1 = {
//   name: "haris",
//   age: 20,
//   friends: ["marty", "baha", "descartes", "billy"],
//   mood: 'mint',
// };

// const check2 = {
//   age: 20,
//   name: "haris",
//   mood: 'mint',
//   friends: ["marty", "baha", "descartes", "billy"],
// };

// assertObjectsEqual(check1, check2); // => true