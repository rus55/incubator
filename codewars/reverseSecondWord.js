/* Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata. */

function reverse(str) {
	let arr = str.split(' ');
	let newStr = arr.map((item, index) => (index % 2 == 0) ? item : item.split('').reverse().join('')).join(' ');
	return (str == false) ? '' : newStr;
}

console.log(reverse("Reverse this string, please!"));