// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

function getAverage(marks) {
	const sumMarks = marks.reduce((acc, current) => acc + current);
	const average = Math.floor(sumMarks / marks.length);
	return average;
}

console.log(getAverage([5, 3, 5, 4, 2]));