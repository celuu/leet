/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    hash[current] = (hash[current] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    let current = t[i];
    if (!hash.hasOwnProperty(current)) {
      return false;
    } else if (hash[current] <= 0) {
      return false;
    }
    hash[current] -= 1;
  }

  for (let item in hash) {
    if (hash[item] !== 0) {
      return false;
    }
  }

  return true;
};
