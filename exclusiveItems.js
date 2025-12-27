const exclusiveItems = (a, b) => {
  let setA = new Set(a);
  let setB = new Set(b);
  let result = [];
  for (let i = 0; i < b.length; i++) {
    let current = b[i];
    if (!setA.has(current)) {
      result.push(current);
    }
  }

  for (let i = 0; i < a.length; i++) {
    let current = a[i];
    if (!setB.has(current)) {
      result.push(current);
    }
  }
  return result;
};

module.exports = {
  exclusiveItems,
};
