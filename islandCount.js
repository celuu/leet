const islandCount = (grid) => {
  let visited = new Set();
  let resultCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (explore(grid, i, j, visited) === true) {
        resultCount += 1;
      }
    }
  }
  return resultCount;
};

const explore = (grid, row, col, visited) => {
  const rowInBounds = 0 <= row && row < grid.length;
  const colInBounds = 0 <= col && col < grid[0].length;
  if (!rowInBounds || !colInBounds) return false;

  if (grid[row][col] === "W") return false;

  const position = row + "," + col;
  if (visited.has(position)) return false;
  visited.add(position);

  explore(grid, row + 1, col, visited);
  explore(grid, row, col + 1, visited);
  explore(grid, row - 1, col, visited);
  explore(grid, row, col - 1, visited);
  return true;
};

module.exports = {
  islandCount,
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(islandCount(grid));
