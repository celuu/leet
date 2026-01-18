const hasSubarraySum = (numbers, targetSum) => {
  let prefix = [0];
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    total = total += current;
    prefix.push(total);
  }
  let set = new Set();

  for (let i = 0; i < prefix.length; i++) {
    let current = prefix[i];
    let toFind = current - targetSum;
    if (set.has(toFind)) return true;
    set.add(current);
  }
  return false;
};

module.exports = {
  hasSubarraySum,
};
