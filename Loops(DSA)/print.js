// let stopping = Number(prompt("Enter Your stopping condition"));

// if (isNaN(stopping) || stopping <= 0) {
//     console.log("Error: Invalid Input");
// } else { 
//     for (let index = 0; index < stopping; index++) {
//         console.log("Hello World!", stopping);
//     }
// }


//Repeat hello!

let userInput;

do {
  userInput = prompt("Enter a number (or 0 to stop):");
} while (userInput !== "0");

console.log("Loop stopped because you entered 0.");
