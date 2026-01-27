// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListCycle = (head) => {
  if(head === null || head.next === null) return false;
  let slow = head;
  let fast = head;
  while(fast !== null && fast.next !== null) {
    
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) return true;  
    
  }
  return false
};

module.exports = {
  linkedListCycle,
};
