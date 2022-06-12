const maxDistToClosest = require('./closest_person.js');

array = [1,0,0,0,1,0,1];




test('this answer should be true', () => {
    expect(maxDistToClosest(array)).toEqual(2);
});

