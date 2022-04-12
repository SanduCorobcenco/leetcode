const nonConstructibleChange = require('./change.js');


let array = [1,2,5];



test('this answer should be true', () => {
    expect(nonConstructibleChange(array)).toEqual(4);
});

