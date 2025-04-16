// Array gambar kartu
const cardImages = [
    "../memorygame/memoryassets/skull.png",
    "../memorygame/memoryassets/ghost.png",
    "../memorygame/memoryassets/bat.png",
    "../memorygame/memoryassets/castle2.png",
    "../memorygame/memoryassets/skull.png",
    "../memorygame/memoryassets/ghost.png",
    "../memorygame/memoryassets/bat.png",
    "../memorygame/memoryassets/castle2.png",
];

// Variabel global
let attemptsLeft = 5;
let flippedCards = [];
let matchedCards = [];
let timerInterval;

// Fungsi untuk mengacak kartu
function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log("Shuffled Cards:", array); // Log hasil pengacakan
    return array;
}

// Fungsi untuk membuat elemen kartu
function createCard(image) {
    return `
        <div class="card" onclick="flipCard(this)" data-image="${image}">
            <div class="card-inner">
                <div class="card-front">
                    <img src="../memorygame/memoryassets/back.png" alt="Card Front">
                </div>
                <div class="card-back">
                    <img src="${image}" alt="Card Back">
                </div>
            </div>
        </div>
    `;
}

// Fungsi untuk memulai game
function startGame() {
    // Reset status game
    attemptsLeft = 5;
    flippedCards = [];
    matchedCards = [];
    document.getElementById("attempts").textContent = `Souls Remaining: ${attemptsLeft}`;

    // Hentikan timer jika ada
    clearInterval(timerInterval);
    document.getElementById("time").textContent = "Time: 00:00";

    // Acak dan render kartu
    const shuffledCards = shuffleCards([...cardImages]);
    const boxGame = document.getElementById("box-game");
    boxGame.innerHTML = shuffledCards.map(createCard).join("");

    // Mulai timer
    startTimer();
}

// Fungsi untuk menangani klik kartu
function flipCard(card) {
    if (flippedCards.length >= 2 || card.classList.contains("flipped") || matchedCards.includes(card)) {
        return; // Jangan izinkan lebih dari 2 kartu terbuka sekaligus
    }

    card.classList.add("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

// Fungsi untuk memeriksa kecocokan kartu
function checkMatch() {
    const [card1, card2] = flippedCards;
    const image1 = card1.getAttribute("data-image");
    const image2 = card2.getAttribute("data-image");

    if (image1 === image2) {
        console.log("Cards Matched:", image1, image2); // Log kartu yang cocok
        matchedCards.push(card1, card2);
        flippedCards = [];

        if (matchedCards.length === cardImages.length) {
            alert("Congratulations! You won!");
            startGame();
        }
    } else {
        attemptsLeft--;
        console.log("Attempts Left:", attemptsLeft); // Log jumlah kesalahan yang tersisa
        const attemptsElement = document.getElementById("attempts");
        if (attemptsElement) {
            attemptsElement.textContent = `Souls Remaining: ${attemptsLeft}`;
        }

        if (attemptsLeft === 0) {
            alert("Game Over! You lost!");
            startGame();
        } else {
            setTimeout(() => {
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
                flippedCards = [];
            }, 1000);
        }
    }
}

// Fungsi untuk memulai timer
function startTimer() {
    let seconds = 0;
    let minutes = 0;

    const timeElement = document.getElementById("time");
    timerInterval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        timeElement.textContent = `Time: ${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
    }, 1000);
}

// Mulai game saat halaman dimuat
