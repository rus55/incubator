/*Given an array of integers your solution should find the smallest integer.
For example:
	Given [34, 15, 88, 2] your solution will return 2
	Given [34, -345, -1, 100] your solution will return -345
*/

class SmallestIntegerFinder {
	findSmallestInt(args) {
		let arr = args.sort((a, b) => a - b)
		return arr.shift()
	}
}

let instanceClass = new SmallestIntegerFinder
console.log(instanceClass.findSmallestInt([78, 56, 232, 12, 8]));