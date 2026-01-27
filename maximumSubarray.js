// Time of On^2 timesout
// var maxSubArray = function(nums) {
//     let max = nums[0]
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i; j < nums.length; j++) {
//             const sum = nums
//             .slice(i, j + 1)
//             .reduce((a, b) => a + b, 0);
//             max = Math.max(sum, max)
//         }
//     }
//     return max;
    
// };

//Kadane Algo - use for best continguous sum - NEEDS TO BE SUM AND NEEDS TO BE CONTINUOUS
var maxSubArray = function(nums) {
    let current = nums[0];
    let best = nums[0];
    for(let i = 1; i < nums.length; i++) {
        current = Math.max(nums[i], nums[i] + current)
        best = Math.max(current, best)
    }
    return best;
};