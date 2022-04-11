// O(n) time | O(n) space - where n is the length of array 
function isValidSubsequence(array, sequence) {
    // Write your code here.
  let sequenceIdx = 0;
      for(const value of array) {
          if (sequenceIdx === sequence.length) break;
          if (sequence[sequenceIdx] === value) 
              sequenceIdx++;
      }
      return sequenceIdx === sequence.length;
  }



module.exports = isValidSubsequence;




// PASS  validate_subsequence/subsequence.test.js
// ✓ this answer should be true (2 ms)
// ✓ this answer should be false (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.448 s