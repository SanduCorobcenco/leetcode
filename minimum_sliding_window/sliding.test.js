const minWindow = require('./minimum.js');


s = "ADOBECODEBANC";
t = "ABC"



test('this answer should be true', () => {
    expect(minWindow(s,t)).toBe("BANC");
});

