let number = Number(prompt("Enter Your Number"));

if(isNaN(number) || number <= 0){
    console.log("Invalid Input")
} else{
    let reversed = 0;

    while(number > 0){
        let lastDigit = number % 10;
        reversed = (reversed * 10) + lastDigit;
        number = Math.floor(number / 10);
    }
    console.log(reversed)
}