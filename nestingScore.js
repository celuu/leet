const nestingScore = (str) => {
  let stack = [0];

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (current === "[") {
      stack.push(0);
    } else {
      let popped = stack.pop();
      if (popped === 0) {
        stack[stack.length - 1] += 1;
      }
      if (popped >= 1) {
        stack[stack.length - 1] += 2 * popped;
      }
    }
  }
  return stack[0];
};

module.exports = {
  nestingScore,
};
