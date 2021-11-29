const assert = require('chai').assert;
const countLetters = require("../index").countLetters;

describe("#countLetters", () => {
  it("returns 4 for countLetters('lighthouse in the house')['h']", () => {
    assert.strictEqual(countLetters("lighthouse in the house")["h"], 4);
  });
});