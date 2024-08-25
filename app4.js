//define variables
var player = document.querySelector('.player');
var computer = document.querySelector('.computer');
var winner = document.querySelector('.winner');
var pPoint = document.querySelector('.pPoint');
var cPoint = document.querySelector('.cPoint');
var reset = document.querySelector('.reset');
var computerChoise, random;
var pCount=0;
// ++, --
// check
console.log(player);
// action
function play(playerChoice){
//  alert(playerChoice) ;
player.innerText="Player choice: "+ playerChoice
//conputer -> random->0==rock,1==paper,2==scissers
random = Math.floor( Math.random()*3);
console.log(random);
if(random==0){
    computerChoise="paper";
 computer.innerText="Conputer choice: paper";
}else if(random==1) {
    computerChoise="rock";
    computer.innerText="Conputer choice: rock";
}else if(random==2){
    computerChoise="scissors";
    computer.innerText="Conputer choice: scissors";
}
// player
if (
    (playerChoice=="rock" && computerChoise=="scissors")
    || (playerChoice=="paper" && computerChoise=="rock")
    || (playerChoice=="scissors" && computerChoise=="paper")){
        winner.innerText = "Winner : player";
        pCount++;
        pPoint.innerText = "Player: " +pCount;
    }else if(playerChoice==computerChoise){
        winner.innerText = "Winner : tie";
    }else{
        winner.innerText = "Winner : computer";
        pCount++;
        cPoint.innerText = "conputer: " +pCount;
    }

}
function restart(){
    cPoint.innerText = "Computer: 0";
    cPoint=0
    player.innerText="Player choice:";
    winner.innerText="Winner:";
    pPoint.innerText = "Player: 0";
    pPoint=0
    computer.innerText="Player choice:";
}