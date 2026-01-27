// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedPalindrome = (head) => {
  let current = head;
  let results = [];
  while(current !== null) {
    results.push(current.val)
    current = current.next
  }
  return results.join(",") === results.reverse().join(",")
};

module.exports = {
  linkedPalindrome,
};
