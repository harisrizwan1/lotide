const assert = require('chai').assert;
const findKey = require("../index").findKey;

describe("#findKey", () => {
  const result1 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2);
  it("returns true for 'noma'", () => {
    assert.strictEqual(result1, "noma");
  });
});