console.log('Hello');
const array = ["rock", "paper", "scissors"];
function getComputerChoice() {
    const choice = array[Math.floor(Math.random()*array.length)];
    
    return choice;
}


function checkWinner(playerSelection, computerSelection) {
    if (playerSelection==computerSelection){
    return "Tie";
    }
else if (
(playerSelection == "rock" && computerSelection == "scissors") ||
(playerSelection == "paper" && computerSelection == "rock") ||
(playerSelection == "scissors" && computerSelection == "paper")
 ) {
    return "Player";
} 

else {
    return "Computer";

}


}
function playRound(playerSelection, computerSelection){
const result = checkWinner(playerSelection, computerSelection);
    if (result=="Tie") {
        return "It's a Tie!"
    }
    else if (result=="Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }


}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice =prompt("Rock Paper Scissors");
        if(choice == null) {
            continue
        }
        const choiceInLower = choice.toLowerCase();
        if(array.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    for(let i=0; i<5; i++) {



const playerSelection=getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
console.log("----------")
if(checkWinner(playerSelection, computerSelection) == "Player") {
    scoreComputer++;
}
else if(checkWinner(playerSelection, computerSelection) == "Computer") {
    scoreComputer++;
}
    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer) {
        console.log("Player was the winner");
    }
    else if(scorePlayer < scoreComputer) {
        console.log("Computer was the winner");
    }
    else {
        console.log("We have a tie!");
    }
}

game()