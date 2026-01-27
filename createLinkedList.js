class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  if (!values) return null;
  let dummyHead = new Node(null)
  let tail = dummyHead;
  
  for(let i = 0; i < values.length; i++) {
    let current = values[i]
    tail.next = new Node(current)
    tail = tail.next
  }
  return dummyHead.next;
};

module.exports = {
  createLinkedList,
};
