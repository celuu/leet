// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


//recursive version
// const linkedListFind = (head, target) => {
//   if (head === null) return false;
//   if (head.val === target) return true;
//   return linkedListFind(head.next, target);
// };

const linkedListFind = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
};

module.exports = {
  linkedListFind,
};
