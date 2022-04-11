// O(nlogn) time | O(n) space - where n is the length of array


function sortedSquaredArray(arr) {
    const sortedSquares = new Array(arr.length).fill(0);
        for(let idx = 0; idx < arr.length; idx++) {
            sortedSquares[idx] = arr[idx] * arr[idx];
        }
        
        sortedSquares.sort((a,b) => a-b);
        return sortedSquares;
    
    
    }

    module.exports = sortedSquaredArray;
    



//     PASS  sortedSquaresArray/sortedSquares.test.js
//     ✓ this answer should be true (3 ms)
  
//   Test Suites: 1 passed, 1 total
//   Tests:       1 passed, 1 total
//   Snapshots:   0 total
//   Time:        0.431 s, estimated 1 s