class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }

  let count = 0;
  let current = head;
  while (current !== null) {
    if (count === index - 1) {
      const next = current.next;
      newNode = new Node(value);
      current.next = newNode;
      newNode.next = next;
    }
    count++;
    current = current.next;
  }

  return head;
};

module.exports = {
  insertNode,
};
