const mergeOverlappingIntervals = require('./intervals.js');


let array = [[1,2], [3,5], [4,7], [6,8], [9,10]];



test('this answer should be true', () => {
    expect(mergeOverlappingIntervals(array)).toEqual([[1,2], [3,8], [9, 10]]);
});

