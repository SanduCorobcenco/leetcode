const maxDistToClosest = function(seats) {
    const seatsNumber = seats.length;
    let max = -Infinity;

    for(let i = 0, j = 0; i < seatsNumber; i = j){
        for(i = j; i < seatsNumber && seats[i] === 1; i++){ console.log('first one','i =', i, 'j = ', j)}
        for(j = i; j < seatsNumber && seats[j] === 0; j++){ console.log('second one','i =', i, 'j = ', j)}

        if(i === 0 || j === seatsNumber){
            max = Math.max(max, j - i);
        } else {
            max = Math.max(max, Math.floor((j - i + 1) / 2));
        }
    }
    console.log(max);
    return max;
}
module.exports = maxDistToClosest;


// PASS  maximize_distance_to_closest_person/closest_person.test.js
// ✓ this answer should be true (97 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.48 s