const closestCarrot = (grid, startRow, startCol) => {
  let queue = [[startRow, startCol, 0]];
  const visited = new Set([startRow + "," + startCol]);

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();
    if (grid[row][col] === "C") return distance;

    const deltas = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      let neighborRow = row + deltaRow;
      let neighborCol = col + deltaCol;
      let rowInBound = neighborRow >= 0 && neighborRow < grid.length;
      let colInBound = neighborCol >= 0 && neighborCol < grid[0].length;
      let position = neighborRow + "," + neighborCol;
      if (
        rowInBound &&
        colInBound &&
        !visited.has(position) &&
        grid[neighborRow][neighborCol] !== "X"
      ) {
        visited.add(position);
        queue.push([neighborRow, neighborCol, distance + 1]);
      }
    }
  }
  return -1;
};

module.exports = {
  closestCarrot,
};
