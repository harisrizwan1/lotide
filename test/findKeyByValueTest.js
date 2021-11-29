const assert = require('chai').assert;
const findKeyByValue = require("../index").findKeyByValue;

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    scifi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it("return 'drama'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("return 'undefined'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});