const assert = require('chai').assert;
const without = require("../index").without;

describe("#without", () => {
  const words = ["hello", "world", "lighthouse"];
  it("returns the correct output", () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });
  it("doesnt change original array", () => {
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
  it("works correctly with types", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});
