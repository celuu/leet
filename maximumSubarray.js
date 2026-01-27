// Time of On^2 timesout
var maxSubArray = function(nums) {
    let max = nums[0]
    for(let i = 0; i < nums.length; i++) {
        for(let j = i; j < nums.length; j++) {
            const sum = nums
            .slice(i, j + 1)
            .reduce((a, b) => a + b, 0);
            max = Math.max(sum, max)
        }
    }
    return max;
    
};