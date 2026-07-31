// let number = Number(prompt("Enter a number"));

// if (isNaN(number) || number <= 0) {
//     console.log("Error: Invalid Input");
// } else {
//     let sum = 0;

//     for (let index = 1; index <= number; index++) {
//         sum = sum + index;
//     }

//     console.log(sum);
// }

/// by while loop to sum to digit number

let num = Number(prompt("Enter your Number"));

if (isNaN(num) || num <= 0) {
    console.log("Error: Invalid Input");
} else {
    let reversed = 0

    while(num > 0){
        let lastDigit = num % 10;
        reversed = (reversed * 10) + lastDigit;
        num = Math.floor(num / 10);
    }
    console.log(reversed)
}
