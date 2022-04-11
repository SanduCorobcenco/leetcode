const isValidSubsequence = require('./subsequence.js');


let array = [1,4,7,9,10];



test('this answer should be true', () => {
    expect(isValidSubsequence(array, [4,7])).toBe(true);
});

test('this answer should be false', () => {
    expect(isValidSubsequence(array, [3,21])).toBe(false);
});

