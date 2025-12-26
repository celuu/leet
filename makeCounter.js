export default function makeCounter(initialValue = 0) {
  let value = initialValue;
  return function () {
    return value++;
  };
}
// Example usage:
const counterA = makeCounter(5);
console.log(counterA()); // -> 5
console.log(counterA()); // -> 6