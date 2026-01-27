class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const undupeSortedLinkedList = (head) => {
  let dummyHead = new Node(null)
  let tail = dummyHead
  let current = head;
  while(current !== null) {
    if(current.val !== tail.val) {
      tail.next = new Node(current.val)
      tail = tail.next
    }
   current = current.next 
  }
   return dummyHead.next
};

module.exports = {
  undupeSortedLinkedList,
};
