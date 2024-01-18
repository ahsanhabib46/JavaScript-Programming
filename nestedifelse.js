let i,winningNumber=20;
for(i=0;i<3;i++){
let guessNumber=+prompt("Guess a number :");
    // console.log("Guess number is = ",guessNumber);
if(guessNumber===20){
    console.log("Winner");
    break;
}

else if(guessNumber===19){
    console.log("Low");
}
else if(guessNumber===28){
    console.log("high");
}
else if(guessNumber===12){
    console.log(" too Low");
}

else if(guessNumber===50){
    console.log("too high");
}
else{
    console.log("Loser");
}

}
