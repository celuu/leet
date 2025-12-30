// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValues = (root) => {
  if (root === null) return [];
  let stack = [root];
  let result = [];
  while (stack.length > 0) {
    let current = stack.pop();
    result.push(current.val);
    if (current.right !== null) {
      stack.push(current.right);
    }
    if (current.left !== null) {
      stack.push(current.left);
    }
  }
  return result;
};

module.exports = {
  depthFirstValues,
};
