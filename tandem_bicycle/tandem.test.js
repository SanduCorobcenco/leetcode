const tandemBicycle = require('./tandem.js');


redShirtSpeeds = [5, 5, 3, 9, 2];
blueShirtSpeeds = [3, 6, 7, 2, 1];
fastest = true;



test('this answer should be true', () => {
    expect(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest)).toEqual(32);
});

