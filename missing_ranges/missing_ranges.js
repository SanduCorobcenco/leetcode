var findMissingRanges = function(nums, lower, upper) {

    const result = [];
    nums = [lower - 1, ...nums, upper + 1];
  
    for (let i = 1; i < nums.length; i++) {
      const diff = nums[i] - nums[i - 1];
  
      if (diff === 2) {
        result.push(`${nums[i - 1] + 1}`);
      } else if (diff > 2) {
        result.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
      }
    }
    console.log(result);
    return result;
};

