// O(N) time complexity | O(1) space

function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
      if (!array.length) return 0;
      if (array.length === 1) return array[0];
      let second = array[0];
      let first = Math.max(array[0], array[1]);
      for(let i = 2; i < array.length; i++) {
          const current = Math.max(first, second + array[i]);
          second = first;
          first = current;
      }
      return first;
  }
  
  // Do not edit the line below.
module.exports = maxSubsetSumNoAdjacent;
  


// PASS  maxSubsetSumNoAdjacent/maxSum.test.js
// ✓ this answer should be true (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.451 s