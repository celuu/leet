const fiveSort = (nums) => {
  let j = nums.length - 1;
  let i = 0;
  while (i < j) {
    if (nums[i] !== 5) {
      i++;
    } else if (nums[j] === 5) {
      j--;
    } else if (nums[i] === 5 && nums[j] !== 5) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  return nums;
};

module.exports = {
  fiveSort,
};
