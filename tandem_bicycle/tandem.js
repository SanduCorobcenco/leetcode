function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a,b) => a - b);
    blueShirtSpeeds.sort((a,b) => a - b);
    let totalSpeed = 0;
    if(fastest) blueShirtSpeeds.reverse();

    for(let i = 0; i < redShirtSpeeds.length; i++) {
        totalSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    } 
    return totalSpeed;
}

// Do not edit the line below.
module.exports = tandemBicycle;



// PASS  tandem_bicycle/tandem.test.js
// ✓ this answer should be true (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.385 s, estimated 1 s