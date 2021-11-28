const assertEqual = require("./assertEqual");

const findKeyByValue = function(obj, val) {
  for (const i in obj) {
    if (obj[i] === val) {
      return i;
    }
  }
};


// tests
const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);