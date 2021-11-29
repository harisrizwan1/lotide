const findKeyByValue = function(obj, val) {
  for (const i in obj) {
    if (obj[i] === val) {
      return i;
    }
  }
};

module.exports = findKeyByValue;