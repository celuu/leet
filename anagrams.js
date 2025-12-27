const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  let hash = {};
  for (let i = 0; i < s1.length; i++) {
    let current = s1[i];
    hash[current] = (hash[current] || 0) + 1;
  }
  for (let i = 0; i < s2.length; i++) {
    let current = s2[i];
    if (!hash.hasOwnProperty(current)) {
      return false;
    } else {
      if (hash.hasOwnProperty(current)) {
        hash[current] -= 1;
        if (hash[current] < 0) {
          return false;
        }
      }
    }
  }
  return true;
};

module.exports = {
  anagrams,
};

console.log(anagrams("restful", "fluster"));
