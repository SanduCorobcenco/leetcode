const isMonotonic = require('./monotonic_array.js');


let trueAnswer = [1,4,7,9,10];
let falseAnswer = [2,3,6,3,21];


test('this answer should be true', () => {
    expect(isMonotonic(trueAnswer)).toBe(true);
});

test('this answer should be false', () => {
    expect(isMonotonic(falseAnswer)).toBe(false);
});





//  PASS  ./monotonic.test.js
//   ✓ this answer should be true (1 ms)
//   ✓ this answer should be false

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
