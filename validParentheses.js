/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (brackets.hasOwnProperty(current)) {
      stack.push(current);
    } else {
      let stacked = stack.pop();
      if (!stacked) return false;
      if (brackets[stacked]) {
        if (brackets[stacked] !== current) {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
};
