const befittingBrackets = (str) => {
  let stack = [];
  const opening = ["(", "{", "["];
  const closing = [")", "}", "]"];

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (opening.includes(current)) {
      stack.push(current);
    } else {
      let item = stack.pop();
      if (item === undefined) return false;
      let toClose = bracesPair(item);
      if (current !== toClose) return false;
    }
  }
  return stack.length === 0;
};

const bracesPair = (brace) => {
  if (brace === "(") {
    return ")";
  } else if (brace === "{") {
    return "}";
  } else {
    return "]";
  }
};

module.exports = {
  befittingBrackets,
};
