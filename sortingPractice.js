const ascending = [5, 2, 10, 1];

// console.log(ascending.sort((a, b) => a - b))

//[1, 2, 5, 10]

const descending = [3, 7, 4, 9, 1]
// console.log(descending.sort((a, b) => b - a))
//[9, 7, 4, 3, 1]

const alphabeticaly = ["banana", "apple", "cherry"]
console.log(alphabeticaly.sort((a, b) => a.localeCompare(b)))
//["apple", "banana", "cherry"]