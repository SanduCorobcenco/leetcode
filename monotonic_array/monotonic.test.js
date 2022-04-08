const isMonotonic = require('./monotonic_array.js');


let trueAnswer = [1,4,7,9,10];
let falseAnswer = [2,3,6,3,21];


test('this answer should be true', () => {
    expect(isMonotonic(trueAnswer)).toBe(true);
});

test('this answer should be false', () => {
    expect(isMonotonic(falseAnswer)).toBe(false);
});