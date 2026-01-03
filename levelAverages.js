class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const levelAverages = (root) => {
  if (root === null) return [];
  let queue = [{ node: root, level: 0 }];
  let result = [];
  while (queue.length > 0) {
    let { node, level } = queue.shift();
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
  let finalResult = [];
  for (let i = 0; i < result.length; i++) {
    let current = result[i];
    finalResult.push(avg(current));
  }
  return finalResult;
};

const avg = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

module.exports = {
  levelAverages,
};
