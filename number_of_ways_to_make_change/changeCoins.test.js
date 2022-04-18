const numberOfWaysToMakeChange = require('./change.js');


denoms = [1, 5];
n = 6;


test('this answer should be true', () => {
    expect(numberOfWaysToMakeChange(n,denoms)).toEqual(2);
});

