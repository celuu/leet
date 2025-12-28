// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const reverseList = (head) => {
//   let current = head;
//   let prev = null;
//   while(current !== null) {
//     let temp = current.next;
//     current.next = prev;
//     prev = current;
//     current = temp
//   }
//   return prev;
// };

const reverseList = (head, prev = null) => {
  if (head === null) return prev;

  const temp = head.next;
  head.next = prev;

  return reverseList(temp, head);
};

module.exports = {
  reverseList,
};
