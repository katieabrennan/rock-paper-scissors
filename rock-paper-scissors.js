function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


if (getComputerChoice(1, 3) === 1) {
    answer = "rock";
} else if (getComputerChoice(1, 3) === 2) {
    answer = "paper";
} else {
    answer = "scissors";
}

const playerSelection = "rock"; //player selection will come from text input
const computerSelection = getComputerChoice();
console.log(playerSelection, answer);





