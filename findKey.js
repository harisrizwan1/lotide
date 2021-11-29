const findKey = function(input, callback) {
  for (const i in input) {
    if (callback(input[i])) {
      return i;
    }
  }
};

module.exports = findKey;

// data
// const result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); // => "noma"

// assertEqual(result1, "noma");