const findKey = function(input, callback) {
  for (const i in input) {
    if (callback(input[i])) {
      return i;
    }
  }
};

module.exports = findKey;