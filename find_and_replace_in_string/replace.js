var findReplaceString = function(S, indexes, sources, targets) {
    let array = [];

  for (let i = 0; i < indexes.length; i++) {
      array.push([indexes[i], sources[i], targets[i]]);
  }

  array.sort((a, b) => b[0] - a[0]); 

  for (let [index, source, target] of array) {
    if (S.substring(index, index + source.length) === source) {
      S = S.substring(0, index) + target + S.substring(index + source.length);
    
    }
  }
  return S;
};

module.exports = findReplaceString;


// PASS  find_and_replace_in_string/replace.test.js
//   ✓ this answer should be true (57 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.437 s