const allUnique = (items) => {
  let set = new Set(items);
  return set.size === items.length;
};

module.exports = {
  allUnique,
};
