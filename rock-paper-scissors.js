function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (getComputerChoice(1, 3) === 1) {
    computerSelection = "rock";
} else if (getComputerChoice(1, 3) === 2) {
    computerSelection = "paper";
} else {
    computerSelection = "scissors";
}

let playerSelection = prompt("rock, paper or scissors?");



function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log("It's a tie!");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        console.log("Paper beats rock! Computer wins!");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        console.log("Rock beats scissors! You win!");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        console.log("Paper beats rock! You win!");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        console.log("Scissors beat paper! Computer wins!");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        console.log("Scissors beat paper! You win!");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        console.log("Rock beats scissors! Computer wins!")
    }

}

playRound(playerSelection, computerSelection);


