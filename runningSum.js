const runningSum = (numbers) => {
  if (numbers.length === 0) return [];
  let result = [numbers[0]];
  for (let i = 1; i < numbers.length; i++) {
    let current = numbers[i];
    let prev = result[i - 1];
    result.push(prev + current);
  }
  return result;
};

module.exports = {
  runningSum,
};
