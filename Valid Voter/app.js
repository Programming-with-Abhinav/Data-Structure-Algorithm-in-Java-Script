////Temporary code////
let age = Number(prompt("Enter Your age"));

if(isNaN(age)){
    console.log("Invalid Input, Please Enter Your correct age")
} else if (age <= 0){
    console.log("Neagtive age is not possible")
} else if (age >= 18) {
    console.log("You can vote")
} else {
    console.log("You can not vote");
}