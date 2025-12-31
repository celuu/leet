/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const conversion = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let currentCount = conversion[current];
    let next = s[i + 1];
    let nextCount = conversion[next];
    if (nextCount > currentCount) {
      count -= currentCount;
    } else {
      count += currentCount;
    }
  }
  return count;
};

console.log(romanToInt("LVIII"));
