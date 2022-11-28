/* Write a program that outputs the top n elements from a list.
Example:
largest(2, [7,6,5,4,3,2,1]) // => [6,7]*/

function largest(n, xs) {
	// find n 
	let len = xs.length;
	// Basic bubble sort in O(n^2)
	for (let i = len; i >= 0; --i) {
		for (let j = 0; j < i; j++) {
			if (xs[j] > xs[j + 1]) {
				let swap = xs[j];
				xs[j] = xs[j + 1];
				xs[j + 1] = swap;
			}
		}
	}

	return xs.slice(len - n);
}
/*
function largest(n, xs) {
	if (n == 0) {
		return [];
	}
	let arr = xs.sort((a, b) => a - b).slice(-n);
	return arr;
}
*/
console.log(largest(2, [3, 2, 1, 4, 5, 6, 7]));