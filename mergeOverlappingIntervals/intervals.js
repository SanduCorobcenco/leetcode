// O(NlogN) time | O(N) space complexity

function mergeOverlappingIntervals(array) {
    let intervals = array.sort((a,b) => a[0] - b[0])
      const mergedIntervals = [];
      let currentInterval = intervals[0];
      mergedIntervals.push(currentInterval);
      
      for(const nextInterval of intervals) {
          const [_, currentIntervalEnd] = currentInterval;
          const [nextIntervalStart, nextIntervalEnd] = nextInterval;
          
          if(currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
          else {
              currentInterval = nextInterval;
              mergedIntervals.push(currentInterval);
          }
      }
      
    return mergedIntervals;
  }
  

  module.exports = mergeOverlappingIntervals
  



//   PASS  mergeOverlappingIntervals/intervals.test.js
//   ✓ this answer should be true (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.425 s, estimated 1 s