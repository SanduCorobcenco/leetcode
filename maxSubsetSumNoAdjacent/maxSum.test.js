const maxSubsetSumNoAdjacent = require('./maxSum.js');


array = [75, 105, 120, 75, 90, 135];



test('this answer should be true', () => {
    expect(maxSubsetSumNoAdjacent(array)).toEqual(330);
});

