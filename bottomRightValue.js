// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// just a breadth first search, return the last node's value
// must do left before right to get bottom right value

const bottomRightValue = (root) => {
  let queue = [root];
  let current = null;
  while (queue.length > 0) {
    current = queue.shift();
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return current.val;
};

module.exports = {
  bottomRightValue,
};
