/* Define a function that removes duplicates from an array of numbers and returns it as a result.
The order of the sequence has to stay the same.
*/

function distinct(a) {
	let removesDuplicates = [...new Set(a)];
	return removesDuplicates;
}

console.log(distinct(['a', 'a', 'b', 'b', 'c', 'd']));