const twoNumberSum = require('./two_number_sum.js');


let array = [1,4,7,9,10];
let correctAnswer = [4,7]

test('this answer should be true', () => {
    expect(twoNumberSum(array, 11)).toStrictEqual(correctAnswer);
});


