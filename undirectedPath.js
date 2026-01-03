
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = createGraph(edges);
  let stack = [nodeA];
  let visited = new Set([nodeA]);
  while (stack.length > 0) {
    let current = stack.pop();
    if (current === nodeB) return true;
    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
      visited.add(neighbor);
    }
  }
  return false;
};

const createGraph = (edges) => {
  let graph = {};
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    !graph[a] ? (graph[a] = [b]) : graph[a].push(b);
    !graph[b] ? (graph[b] = [a]) : graph[b].push(a);
  }
  return graph;
};

module.exports = {
  undirectedPath,
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(undirectedPath(edges, "j", "m"));