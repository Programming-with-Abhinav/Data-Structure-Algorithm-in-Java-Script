let number = Number(prompt("Enter a number"));

if (isNaN(number) || number <= 0) {
    console.log("Error: Invalid Input");
} else {
    let sum = 0;

    for (let index = 1; index <= number; index++) {
        sum = sum + index;
    }

    console.log(sum);
}
