// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const pathFinder = (root, target) => {
  if (root === null) return null;

  if (root.val === target) {
    return [root.val];
  }

  const left = pathFinder(root.left, target);
  if (left !== null) {
    return [root.val, ...left];
  }
  const right = pathFinder(root.right, target);
  if (right !== null) {
    return [root.val, ...right];
  }
  return null;
};

module.exports = {
  pathFinder,
};
