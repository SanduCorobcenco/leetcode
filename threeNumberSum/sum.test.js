const threeNumberSum = require('./sum.js');


array = [12, 3, 1, 2, -6, 5, -8, 6];
targetSum = 0;


test('this answer should be true', () => {
    expect(threeNumberSum(array, targetSum)).toEqual([[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]);
});

