const shortestPath = (edges, nodeA, nodeB) => {
  const graph = createGraph(edges);
  const queue = [[nodeA, 0]];
  let visited = new Set([nodeA]);
  while (queue.length > 0) {
    let [current, distance] = queue.shift();
    if (current === nodeB) return distance;

    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
};

const createGraph = (edges) => {
  const graph = {};
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    !graph[a] ? (graph[a] = [b]) : graph[a].push(b);
    !graph[b] ? (graph[b] = [a]) : graph[b].push(a);
  }
  return graph;
};

module.exports = {
  shortestPath,
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(shortestPath(edges, "w", "z"));
