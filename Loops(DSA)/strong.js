let num = Number(prompt("Enter your Number"));

if (isNaN(num) || num <= 0) {
	console.log("Error: Invalid Input");
} else {
	let originalNum = num;
	let totalSum = 0;

	while (num > 0) {
		let lastDigit = num % 10;

		let factorial = 1;
		for (let i = 1; i <= lastDigit; i++) {
			factorial *= i;
		}

		totalSum += factorial;
		num = Math.floor(num / 10);
	}

	if (totalSum === originalNum) {
		console.log(originalNum + " is a Strong Number! 🎉");
	} else {
		console.log(originalNum + " is NOT a Strong Number.");
	}
}
