// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
  let sum = 0;
  if (root === null) return 0;
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    sum += current.val;
    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return sum;
};

module.exports = {
  treeSum,
};
