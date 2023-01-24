/* Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese" */

function bmi(weight, height) {
	const calculate = weight / (height ** 2)
	console.log(calculate);
	if (calculate <= 18.5) { return "Underweight" }
	if (calculate > 18.5 && calculate <= 25.0) { return "Normal" }
	if (calculate > 25.0 && calculate <= 30.0) { return "Overweight" }
	if (calculate > 30) { return "Obese" }
}

console.log(bmi(80, 1.80));