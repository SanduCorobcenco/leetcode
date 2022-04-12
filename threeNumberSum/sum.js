// O(N^2) time complexity | O(N) space complexity

function threeNumberSum(array, targetSum) {
    // Write your code here.
      array.sort((a,b) => a-b)
  let triplets = [];
      for(let i = 0; i < array.length - 2; i++) {
          let left = i + 1;
          let right = array.length - 1;
          while (left < right) {
          const currentSum = array[i] + array[left] + array[right];
              if(currentSum === targetSum) {
                  triplets.push([array[i], array[left], array[right]]);
                  left++;
                  right--;
              }
              else if (currentSum > targetSum) {
                  right--;
              }
              else if (currentSum < targetSum) {
                  left++;
              }
          }
      }
      return triplets;
  }
  
  // Do not edit the line below.
module.exports = threeNumberSum;
  



PASS  threeNumberSum/sum.test.js
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.554 s, estimated 1 s