/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (hash.hasOwnProperty(current) && hash[current] === 1) {
      return true;
    }
    hash[current] = (hash[current] || 0) + 1;
  }
  return false;
};
