const middle = function(input) {
  const mid = Math.floor(input.length / 2);
  const result = [];
  
  if (input.length > 2) {
    if (input.length % 2 === 0) {
      result.push(input[mid - 1]);
      result.push(input[mid]);
    } else {
      result.push(input[mid]);
    }
  }
  return result;
};

module.exports = middle;