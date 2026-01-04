const largestComponent = (graph) => {
  if (!graph) return 0;
  let visited = new Set();
  let maxComponent = 0;

  for (let item in graph) {
    maxComponent = Math.max(maxComponent, explore(graph, item, visited));
  }
  return maxComponent;
};

const explore = (graph, current, visited) => {
  if (visited.has(graph[current])) return 0;
  visited.add(graph[current]);
  let size = 1;
  for (let neighbor of graph[current]) {
    size += explore(graph, neighbor, visited);
  }
  return size;
};

module.exports = {
  largestComponent,
};
