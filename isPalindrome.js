const isPalindrome = (s) => {
  let j = s.length - 1;
  let i = 0;
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
};

module.exports = {
  isPalindrome,
};

