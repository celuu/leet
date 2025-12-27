const intersectionWithDupes = (a, b) => {
  let hash = {};
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let current = a[i];
    hash[current] = (hash[current] || 0) + 1;
  }

  for (let i = 0; i < b.length; i++) {
    let current = b[i];
    if (hash.hasOwnProperty(current)) {
      if (hash[current] > 0) {
        result.push(current);
        hash[current] -= 1;
      }
    }
  }
  return result;
};

module.exports = {
  intersectionWithDupes,
};
