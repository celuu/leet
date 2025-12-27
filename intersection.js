const intersection = (a, b) => {
  let setA = new Set(a);
  let result = [];
  for (let i = 0; i < b.length; i++) {
    let current = b[i];
    if (setA.has(current)) {
      result.push(current);
    }
  }

  return result;
};

module.exports = {
  intersection,
};
