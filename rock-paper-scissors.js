function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let compScore = 0
let playerScore = 0

const results = document.querySelector("#results");


function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock") {

        if (computerSelection === 1) {
            results.textContent = `It's a tie! You both selected ${playerSelection} 
            You: ${playerScore} - Computer: ${compScore}`;
        } else if (computerSelection === 2) {
            compScore++
            results.textContent = `You lose! ${computerSelection} beats ${playerSelection}
            You: ${playerScore} - Computer: ${compScore}`;
        } else {
            playerScore++
            results.textContent = `You win! ${playerSelection} beats ${computerSelection}
            You: ${playerScore} - Computer: ${compScore}`;
        }

    } else if (playerSelection.toLowerCase() === "paper") {

        if (computerSelection === 1) {
            playerScore++
            results.textContent = `You win! ${playerSelection} beats ${computerSelection}
            You: ${playerScore} - Computer: ${compScore}`;
        } else if (computerSelection === 2) {
            results.textContent = `It's a tie! You both selected ${playerSelection} 
            You: ${playerScore} - Computer: ${compScore}`;
        } else {
            compScore++
            results.textContent = `You lose! ${computerSelection} beats ${playerSelection};
            You: ${playerScore} - Computer: ${compScore}`;
        }

    } else if (playerSelection.toLowerCase() === "scissors") {

        if (computerSelection === 1) {
            compScore++
            results.textContent = `You lose! ${computerSelection} beats ${playerSelection}
            You: ${playerScore} - Computer: ${compScore}`;
        } else if (computerSelection === 2) {
            playerScore++
            results.textContent = `You win! ${playerSelection} beats ${computerSelection}
            You: ${playerScore} - Computer: ${compScore}`;
        } else {
            results.textContent = `It's a tie! You both selected ${playerSelection} 
            You: ${playerScore} - Computer: ${compScore}`;
        }
    }

}


const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice(1, 3));
});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice(1, 3));
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice(1, 3));
});