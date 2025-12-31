// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  const left = maxPathSum(root.left);
  const right = maxPathSum(root.right);

  return root.val + Math.max(left, right);
};

module.exports = {
  maxPathSum,
};
