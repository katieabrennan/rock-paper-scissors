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

let compScore = 0
let playerScore = 0


function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === computerSelection) {
        console.log("It's a tie! You both selected " + playerSelection);
        console.log("You: " + playerScore + " - " + "Computer: " + compScore);
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        compScore++
        console.log("You: " + playerScore + " - " + "Computer: " + compScore);
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        playerScore++
        console.log("You: " + playerScore + " - " + "Computer: " + compScore);
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        playerScore++
        console.log("You: " + playerScore + " - " + "Computer: " + compScore);
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        compScore++
        console.log("You: " + playerScore + " - " + "Computer: " + compScore);
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        playerScore++
        console.log("You: " + playerScore + " - " + "Computer: " + compScore);
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        compScore++
        console.log("You: " + playerScore + " - " + "Computer: " + compScore);
    }

}

let playerSelection = prompt("rock, paper or scissors?");
playRound(playerSelection, computerSelection);

playerSelection = prompt("rock, paper or scissors?");
playRound(playerSelection, computerSelection)

playerSelection = prompt("rock, paper or scissors?");
playRound(playerSelection, computerSelection)

playerSelection = prompt("rock, paper or scissors?");
playRound(playerSelection, computerSelection)

playerSelection = prompt("rock, paper or scissors?");
playRound(playerSelection, computerSelection)

if (compScore > playerScore) {
    console.log("YOU LOST");
} else if (compScore < playerScore) {
    console.log("YOU WON!");
} else if (compScore === playerScore) {
    console.log("IT'S A TIE!")
}








