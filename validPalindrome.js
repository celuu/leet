/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const validChars = "0123456789abcdefghijklmnopqrstuvwxyz";
  const set = new Set();
  for (let i = 0; i < validChars.length; i++) {
    let current = validChars[i];
    set.add(current);
  }

  let j = s.length - 1;
  let i = 0;
  while (i < j) {
    if (!set.has(s[i].toLowerCase())) {
      i++;
      continue;
    }
    if (!set.has(s[j].toLowerCase())) {
      j--;
      continue;
    }
    let front = s[i].toLowerCase();
    let back = s[j].toLowerCase();
    if (front !== back) return false;
    i++;
    j--;
  }
  return true;
};
