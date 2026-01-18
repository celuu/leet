const decompressBraces = (s) => {
  let stack = [];
  let numbers = "0123456789";
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (current !== "}" && current !== "{") {
      if (numbers.includes(current)) {
        stack.push(Number(current));
      } else {
        stack.push(current);
      }
    } else if (current === "}") {
      letters = [];
      let popped = stack.pop();
      while (typeof popped !== "number") {
        letters.push(popped);
        popped = stack.pop();
      }
      const toPush = letters.reverse().join("");
      for (let i = 0; i < popped; i++) {
        stack.push(toPush);
      }
    }
  }
  return stack.join("");
};

module.exports = {
  decompressBraces,
};
