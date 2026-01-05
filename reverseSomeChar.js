const reverseSomeChars = (str, chars) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (chars.includes(current)) {
      stack.push(current);
    }
  }
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (chars.includes(current)) {
      let newChar = stack.pop();
      result.push(newChar);
    } else {
      result.push(current);
    }
  }
  return result.join("");
};

module.exports = {
  reverseSomeChars,
};
