const minimumWaitingTime = require('./minimumTime.js');


array = [3, 2, 1, 2, 6];



test('this answer should be true', () => {
    expect(minimumWaitingTime(array)).toEqual(17);
});

