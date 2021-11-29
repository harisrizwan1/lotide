const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === "object" && object1[key] !== null) {
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

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

// console.log(eqObjects(check1, check2)); // => true

// eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true

// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false