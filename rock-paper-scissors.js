function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


if (getRandomNumber(1, 3) === 1) {
    console.log("rock");
} else if (getRandomNumber(1, 3) === 2) {
    console.log("paper");
} else if (getRandomNumber(1, 3) === 3) {
    console.log("scissors");
}



