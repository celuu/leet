const pairSum = (numbers, targetSum) => {
  let hash = {};
  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    let toFind = targetSum - current;
    if (hash.hasOwnProperty(toFind)) {
      return [hash[toFind], i];
    }
    hash[current] = i;
  }
};

module.exports = {
  pairSum,
};
