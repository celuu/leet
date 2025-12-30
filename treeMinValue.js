// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
  let minValue = root.val;
  if (root === null) return minValue;
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    if (current.val < minValue) {
      minValue = current.val;
    }
    if (current.left) {
      stack.push(current.left);
    }

    if (current.right) {
      stack.push(current.right);
    }
  }
  return minValue;
};

module.exports = {
  treeMinValue,
};
