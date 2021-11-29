const without = function(source, itemsToRemove) {
  let goodStuff = [];
  for (let i of source) {
    if (!itemsToRemove.includes(i)) {
      goodStuff.push(i);
    }
  }
  return goodStuff;
};

module.exports = without;