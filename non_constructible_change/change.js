function nonConstructibleChange(coins) {
    // Write your code here.
      coins.sort(function(a,b) {return a-b})
      let currentChange = 0;
      for (i = 0; i < coins.length; i ++) {
          if (coins[i] > currentChange + 1) return currentChange + 1;
          currentChange += coins[i];
      }
      
    return currentChange + 1;
  }

  module.exports = nonConstructibleChange;




//  PASS  non_constructible_change/change.test.js
//  ✓ this answer should be true (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.445 s