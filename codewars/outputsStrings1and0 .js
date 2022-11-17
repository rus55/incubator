// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.
// All non - vowels including non alpha characters(spaces, commas etc.) should be included.

function vowelOne(str) {
	let newStr = '';
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	for (let char of str) {
		vowels.includes(char.toLowerCase()) ? newStr += '1' : newStr += '0';
	}

	return newStr;
}
console.log(vowelOne('Hello'));