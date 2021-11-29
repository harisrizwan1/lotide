const takeUntil = function(array, callback) {
  const result = [];
  for (let i of array) {
    if (!callback(i)) {
      result.push(i);
    } else {
      return result;
    }
  }
  return result;
};

module.exports = takeUntil;