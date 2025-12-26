const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

module.exports = {
  isPrime,
};
// Example usage:
console.log(isPrime(11)); // -> true
console.log(isPrime(4));  // -> false