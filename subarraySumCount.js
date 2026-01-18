const subarraySumCount = (numbers, targetSum) => {
  let prefix = [0];
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    total = total += current;
    prefix.push(total);
  }

  let hash = {};
  let count = 0;
  for (let i = 0; i < prefix.length; i++) {
    let current = prefix[i];
    let toFind = current - targetSum;
    if (hash.hasOwnProperty(toFind)) {
      count += hash[toFind];
    }
    hash[current] = (hash[current] || 0) + 1;
  }
  return count;
};

module.exports = {
  subarraySumCount,
};
