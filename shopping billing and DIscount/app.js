let amount = Number(prompt("Enter Your Amount"));

if(isNaN(amount)){
    console.log("Invalid Input, Please Enter Your correct age")
} else if(amount > 0 &&  amount < 5000){
    console.log(amount)
} else if (amount > 5001 && amount < 7000){
    console.log(amount - (Math.floor((5*amount)/100)))
} else if (amount > 7001 && amount < 9000){
    console.log(amount - (Math.floor((10*amount)/100)))
} else if (amount > 9001 && amount < 10000){
    console.log(amount - (Math.floor((20*amount)/100)))
} else {
    console.log(amount - (Math.floor((25*amount)/100)))   
}