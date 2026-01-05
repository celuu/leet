const pairedParentheses = (str) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (current === "(") {
      stack.push(current);
    } else if (current === ")") {
      let popped = stack.pop();
      if (popped === undefined) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

module.exports = {
  pairedParentheses,
};
