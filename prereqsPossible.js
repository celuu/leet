const prereqsPossible = (numCourses, prereqs) => {
  const graph = createGraph(numCourses, prereqs);
  let visiting = new Set();
  let visited = new Set();
  for (let node in graph) {
    if (hasCycle(graph, node, visiting, visited)) {
      return false;
    }
  }
  return true;
};

const hasCycle = (graph, current, visiting, visited) => {
  if (visited.has(current)) return false;
  if (visiting.has(current)) return true;

  visiting.add(current);
  for (let neighbor of graph[current]) {
    if (hasCycle(graph, neighbor, visiting, visited)) {
      return true;
    }
  }

  visiting.delete(current);
  visited.add(current);
  return false;
};

const createGraph = (numCourses, prereqs) => {
  let graph = {};
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(String(b));
  }
  return graph;
};
module.exports = {
  prereqsPossible,
};
