let flippedCards = [];
let matchedCards = [];
let attempts = 5;
let timer;

function flipCard(card) {
    if (card.classList.contains("flipped") || flippedCards.length >= 2) {
        return;
    }

    card.classList.add("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    const id1 = card1.dataset.id;
    const id2 = card2.dataset.id;

    if (id1 === id2) {
        matchedCards.push(id1);
        flippedCards = [];

        if (matchedCards.length === document.querySelectorAll(".card").length / 2) {
            clearInterval(timer);
            setTimeout(() => {
                alert("Allright! You Can Pass!");
                startGame();
            }, 500);
        }

    } else {
        attempts--;
        document.getElementById('attempts').textContent = `Souls Remaining: ${attempts}`;

        document.querySelector(".game-board").style.pointerEvents = "none";

        setTimeout(() => {
            if (card1 && card2) {
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
            }

            flippedCards = [];
            document.querySelector(".game-board").style.pointerEvents = "auto";

            if (attempts <= 0) {
                clearInterval(timer);
                alert("Your soul has been consumed... Game over.");
                startGame();
            }
        }, 1000);
    }
}

function shuffleCards() {
    const cards = Array.from(document.querySelectorAll(".card"));
    const gameBoard = document.querySelector(".game-board");

    cards.forEach(card => card.classList.remove("flipped"));
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    cards.forEach(card => gameBoard.appendChild(card));
}

function startGame() {
    attempts = 10;
    matchedCards = [];
    flippedCards = [];
    document.getElementById('attempts').textContent = `Souls Remaining: ${attempts}`;
    document.getElementById("timer").textContent = `Time: 0s`;
    shuffleCards();
    startTimer();
}

function startTimer() {
    let seconds = 0;
    clearInterval(timer);
    timer = setInterval(() => {
        seconds++;
        document.getElementById("timer").textContent = `Time: ${seconds}s`;

        if (seconds >= 60) {
            clearInterval(timer);
            alert("Time's up! The Dark Entity claims your soul...");
            startGame();
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", startGame);
