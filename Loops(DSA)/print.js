let stopping = Number(prompt("Enter Your stopping condition"));

if (isNaN(stopping) || stopping <= 0) {
    console.log("Error: Invalid Input");
} else { 
    for (let index = 0; index < stopping; index++) {
        console.log("Hello World!", stopping);
    }
}
