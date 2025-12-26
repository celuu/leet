const pairs = (elements) => {
  let result = [];
  for (let i = 0; i < elements.length; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      result.push([elements[i], elements[j]]);
    }
  }
  return result;
};

module.exports = {
  pairs,
};
// Example usage:
console.log(pairs([1, 2, 3]));
// -> [[1, 2], [1, 3], [2, 3]]
console.log(pairs(['a', 'b', 'c', 'd']));
// -> [['a', 'b'], ['a', 'c'], ['a', 'd'], ['b', 'c'], ['b', 'd'], ['c', 'd']]