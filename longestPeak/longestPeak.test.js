const longestPeak = require('./longestPeak.js');


let array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];



test('this answer should be true', () => {
    expect(longestPeak(array)).toBe(6);
});

