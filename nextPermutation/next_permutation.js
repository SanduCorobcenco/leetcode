var nextPermutation = function(nums) {
    const n = nums.length;
    
   let i = n - 2;
    
   while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    
   let j = n - 1;
    
    if (i != -1) {

        while (j >= 0 && nums[j] <= nums[i]) j--;

        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
   
    i++;
    j = n - 1;

    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
};
    