// O(n) time | O(n) space


function twoNumberSum(array, targetSum) {
	let hash = {};
	for(const num of array) {
		let currentSum = targetSum - num;
		if(currentSum in hash) {
			return [currentSum, num]
		}else {
			hash[num] = true
		}
	}
	return [];


}

module.exports = twoNumberSum;




// PASS  two_number_sum/two_number_sum.test.js
// ✓ this answer should be true (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.43 s, estimated 1 s
// Ran all test suites matching /two_number_sum.test.js/i.