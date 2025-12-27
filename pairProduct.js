const pairProduct = (numbers, targetProduct) => {
  let hash = {};
  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    let toFind = targetProduct / current;
    if (hash.hasOwnProperty(toFind)) {
      return [hash[toFind], i];
    }
    hash[current] = i;
  }
};

module.exports = {
  pairProduct,
};
