/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let lowestPrice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    let current = prices[i];
    if (current - lowestPrice > max) {
      max = current - lowestPrice;
    }
    if (current < lowestPrice) {
      lowestPrice = current;
    }
  }
  return max;
};
