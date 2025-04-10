let start = null;

class Start {
    constructor() {
        this.playerName = "player-name";
        this.botName = "Dark Entity";
        this.playerOption = null;
        this.botOption = null;
        this.winner = "";
    }

    get getBotOption() {
        return this.botOption;
    }

    set setBotOption(option) {
        this.botOption = option;
    }

    get getPlayerOption() {
        return this.playerOption;
    }

    set setPlayerOption(option) {
        this.playerOption = option;
    }

    botBrain() {
        const options = ["✊", "🖐️", "✌️"];
        const bot = Math.floor(Math.random() * options.length);
        this.botOption = options[bot];
        console.log("Dark Entity chose: ", this.botOption);
    }
}

function login(){
    const playerName = localStorage.getItem("playerName");
    if (playerName) {
        const start = new Start();
        start.playerName = playerName;
        document.getElementById("player-name").textContent = `Welcome, ${start.playerName}!`;
        return start;
    } else {
        alert("You must enter a name to play!");
        return null;
    }
}

function pickOption(gesture) {
    const start = login();
    if (!start) return;

    start.setPlayerOption = gesture;
    start.botBrain();


    if (start.getPlayerOption === start.getBotOption) {
        start.winner = "Draw is Not an Option!";
    } else if (
        (start.getPlayerOption === "✊" && start.getBotOption === "✌️") ||
        (start.getPlayerOption === "🖐️" && start.getBotOption === "✊") ||
        (start.getPlayerOption === "✌️" && start.getBotOption === "🖐️")
    ) {
        start.winner = "You Win, I Spare Your Life For Now!";
    } else {
        start.winner = "Your Soul is Mine!";
    }


        const inGame = document.getElementById("in-game");
        const result = document.getElementById("result");

        inGame.textContent = "Dark Entity Scaning Your Thought"

setTimeout(() => {
        inGame.innerHTML = `${start.playerName} chose: ${start.getPlayerOption} <br> 
                            ${start.botName} chose: ${start.getBotOption} <br> 
                            ${start.winner}`;
    }, 2000);
}