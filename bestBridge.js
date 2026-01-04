const bestBridge = (grid) => {
  let mainIsland;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const potentialIsland = traverseIsland(grid, i, j, new Set());
      if (potentialIsland.size > 0) {
        mainIsland = potentialIsland;
      }
    }
  }

  const newVisited = new Set(mainIsland);
  let queue = [];
  for (let pos of mainIsland) {
    const [r, c] = pos.split(",").map(Number);
    queue.push([r, c, 0]);
  }
  while (queue.length > 0) {
    const [r, c, distance] = queue.shift();
    const position = r + "," + c;
    if (grid[r][c] === "L" && !mainIsland.has(position)) return distance - 1;
    const deltas = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = r + deltaRow;
      const neighborCol = c + deltaCol;

      const neighborPos = neighborRow + "," + neighborCol;

      if (
        isBounds(grid, neighborRow, neighborCol) &&
        !newVisited.has(neighborPos)
      ) {
        newVisited.add(neighborPos);
        queue.push([neighborRow, neighborCol, distance + 1]);
      }
    }
  }
};

const isBounds = (grid, row, col) => {
  const rowInBound = 0 <= row && row < grid.length;
  const colInBound = 0 <= col && col < grid[0].length;
  return rowInBound && colInBound;
};

const traverseIsland = (grid, row, col, visited) => {
  if (!isBounds(grid, row, col) || grid[row][col] === "W") return visited;

  const position = row + "," + col;
  if (visited.has(position)) return visited;
  visited.add(position);

  traverseIsland(grid, row + 1, col, visited);
  traverseIsland(grid, row, col + 1, visited);
  traverseIsland(grid, row - 1, col, visited);
  traverseIsland(grid, row, col - 1, visited);

  return visited;
};

module.exports = {
  bestBridge,
};
