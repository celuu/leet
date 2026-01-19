const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));
  return merge(left, right);
};

const merge = (nums1, nums2) => {
  let result = [];
  nums1.reverse();
  nums2.reverse();
  while (nums1.length > 0 && nums2.length > 0) {
    if (nums1[nums1.length - 1] < nums2[nums2.length - 1]) {
      let item = nums1.pop();
      result.push(item);
    } else {
      let item = nums2.pop();
      result.push(item);
    }
  }
  result.push(...nums1.reverse(), ...nums2.reverse());
  return result;
};

module.exports = {
  mergeSort,
};
