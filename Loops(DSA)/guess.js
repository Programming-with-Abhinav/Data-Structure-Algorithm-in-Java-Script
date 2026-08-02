let randomNumber = Math.floor((Math.random() * 100) + 1);
let guessNumber = -1;

while(guessNumber !== randomNumber) {
    guessNumber = Number(prompt("Guess the number"));
    if(isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100){
        console.log("try again b/w 1 - 100");
        continue
    }

    if(guessNumber > randomNumber) {
        console.log("too high , try again");
    }  else if (guessNumber < randomNumber) {
        console.log("too low , try again");
    } else {
        console.log("congrats and number was", guessNumber)
    }
}