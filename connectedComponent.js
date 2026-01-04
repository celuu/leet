const connectedComponentsCount = (graph) => {
  if (!graph) return 0;
  let count = 0;
  let visited = new Set();
  for (let item in graph) {
    if (explore(graph, item, visited) === true) {
      count++;
    }
  }
  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;
  visited.add(String(current));

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }
  return true;
};

module.exports = {
  connectedComponentsCount,
};
