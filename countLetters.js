const countLetters = function(input) {
  const result = {};
  input = input.split(" ").join("");
  for (let letter of input) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
};

module.exports = countLetters;