const findReplaceString = require('./replace.js');






test('this answer should be true', () => {
    expect(findReplaceString("abcd",[0, 2],["a", "cd"],["eee", "ffff"])).toEqual("eeebffff");
});

