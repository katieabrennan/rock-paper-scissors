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

const results = document.querySelector("#results");


function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === computerSelection) {
        results.textContent = `It's a tie! You both selected ${playerSelection} 
        You: ${playerScore} - Computer: ${compScore}`;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        compScore++
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}
        You: ${playerScore} - Computer: ${compScore}`;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        playerScore++
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}
        You: ${playerScore} - Computer: ${compScore}`;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        playerScore++
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}
        You: ${playerScore} - Computer: ${compScore}`;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        compScore++
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection};
        You: ${playerScore} - Computer: ${compScore}`;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        playerScore++
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}
        You: ${playerScore} - Computer: ${compScore}`;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        compScore++
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}
        You: ${playerScore} - Computer: ${compScore}`;
    }
}

// let playerSelection = prompt("rock, paper or scissors?");
// playRound(playerSelection, computerSelection);

// playerSelection = prompt("rock, paper or scissors?");
// playRound(playerSelection, computerSelection)

// playerSelection = prompt("rock, paper or scissors?");
// playRound(playerSelection, computerSelection)

// playerSelection = prompt("rock, paper or scissors?");
// playRound(playerSelection, computerSelection)

// playerSelection = prompt("rock, paper or scissors?");
// playRound(playerSelection, computerSelection)

// if (compScore > playerScore) {
//     console.log("YOU LOST");
// } else if (compScore < playerScore) {
//     console.log("YOU WON!");
// } else if (compScore === playerScore) {
//     console.log("IT'S A TIE!")
// }

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
    playRound("rock", computerSelection);
});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
    playRound("paper", computerSelection);
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
    playRound("scissors", computerSelection);
});













