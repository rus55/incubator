function fizzbuzz(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}
	let result = arr.map(item => {
		if (item % 3 === 0 && item % 5 === 0) {
			return 'FizzBuzz';
		} else if (item % 3 === 0) {
			return 'Fizz';
		} else if (item % 5 === 0) {
			return 'Buzz';
		} else {
			return item;
		}
	});
	return result;
}
console.log(fizzbuzz(20));