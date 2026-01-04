const hasCycle = (graph) => {
  let visited = new Set();
  let visiting = new Set();

  for (let item in graph) {
    if (traverseGraph(graph, item, visited, visiting) === true) {
      return true;
    }
  }
  return false;
};

const traverseGraph = (graph, current, visited, visiting) => {
  if (visited.has(current)) return false;
  if (visiting.has(current)) return true;
  visiting.add(current);

  for (let neighbor of graph[current]) {
    if (traverseGraph(graph, neighbor, visited, visiting) === true) {
      return true;
    }
  }
  visiting.delete(current);
  visited.add(current);
  return false;
};

module.exports = {
  hasCycle,
};
