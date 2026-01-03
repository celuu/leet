const uncompress = (s) => {
  const number = new Set("0123456789");

  let fullNumber = [];
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (number.has(current)) {
      fullNumber.push(current);
      continue;
    } else {
      let full = Number(fullNumber.join(""));
      for (let k = 0; k < full; k++) {
        result.push(current);
      }
      fullNumber = [];
    }
  }
  return result.join("");
};

module.exports = {
  uncompress,
};
