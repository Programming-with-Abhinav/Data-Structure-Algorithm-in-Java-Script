let n = Number(prompt("Enter Your Number"));
let isPrime = true;

if (isNaN(n) || n <= 0) {
	console.log("Error: Invalid Input");
} else if (n < 2) {
	isPrime = false;
} else {
	// Pure loop checking for divisors
	for (let i = 2; i * i <= n; i++) {
		if (n % i === 0) {
			isPrime = false;
			break; // Stops the loop instantly
		}
	}
}

alert(n + " is prime: " + isPrime);
