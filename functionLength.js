export default function functionLength(fn) {
  return fn.length;
}
// Example usage:
console.log(functionLength(function(a, b, c) { return a + b + c; })); // -> 3
console.log(functionLength(function(x) { return x * x; })); // -> 1