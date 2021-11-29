const flatten = function(input) {
  const result = [];
  for (let i of input) {
    if (!Array.isArray(i)) {
      result.push(i);
    } else {
      for (let j of flatten(i)) {
        result.push(j);
      }
    }
  }
  return result;
};

module.exports = flatten;