const isSubsequence = (string1, string2) => {
  let i = 0;
  let j = 0;

  while (i < string1.length && j < string2.length) {
    if (string1[i] === string2[j]) {
      i++;
    }
    j++;
  }

  return i === string1.length;
};

module.exports = {
  isSubsequence,
};
