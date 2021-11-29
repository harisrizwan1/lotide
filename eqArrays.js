const eqArrays = function(one, two) {
  if (one.length !== two.length) {
    return false;
  }

  if (!Array.isArray(one) || !Array.isArray(two)) {
    return false;
  }

  for (let i = 0; i < one.length; i++) {
    if (one[i] !== two[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;