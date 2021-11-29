const assert = require('chai').assert;
const letterPositions = require("../index").letterPositions;

describe("#letterPositions", () => {
  it("returns [1] for letterPositions('hello').e", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
});