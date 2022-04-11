// O(n) time | O(1) space complexity where n is length of the array 

function longestPeak(array) {
    // Write your code here.
      let longestPeak = 0;
      let i = 1;
      while(i < array.length - 1) {
          const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
          if(!isPeak) {
              i++;
              continue;
          }
          let leftIdx = i - 2;
          while(leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
              leftIdx--;
          }
          let rightIdx = i + 2;
          while(rightIdx <= array.length && array[rightIdx] < array[rightIdx - 1]) {
              rightIdx++;
          }
          const currentLongestPeak = rightIdx - leftIdx - 1;
          longestPeak = Math.max(longestPeak, currentLongestPeak);
          i = rightIdx;
      }
      return longestPeak;
  }
  
  module.exports = longestPeak;
  


//  PASS  longestPeak/longestPeak.test.js
//  ✓ this answer should be true (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.444 s, estimated 1 s