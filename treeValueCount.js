// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeValueCount = (root, target) => {
  if (root == null) return 0;
  let stack = [root];
  let count = 0;
  while (stack.length > 0) {
    let current = stack.pop();
    if (current.val === target) {
      count++;
    }
    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return count;
};

// recursive version
// const treeValueCount = (root, target) => {
//   if (root === null) return 0;
//   let count = root.val === target ? 1 : 0;
//   count += treeValueCount(root.left, target);
//   count += treeValueCount(root.right, target);
//   return count;
// };

module.exports = {
  treeValueCount,
};
