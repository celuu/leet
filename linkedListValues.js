// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
  let result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
};

//recursive version
// const linkedListValues = (head) => {
//   if (head === null) return [];
//   return [head.val, ...linkedListValues(head.next)];
// };

module.exports = {
  linkedListValues,
};
