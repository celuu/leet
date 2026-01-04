const minimumIsland = (grid) => {
  const visited = new Set();
  let minimumCount = Infinity;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let size = explore(grid, i, j, visited);
      if (size > 0) {
        minimumCount = Math.min(size, minimumCount);
      }
    }
  }
  return minimumCount;
};

const explore = (grid, row, col, visited) => {
  const rowInBound = row >= 0 && row < grid.length;
  const colInBound = col >= 0 && col < grid[0].length;
  if (!rowInBound || !colInBound) return 0;

  if (grid[row][col] === "W") return 0;

  const position = row + "," + col;
  if (visited.has(position)) return 0;
  visited.add(position);
  let size = 1;
  size += explore(grid, row + 1, col, visited);
  size += explore(grid, row - 1, col, visited);
  size += explore(grid, row, col + 1, visited);
  size += explore(grid, row, col - 1, visited);
  return size;
};

module.exports = {
  minimumIsland,
};
