// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const allTreePaths = (root) => {
  if (root === null) return [];
  if (root.right === null && root.left === null) return [[root.val]];
  const right = allTreePaths(root.right).map((path) => [root.val, ...path]);
  const left = allTreePaths(root.left).map((path) => [root.val, ...path]);
  return [...left, ...right];
};

module.exports = {
  allTreePaths,
};
