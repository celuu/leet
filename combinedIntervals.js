const combineIntervals = (intervals) => {
  let sortedIntervals = intervals.sort((intervalA, intervalB) => intervalA[0] - intervalB[0])
  let combinedResults = [sortedIntervals[0]];
  for(let i = 0; i < sortedIntervals.length; i++) {
    let [a, b] = sortedIntervals[i];
    let [y, z] = combinedResults[combinedResults.length - 1]
    if (a <= z && b >= y) {
      combinedResults[combinedResults.length - 1] = [y, Math.max(z, b)]
    } else if(b > z) {
      combinedResults.push([a, b])
    }
   
  }
  return combinedResults;
};


module.exports = {
  combineIntervals,
};

const intervals = [
  [6, 8],
  [2, 9],
  [10, 12],
  [20, 24],
];
console.log(combineIntervals(intervals))
