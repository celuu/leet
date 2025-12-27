const mostFrequentChar = (s) => {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    hash[current] = (hash[current] || 0) + 1;
  }
  let char = "";
  let count = 0;
  for (let key in hash) {
    if (hash[key] > count) {
      count = hash[key];
      char = key;
    }
  }
  return char;
};

module.exports = {
  mostFrequentChar,
};
// Example usage:
console.log(mostFrequentChar("abcbab")); // -> "b"
console.log(mostFrequentChar("xyzyzyz")); // -> "z"