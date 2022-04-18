function numberOfWaysToMakeChange(n, denoms) {
  
      const ways = new Array(n + 1).fill(0);
      ways[0] = 1;
      for(let i = 0; i < denoms.length; i++) {
          let denom = denoms[i]
          for(let current = 1; current < n + 1; current++) {
              if(denom <= current) {
                  ways[current]  += ways[current - denom];
              }
          }
      }
      return ways[n];
  }
  

  module.exports = numberOfWaysToMakeChange;
  



//   PASS  number_of_ways_to_make_change/changeCoins.test.js
//   ✓ this answer should be true (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.391 s