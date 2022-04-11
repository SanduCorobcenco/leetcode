const sortedSquaredArray = require('./sortedSquares.js');


let array = [1,4,7,9,10];



test('this answer should be true', () => {
    expect(sortedSquaredArray(array)).toEqual([1, 16, 49, 81, 100]);
});

