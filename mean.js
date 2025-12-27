export default function mean(array) {
  if (array.length === 0) return NaN;
  let result = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    sum += current;
  }

  return sum / array.length;
}
