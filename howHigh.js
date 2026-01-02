// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const howHigh = (root) => {
  if (root === null) return -1;
  if (root.right === null && root.left === null) return 0;
  let left = howHigh(root.left);
  let right = howHigh(root.right);
  return 1 + Math.max(left, right);
};

module.exports = {
  howHigh,
};
