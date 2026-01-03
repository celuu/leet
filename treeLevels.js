class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeLevels = (root) => {
  if (root === null) return [];

  let queue = [{ node: root, level: 0 }];
  let result = [];

  while (queue.length > 0) {
    let { node, level } = queue.shift();
    console.log(node.val, level);
    if (!result[level]) {
      result[level] = [node.val];
    } else {
      result[level].push(node.val);
    }

    if (node.left) {
      queue.push({ node: node.left, level: level + 1 });
    }

    if (node.right) {
      queue.push({ node: node.right, level: level + 1 });
    }
  }
  return result;
};

module.exports = {
  treeLevels,
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(treeLevels(a));
