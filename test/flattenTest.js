const assert = require('chai').assert;
const flatten = require("../index").flatten;

describe("#flatten", () => {
  it("returns true", () => {
    assert.deepEqual(flatten([1, 2, [[3], 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});