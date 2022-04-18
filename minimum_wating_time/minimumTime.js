function minimumWaitingTime(queries) {
 
      queries.sort((a,b) => a-b)
      
      let waitingTime = 0;
      for (let i = 0; i < queries.length; i++) {
          const duration = queries[i];
          const queriesLeft = queries.length - (i + 1);
          waitingTime += duration * queriesLeft;
      }
    return waitingTime;
  }
  
  // Do not edit the line below.
 module.exports = minimumWaitingTime;

  


//  PASS  minimum_wating_time/minimumTime.test.js
//   ✓ this answer should be true (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.375 s, estimated 1 s