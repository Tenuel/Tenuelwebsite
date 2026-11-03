const choice=["rock","paper","scissors"];
const player=document.getElementById("player");
const computer=document.getElementById("computer");
const results=document.getElementById("results")
const pscore=document.getElementById("pscore");
const cscore=document.getElementById("cscore");
let playerscore=0;
let computerscore=0;
function playgame(playerchoice){
    const computerchoice=choice[Math.floor(Math.random()*3)]
    console.log(computerchoice)
    let result="";
    if(playerchoice==computerchoice){
        result="IT IS A TIE"
    }
    else{
        switch(playerchoice){
            case "rock":
              result= (computerchoice=="scissors")?"YOU WIN!":"YOU LOOSE!";
              break;
            case "paper":
              result= (computerchoice=="rock")?"YOU WIN!":"YOU LOOSE!";
              break;
            case "scissors":
              result= (computerchoice=="paper")?"YOU WIN!":"YOU LOOSE!";
              break;
        }
    }
    player.textContent= `PLAYER:${playerchoice}`;
        computer.textContent= `COMPUTER:${computerchoice}`;
        results.textContent=result;
        results.classList.remove("greentext","redtext")
        switch(result){
            case "YOU WIN!":
                results.classList.add("greentext");
                playerscore++;
                pscore.textContent=playerscore;
                break;
            case "YOU LOOSE!":
                results.classList.add("redtext");
                computerscore++;
                cscore.textContent=computerscore;

                break;  
        }
}