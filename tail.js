const tail = function(input) {
  let result = [];
  for (let i = 1; i < input.length; i++) {
    result.push(input[i]);
  }
  return result;
};

module.exports = tail;