var maxArea = function(height) {
    let maxWater = 0;
    let i = 0;
    let j = height.length - 1;
    while(i < j) {
        maxWater = Math.max(maxWater, Math.min(height[i], height[j]) * (j - i))
        if(height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return maxWater;
    
};


// Time Complexity: O(N);
// Space Complexity: O(1);