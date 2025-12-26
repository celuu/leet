const fizzBuzz = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("fizzbuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }
  return result;
};

module.exports = {
  fizzBuzz,
};

console.log(fizzBuzz(11));
// -> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11]
console.log(fizzBuzz(15));
// -> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']