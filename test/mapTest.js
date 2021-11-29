const assert = require('chai').assert;
const map = require("../index").map;

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  const results1 = map(words, word => word[0]);
  it("returns true", () => {
    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
  });
});