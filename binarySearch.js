const binarySearch = (numbers, target) => {
    let low = 0
    let high = numbers.length - 1;
  while(low <= high) {
    let midIndex = Math.ceil((low + high) / 2)
    let mid = numbers[midIndex]
    if(target === mid) return midIndex
      
    if(target < mid) {
      high = midIndex - 1
    } else {
      low = midIndex + 1
    } 
  }
  return -1;
    
};

module.exports = {
  binarySearch,
};

