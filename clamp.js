const clamp = (value, lower, upper) => {
  if (value >= lower && value <= upper) {
    return value;
  }

  if (value < lower) {
    return lower;
  }
  if (value > upper) {
    return upper;
  }
}

module.exports = {
  clamp,
};

// Within the bounds, return as-is.
console.log(clamp(3, 0, 5)); // => 3

// Smaller than the lower bound.
console.log(clamp(-10, -3, 5)); // => -3

// Bigger than the upper bound.
console.log(clamp(10, -5, 5)); // => 5