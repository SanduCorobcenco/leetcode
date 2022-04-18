const classPhotos = require('./photos.js');


array1 = [5, 8, 1, 3, 4];
array2 = [6, 9, 2, 4, 5];



test('this answer should be true', () => {
    expect(classPhotos(array1, array2)).toBe(true);
});

