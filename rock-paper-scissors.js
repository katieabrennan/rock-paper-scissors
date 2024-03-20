function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let compScore = 0
let playerScore = 0


const results = document.querySelector("#results");

// 1 = rock
// 2 = paper 
// 3 = scissors

function resetGame() {
    compScore = 0;
    playerScore = 0;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock") {

        if (computerSelection === 1) {
            results.textContent = `It's a tie! You both selected rock.
            You: ${playerScore} - Computer: ${compScore}`;
        } else if (computerSelection === 2) {
            compScore++
            results.textContent = `You lose! Paper beats rock.
            You: ${playerScore} - Computer: ${compScore}`;
        } else {
            playerScore++
            results.textContent = `You win! Rock beats Scissors.
            You: ${playerScore} - Computer: ${compScore}`;
        }

    } else if (playerSelection.toLowerCase() === "paper") {

        if (computerSelection === 1) {
            playerScore++
            results.textContent = `You win! Paper beats rock.
            You: ${playerScore} - Computer: ${compScore}`;
        } else if (computerSelection === 2) {
            results.textContent = `It's a tie! You both selected paper. 
            You: ${playerScore} - Computer: ${compScore}`;
        } else {
            compScore++
            results.textContent = `You lose! Scissors beats paper.
            You: ${playerScore} - Computer: ${compScore}`;
        }

    } else if (playerSelection.toLowerCase() === "scissors") {

        if (computerSelection === 1) {
            compScore++
            results.textContent = `You lose! Rock beats scissors.
            You: ${playerScore} - Computer: ${compScore}`;
        } else if (computerSelection === 2) {
            playerScore++
            results.textContent = `You win! Scissors beats paper.
            You: ${playerScore} - Computer: ${compScore}`;
        } else {
            results.textContent = `It's a tie! You both selected scissors. 
            You: ${playerScore} - Computer: ${compScore}`;
        }
    }

    if (compScore === 5) {
        results.textContent = ` `;
        alert("Computer won 5 rounds, they are the winner of this game!");
        resetGame();
    }

    if (playerScore === 5) {
        results.textContent = ` `;
        alert("You won 5 rounds, you are the winner of this game!");
        resetGame();
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