const compress = (s) => {
  let count = 0;
  let j = 0;
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let firstItem = s[j];
    if (current === firstItem) {
      count++;
    } else {
      if (count === 1) {
        result.push(firstItem);
      } else {
        result.push(count, firstItem);
      }
      count = 1;
      j = i;
    }
  }

  if (count === 1) {
    result.push(s[j]);
  } else {
    result.push(count, s[j]);
  }
  return result.join("");
};

module.exports = {
  compress,
};
