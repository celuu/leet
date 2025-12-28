// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const zipperLists = (head1, head2) => {
  let current1 = head1.next;
  let current2 = head2;
  let dummyHead = head1;
  let prev = dummyHead;
  let count = 0;
  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      dummyHead.next = current2;
      current2 = current2.next;
    } else {
      dummyHead.next = current1;
      current1 = current1.next;
    }
    dummyHead = dummyHead.next;
    count++;
  }
  if (current1 === null) {
    dummyHead.next = current2;
  }
  if (current2 === null) {
    dummyHead.next = current1;
  }
  return prev;
};

module.exports = {
  zipperLists,
};
