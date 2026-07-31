let number = Number(prompt("Enter a number"));

if (isNaN(number) || number <= 0) {
    console.log("Error: Invalid Input");
} else {
    let factors = [];

    for (let index = 1; index <= number; index++) {
        if (number % index === 0) {
            factors.push(index);
        }
    }

    console.log("Factors:", factors.join(", "));
}
