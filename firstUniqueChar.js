/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    hash[current] = (hash[current] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (hash[current] === 1) return i;
  }
  return -1;
};
