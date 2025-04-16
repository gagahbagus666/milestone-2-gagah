let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

function checkGuess() {
const guess = parseInt(document.getElementById("guessInput").value);
const result = document.getElementById("result");
const attemptsDisplay = document.getElementById("attempts");

    if (isNaN(guess) || guess < 1 || guess > 100) {
    result.textContent = "Tell us, How Many Souls You Want to Offer..";
    return;
    }

attempts--;

if (guess === secretNumber) {
    result.textContent = `Nice One, I Accept This ${secretNumber} Souls!`;
    disableGame();
    } else if (attempts > 0) {
    result.textContent = guess < secretNumber ? "You Joking! That was too Small" : "Flattered, but That's Too Much!";
    attemptsDisplay.textContent = attempts;
    } else {
    result.textContent = `Its Over, I'll Take Your Soul Instead..!! ${secretNumber}.`;
    attemptsDisplay.textContent = 0;
    disableGame();
    }
}

function disableGame() {
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessBtn").disabled = true;
    document.getElementById("resetBtn").style.display = "inline-block";
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("resetBtn").style.display = "none";
    document.getElementById("guessInput").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("attempts").textContent = attempts;
}

document.getElementById("guessBtn").addEventListener("click", checkGuess);
document.getElementById("resetBtn").addEventListener("click", resetGame);
