const maxValue = (nums) => {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (current > max) {
      max = current;
    }
  }
  return max;
};

module.exports = {
  maxValue,
};


// Example usage:
console.log(maxValue([3, 1, 4, 1, 5, 9, 2, 6, 5])); // => 9
console.log(maxValue([-10, -20, -3, -40])); // => -3