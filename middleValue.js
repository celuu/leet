class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const middleValue = (head) => {
  let current = head;
  let count = 0;
  while(current !== null) {
    count++;
    current = current.next;
  }
  let middle = 0;
  if(count % 2 === 0) {
    middle = Math.ceil(count / 2)
  } else {
    middle = Math.floor(count/2)
  }
  
  let newCount = 0;
  current = head
  while(current !== null) {
    if(newCount === middle) {
      return current.val
    }
    newCount++;
    current = current.next
  }
};

module.exports = {
  middleValue,
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// a -> b -> c -> d -> e
console.log(middleValue(a))
