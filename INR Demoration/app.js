let amount = Number(prompt("Enter Your amount"));

if(amount >= 500){
    console.log("Notes 500 : " + Math.floor(amount/500));
    amount = amount%500;
}

if(amount >= 200){
    console.log("Notes 200 : " + Math.floor(amount/200));
    amount = amount%200;
}

if(amount >= 100){
    console.log("Notes 100 : " + Math.floor(amount/100));
    amount = amount%100;
}

if(amount >= 50){
    console.log("Notes 50 : " + Math.floor(amount/50));
    amount = amount%50;
}

if(amount >= 20){
    console.log("Notes 20 : " + Math.floor(amount/20));
    amount = amount%20;
}

if(amount >= 10){
    console.log("Notes 10 : " + Math.floor(amount/10));
    amount = amount%10;
}

if(amount >= 5){
    console.log("Notes 5 : " + Math.floor(amount/5));
    amount = amount%5;
}

if(amount >= 2){
    console.log("Notes 2 : " + Math.floor(amount/2));
    amount = amount%2;
}

if(amount >= 1){
    console.log("Notes 1 : " + Math.floor(amount/1));
    amount = amount%1;
}


