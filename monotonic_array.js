// O(N) time, O(N) space complexity

function isMonotonic(array) {
	let isNonDecreasing = true;
	let isNonIncreasing = true;
	for ( let i = 1; i < array.length; i++) {
		if (array[i] < array[i-1]) isNonDecreasing = false;
		if (array[i] > array[i-1]) isNonIncreasing = false;
	}
	
	return isNonDecreasing || isNonIncreasing;
  // Write your code here.
}

console.log(isMonotonic([3,4,5,6,7,10]))
console.log(isMonotonic([3,4,1,6,7,10]))
