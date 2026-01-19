const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));
  return merge(left, right);
};

const merge = (nums1, nums2) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (nums1.length > 0 && nums2.length > 0) {
    if (nums1[0] < nums2[0]) {
      let item = nums1.shift();
      result.push(item);
    } else {
      let item = nums2.shift();
      result.push(item);
    }
  }
  result.push(...nums1, ...nums2);
  return result;
};

module.exports = {
  mergeSort,
};