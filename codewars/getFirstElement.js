// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.
// If n == 0 return an empty sequence[]

/* Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
*/
function first(arr, n) {
	let arrNew = [];
	if (n == undefined) {
		arrNew.push(arr[0]);
		return arrNew;
	} else if (n == 0) {
		return arrNew;
	} else {
		for (let i = 0; i < n; i++) {
			arrNew.push(arr[i]);
			if (i == arr.length - 1) {
				return arrNew;
			}
		}
		return arrNew;
	}
}

console.log(first(['a', 'b', 'c', 'd', 'e'], 3));
// console.log(first([406, 285, 'C!WUQAt', 'OxQU', 'GpErKC', 't@hlO', 'Yh?xdl;', 'xKQ?C'], 0));