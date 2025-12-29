// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const isUnivalueList = (head) => {
  let value = head.val;
  let current = head;
  while (current !== null) {
    if (current.val !== value) return false;
    current = current.next;
  }
  return true;
};

module.exports = {
  isUnivalueList,
};
